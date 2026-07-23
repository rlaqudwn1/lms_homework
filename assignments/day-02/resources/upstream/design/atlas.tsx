"use client";

import "./atlas.pixel.css";

/* ── 003 signature · The Taste Atlas ─────────────────────────────────────
   PIXEL SYMBOL MAP (owner v0.7: "섬을 그 장르 하면 떠오르는 상징으로 —
   RPG=검, 격투=맞붙은 둘, FPS=총"). The procedural sine-blob continents are
   retired; each genre is now a hand-drawn pixel-art symbol bitmap (SPRITES),
   shaded by coast depth with a checker dither. State keeps the teal tiers —
   정복=진한 teal → 탐험=중간 teal → 미개척=흐린 슬레이트(실루엣 유지), and
   the frontier (다음 개척지) is brand violet. No amber, no neon glow — flat
   game-UI tone. Pixel styling lives in ./atlas.pixel.css; the interaction
   model is preserved (hover/focus → RecCard, click → modal, two-way
   map↔territory highlight). All data is a hardcoded DEMO profile — see the
   "예시/데모" markers. Deterministic at module load → SSR/hydration stable.
   v0.7: 판정/아키타입(측량 결과물)은 오너 지시로 제거 — 측정 방식 설명만. */

import { useEffect, useRef, useState } from "react";
import { coverFor } from "./steam";

type MapState = "claim" | "explore" | "unchart";

type Island = {
  cat: string;
  en: string;
  p: number; // playtime intensity 0..1 — the number the paint (elevation) is pinned to
  cx: number; // symbol sprite anchor (center), viewBox px
  cy: number;
  game: string;
  hltb: string;
  fit: number; // recommendation confidence 0..100 (demo)
  blurb: string; // one-line game intro (게임 소개)
  why: string; // grounded static copy, may contain <b>
  you: string; // personalized read (개인화 해석), may contain <b>
  frontier?: boolean;
};

