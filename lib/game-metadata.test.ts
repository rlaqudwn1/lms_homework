import { describe, expect, it, vi } from "vitest";
import {
  enrichPublicGameMetadata,
  getFixtureGameMetadata,
  isApprovedPublicGameId,
  type GameMetadataProvider,
  createWikidataProvider,
} from "./game-metadata";

describe("Day 11 public game metadata adapter", () => {
  it("allows only approved public fixture game identities", () => {
    expect(isApprovedPublicGameId("hollow-knight")).toBe(true);
    expect(isApprovedPublicGameId("real-user-library")).toBe(false);
    expect(getFixtureGameMetadata("hollow-knight")?.source).toBe("fixture");
  });

  it("uses validated provider metadata when a provider is explicitly supplied", async () => {
    const provider: GameMetadataProvider = {
      id: "approved-test-provider",
      getGameMetadata: vi.fn().mockResolvedValue({
        gameId: "hollow-knight",
        developer: "Team Cherry",
        releaseYear: 2017,
        genres: ["Metroidvania", "Action"],
      }),
    };

    const result = await enrichPublicGameMetadata("hollow-knight", { provider });
    expect(result).toMatchObject({
      source: "provider",
      providerId: "approved-test-provider",
      developer: "Team Cherry",
    });
  });

  it.each(["timeout", "error"] as const)(
    "returns the deterministic fixture on provider %s",
    async (mode) => {
      const provider: GameMetadataProvider = {
        id: "approved-test-provider",
        getGameMetadata: (_gameId, signal) =>
          mode === "error"
            ? Promise.reject(new Error("provider unavailable"))
            : new Promise((_, reject) => {
                signal.addEventListener("abort", () => reject(new Error("aborted")));
              }),
      };

      const result = await enrichPublicGameMetadata("hollow-knight", {
        provider,
        timeoutMs: 5,
      });
      expect(result.source).toBe("fixture-fallback");
      expect(result.fallbackReason).toBe(mode);
      expect(result.developer).toBe("Team Cherry");
    },
  );

  it("rejects non-allowlisted identities before calling a provider", async () => {
    const provider: GameMetadataProvider = {
      id: "approved-test-provider",
      getGameMetadata: vi.fn(),
    };
    await expect(enrichPublicGameMetadata("private-profile", { provider })).rejects.toThrow(
      "Unsupported public game identity",
    );
    expect(provider.getGameMetadata).not.toHaveBeenCalled();
  });

  it("maps one scoped Wikidata result without exposing browser or player data", async () => {
    const request = vi.fn().mockResolvedValue(new Response(JSON.stringify({
      results: { bindings: [
        {
          developerLabel: { value: "Team Cherry" },
          releaseDate: { value: "2026-01-01T00:00:00Z" },
          genreLabel: { value: "Metroidvania" },
        },
        {
          developerLabel: { value: "Team Cherry" },
          releaseDate: { value: "2017-02-24T00:00:00Z" },
          genreLabel: { value: "2D platform game" },
        },
      ] },
    })));
    const provider = createWikidataProvider(request);
    const result = await provider.getGameMetadata("hollow-knight", new AbortController().signal);

    expect(result).toMatchObject({
      gameId: "hollow-knight",
      developer: "Team Cherry",
      releaseYear: 2017,
      genres: ["Metroidvania", "2D platform game"],
    });
    expect(request).toHaveBeenCalledOnce();
    expect(request.mock.calls[0][0]).toContain("query.wikidata.org/sparql");
    expect(request.mock.calls[0][0]).not.toMatch(/steamcommunity|profile|library|cookie/i);
  });
});
