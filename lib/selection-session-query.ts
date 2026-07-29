import { selectionSessionMappings } from "./selection-session";

type SelectionSessionQuery = {
  profile?: "steady-explorer" | "focused-tactician";
  game?: string;
  limit: number;
};

const allowedKeys = new Set(["profile", "game", "limit"]);
const profileKeys = new Set(selectionSessionMappings.map((item) => item.profileKey));
const gameIds = new Set(selectionSessionMappings.map((item) => item.candidateId));

function invalid(): never {
  throw new Error("Invalid selection-session query");
}

export function parseSelectionSessionQuery(params: URLSearchParams): SelectionSessionQuery {
  for (const key of params.keys()) {
    if (!allowedKeys.has(key) || params.getAll(key).length !== 1) invalid();
  }

  const profile = params.get("profile");
  const game = params.get("game");
  const rawLimit = params.get("limit");
  if (profile !== null && !profileKeys.has(profile as never)) invalid();
  if (game !== null && !gameIds.has(game)) invalid();

  const limit = rawLimit === null ? 10 : Number(rawLimit);
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) invalid();

  return {
    ...(profile === null ? {} : {
      profile: profile as SelectionSessionQuery["profile"],
    }),
    ...(game === null ? {} : { game }),
    limit,
  };
}