const ISLANDS: Island[] = [
  { cat: "RPG", en: "RPG", p: 0.95, cx: 120, cy: 122, game: "Disco Elysium", hltb: "~22h", fit: 96,
    blurb: "전투가 없는 텍스트 RPG. 대사와 선택으로만 굴러가는 형사물.",
    why: "너는 RPG에 <b>412시간</b>을 넣었고, 그중에서도 전투보다 대사·선택 비중이 큰 게임을 오래 붙잡았다. Disco Elysium이 딱 그 결이다.",
    you: "평균 세션이 <b>90분</b>이라 한 번 앉으면 깊게 들어가는 편인데, 이 게임 속도랑 맞는다. 네가 제일 깊게 판 장르라 실패할 확률도 낮다." },
  { cat: "어드벤처", en: "Adventure", p: 0.72, cx: 252, cy: 92, game: "Outer Wilds", hltb: "~15h", fit: 92,
    blurb: "22분마다 태양계가 리셋되는 탐험 게임. 전투 없이 단서만으로 비밀을 푼다.",
    why: "어드벤처는 네가 중간에 접는 비율이 제일 낮은 장르다. Outer Wilds는 탐험 자체가 목적이라 클리어 압박이 없다.",
    you: "네 페이스대로 파고들게 놔두는 구조라, 끝까지 보는 네 습관이랑 잘 맞는다." },
  { cat: "전략", en: "Strategy", p: 0.45, cx: 392, cy: 112, game: "Into the Breach", hltb: "~10h", fit: 84,
    blurb: "8칸 격자 위 턴제 택틱스. 한 판이 짧고 정보가 전부 공개돼 있다.",
    why: "전략은 얕게 팠지만, 짧게 여러 판 돌리는 패턴이 보인다. Into the Breach는 한 판이 짧고 딱 떨어진다.",
    you: "깊게 안 파도 매 판 만족스럽게 설계돼서, 짧게 하는 네 스타일에 부담이 없다." },
  { cat: "퍼즐", en: "Puzzle", p: 0.38, cx: 512, cy: 98, game: "The Case of the Golden Idol", hltb: "~7h", fit: 81,
    blurb: "장면 속 단서로 인물과 동기, 순서를 맞추는 추리 퍼즐.",
    why: "퍼즐 중에서도 추리·연역형에 반응이 좋았다. 정답을 입력하는 게 아니라 단서로 사건을 짜맞추는 쪽이다.",
    you: "네 어드벤처 취향이랑 결이 겹쳐서, 퍼즐로 넘어가기 좋은 다음 발이다." },
  { cat: "액션", en: "Action", p: 0.30, cx: 176, cy: 250, game: "Hades", hltb: "~22h", fit: 88,
    blurb: "죽을 때마다 이야기가 이어지는 로그라이트 액션. 대사와 서사가 촘촘하다.",
    why: "액션은 아직 탐험 중인데, 반사신경 위주보다 서사가 얹힌 액션에 더 오래 남았다. Hades는 죽고 다시 시작할 때마다 대사와 관계가 쌓인다.",
    you: "네가 깊게 판 RPG랑 아직 얕은 액션 사이를 이어주는 게임이다. 익숙한 RPG 감각 그대로 액션을 더 파보기 좋다." },
  { cat: "레이싱", en: "Racing", p: 0.22, cx: 302, cy: 228, game: "Art of Rally", hltb: "~8h", fit: 74,
    blurb: "위에서 내려다보는 미니멀 랠리. 시뮬 정밀함보다 분위기와 리듬 쪽이다.",
    why: "레이싱은 가볍게 들른 정도인데, 그중에서도 하드 시뮬보다 분위기 있는 미니멀 쪽에 머물렀다.",
    you: "짧게 켜서 하기 좋고 진입장벽이 낮아, 이 장르를 부담 없이 조금 더 넓혀보기 좋다." },
  { cat: "시뮬레이션", en: "Simulation", p: 0.18, cx: 432, cy: 238, game: "Dorfromantik", hltb: "~9h", fit: 76,
    blurb: "타일을 이어 풍경을 완성하는 힐링 빌더. 실패도 게임오버도 없다.",
    why: "시뮬 중에서도 관리·최적화보다 차분하게 배치하는 쪽에 반응했다. Dorfromantik이 딱 그 결이다.",
    you: "잠깐 켰다가 오래 남는 부류라, 저강도로 짧게 하는 네 리듬이랑 맞는다." },
  { cat: "메트로배니아", en: "Metroidvania", p: 0.0, cx: 540, cy: 212, frontier: true, game: "Hollow Knight", hltb: "~27h", fit: 90,
    blurb: "넓은 지하 왕국을 직접 지도로 채워가는 탐색형 액션.",
    why: "아직 한 번도 안 밟은 장르다. 너는 RPG에서도 탐색형 던전에 제일 오래 머물렀는데, 메트로배니아가 그 탐색 감각만 뽑아낸 장르다.",
    you: "한 판 길이도 네 평균 <b>90분</b>이랑 맞고, 네가 깊게 판 RPG·액션 바로 옆이라 처음이어도 발이 편할 거다." },
  { cat: "로그라이크", en: "Roguelike", p: 0.08, cx: 112, cy: 362, game: "Balatro", hltb: "~14h", fit: 71,
    blurb: "포커 패를 조합해 점수를 폭발시키는 덱빌딩 로그라이크.",
    why: "여기도 거의 안 가봤다. 다만 짧게 여러 판 돌리는 네 전술 성향이랑 로그라이크는 궁합이 좋다.",
    you: "규칙이 단순해서 몇 판만 돌려도 감이 온다. 미개척 장르 중에 제일 부담 없이 시작할 만하다." },
  { cat: "호러", en: "Horror", p: 0.05, cx: 252, cy: 356, game: "Signalis", hltb: "~10h", fit: 68,
    blurb: "레트로풍 생존공포. 놀래키기보다 이야기와 분위기로 민다.",
    why: "호러는 통째로 비어 있다. 그런데 Signalis는 점프스케어보다 서사·분위기 중심이라 네 취향이랑 안 부딪힌다.",
    you: "네 서사·탐색 취향 바로 옆이라, 호러가 처음이어도 무리 없이 즐길 만하다." },
  { cat: "FPS·슈팅", en: "Shooter", p: 0.0, cx: 392, cy: 352, game: "Titanfall 2 (캠페인)", hltb: "~7h", fit: 66,
    blurb: "7시간짜리 싱글 캠페인. 파일럿과 타이탄으로 밀어붙이는 연출형 슈팅.",
    why: "FPS도 기록이 없다. 멀티 대전보다 싱글 캠페인·연출 쪽이 네 취향에 맞는다.",
    you: "7시간이면 끝나는 밀도 높은 캠페인이라, 슈팅이 처음이어도 길게 각오할 것 없다." },
  { cat: "대전격투", en: "Fighting", p: 0.0, cx: 516, cy: 346, game: "—", hltb: "—", fit: 0,
    blurb: "",
    why: "아직 아무 신호도 없는 장르다. 지금 네 이력만 보면 인접한 취향도 약하다. <b>여기는 지금 권하지 않는다.</b> 억지로 밀기보다, 옆 장르가 자연스럽게 붙을 때 열자.",
    you: "" },
];

