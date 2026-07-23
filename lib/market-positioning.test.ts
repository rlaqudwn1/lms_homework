import { describe, expect, it } from "vitest";
import {
  comparisonDocumentUrl,
  marketComparisons,
  positioningPillars,
} from "./market-positioning";

describe("market positioning", () => {
  it("separates NEXT SAVE's decision job from operating backlog services", () => {
    expect(marketComparisons.map((service) => service.name)).toEqual([
      "Backloggd",
      "Grouvee",
      "HowLongToBeat",
    ]);
    expect(marketComparisons.every((service) => service.source.startsWith("https://"))).toBe(true);
    expect(marketComparisons.every((service) => service.primaryJob.length > 0)).toBe(true);
  });

  it("keeps the landing message to three decision-first pillars", () => {
    expect(positioningPillars).toHaveLength(3);
    expect(positioningPillars.map((pillar) => pillar.title)).toEqual([
      "기록보다 결정",
      "전체 목록보다 세 가지 후보",
      "인기순보다 설명 가능한 근거",
    ]);
  });

  it("links the landing page to the public Day 6 comparison document", () => {
    expect(comparisonDocumentUrl).toContain(
      "/assignments/day-06/steps/step-02-market-positioning/MARKET-LANDSCAPE.md",
    );
  });
});
