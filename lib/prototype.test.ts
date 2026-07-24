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

  it("uses approved public Steam covers without private account identifiers", () => {
    const serialized = JSON.stringify(prototypeProfiles);
    expect(serialized).not.toMatch(/steamId|apiKey|cookie|memberCount|onlineCount|followerCount/);
    for (const profile of prototypeProfiles) {
      for (const candidate of profile.candidates) {
        expect(candidate.media.kind).toBe("public-steam-cdn");
        expect(candidate.media.portraitUrl).toBe(
          `https://cdn.cloudflare.steamstatic.com/steam/apps/${candidate.steamAppId}/library_600x900.jpg`,
        );
        expect(candidate.media.headerUrl).toBe(
          `https://cdn.cloudflare.steamstatic.com/steam/apps/${candidate.steamAppId}/header.jpg`,
        );
      }
    }
  });

  it("carries one game identity through detail, receipt, and community fixtures", () => {
    for (const profile of prototypeProfiles) {
      for (const candidate of profile.candidates) {
        expect(candidate.detail.gameId).toBe(candidate.id);
        expect(candidate.community.gameId).toBe(candidate.id);
        expect(candidate.community.reviews.length).toBeGreaterThan(0);
        candidate.community.reviews.forEach((review) => {
          expect(review.gameId).toBe(candidate.id);
          expect(review.fixtureLabel).toMatch(/fixture|예시/i);
        });
      }
    }
  });

  it("separates objective game facts from fixture-derived personal interpretation", () => {
    for (const profile of prototypeProfiles) {
      const signalIds = new Set(profile.signals.map(({ id }) => id));
      for (const candidate of profile.candidates) {
        expect(candidate.detail.facts.length).toBeGreaterThanOrEqual(3);
        candidate.detail.facts.forEach((fact) => {
          expect(fact.sourceStatus).toBe("fixture-catalog");
          expect(fact.label.length).toBeGreaterThan(1);
          expect(fact.value.length).toBeGreaterThan(1);
        });
        expect(candidate.detail.personalInterpretation.label).toBe("내 기록 기반 해석");
        candidate.detail.personalInterpretation.signalIds.forEach((signalId) => {
          expect(signalIds.has(signalId)).toBe(true);
        });
      }
    }
  });

  it("keeps user-base capabilities visibly locked without fabricated activity", () => {
    for (const profile of prototypeProfiles) {
      for (const candidate of profile.candidates) {
        expect(candidate.community.capabilities.map(({ id }) => id)).toEqual([
          "similar-taste",
          "atlas-share",
        ]);
        candidate.community.capabilities.forEach((capability) => {
          expect(capability.status).toBe("coming-soon");
          expect(capability.enabled).toBe(false);
        });
      }
    }
  });

  it("uses useful local media descriptions and deterministic fallbacks", () => {
    for (const profile of prototypeProfiles) {
      for (const candidate of profile.candidates) {
        expect(candidate.media.kind).toBe("public-steam-cdn");
        expect(candidate.media.alt).toContain(candidate.title);
        expect(candidate.media.fallbackLabel).toMatch(/이미지|커버/);
      }
    }
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
        expect(candidate.coverTagline.length).toBeGreaterThan(4);
      }
    }
  });

  it("guides one human decision through six connected stages", () => {
    expect(prototypeJourney.map(({ id }) => id)).toEqual([
      "profile",
      "atlas",
      "detail",
      "receipt",
      "community",
      "share",
    ]);
    expect(prototypeJourney).toHaveLength(6);
    for (const step of prototypeJourney) {
      expect(step.title.length).toBeGreaterThan(8);
      expect(step.action.length).toBeGreaterThan(4);
    }
  });
});