const stateOf = (p: number): MapState => (p >= 0.6 ? "claim" : p >= 0.1 ? "explore" : "unchart");
const TAG: Record<MapState, string> = { claim: "정복", explore: "탐험 중", unchart: "미개척" };

/* ── pixel genre-symbol sprites ────────────────────────────────────────
   viewBox 600×440, TILE 10px → a 60×44 tile grid. Each genre continent is
   a hand-drawn pixel SYMBOL bitmap ('#'=land, '.'=sea) anchored at cx/cy —
   "그 장르 하면 떠오르는 상징"(오너 지시). Shading is banded by coast depth
   (BFS distance to the nearest sea tile) with a checker dither; the state
   picks the tier — claim=deep teal, explore=mid, unchart=faint slate
   (실루엣은 유지 — 상징이 읽혀야 한다), frontier=violet. */
const TILE = 10;
const GW = 60;
const GH = 44;

const SPRITES: Record<string, string[]> = {
  RPG: [
    // 검 — 제일 깊게 판 장르가 제일 큰 상징
    "....#....",
    "...###...",
    "...###...",
    "...###...",
    "...###...",
    "...###...",
    "...###...",
    ".#######.",
    "#########",
    "...###...",
    "...###...",
    "..#####..",
    "..#####..",
  ],
  어드벤처: [
    // 던전 열쇠
    ".####.......",
    "#....#######",
    "#....#..#.#.",
    "#....#..#.#.",
    ".####.......",
  ],
  전략: [
    // 체스 룩
    "##.##.##",
    "########",
    ".######.",
    "..####..",
    "..####..",
    ".######.",
    "########",
  ],
  퍼즐: [
    // 퍼즐 조각 (위 볼록, 오른쪽 볼록)
    "..##....",
    "..##....",
    "######..",
    "########",
    "########",
    "######..",
    "######..",
  ],
  액션: [
    // 번개
    "...####",
    "..####.",
    ".####..",
    ".#####.",
    "...###.",
    "..###..",
    "..##...",
    ".##....",
  ],
  레이싱: [
    // 체크 깃발 — 구멍이 곧 체커 무늬
    "#.#.#.#.#",
    "##.#.#.#.",
    "#.#.#.#.#",
    "##.#.#.#.",
    "#.#.#.#.#",
    "#........",
    "#........",
    "#........",
    "#........",
  ],
  시뮬레이션: [
    // 집 — 빌더/농장 시뮬의 상징
    "....#....",
    "...###...",
    "..#####..",
    ".#######.",
    "#########",
    ".#######.",
    ".###.###.",
    ".###.###.",
  ],
  메트로배니아: [
    // 이어진 방들 — 미니맵 그 자체
    "###..###",
    "########",
    "...#....",
    "..####..",
    "..####..",
  ],
  로그라이크: [
    // 주사위 (5눈)
    ".#####.",
    "#.###.#",
    "#######",
    "###.###",
    "#######",
    "#.###.#",
    ".#####.",
  ],
  호러: [
    // 해골
    "..####..",
    ".######.",
    "########",
    "#..##..#",
    "#..##..#",
    "########",
    ".######.",
    ".#.##.#.",
  ],
  "FPS·슈팅": [
    // 권총 (측면)
    "##########",
    "##########",
    ".####.....",
    ".####.....",
    "..###.....",
  ],
  대전격투: [
    // 맞붙은 둘 — 주먹이 교차한다
    "##.....##",
    "##.....##",
    "#####.###",
    "###.#####",
    "###...###",
    "###...###",
    "#.#...#.#",
    "#.#...#.#",
  ],
};

