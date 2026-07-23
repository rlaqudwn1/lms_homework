export const marketComparisons = [
  {
    name: "Backloggd",
    primaryJob: "컬렉션, 플레이 상태, 저널, 리뷰와 목록을 기록하고 공유",
    source: "https://backloggd.com/?lang=en",
  },
  {
    name: "Grouvee",
    primaryJob: "게임을 선반으로 분류하고 Steam 라이브러리와 커뮤니티를 연결",
    source: "https://www.grouvee.com/",
  },
  {
    name: "HowLongToBeat",
    primaryJob: "예상 플레이 시간을 비교하고 백로그 계획을 보조",
    source: "https://howlongtobeat.com/",
  },
] as const;

export const comparisonDocumentUrl =
  "https://github.com/rlaqudwn1/lms_homework/blob/codex/day-02-next-save/assignments/day-06/steps/step-02-market-positioning/MARKET-LANDSCAPE.md";

export const positioningPillars = [
  {
    title: "기록보다 결정",
    body: "무엇을 플레이했는지 다시 정리하기보다, 오늘 시작할 한 판을 고르는 데 집중해요.",
  },
  {
    title: "전체 목록보다 세 가지 후보",
    body: "긴 라이브러리를 다시 탐색하지 않도록 선택지를 정확히 세 개로 줄여요.",
  },
  {
    title: "인기순보다 설명 가능한 근거",
    body: "예시 플레이 성향과 세션 길이를 함께 보여줘 추천 이유를 확인할 수 있어요.",
  },
] as const;
