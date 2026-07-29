import { describe, expect, it } from "vitest";
import { getGameMetadataResponse } from "./route";

describe("GET /api/game-metadata", () => {
  it("returns fixture metadata without provider configuration", async () => {
    const response = await getGameMetadataResponse(
      new Request("http://localhost/api/game-metadata?gameId=outer-wilds"),
      { providerEnabled: false },
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      gameId: "outer-wilds",
      source: "fixture",
    });
  });

  it("does not accept arbitrary or personal identifiers", async () => {
    const response = await getGameMetadataResponse(
      new Request("http://localhost/api/game-metadata?gameId=private-profile"),
    );
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: "unsupported_game_id" });
  });

  it("uses only the explicitly enabled server provider", async () => {
    const response = await getGameMetadataResponse(
      new Request("http://localhost/api/game-metadata?gameId=hollow-knight"),
      {
        providerEnabled: true,
        request: async () => new Response(JSON.stringify({
          results: { bindings: [{
            developerLabel: { value: "Team Cherry" },
            releaseDate: { value: "2017-02-24T00:00:00Z" },
            genreLabel: { value: "Metroidvania" },
          }] },
        })),
      },
    );
    expect(await response.json()).toMatchObject({
      source: "provider",
      providerId: "wikidata",
    });
  });
});
