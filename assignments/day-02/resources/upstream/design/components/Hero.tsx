/* S2 · 히어로 — 좌측 단일 컬럼(eyebrow·h1[glow]·sub·URL폼·trust-note).
   우측 정적 백로그 보드는 삭제(맵이 대신함). */
import { hero } from "../copy";
import { AtlasTeaser } from "../atlas";

export function Hero() {
  return (
    <section className="ns-hero">
      <div className="ns-shell ns-hero-grid">
        <div>
          <p className="ns-eyebrow ns-eyebrow-row">{hero.eyebrow}</p>
          <h1 className="ns-display ns-h1">
            {hero.h1lead}
            <span className="glow">{hero.h1glow}</span>
          </h1>
          <p className="ns-sub">{hero.sub}</p>
          <form className="ns-urlbar" action="#atlas" aria-label="Steam 백로그 읽기 (데모)">
            <input
              className="ns-input"
              type="url"
              inputMode="url"
              placeholder={hero.placeholder}
              aria-label="Steam 프로필 URL"
            />
            <button type="submit" className="ns-btn ns-btn-primary">
              {hero.cta}
            </button>
          </form>
          {/* 존대(합니다체) — 정직 메타-보이스 */}
          <p className="ns-trust-note">{hero.trustNote}</p>
        </div>
        <div className="ns-hero-teaser" aria-hidden="true">
          <div className="ns-hero-teaser-inner">
            <AtlasTeaser />
          </div>
          <p className="ns-hero-teaser-cap">취향 아틀라스 · 예시 미리보기</p>
        </div>
      </div>
    </section>
  );
}
