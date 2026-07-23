import {
  comparisonDocumentUrl,
  positioningPillars,
} from "@/lib/market-positioning";

export function MarketPositioning() {
  return (
    <section className="positioning-section" aria-labelledby="positioning-title">
      <div className="positioning-heading">
        <p className="eyebrow">WHY NEXT SAVE</p>
        <h2 id="positioning-title">백로그를 다시 정리하지 마세요.</h2>
        <p>
          NEXT SAVE는 목록을 하나 더 만드는 대신, 예시 취향 신호를 근거로
          오늘의 후보를 세 개까지 줄이는 결정 지원 프로토타입입니다.
        </p>
      </div>
      <div className="positioning-pillars">
        {positioningPillars.map((pillar, index) => (
          <article key={pillar.title}>
            <span aria-hidden="true">0{index + 1}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </div>
      <p className="positioning-disclosure">
        시장 비교에서 도출한 제품 가설이며 아직 실제 사용자 수요를 검증한
        결과가 아닙니다. 현재 화면은 fixture-only course mock입니다.
      </p>
      <a
        className="positioning-source-link"
        href={comparisonDocumentUrl}
        target="_blank"
        rel="noreferrer"
      >
        Backloggd · Grouvee · HowLongToBeat 비교 문서 보기
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
