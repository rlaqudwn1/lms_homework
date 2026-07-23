/* 003 · NEXT SAVE — 확정 한글 카피 덱. 진실공급원 = copy.final.md (S0~S10).
   S6 아틀라스 본체 카피는 atlas.tsx 소관이라 여기 없음 (S5 헤더만 있음).
   레지스터 (direction.md 리비전 v0.8, 2026-07-14 · 경쟁사 teardown 근거):
     · 제품 백본 = 해요체 담백 + 1인칭 "내/나의" + 정직어휘("사놓고 안 한/유기")
     · 정직 메타(demobar·trustNote) = 합니다체 (신뢰 격식)
     · 음슴체·슬랭 = S8 리뷰에만 격리 (Level 1: 강욕만 제거)
   ⚠ atlas.tsx 본체는 아직 구버전 2인칭 "너"·한다체 — 다음 라운드 포팅 대기. */

/* ---- S0 · 전역 데모 배너 ---------------------------------------- */
export const demobar = {
  bold: "컨셉 데모입니다.",
  rest: " 여기 뜨는 숫자는 전부 예시 프로필이고, 실제 Steam 연동이나 로그인은 없습니다.",
};

/* ---- S1 · Nav --------------------------------------------------- */
export const nav = {
  links: [
    { href: "#how", label: "작동법" },
    { href: "#atlas", label: "내 아틀라스" },
    { href: "#community", label: "전체 게임" },
  ],
};

/* ---- S2 · 히어로 ------------------------------------------------ */
export const hero = {
  eyebrow: "Steam URL 하나면 끝",
  h1lead: "사놓고 안 한 게임 수백 개, ",
  h1glow: "오늘 밤 켤 한 판까지.",
  sub: "URL 하나 붙여넣으면 내 라이브러리가 지도로 뜨고, 다음에 뭘 켤지 이유까지 짚어줘요.",
  placeholder: "Steam 프로필 URL 붙여넣기",
  cta: "내 라이브러리 지도 그리기",
  // 존대(합니다체) — 정직 메타-보이스
  trustNote: "데모라, 아래로 내리면 예시 프로필로 그린 아틀라스가 바로 열립니다.",
};

/* ---- S3 · 데모 프로필 strip ------------------------------------ */
export const strip = {
  lead: "예시 데모",
  // v0.7: ["판정","개척자"] 제거 — 측량 결과물(유형 판정)은 오너 지시로 뺐다.
  items: [
    ["예시 프로필", "@frost_warden"],
    ["보유", "214"],
    ["밟은 장르", "7 / 12"],
  ] as [string, string][],
};

/* ---- S4 · 작동법 3스텝 ----------------------------------------- */
export const how = {
  eyebrow: "작동법",
  head: "링크 하나면 돼요. 가입도 설치도 없어요.",
  steps: [
    {
      num: "01",
      title: "Steam URL 붙여넣기",
      desc: "공개 프로필 링크만 있으면 돼요.",
    },
    {
      num: "02",
      title: "실제 라이브러리를 지도로",
      desc: "플레이타임, 완주율, 도전과제. 자가신고 아닌 실제 기록으로 장르 대륙을 그려요.",
    },
    {
      num: "03",
      title: "지도 보고 다음 땅 고르기",
      desc: "다음에 켤 게임을, 왜 그게 지금 나한테 붙는지까지 보고 골라요.",
    },
  ],
};

/* ---- S5 · 아틀라스 섹션 헤더 (본체는 atlas.tsx) ---------------- */
export const atlasHeader = {
  eyebrow: "이게 나네요. 다음 한 수까지.",
  head: "내 라이브러리를 대륙으로 그렸어요.",
  sub: "장르가 땅이고, 플레이타임이 색이에요. (예시 프로필)",
};

/* ---- S7 · 커뮤니티 "전체 게임" --------------------------------- */
type TrendGame = { title: string; genre: string };

