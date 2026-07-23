import { describe, expect, it } from "vitest";
import { prototypeJourney, prototypeProfiles } from "./prototype";

describe("Day 7 prototype fixture contract", () => {
  it("gives each fictional profile a distinct atlas and exactly three candidates", () => {
    expect(prototypeProfiles).toHaveLength(2);

    for (const profile of prototypeProfiles) {
      expect(profile.atlas.regions.length).toBeGreaterThanOrEqual(4);
      expect(profile.evidence).toHaveLength(3);
      expect(profile.candidates).toHaveLength(3);
      expect(new Set(profile.candidates.map((candidate) => candidate.id)).size).toBe(3);
      for (const candidate of profile.candidates) {
        expect(candidate.mapPoint.x).toBeGreaterThanOrEqual(0);
        expect(candidate.mapPoint.x).toBeLessThanOrEqual(100);
        expect(candidate.mapPoint.y).toBeGreaterThanOrEqual(0);
        expect(candidate.mapPoint.y).toBeLessThanOrEqual(100);
      }
    }

    expect(prototypeProfiles[0].core).not.toBe(prototypeProfiles[1].core);
    expect(prototypeProfiles[0].candidates.map(({ id }) => id)).not.toEqual(
      prototypeProfiles[1].candidates.map(({ id }) => id),
    );
  });

  it("keeps every recommendation reason traceable to named fixture signals", () => {
    for (const profile of prototypeProfiles) {
      const signalIds = new Set(profile.signals.map(({ id }) => id));
      for (const candidate of profile.candidates) {
        expect(candidate.signalIds.length).toBeGreaterThanOrEqual(2);
        candidate.signalIds.forEach((signalId) => expect(signalIds.has(signalId)).toBe(true));
        expect(candidate.why.length).toBeGreaterThan(20);
      }
    }
  });

  it("contains no live service identifiers or remote assets", () => {
    const serialized = JSON.stringify(prototypeProfiles);
    expect(serialized).not.toMatch(/steamId|imageUrl|apiKey|memberCount/);
    expect(serialized).not.toMatch(/https?:\/\//);
    expect(serialized).toMatch(/fixture/i);
  });

  it("uses an original cartographic and cover-art vocabulary for every fixture game", () => {
    for (const profile of prototypeProfiles) {
      expect(profile.atlas.landmarks).toHaveLength(3);
      expect(profile.atlas.routeLabel.length).toBeGreaterThan(4);
      expect(new Set(profile.atlas.landmarks.map(({ state }) => state))).toEqual(
        new Set(["known", "frontier", "unknown"]),
      );

      const coverKeys = profile.candidates.map(({ coverKey }) => coverKey);
      expect(new Set(coverKeys).size).toBe(3);
      for (const candidate of profile.candidates) {
        expect(candidate.title).not.toMatch(
          /Elden Ring|Zelda|Steam|Skyrim|Witcher|Baldur/i,
        );
        expect(candidate.coverTagline.length).toBeGreaterThan(4);
      }
    }
  });

  it("guides one human decision through four conversational steps", () => {
    expect(prototypeJourney.map(({ id }) => id)).toEqual([
      "profile",
      "atlas",
      "candidates",
      "receipt",
    ]);
    expect(prototypeJourney).toHaveLength(4);
    for (const step of prototypeJourney) {
      expect(step.title.length).toBeGreaterThan(8);
      expect(step.action.length).toBeGreaterThan(4);
    }
  });
});
