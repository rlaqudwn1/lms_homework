import { describe, expect, it } from "vitest";
import {
  candidateIdForSelection,
  createMockSelectionSession,
  parseStoredSelectionSession,
  selectionSessionMappings,
} from "./selection-session";

describe("Day 9 selection session mock", () => {
  it("creates the exact SQL-shaped fixture record", () => {
    const session = createMockSelectionSession("steady-explorer", "hollow-knight", {
      id: "00000000-0000-4000-8000-000000000901",
      now: new Date("2026-07-27T00:00:00Z"),
    });
    expect(session).toEqual({
      id: "00000000-0000-4000-8000-000000000901",
      fixture_profile_key: "steady-explorer",
      recommendation_id: "10000000-0000-4000-8000-000000000901",
      selected_game_id: "20000000-0000-4000-8000-000000000901",
      created_at: "2026-07-27T00:00:00.000Z",
    });
  });

  it("maps all six prototype candidates to UUID fixture identifiers", () => {
    expect(selectionSessionMappings).toHaveLength(6);
    for (const mapping of selectionSessionMappings) {
      const session = createMockSelectionSession(mapping.profileKey, mapping.candidateId, {
        id: "00000000-0000-4000-8000-000000000999",
      });
      expect(candidateIdForSelection(session)).toBe(mapping.candidateId);
      expect(session.recommendation_id).toMatch(/^[0-9a-f-]{36}$/);
      expect(session.selected_game_id).toMatch(/^[0-9a-f-]{36}$/);
    }
  });

  it("rejects unknown and real-profile-shaped persisted data", () => {
    expect(() =>
      createMockSelectionSession("https://steamcommunity.com/id/real-user", "hollow-knight"),
    ).toThrow();
    expect(parseStoredSelectionSession(JSON.stringify({
      id: "00000000-0000-4000-8000-000000000901",
      fixture_profile_key: "https://steamcommunity.com/id/real-user",
      recommendation_id: "10000000-0000-4000-8000-000000000901",
      selected_game_id: "20000000-0000-4000-8000-000000000901",
      created_at: "2026-07-27T00:00:00Z",
    }))).toBeNull();
  });
});
