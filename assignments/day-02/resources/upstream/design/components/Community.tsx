/* S7~S9 · 커뮤니티 "전체 게임" — 매니페스토 설명극장 대신 목업으로 보여주기.
   S7-a 헤더 · S7-b 트렌드 게임 6종(v0.7: 통계 숫자 제거 — 커버+이름+장르만) ·
   S7-c 게임 상세(HK) · S8 리뷰 3개(v0.7: 전부 HK — 상세 밑에 딴 게임 리뷰 금지) ·
   S9 공유 카드 2종. 데이터 시각화는 실측값에 정합(바 width % = 실제 지표). */
import { coverFor } from "../steam";
import { community, gp, reviews, social } from "../copy";
import { Ico, Soon } from "./Icons";

/* fill a cover element with real Steam capsule/header art (sizing lives in CSS) */
const coverBg = (title: string) => {
  const url = coverFor(title);
  return url ? { backgroundImage: `url(${url})` } : undefined;
};
const headerBg = (title: string) => {
  const url = coverFor(title, "header");
  return url ? { backgroundImage: `url(${url})` } : undefined;
};

/* review star row — reuses .ns-stars/.ns-star* (cool --star, no gold) */
function Stars({ n }: { n: number }) {
  return (
    <span className="ns-stars" role="img" aria-label={`별점 ${n} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span className="ns-star" key={i} aria-hidden="true">
          <span className="ns-star-bg">★</span>
          <span className="ns-star-fg" style={{ width: i <= n ? "100%" : "0%" }}>★</span>
        </span>
      ))}
    </span>
  );
}

export function Community() {
  return (
    <section className="ns-section" id="community">
      <div className="ns-shell">
        {/* S7-a · 헤더 (매니페스토 설명문 없음 — 아래 목업이 대신 말한다) */}
        <p className="ns-eyebrow ns-eyebrow-row">{community.eyebrow}</p>
        <h2 className="ns-display ns-section-head">{community.head}</h2>

        {/* S7-b · 트렌드 게임 6개 — 플랫·쿨·글로우 없음 */}
        <div className="ns-trend-head">
          <span className="ns-demo-chip">{community.trendChip}</span>
        </div>
        <div className="ns-trend-grid">
          {community.trends.map((t) => (
            <article className="ns-trend" key={t.title}>
              <span className="ns-trend-cover" style={headerBg(t.title)} aria-hidden="true" />
              <div className="ns-trend-body">
                <div className="ns-trend-title">{t.title}</div>
                <div className="ns-trend-genre">{t.genre}</div>
              </div>
            </article>
          ))}
        </div>

        {/* S7-c · 게임 상세 목업 (객관 지표 크게, 개인화 read는 별도) */}
        <div className="ns-gp">
          <div className="ns-gp-head">
            <span className="ns-gp-cover" style={coverBg(gp.title)} aria-hidden="true" />
            <div className="ns-gp-headmain">
              <div className="ns-gp-title">{gp.title}</div>
              <div className="ns-gp-meta">{gp.meta}</div>
            </div>
            <span className="ns-demo-chip">{gp.demoChip}</span>
          </div>

          {/* 클리어 시간 — 객관 (HLTB식 공개 데이터) */}
          <div className="ns-gp-time">
            <p className="ns-label">{gp.timeLabel}</p>
            <div className="ns-gp-time-row">
              {gp.times.map((t) => (
                <div className="ns-gp-time-cell" key={t.k}>
                  <span className="ns-gp-time-ico" aria-hidden="true"><Ico name={t.icon} /></span>
                  <span className="ns-numeral">{t.value}</span>
                  <span className="ns-gp-time-k">{t.k}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 차별점 — Steam 실동기화 글로벌 % (바 width % = 실측값) */}
          <div className="ns-gp-ours">
            <p className="ns-label ns-gp-ours-tag">{gp.oursTag}</p>
            <div className="ns-gp-ours-metrics">
              {gp.metrics.map((m, i) => (
                <div className="ns-gp-metric" key={m.label}>
                  <div className="ns-gp-metric-head">
                    <span>{m.label}</span>
                    <b>{m.pct}%</b>
                  </div>
                  <span className="ns-gp-track">
                    <span
                      className={i === 0 ? "ns-gp-fill" : "ns-gp-fill ns-gp-fill-2"}
                      style={{ width: `${m.pct}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 유저베이스 기능 — 준비 중(다음 단계) */}
          <div className="ns-gp-locked">
            {gp.locked.map((row) => (
              <div className="ns-gp-locked-row" key={row}>
                <span>{row}</span>
                <Soon />
              </div>
            ))}
            <p className="ns-gp-locked-note">{gp.lockedNote}</p>
          </div>
        </div>

        {/* S8 · 플레이어 리뷰 3개 — .ns-review* / .ns-stars 재사용 */}
        <div className="ns-reviews">
          <div className="ns-reviews-head">
            <h3 className="ns-reviews-title">{reviews.title}</h3>
            <span className="ns-demo-chip">{reviews.chip}</span>
          </div>
          <ul className="ns-review-list">
            {reviews.items.map((r) => (
              <li className="ns-review" key={r.user}>
                <span
                  className="ns-review-av"
                  style={{ ...coverBg(r.game), backgroundSize: "cover", backgroundPosition: "center 22%" }}
                  aria-hidden="true"
                />
                <div className="ns-review-main">
                  <div className="ns-review-top">
                    <span className="ns-review-name">{r.user}</span>
                    <span className="ns-review-date">플레이 {r.play}</span>
                  </div>
                  <div className="ns-review-meta">
                    <Stars n={r.stars} />
                  </div>
                  <p className="ns-review-text">“{r.text}”</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* S9 · 공유 카드 2종 — 아직 없는 기능은 "준비 중"으로 명시 */}
        <div className="ns-social">
          {social.map((c) => (
            <div className="ns-social-card" key={c.title}>
              <div className="ns-social-title">{c.title}</div>
              <div className="ns-social-desc">{c.desc}</div>
              <div className="ns-social-actions">
                <span className="ns-btn ns-btn-quiet ns-btn-disabled">
                  {c.action} <Soon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