type PxTile = { x: number; y: number; k: string };

/** shade class from coast depth (1 = coastline, grows inward). */
function spriteShade(depth: number, checker: boolean, state: MapState, frontier?: boolean): string | null {
  if (frontier) return depth === 1 ? "f0" : "f1";
  // 미개척: 흐리되 실루엣은 통짜로 — 안개는 밝기가 만들지 구멍이 만들지 않는다
  if (state === "unchart") return depth === 1 ? "u0" : "u1";
  if (state === "claim") {
    if (depth >= 3) return checker ? "c3" : "c2";
    if (depth === 2) return checker ? "c2" : "c1";
    return checker ? "c1" : "c0";
  }
  if (depth >= 2) return checker ? "e2" : "e1";
  return checker ? "e1" : "e0";
}

function buildTiles(s: Island, state: MapState): PxTile[] {
  const rows = SPRITES[s.cat];
  const h = rows.length;
  const w = Math.max(...rows.map((r) => r.length));
  const land = (tx: number, ty: number) =>
    ty >= 0 && ty < h && tx >= 0 && tx < rows[ty].length && rows[ty][tx] === "#";

  // coast depth: BFS from every coastline tile inward
  const depth = rows.map((row) => row.split("").map(() => Infinity));
  const q: [number, number][] = [];
  for (let ty = 0; ty < h; ty++) {
    for (let tx = 0; tx < rows[ty].length; tx++) {
      if (!land(tx, ty)) continue;
      if (!land(tx - 1, ty) || !land(tx + 1, ty) || !land(tx, ty - 1) || !land(tx, ty + 1)) {
        depth[ty][tx] = 1;
        q.push([tx, ty]);
      }
    }
  }
  for (let qi = 0; qi < q.length; qi++) {
    const [tx, ty] = q[qi];
    const d = depth[ty][tx];
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
      const nx = tx + dx;
      const ny = ty + dy;
      if (land(nx, ny) && depth[ny][nx] > d + 1) {
        depth[ny][nx] = d + 1;
        q.push([nx, ny]);
      }
    }
  }

  const x0 = Math.round(s.cx / TILE - w / 2);
  const y0 = Math.round(s.cy / TILE - h / 2);
  const out: PxTile[] = [];
  for (let ty = 0; ty < h; ty++) {
    for (let tx = 0; tx < rows[ty].length; tx++) {
      if (rows[ty][tx] !== "#") continue;
      const gx = x0 + tx;
      const gy = y0 + ty;
      if (gx < 0 || gy < 0 || gx >= GW || gy >= GH) continue;
      const checker = ((gx + gy) & 1) === 0;
      const k = spriteShade(depth[ty][tx], checker, state, s.frontier);
      if (k) out.push({ x: gx * TILE, y: gy * TILE, k });
    }
  }
  return out;
}

type BBox = { minX: number; minY: number; maxX: number; maxY: number };

/** four RPG-cursor corner brackets around a continent's bounding box. */
function brackets(b: BBox, pad = 3, len = 9): string[] {
  const x0 = b.minX - pad, y0 = b.minY - pad, x1 = b.maxX + pad, y1 = b.maxY + pad;
  return [
    `M${x0},${y0 + len} L${x0},${y0} L${x0 + len},${y0}`,
    `M${x1 - len},${y0} L${x1},${y0} L${x1},${y0 + len}`,
    `M${x0},${y1 - len} L${x0},${y1} L${x0 + len},${y1}`,
    `M${x1 - len},${y1} L${x1},${y1} L${x1},${y1 - len}`,
  ];
}

