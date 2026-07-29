export const approvedPublicGameIds = [
  "hollow-knight",
  "outer-wilds",
  "disco-elysium",
  "into-the-breach",
  "balatro",
  "hades",
] as const;

export type ApprovedPublicGameId = (typeof approvedPublicGameIds)[number];

type MetadataFields = {
  gameId: ApprovedPublicGameId;
  developer: string;
  releaseYear: number;
  genres: string[];
};

export type GameMetadata = MetadataFields & {
  source: "fixture" | "fixture-fallback" | "provider";
  providerId?: string;
  fallbackReason?: "timeout" | "error" | "invalid-response";
};

export type GameMetadataProvider = {
  id: string;
  getGameMetadata: (
    gameId: ApprovedPublicGameId,
    signal: AbortSignal,
  ) => Promise<unknown>;
};

type ProviderRequest = (
  input: string,
  init?: RequestInit,
) => Promise<Response>;

export function createWikidataProvider(
  request: ProviderRequest = fetch,
): GameMetadataProvider {
  return {
    id: "wikidata",
    async getGameMetadata(gameId, signal) {
      if (gameId !== "hollow-knight") {
        throw new Error("Wikidata live check is scoped to one approved game");
      }
      const query = `
        SELECT ?developerLabel ?releaseDate ?genreLabel WHERE {
          ?game rdfs:label "Hollow Knight"@en;
                wdt:P31/wdt:P279* wd:Q7889;
                wdt:P178 ?developer;
                wdt:P577 ?releaseDate;
                wdt:P136 ?genre.
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
        }
      `;
      const url = new URL("https://query.wikidata.org/sparql");
      url.searchParams.set("query", query);
      url.searchParams.set("format", "json");
      const response = await request(url.toString(), {
        signal,
        headers: {
          Accept: "application/sparql-results+json",
          "User-Agent": "NEXT-SAVE-LMS/0.1 (https://next-save-course-mock.vercel.app)",
        },
      });
      if (!response.ok) throw new Error(`Wikidata responded ${response.status}`);
      const payload = await response.json() as {
        results?: { bindings?: Array<{
          developerLabel?: { value?: string };
          releaseDate?: { value?: string };
          genreLabel?: { value?: string };
        }> };
      };
      const bindings = payload.results?.bindings ?? [];
      const first = bindings[0];
      const releaseYears = bindings
        .map((binding) => Number(binding.releaseDate?.value?.slice(0, 4)))
        .filter((year) => Number.isInteger(year) && year >= 1970);
      const releaseYear = Math.min(...releaseYears);
      const genres = [...new Set(bindings
        .map((binding) => binding.genreLabel?.value)
        .filter((value): value is string => Boolean(value)))];
      if (!first?.developerLabel?.value || !Number.isInteger(releaseYear) || genres.length === 0) {
        throw new Error("Wikidata response did not contain required metadata");
      }
      return {
        gameId,
        developer: first.developerLabel.value,
        releaseYear,
        genres,
      };
    },
  };
}

const fixtureMetadata: Record<ApprovedPublicGameId, MetadataFields> = {
  "hollow-knight": {
    gameId: "hollow-knight",
    developer: "Team Cherry",
    releaseYear: 2017,
    genres: ["Metroidvania", "Action"],
  },
  "outer-wilds": {
    gameId: "outer-wilds",
    developer: "Mobius Digital",
    releaseYear: 2019,
    genres: ["Exploration", "Adventure"],
  },
  "disco-elysium": {
    gameId: "disco-elysium",
    developer: "ZA/UM",
    releaseYear: 2019,
    genres: ["Narrative RPG"],
  },
  "into-the-breach": {
    gameId: "into-the-breach",
    developer: "Subset Games",
    releaseYear: 2018,
    genres: ["Turn-based strategy"],
  },
  balatro: {
    gameId: "balatro",
    developer: "LocalThunk",
    releaseYear: 2024,
    genres: ["Deckbuilder", "Roguelike"],
  },
  hades: {
    gameId: "hades",
    developer: "Supergiant Games",
    releaseYear: 2020,
    genres: ["Action roguelike"],
  },
};

export function isApprovedPublicGameId(value: string): value is ApprovedPublicGameId {
  return approvedPublicGameIds.includes(value as ApprovedPublicGameId);
}

export function getFixtureGameMetadata(gameId: string): GameMetadata | undefined {
  if (!isApprovedPublicGameId(gameId)) return undefined;
  return { ...fixtureMetadata[gameId], genres: [...fixtureMetadata[gameId].genres], source: "fixture" };
}

function parseProviderMetadata(value: unknown, gameId: ApprovedPublicGameId): MetadataFields | undefined {
  if (!value || typeof value !== "object") return undefined;
  const candidate = value as Partial<MetadataFields>;
  if (
    candidate.gameId !== gameId ||
    typeof candidate.developer !== "string" ||
    candidate.developer.length === 0 ||
    !Number.isInteger(candidate.releaseYear) ||
    (candidate.releaseYear ?? 0) < 1970 ||
    !Array.isArray(candidate.genres) ||
    candidate.genres.length === 0 ||
    !candidate.genres.every((genre) => typeof genre === "string" && genre.length > 0)
  ) {
    return undefined;
  }
  return candidate as MetadataFields;
}

export async function enrichPublicGameMetadata(
  gameId: string,
  options: { provider?: GameMetadataProvider; timeoutMs?: number } = {},
): Promise<GameMetadata> {
  if (!isApprovedPublicGameId(gameId)) {
    throw new Error("Unsupported public game identity");
  }

  const fixture = fixtureMetadata[gameId];
  if (!options.provider) {
    return { ...fixture, genres: [...fixture.genres], source: "fixture" };
  }

  const controller = new AbortController();
  const timeoutMs = Math.max(1, options.timeoutMs ?? 1500);
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  try {
    const raw = await options.provider.getGameMetadata(gameId, controller.signal);
    const parsed = parseProviderMetadata(raw, gameId);
    if (!parsed) {
      return { ...fixture, genres: [...fixture.genres], source: "fixture-fallback", fallbackReason: "invalid-response" };
    }
    return {
      ...parsed,
      genres: [...parsed.genres],
      source: "provider",
      providerId: options.provider.id,
    };
  } catch {
    return {
      ...fixture,
      genres: [...fixture.genres],
      source: "fixture-fallback",
      fallbackReason: timedOut ? "timeout" : "error",
    };
  } finally {
    clearTimeout(timer);
  }
}
