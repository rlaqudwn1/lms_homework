"use client";

import { FormEvent, useState } from "react";
import { AtlasTeaser } from "@/components/atlas-teaser";
import { CommunityPreview } from "@/components/community-preview";
import { demoProfiles, recommendations, sourceHeroCopy, validateSteamProfileUrl } from "@/lib/demo";

export function DemoExperience() {
  const [url, setUrl] = useState("");
  const [profileId, setProfileId] = useState(demoProfiles[1].id);
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const activeProfile = demoProfiles.find((profile) => profile.id === profileId) ?? demoProfiles[1];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateSteamProfileUrl(url);
    setError(validationError);
    setStarted(!validationError);
  }

  function reset() {
    setUrl("");
    setError(null);
    setStarted(false);
  }

  return (
    <section className="dashboard" aria-labelledby="demo-title">
      <div className="dashboard-grid">
        <section className="compact-intro">
          <p className="eyebrow">{sourceHeroCopy.eyebrow}</p>
          <h1 id="demo-title">사놓고 안 한 게임 수백 개,<br /><span>오늘 밤 켤 한 판까지.</span></h1>
          <p className="intro-copy">{sourceHeroCopy.description}</p>

          {!started ? (
            <form className="profile-form" onSubmit={submit} noValidate>
              <label htmlFor="steam-url">Steam 프로필 URL</label>
              <input id="steam-url" type="url" inputMode="url" value={url} onChange={(event) => { setUrl(event.target.value); setError(null); }} placeholder="https://steamcommunity.com/id/이름" aria-describedby={`url-help${error ? " url-error" : ""}`} aria-invalid={Boolean(error)} />
              {error && <p id="url-error" className="form-error" role="alert"><b aria-hidden="true">!</b>{error}</p>}
              <p id="url-help" className="form-help">예: steamcommunity.com/id/yourname</p>
              <button type="submit" disabled={Boolean(error)}>{sourceHeroCopy.cta}</button>
            </form>
          ) : (
            <div className="success-state" role="status" aria-live="polite">
              <p><span aria-hidden="true">✓</span><strong>steamcommunity.com/id/steady-explorer</strong></p>
              <small>{activeProfile.label} · 예시 프로필 불러옴</small>
              <button type="button" onClick={reset}>다른 프로필로 다시 그리기</button>
            </div>
          )}
        </section>

        <section className="recommendation-section" id="recommendations" aria-labelledby="recommendation-title">
          <header className="panel-heading"><div><p className="eyebrow">TONIGHT</p><h2 id="recommendation-title">오늘 밤 켤 한 판</h2></div><span>예시 추천 · 3</span></header>
          <div className="recommendation-list">
            {recommendations.map((game) => (
              <article className="recommendation-card" key={game.id}>
                <span className={`game-cover ${game.coverClass}`} aria-hidden="true">예시 커버</span>
                <div className="recommendation-copy"><header><h3>{game.title}</h3><span>{game.genre}</span></header><p>{game.reason}</p><div className="progress-row"><span><i style={{ width: `${game.progress}%` }} /></span><small>진행 {game.progress}%</small></div><em>{game.session}</em></div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-panel" aria-labelledby="profile-title">
          <h2 id="profile-title">예시 프로필로 미리 보기</h2>
          <div className="profile-switcher">
            {demoProfiles.map((profile) => (
              <button type="button" aria-pressed={profile.id === profileId} onClick={() => { setProfileId(profile.id); setStarted(false); }} key={profile.id}>
                <span aria-hidden="true" className={`profile-mark ${profile.id}`} /><span><strong>{profile.label}</strong><small>{profile.core} · {profile.confidence}%</small></span><em>예시</em>
              </button>
            ))}
          </div>
          <div className="core-summary"><header><h3>취향 코어</h3><span>예시 데이터</span></header><dl><div><dt>주력 biome</dt><dd>전략 · {activeProfile.core}</dd></div><div><dt>세션 길이</dt><dd>40–70분</dd></div><div><dt>미개척 비중</dt><dd>62%</dd></div><div><dt>마지막 활동</dt><dd>예시 · 이틀 전</dd></div></dl></div>
        </section>

        <section className="atlas-panel" id="atlas" aria-labelledby="atlas-title"><header className="atlas-title"><h2 id="atlas-title">내 라이브러리 대륙</h2><span>LAT 47.6°N · LON 12.9°E</span></header><AtlasTeaser /></section>
        <CommunityPreview profileId={profileId} />
      </div>
    </section>
  );
}