const RENDER = ISLANDS.map((s, idx) => {
  const state = stateOf(s.p);
  const tiles = buildTiles(s, state);
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const t of tiles) {
    if (t.x < minX) minX = t.x;
    if (t.y < minY) minY = t.y;
    if (t.x + TILE > maxX) maxX = t.x + TILE;
    if (t.y + TILE > maxY) maxY = t.y + TILE;
  }
  const bbox: BBox = { minX, minY, maxX, maxY };
  return {
    ...s,
    idx,
    state,
    tiles,
    bbox,
    brk: brackets(bbox),
    labelX: (minX + maxX) / 2,
    labelY: maxY + 14,
  };
});
type Rend = (typeof RENDER)[number];

const ORDER: Record<MapState, number> = { claim: 0, explore: 1, unchart: 2 };
const TERR = [...RENDER].sort((a, b) => ORDER[a.state] - ORDER[b.state] || b.p - a.p);

const GRAT_V = [100, 200, 300, 400, 500];
const GRAT_H = [100, 200, 300];
const COL_LABEL = ["A", "B", "C", "D", "E", "F"]; // pixel map coordinate grid
const ROW_LABEL = ["1", "2", "3", "4"];

/* the map-driven integrated recommendation card. */
function RecCard({ island, onOpen }: { island: Rend; onOpen: () => void }) {
  const notRec = island.game === "—";
  const cover = coverFor(island.game, "header");
  const eyebrow = island.frontier ? "▲ 다음 개척지" : island.state === "unchart" ? "미개척 · 상륙 후보" : "이 장르의 다음 한 수";

  if (notRec) {
    return (
      <div className={`ns-atl-rec ns-atl-rec-none st-${island.state}`}>
        <div className="ns-atl-rec-none-tag">{island.cat} · {TAG[island.state]}</div>
        <p className="ns-atl-rec-none-why" dangerouslySetInnerHTML={{ __html: island.why }} />
        <div className="ns-atl-rec-you">
          <span className="ns-atl-rec-you-label">정직 안내</span>
          <span className="ns-atl-rec-you-text">억지로 추천하지 않는다. 옆 장르가 붙으면 그때 열린다.</span>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`ns-atl-rec ${island.frontier ? "px-frontier" : "st-" + island.state}`}
      onClick={onOpen}
      aria-label={`${island.game} — ${island.cat} 추천 상세 열기`}
    >
      <div
        className="ns-atl-rec-cover"
        style={cover ? { backgroundImage: `url(${cover})` } : undefined}
      >
        <div className="ns-atl-rec-cover-top">
          <span className="ns-atl-rec-genre">{island.cat}</span>
          <span className="ns-atl-rec-fit">{island.fit}% 맞음</span>
        </div>
        <div className="ns-atl-rec-cover-btm">
          <div className="ns-atl-rec-eyebrow">{eyebrow}</div>
          <div className="ns-atl-rec-game">{island.game}</div>
          {island.blurb && <div className="ns-atl-rec-blurb">{island.blurb}</div>}
        </div>
      </div>
      <div className="ns-atl-rec-body">
        <p className="ns-atl-rec-why" dangerouslySetInnerHTML={{ __html: island.why }} />
        <div className="ns-atl-rec-you">
          <span className="ns-atl-rec-you-label">너 기준 해석</span>
          <span className="ns-atl-rec-you-text" dangerouslySetInnerHTML={{ __html: island.you }} />
        </div>
        <div className="ns-atl-rec-foot">
          <span className="ns-atl-rec-meta">
            {island.hltb !== "—" && <>클리어 <b>{island.hltb}</b> · </>}대륙 <b>{Math.round(island.p * 100)}%</b>
          </span>
          <span className="ns-atl-rec-cta">{island.state === "unchart" ? "상륙 근거 →" : "근거 열기 →"}</span>
        </div>
      </div>
    </button>
  );
}

/* ── Hero 대륙 티저 (옵션 D) ─────────────────────────────────────────────
   히어로 우측 공백에 시그니처(취향 아틀라스)를 예고하는 정적·비대화 조각.
   S5 전체 지도를 스포일하지 않게 상위 4개 대륙만 크롭하고, 실제 RENDER 타일
   + ns-px-* 팔레트를 그대로 재사용(동기화 자동). 대화/의미는 S5 지도가 소유 —
   여기선 aria-hidden 장식. atlas.tsx 분할 시 이 모듈에서 같이 빠진다(§B). */
