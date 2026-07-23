export type DemoProfile = {
  id: "steady-explorer" | "focused-tactician";
  label: string;
  summary: string;
  core: string;
  confidence: number;
  tags: string[];
};

export const demoProfiles: DemoProfile[] = [
  {
    id: "steady-explorer",
    label: "꾸준한 탐험가",
    summary: "넓은 세계를 천천히 탐색하고 이야기를 끝까지 따라가는 플레이",
    core: "세계 탐험형",
    confidence: 86,
    tags: ["서사", "오픈 월드", "싱글 플레이"],
  },
  {
    id: "focused-tactician",
    label: "집중형 전술가",
    summary: "짧은 세션 안에서 규칙을 익히고 정교한 선택을 반복하는 플레이",
    core: "전술 숙련형",
    confidence: 81,
    tags: ["전략", "덱빌딩", "반복 숙련"],
  },
];

export const sourceHeroCopy = {
  eyebrow: "Steam URL 하나면 끝",
  leadWords: ["사놓고", "안", "한", "게임", "수백", "개,"],
  accentWords: ["오늘", "밤", "켤", "한", "판까지."],
  description: "URL 하나 붙여넣으면 내 라이브러리가 지도로 뜨고, 다음에 뭘 켤지 이유까지 짚어줘요.",
  placeholder: "Steam 프로필 URL 붙여넣기",
  cta: "내 라이브러리 지도 그리기",
  trustNote: "데모라, 선택한 예시 프로필로 그린 아틀라스가 바로 열립니다.",
} as const;

export const atlasTeaserRows = [
  "........................",
  "......AA................",
  ".....AAAA....BBBB.......",
  "....AAAAABBBBBBBB.......",
  "...AAAAAABBBBBCCC.......",
  "...AAAAAABBBCCCCC.......",
  "....AAAABCCCCCCCDDD.....",
  ".....AAACCCCCCCDDDD.....",
  "......AACCCCCCDDDDDD....",
  ".......ACCCCCDDDDDD.....",
  "........CCCCDDDDD.......",
  ".........CCCDDDD........",
  "..........CCDDD.........",
  "........................",
] as const;

export type Recommendation = {
  id: "tactical-stealth" | "forgotten-passage" | "galactic-frontier";
  title: string;
  genre: string;
  reason: string;
  progress: number;
  session: string;
  coverClass: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "tactical-stealth",
    title: "전술 잠입 캠페인",
    genre: "전략",
    reason: "전술 숙련형 취향과 겹치고 캠페인이 30% 남아서 추천해요.",
    progress: 70,
    session: "평균 45분 세션",
    coverClass: "cover-tactical",
  },
  {
    id: "forgotten-passage",
    title: "잊혀진 항로",
    genre: "어드벤처",
    reason: "세계 탐험형 지역과 이어져 있고, 최근 다시 켠 흔적이 있어요.",
    progress: 35,
    session: "평균 60분 세션",
    coverClass: "cover-passage",
  },
  {
    id: "galactic-frontier",
    title: "은하 개척지",
    genre: "RPG",
    reason: "RPG 대륙에서 아직 안 켠 큰 봉우리라 남겨둔 한 판이에요.",
    progress: 12,
    session: "평균 70분 세션",
    coverClass: "cover-galaxy",
  },
];

export const communityPreview = {
  gameId: "tactical-stealth" as const,
  fixtureFacts: [
    { label: "메인 스토리", value: "12–16시간" },
    { label: "내 진행도", value: "30% 남음" },
    { label: "세션 길이", value: "평균 45분" },
  ],
  interpretations: {
    "steady-explorer": "‘꾸준한 탐험가(세계 탐험형 · 86%)’의 신호 기준으로, 이 게임의 탐색 경로는 어드벤처 biome과 이어져요. 한 구간씩 진행하기 좋은 길이라 오늘 밤 후보로 짚었어요.",
    "focused-tactician": "‘집중형 전술가(전술 숙련형 · 81%)’의 신호 기준으로, 이 게임의 잠입 캠페인은 전략 biome과 겹쳐요. 남은 30%가 한 세션 분량이라 오늘 밤 후보로 짚었어요.",
  },
  capabilities: [
    { label: "비슷한 취향 코어 탐색", status: "준비 중" as const },
    { label: "집계 맥락 보기", status: "준비 중" as const },
    { label: "아틀라스 스냅샷 공유", status: "준비 중" as const },
  ],
} as const;

export function validateSteamProfileUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return "Steam 프로필 URL을 입력해 주세요.";

  try {
    const url = new URL(trimmed);
    const validHost = url.hostname === "steamcommunity.com" || url.hostname === "www.steamcommunity.com";
    const parts = url.pathname.split("/").filter(Boolean);
    const validVanityPath = parts.length === 2 && parts[0] === "id" && /^[A-Za-z0-9_-]+$/.test(parts[1]);
    const validNumericPath = parts.length === 2 && parts[0] === "profiles" && /^\d{17}$/.test(parts[1]);
    const validPath = validVanityPath || validNumericPath;

    if (url.protocol !== "https:" || !validHost || !validPath) {
      return "https://steamcommunity.com/id/... 형식의 주소를 확인해 주세요.";
    }
  } catch {
    return "올바른 URL 형식으로 입력해 주세요.";
  }

  return null;
}
