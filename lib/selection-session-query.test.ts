import { describe, expect, it } from "vitest";
import { parseSelectionSessionQuery } from "./selection-session-query";

describe("Day 14 selection-session query parser", () => {
  it("normalizes an allowlisted fixture query", () => {
    expect(
      parseSelectionSessionQuery(
        new URLSearchParams("profile=steady-explorer&game=hollow-knight&limit=12"),
      ),
    ).toEqual({
      profile: "steady-explorer",
      game: "hollow-knight",
      limit: 12,
    });
  });

  it("uses a bounded default for an empty query", () => {
    expect(parseSelectionSessionQuery(new URLSearchParams())).toEqual({ limit: 10 });
  });

  it.each([
    "profile=real-user",
    "game=private-library-item",
    "limit=0",
    "limit=101",
    "limit=2.5",
    "profile=steady-explorer&profile=focused-tactician",
    "email=person%40example.com",
  ])("rejects unsafe or ambiguous query %s", (query) => {
    expect(() => parseSelectionSessionQuery(new URLSearchParams(query))).toThrow(
      "Invalid selection-session query",
    );
  });
});