const TEASER_CATS = ["RPG", "어드벤처", "전략", "액션"];
const TEASER = RENDER.filter((s) => TEASER_CATS.includes(s.cat));

export function AtlasTeaser() {
  return (
    <svg
      className="ns-px-map charted ns-px-teaser"
      viewBox="20 20 360 240"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <g className="ns-px-grat">
        {GRAT_V.map((x) => <line key={`v${x}`} x1={x} y1={0} x2={x} y2={440} />)}
        {GRAT_H.map((y) => <line key={`h${y}`} x1={0} y1={y} x2={600} y2={y} />)}
      </g>
      <g className="ns-px-conts">
        {TEASER.map((s) => (
          <g key={s.cat} className={`ns-px-cont ${s.frontier ? "frontier" : s.state}`}>
            {s.tiles.map((t, i) => (
              <rect key={i} className={`ns-px-t ${t.k}`} x={t.x} y={t.y} width={TILE} height={TILE} />
            ))}
            <text x={s.labelX} y={s.labelY} textAnchor="middle" className="ns-px-label">{s.cat}</text>
          </g>
        ))}
      </g>
      <g className="ns-px-compass">
        <rect x={27} y={27} width={38} height={38} className="ns-px-comp-box" />
        <rect x={45} y={46} width={2} height={13} className="ns-px-comp-s" />
        <rect x={33} y={45} width={13} height={2} className="ns-px-comp-x" />
        <rect x={47} y={45} width={13} height={2} className="ns-px-comp-x" />
        <rect x={45} y={33} width={2} height={13} className="ns-px-comp-n" />
        <polygon points="42,34 50,34 46,28" className="ns-px-comp-n" />
        <rect x={44} y={44} width={4} height={4} className="ns-px-comp-c" />
        <text x={46} y={23} textAnchor="middle" className="ns-px-comp-lbl n">N</text>
      </g>
    </svg>
  );
}

