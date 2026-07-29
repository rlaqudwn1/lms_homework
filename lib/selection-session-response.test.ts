import { describe, expect, it } from "vitest";
import { parseSelectionSessionResponse } from "./selection-session-response";

const valid = {
  id: "30000000-0000-4000-8000-000000000001",
  fixture_profile_key: "steady-explorer",
  recommendation_id: "10000000-0000-4000-8000-000000000901",
  selected_game_id: "20000000-0000-4000-8000-000000000901",
  created_at: "2026-07-29T00:00:00.000Z",
};

describe("Day 14 selection-session response parser", () => {
  it("accepts an exact fictional selection receipt", () => {
    expect(parseSelectionSessionResponse(valid)).toEqual(valid);
  });

  it.each([
    { ...valid, id: "not-a-uuid" },
    { ...valid, fixture_profile_key: "real-profile" },
    { ...valid, selected_game_id: "arbitrary-game" },
    { ...valid, created_at: "not-a-date" },
  ])("rejects invalid or non-fixture values", (candidate) => {
    expect(parseSelectionSessionResponse(candidate)).toBeNull();
  });

  it.each(["email", "steam_url", "token", "cookie", "metadata"])(
    "rejects unexpected personal/provider field %s",
    (field) => {
      expect(parseSelectionSessionResponse({ ...valid, [field]: "private" })).toBeNull();
    },
  );

  it("returns null for non-object provider responses", () => {
    expect(parseSelectionSessionResponse(null)).toBeNull();
    expect(parseSelectionSessionResponse("response")).toBeNull();
    expect(parseSelectionSessionResponse([valid])).toBeNull();
  });
});
