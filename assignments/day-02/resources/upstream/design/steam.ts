/* 003 · real game cover art from Steam's public capsule CDN (v0.5, NEXT-SESSION
   §④). These are real games used as the demo's example library, so their real
   Steam library capsules (600×900 portrait) are the honest cover source — not
   AI art, not Figma. Covers are hotlinked; the product is Steam-based so this
   is the canonical art. Archetype portraits are bespoke SVG (see atlas.tsx). */

export const STEAM_APPID: Record<string, number> = {
  "Disco Elysium": 632470,
  "Outer Wilds": 753640,
  "Into the Breach": 590380,
  "The Case of the Golden Idol": 1963210,
  Hades: 1145360,
  "Art of Rally": 550320,
  Dorfromantik: 1455840,
  "Hollow Knight": 367520,
  Balatro: 2379780,
  Signalis: 1262350,
  "Titanfall 2 (캠페인)": 1237970,
  "Cyberpunk 2077": 1091500,
  "Far Cry 6": 2369390,
  // S7-b 트렌드 게임 커버 (003 page-spine 분할 시 추가)
  "Elden Ring": 1245620,
  "Baldur's Gate 3": 1086940,
  "Stardew Valley": 413150,
  "Vampire Survivors": 1794680,
};

const CDN = "https://cdn.cloudflare.steamstatic.com/steam/apps";

/** portrait library capsule (600×900, 2:3) — for small thumbnails */
export const steamCapsule = (appid: number) => `${CDN}/${appid}/library_600x900.jpg`;
/** landscape store header (460×215, ~2:1) — for wide hero covers */
export const steamHeader = (appid: number) => `${CDN}/${appid}/header.jpg`;

/** cover url for a game title, or undefined (→ caller falls back to a tint).
    kind: "capsule" = portrait thumbnail, "header" = landscape hero. */
export function coverFor(title: string, kind: "capsule" | "header" = "capsule"): string | undefined {
  const id = STEAM_APPID[title];
  if (!id) return undefined;
  return kind === "header" ? steamHeader(id) : steamCapsule(id);
}