export function TasteAtlas() {
  const [sel, setSel] = useState<Rend | null>(null);
  const [active, setActive] = useState<Rend>(() => RENDER.find((i) => i.frontier) ?? RENDER[0]);
  const [charted, setCharted] = useState(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const t = requestAnimationFrame(() => setCharted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  function open(i: Rend) {
    lastFocus.current = document.activeElement as HTMLElement;
    setSel(i);
  }
  const close = () => setSel(null);

  useEffect(() => {
    if (sel) closeRef.current?.focus();
    else lastFocus.current?.focus();
  }, [sel]);

  useEffect(() => {
    if (!sel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sel]);

  const frontier = RENDER.find((i) => i.frontier)!;

  return (
    <div className="ns-atl">
      <div className="ns-atl-hero">
        {/* left — the pixel map (drives the pick on hover/focus) */}
        <div className="ns-atl-map-col">
          <div className="ns-atl-map-wrap">
            <svg
              className={`ns-px-map${charted ? " charted" : ""}`}
              viewBox="0 0 600 440"
              role="group"
              aria-label="12개 장르를 상징 모양 대륙으로 그린 탐험 지도. 대륙에 올리거나 포커스하면 그 장르 추천이 오른쪽에 뜨고, 클릭하면 근거가 열린다. 전부 예시 프로필."
            >
              {/* pixel coordinate grid */}
              <g className="ns-px-grat">
                {GRAT_V.map((x) => <line key={`v${x}`} x1={x} y1={0} x2={x} y2={440} />)}
                {GRAT_H.map((y) => <line key={`h${y}`} x1={0} y1={y} x2={600} y2={y} />)}
              </g>
              <g className="ns-px-coord">
                {COL_LABEL.map((L, i) => <text key={`c${L}`} x={i * 100 + 50} y={12} textAnchor="middle">{L}</text>)}
                {ROW_LABEL.map((L, i) => <text key={`r${L}`} x={9} y={i * 100 + 54} textAnchor="middle">{L}</text>)}
              </g>

              {/* pixel continents */}
              <g className="ns-px-conts">
                {RENDER.map((s) => (
                  <g
                    key={s.cat}
                    className={`ns-px-cont ${s.frontier ? "frontier" : s.state}${active.cat === s.cat ? " active" : ""}`}
                    tabIndex={0}
                    role="button"
                    aria-label={`${s.cat} 대륙 · ${TAG[s.state]} · 올리면 추천, 클릭하면 근거`}
                    style={{ transitionDelay: `${s.idx * 60}ms` }}
                    onMouseEnter={() => setActive(s)}
                    onFocus={() => setActive(s)}
                    onClick={() => open(s)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        open(s);
                      }
                    }}
                  >
                    {/* hit surface (covers foggy gaps so hover/click is reliable) */}
                    <rect
                      className="ns-px-hit"
                      x={s.bbox.minX - 6}
                      y={s.bbox.minY - 6}
                      width={s.bbox.maxX - s.bbox.minX + 12}
                      height={s.labelY - s.bbox.minY + 10}
                    />
                    {s.tiles.map((t, i) => (
                      <rect key={i} className={`ns-px-t ${t.k}`} x={t.x} y={t.y} width={TILE} height={TILE} />
                    ))}
                    {s.brk.map((d, i) => (
                      <path key={`b${i}`} className="ns-px-bracket" d={d} />
                    ))}
                    <text x={s.labelX} y={s.labelY} textAnchor="middle" className="ns-px-label">{s.cat}</text>
                    {s.frontier && (
                      <text x={s.cx} y={s.bbox.minY - 10} textAnchor="middle" className="ns-px-frontier-sub">▲ 다음</text>
                    )}
                  </g>
                ))}
              </g>

              {/* frontier marker (pixel flag + blinking beacon, brand violet) */}
              {frontier && (
                <g className="ns-px-frontier-mark" aria-hidden="true">
                  <rect x={frontier.cx - 1} y={frontier.cy - 22} width={2} height={22} className="ns-px-flag-pole" />
                  <path d={`M${frontier.cx + 1},${frontier.cy - 22} L${frontier.cx + 13},${frontier.cy - 18} L${frontier.cx + 1},${frontier.cy - 14} Z`} className="ns-px-flag" />
                  <rect x={frontier.cx - 3} y={frontier.cy - 3} width={6} height={6} className="ns-px-beacon" />
                </g>
              )}

              {/* pixel compass rose (top-left) */}
              <g className="ns-px-compass" aria-hidden="true">
                <rect x={27} y={27} width={38} height={38} className="ns-px-comp-box" />
                <rect x={45} y={46} width={2} height={13} className="ns-px-comp-s" />
                <rect x={33} y={45} width={13} height={2} className="ns-px-comp-x" />
                <rect x={47} y={45} width={13} height={2} className="ns-px-comp-x" />
                <rect x={45} y={33} width={2} height={13} className="ns-px-comp-n" />
                <polygon points="42,34 50,34 46,28" className="ns-px-comp-n" />
                <rect x={44} y={44} width={4} height={4} className="ns-px-comp-c" />
                <text x={46} y={23} textAnchor="middle" className="ns-px-comp-lbl n">N</text>
                <text x={46} y={75} textAnchor="middle" className="ns-px-comp-lbl">S</text>
                <text x={70} y={49} textAnchor="middle" className="ns-px-comp-lbl">E</text>
                <text x={22} y={49} textAnchor="middle" className="ns-px-comp-lbl">W</text>
              </g>
            </svg>
          </div>

          <div className="ns-atl-legend">
            <span><i className="ns-px-sw sw-claim" />정복 (오래 판 곳)</span>
            <span><i className="ns-px-sw sw-explore" />탐험 중</span>
            <span><i className="ns-px-sw sw-unchart" />미개척</span>
          </div>
          <div className="ns-atl-cap">땅 모양은 그 장르의 상징, 색은 밟은 정도. 사두기만 한 게임은 땅이 안 된다.</div>
          <div className="ns-atl-hint">대륙에 올리면 그 장르의 다음 게임이 오른쪽에 뜬다. 클릭하면 근거.</div>
        </div>

        {/* right — how it's measured + the map-driven pick.
            v0.7: 판정/유형(측량 결과물)은 오너 지시로 제거 — 측정 방식만 말한다. */}
        <div className="ns-atl-verdict">
          <div className="ns-atl-vb">측정 방식</div>
          <p className="ns-atl-narr ns-px-narr">플레이타임 · 클리어 기록 · 도전과제, 이 셋만 읽는다. 사두기만 한 게임은 땅이 안 되고, 해석 대신 지도가 결과다.</p>

          <RecCard island={active} onOpen={() => open(active)} />

          <div className="ns-atl-stats">
            <div className="ns-atl-stat"><div className="n">7<small>/12</small></div><div className="l">밟은 장르</div></div>
            <div className="ns-atl-stat"><div className="n">RPG</div><div className="l">최다 플레이</div></div>
            <div className="ns-atl-stat"><div className="n">5곳</div><div className="l">미개척</div></div>
          </div>
        </div>
      </div>

      {/* territory survey — 12 realms; hover/focus previews, click opens */}
      <div className="ns-atl-terr">
        <div className="ns-atl-sec">장르 측량 · 12개 · 올리면 미리보기, 클릭하면 근거</div>
        <div className="ns-atl-terr-grid">
          {TERR.map((c) => (
            <div
              key={c.cat}
              className={`ns-atl-row pst-${c.frontier ? "frontier" : c.state}${active.cat === c.cat ? " active" : ""}`}
              tabIndex={0}
              role="button"
              aria-label={`${c.cat} · ${TAG[c.state]} · ${Math.round(c.p * 100)}% · 올리면 추천, 클릭하면 근거`}
              onMouseEnter={() => setActive(c)}
              onFocus={() => setActive(c)}
              onClick={() => open(c)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  open(c);
                }
              }}
            >
              <div className="ns-atl-idx">{String(c.idx + 1).padStart(2, "0")}</div>
              <div>
                <div className="ns-atl-terr-name">
                  <span>{c.cat} <span className="en">{c.en}</span></span>
                  <span className="ns-atl-tag">{TAG[c.state]}</span>
                </div>
                <div className="ns-atl-bar">
                  <i style={{ width: `${c.p * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal — full grounded detail + action */}
      {sel && (
        <div className="ns-atl-backdrop open" role="presentation" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="ns-atl-modal" role="dialog" aria-modal="true" aria-labelledby="ns-atl-mgame">
            <div className="ns-atl-mhead">
              <div className="ns-atl-mgenre">{sel.cat} · {sel.en}</div>
              <div className="ns-atl-mhead-r">
                <span className={`ns-atl-mtag ${sel.frontier ? "px-frontier" : "px-" + sel.state}`}>{TAG[sel.state]}</span>
                <button ref={closeRef} className="ns-atl-mclose" aria-label="닫기" onClick={close}>×</button>
              </div>
            </div>
            <div className="ns-atl-mbody">
              <div className="ns-atl-meyebrow">{sel.frontier ? "▲ 다음 개척지" : sel.state === "unchart" ? "미개척 · 상륙 후보" : "이 장르의 다음 한 수"}</div>
              <div className="ns-atl-mgame" id="ns-atl-mgame">{sel.game}</div>
              <div className="ns-atl-mwhy-label">왜 이 게임 · 네 신호에서</div>
              <div className="ns-atl-mwhy" dangerouslySetInnerHTML={{ __html: sel.why }} />
              {sel.you && (
                <div className="ns-atl-myou">
                  <span className="ns-atl-myou-label">너 기준 해석</span>
                  <span dangerouslySetInnerHTML={{ __html: sel.you }} />
                </div>
              )}
              <div className="ns-atl-mmeta">
                {sel.hltb && sel.hltb !== "—" && <span>클리어 <b>{sel.hltb}</b></span>}
                {sel.fit > 0 && <span>추천 적합 <b>{sel.fit}%</b></span>}
                <span>대륙 진행 <b>{Math.round(sel.p * 100)}%</b></span>
              </div>
            </div>
            <div className="ns-atl-mfoot">
              <div className="ns-atl-mnote">예시 데모 · 이 근거는 예시 플레이 이력에서 뽑은 거지, 아무한테나 들어맞는 템플릿이 아니다.</div>
              {sel.game !== "—" && (
                <button className={`ns-atl-mcta${sel.frontier ? " px-frontier" : ""}`}>
                  {sel.state === "unchart" ? "이 개척지로 상륙 →" : "Steam에서 시작하기 →"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