export const community = {
  eyebrow: "전체 게임, 커뮤니티 기준",
  head: "지금 다들 뭐 켜고 있을까요.",
  // S7-b 트렌드 게임 6종. v0.7: 카드의 통계 숫자(평균 플레이·완주율) 제거 —
  // 오너 지시 "트렌드는 넣되 숫자는 빼자". 숫자는 아래 게임 상세(HK)가 담당.
  trendChip: "예시 데모 · 지금 많이 하는",
  trends: [
    { title: "Elden Ring", genre: "소울라이크·오픈월드" },
    { title: "Baldur's Gate 3", genre: "RPG" },
    { title: "Hades", genre: "로그라이트 액션" },
    { title: "Stardew Valley", genre: "농장 시뮬" },
    { title: "Hollow Knight", genre: "메트로배니아" },
    { title: "Vampire Survivors", genre: "로그라이트" },
  ] as TrendGame[],
};

/* ---- S7-c · 게임 상세 목업 (Hollow Knight) --------------------- */
export const gp = {
  demoChip: "예시 데모",
  title: "Hollow Knight",
  meta: "메트로배니아 · 인디 · 2017",
  timeLabel: "클리어 시간",
  times: [
    { icon: "clock", value: "27h", k: "메인 스토리" },
    { icon: "flag", value: "41h", k: "엔딩까지" },
    { icon: "trophy", value: "63h", k: "100%까지" },
  ],
  oursTag: "Steam 실동기화 · 자가신고 아님",
  metrics: [
    { label: "도전과제 달성률", pct: 71 },
    { label: "엔딩 본 사람", pct: 46 },
  ],
  locked: [
    "보유 · 플레이 중 · 백로그에 방치",
    "나 같은 플레이어 · 완주 기록으로 매칭",
  ],
  lockedNote: "유저가 쌓이면 열리는 기능이에요 (다음 단계).",
};

/* ---- S8 · 리뷰 목업 3개 ---------------------------------------- */
/* v0.7: 게임 상세(HK) 밑에 다른 게임 리뷰가 섞이면 안 된다(오너) → 전부
   Hollow Knight로. 어투는 voice-corpus.md §4 실리뷰에서 차용(증거-압축형,
   플탐=증거, 자학 유머) — 원문 복붙 아님, 예시 데모 표식 유지. */
export const reviews = {
  title: "Hollow Knight 플레이어 리뷰",
  chip: "예시 데모",
  items: [
    {
      user: "@night_owl_kr",
      game: "Hollow Knight",
      stars: 5,
      text: "길 잃는 게 스트레스였는데 지도 사고부터는 계속 켜게 됨. 41시간 순삭.",
      play: "41h",
    },
    {
      user: "@coffee_9to5",
      game: "Hollow Knight",
      stars: 4,
      text: "절대 떠먹여주지 않는 게임. 같은 보스한테 서른 번 죽고도 다음 날 또 켰음.",
      play: "78h",
    },
    {
      user: "@backlog_slayer",
      game: "Hollow Knight",
      stars: 5,
      text: "3년 사놓고 유기했던 게 죄였음. 제 플탐이 리뷰임.",
      play: "108h",
    },
  ],
};

/* ---- S9 · 공유 카드 2종 ---------------------------------------- */
export const social = [
  {
    title: "아틀라스 스냅샷 공유",
    desc: "내 지도를 사진 한 장으로. 정복한 대륙이랑 다음에 갈 개척지까지 그대로 담겨요. (컨셉 · 내보내기는 나중에)",
    action: "스냅샷 내보내기",
  },
  {
    title: "나 같은 플레이어 찾기",
    desc: "팔로워 수가 아니라 실제로 완주한 게임으로 매칭해요. 매칭할 사람이 쌓이면 열려요.",
    action: "매칭 둘러보기",
  },
];

/* ---- S10 · Footer ---------------------------------------------- */
export const footer = {
  note: "취향 아틀라스 컨셉 데모 · 예시 데이터만 사용 · 임시 이름 · 003 랩 빌드",
};
