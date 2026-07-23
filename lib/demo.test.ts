import { describe, expect, it } from "vitest";
import {
  atlasTeaserRows,
  communityPreview,
  recommendations,
  sourceHeroCopy,
  validateSteamProfileUrl,
} from "./demo";

describe("validateSteamProfileUrl", () => {
  it("accepts Steam vanity and numeric profile URLs", () => {
    expect(validateSteamProfileUrl("https://steamcommunity.com/id/demo-player")).toBeNull();
    expect(validateSteamProfileUrl("https://steamcommunity.com/profiles/76561190000000000")).toBeNull();
  });

  it("rejects blank, non-Steam, and insecure URLs", () => {
    expect(validateSteamProfileUrl(" ")).toMatch(/입력/);
    expect(validateSteamProfileUrl("https://example.com/id/demo")).toMatch(/형식/);
    expect(validateSteamProfileUrl("http://steamcommunity.com/id/demo")).toMatch(/형식/);
  });

  it("rejects malformed Steam profile paths", () => {
    expect(validateSteamProfileUrl("https://steamcommunity.com/profiles/not-a-number")).toMatch(/형식/);
    expect(validateSteamProfileUrl("https://steamcommunity.com/id/demo/extra")).toMatch(/형식/);
  });
});

describe("source-locked v0.10 composition data", () => {
  it("keeps the approved decision-first Hero copy", () => {
    expect(sourceHeroCopy.eyebrow).toBe("Steam URL 하나면 끝");
    expect(`${sourceHeroCopy.leadWords.join(" ")} ${sourceHeroCopy.accentWords.join(" ")}`).toBe(
      "사놓고 안 한 게임 수백 개, 오늘 밤 켤 한 판까지.",
    );
    expect(sourceHeroCopy.cta).toBe("내 라이브러리 지도 그리기");
  });

  it("models the teaser as one connected pixel continent", () => {
    const occupied = new Set<string>();
    atlasTeaserRows.forEach((row, y) => {
      [...row].forEach((cell, x) => {
        expect(".ABCD").toContain(cell);
        if (cell !== ".") occupied.add(`${x},${y}`);
      });
    });

    const first = occupied.values().next().value as string;
    const visited = new Set([first]);
    const queue = [first];
    while (queue.length) {
      const current = queue.shift()!;
      const [x, y] = current.split(",").map(Number);
      for (const [nextX, nextY] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
        const key = `${nextX},${nextY}`;
        if (occupied.has(key) && !visited.has(key)) {
          visited.add(key);
          queue.push(key);
        }
      }
    }

    expect(occupied.size).toBeGreaterThan(40);
    expect(visited.size).toBe(occupied.size);
  });
});

describe("approved dashboard fixture contract", () => {
  it("renders exactly three fictional, locally representable recommendations", () => {
    expect(recommendations).toHaveLength(3);
    expect(new Set(recommendations.map((game) => game.id)).size).toBe(3);
    recommendations.forEach((game) => {
      expect(game.coverClass).toMatch(/^cover-/);
      expect(game.reason.length).toBeGreaterThan(20);
      expect(game).not.toHaveProperty("imageUrl");
    });
  });

  it("links the community preview to a recommendation and separates facts from interpretation", () => {
    expect(recommendations.some((game) => game.id === communityPreview.gameId)).toBe(true);
    expect(communityPreview.fixtureFacts).toHaveLength(3);
    expect(communityPreview.interpretations["focused-tactician"]).toMatch(/전술 숙련형/);
    expect(communityPreview.interpretations["steady-explorer"]).toMatch(/세계 탐험형/);
  });

  it("keeps future community capabilities disabled and count-free", () => {
    expect(communityPreview.capabilities).toHaveLength(3);
    communityPreview.capabilities.forEach((capability) => {
      expect(capability.status).toBe("준비 중");
      expect(capability).not.toHaveProperty("count");
      expect(capability).not.toHaveProperty("href");
    });
  });
});
