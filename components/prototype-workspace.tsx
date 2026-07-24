"use client";

import { useRef, useState } from "react";
import { prototypeProfiles } from "@/lib/prototype";
import { IdeaV3Atlas } from "@/components/idea-v3-atlas";

type Profile = (typeof prototypeProfiles)[number];
type Candidate = Profile["candidates"][number];

const stateLabels = {
  established: "정복",
  exploring: "탐험 중",
  unexplored: "미개척",
} as const;

function CoverArt({ candidate, landscape = false }: { candidate: Candidate; landscape?: boolean }) {
  return (
    <div
      className={`origin-cover cover-${candidate.coverKey} ${landscape ? "is-landscape" : ""}`}
      role="img"
      aria-label={candidate.media.alt}
      data-fallback={candidate.media.fallbackLabel}
    >
      <img
        src={landscape ? candidate.media.headerUrl : candidate.media.portraitUrl}
        alt={candidate.media.alt}
        onError={(event) => { event.currentTarget.hidden = true; }}
      />
      <svg viewBox={landscape ? "0 0 320 160" : "0 0 160 220"} aria-hidden="true">
        <path className="cover-frame" d={landscape ? "M12 12h296v136H12z" : "M12 12h136v196H12z"} />
        {candidate.coverKey === "passage" ? (
          <><circle cx={landscape ? 235 : 111} cy="58" r="27" /><path d={landscape ? "M20 135 95 70l48 38 55-76 102 103" : "M18 166 58 102l27 32 27-57 34 89"} /></>
        ) : candidate.coverKey === "orbit" ? (
          <><circle cx={landscape ? 160 : 80} cy="76" r="43" /><ellipse cx={landscape ? 160 : 80} cy="76" rx="70" ry="24" /><circle cx={landscape ? 215 : 121} cy="42" r="8" /></>
        ) : candidate.coverKey === "paper" ? (
          <path d={landscape ? "M28 137 85 54l55 49 45-71 105 105M85 54l55-25 45 3" : "m24 172 28-74 27 25 24-48 33 97M52 98l27-19 24-4"} />
        ) : candidate.coverKey === "stealth" ? (
          <path d={landscape ? "M30 25h260v110H30zM30 80h260M160 25v110M45 125 270 35" : "M24 44h112v132H24zM24 93h112M80 44v132M32 164l96-108"} />
        ) : candidate.coverKey === "glass" ? (
          <path d={landscape ? "m160 18 75 48-32 70h-86L85 66ZM160 18l-12 68 55 50M148 86l-31 50" : "m80 27 49 45-19 101-30 25-30-25L31 72ZM80 27l-8 62 38 84M72 89l-22 84"} />
        ) : (
          <><circle cx={landscape ? 160 : 80} cy="80" r="51" /><circle cx={landscape ? 160 : 80} cy="80" r="31" /><path d={landscape ? "M160 20v120M100 80h120M125 45l70 70M195 45l-70 70" : "M80 25v134M13 92h134M45 57l70 70M115 57l-70 70"} /></>
        )}
      </svg>
      <small>STEAM PUBLIC COVER</small>
      <span>{candidate.genre}</span>
      <strong>{candidate.title}</strong>
    </div>
  );
}

function PixelAtlas({
  profile,
  activeId,
  onPreview,
  onOpen,
}: {
  profile: Profile;
  activeId: string;
  onPreview: (id: string) => void;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="origin-atlas">
      <IdeaV3Atlas candidates={profile.candidates} activeId={activeId} onPreview={onPreview} onOpen={onOpen} />
      <div className="atlas-game-controls" aria-label="아틀라스 게임 후보">
        {profile.candidates.map((candidate, index) => (
          <button
            key={candidate.id}
            type="button"
            className={activeId === candidate.id ? "is-active" : ""}
            aria-pressed={activeId === candidate.id}
            onMouseEnter={() => onPreview(candidate.id)}
            onFocus={() => onPreview(candidate.id)}
            onClick={() => onOpen(candidate.id)}
          >
            <i>0{index + 1}</i>
            <span><strong>{candidate.title}</strong>{candidate.genre} · {candidate.fit}점</span>
          </button>
        ))}
      </div>
      <p className="atlas-legend">■ 정복 · ▦ 탐험 중 · □ 미개척 · 후보를 누르면 같은 게임의 근거가 열립니다.</p>
    </div>
  );
}

export function PrototypeWorkspace() {
  const [profileId, setProfileId] = useState(prototypeProfiles[0].id);
  const profile = prototypeProfiles.find(({ id }) => id === profileId) ?? prototypeProfiles[0];
  const [activeId, setActiveId] = useState(profile.candidates[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement>(null);
  const receiptRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);
  const active = profile.candidates.find(({ id }) => id === activeId) ?? profile.candidates[0];
  const selected = profile.candidates.find(({ id }) => id === selectedId);

  const focusSection = (target: HTMLElement | null) => {
    requestAnimationFrame(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      target?.focus({ preventScroll: true });
    });
  };
  const switchProfile = (id: string) => {
    const next = prototypeProfiles.find((item) => item.id === id) ?? prototypeProfiles[0];
    setProfileId(id);
    setActiveId(next.candidates[0].id);
    setSelectedId(null);
  };
  const openDetail = (id: string) => {
    setActiveId(id);
    focusSection(detailRef.current);
  };
  const chooseCandidate = (id: string) => {
    setActiveId(id);
    setSelectedId(id);
    focusSection(receiptRef.current);
  };

  return (
    <main className="origin-shell">
      <aside className="origin-demo" role="note"><b>●</b><strong>수업용 콘셉트 데모입니다.</strong> 게임 커버는 Steam 공개 CDN, 개인 취향 신호는 예시 데이터입니다.</aside>
      <header className="origin-nav">
        <a href="/" className="origin-brand"><i aria-hidden="true" /> NEXT SAVE</a>
        <nav aria-label="페이지 섹션"><a href="#how">작동법</a><a href="#atlas">내 아틀라스</a><a href="#community">커뮤니티</a></nav>
      </header>

      <section className="origin-hero">
        <div className="origin-hero-copy">
          <p className="origin-eyebrow">STEAM URL 하나면 끝 · PRODUCT DEMO</p>
          <h1>사놓고 안 한 게임 수백 개,<br /><em>오늘 밤 켤 한 판까지.</em></h1>
          <p>라이브러리가 지도로 뜨고, 다음에 뭘 켤지 이유까지 짚어주는 NEXT SAVE의 제품 여정입니다.</p>
          <div className="origin-profile-buttons" aria-label="예시 프로필 선택">
            {prototypeProfiles.map((item) => <button key={item.id} type="button" aria-pressed={item.id === profile.id} onClick={() => switchProfile(item.id)}><strong>{item.label}</strong><span>{item.core} · {item.confidence}%</span></button>)}
          </div>
          <a className="origin-primary" href="#atlas">내 라이브러리 지도 보기</a>
          <small>게임 커버는 공개 Steam CDN에서 불러오며, 개인 Steam 계정 데이터는 전송하지 않습니다.</small>
        </div>
        <div className="origin-hero-map">
          <PixelAtlas profile={profile} activeId={active.id} onPreview={setActiveId} onOpen={openDetail} />
          <p>취향 아틀라스 · 예시 미리보기</p>
        </div>
      </section>

      <div className="origin-profile-strip"><span>예시 프로필</span><b>{profile.label}</b><span>밝은 장르 {profile.atlas.regions.filter((region) => region.state !== "unexplored").length} / {profile.atlas.regions.length}</span><span>코어 {profile.core}</span></div>

      <section id="how" className="origin-how">
        <p className="origin-eyebrow">작동법</p>
        <h2>링크 하나면 돼요. 가입도 설치도 없어요.</h2>
        <div><article><b>01</b><h3>예시 프로필 선택</h3><p>실제 계정 대신 두 개의 공개 가능한 fixture로 시작합니다.</p></article><article><b>02</b><h3>라이브러리를 지도로</h3><p>장르와 플레이 신호를 대륙과 탐험 상태로 바꿉니다.</p></article><article><b>03</b><h3>지도 보고 다음 한 판</h3><p>정확히 세 게임만 남기고 선택 이유를 같은 화면에서 보여줍니다.</p></article></div>
      </section>

      <section id="atlas" className="origin-atlas-section">
        <header><p className="origin-eyebrow">이게 나네요 · 다음 한 수까지</p><h2>내 라이브러리를 대륙으로 그렸어요.</h2><p>장르가 땅이고, 기록이 탐험 상태예요. 지도에서 하나를 누르면 오른쪽에 같은 게임의 근거가 뜹니다.</p></header>
        <div className="origin-atlas-stage">
          <PixelAtlas profile={profile} activeId={active.id} onPreview={setActiveId} onOpen={openDetail} />
          <article className="origin-active-card">
            <CoverArt candidate={active} landscape />
            <p className="origin-eyebrow">▲ 다음 개척지</p>
            <h3>{active.title}</h3>
            <p>{active.why}</p>
            <div className="signal-chips">{active.signalIds.map((id) => { const signal = profile.signals.find((item) => item.id === id); return <span key={id}>{signal?.label}: {signal?.value}</span>; })}</div>
            <button type="button" onClick={() => openDetail(active.id)}>상세 근거 보기 →</button>
          </article>
        </div>
        <div className="origin-region-ledger">{profile.atlas.regions.map((region, index) => <div key={region.label}><b>0{index + 1}</b><span>{region.label}<small>{stateLabels[region.state]}</small></span><i><em style={{ width: `${region.value}%` }} /></i></div>)}</div>
      </section>

      <section ref={detailRef} tabIndex={-1} className="origin-detail" aria-labelledby="prototype-picks-title">
        <header><p className="origin-eyebrow">GAME DETAIL</p><h2 id="prototype-picks-title">{active.title}</h2><p>공개 게임 정보와 예시 기록 기반 해석을 분리해 보여드립니다.</p></header>
        <div className="origin-detail-body">
          <CoverArt candidate={active} />
          <section><h3>게임 정보</h3><small>PUBLIC GAME CATALOGUE · STEAM COVER</small><dl>{active.detail.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></section>
          <section><h3>{active.detail.personalInterpretation.label}</h3><p>{active.detail.personalInterpretation.summary}</p><div className="signal-chips">{active.detail.personalInterpretation.signalIds.map((id) => { const signal = profile.signals.find((item) => item.id === id); return <span key={id}>{signal?.label}: {signal?.value}</span>; })}</div><button type="button" onClick={() => chooseCandidate(active.id)}>이 게임으로 오늘을 정할게요</button></section>
        </div>
        <div className="prototype-cards">{profile.candidates.map((candidate, index) => <button key={candidate.id} type="button" className={active.id === candidate.id ? "is-active" : ""} onClick={() => openDetail(candidate.id)} aria-pressed={active.id === candidate.id}><b>0{index + 1}</b><CoverArt candidate={candidate} /><span><strong>{candidate.title}</strong>{candidate.fit}/100 · {candidate.session}</span></button>)}</div>
      </section>

      <section ref={receiptRef} tabIndex={-1} className={`selection-receipt ${selected ? "is-visible" : ""}`} aria-live="polite" aria-labelledby="receipt-title">
        <div><p className="origin-eyebrow">DECIDED</p><h2 id="receipt-title">{selected ? `좋아요, 오늘의 선택은 ${selected.title}` : "게임 하나를 선택해 주세요"}</h2></div>
        {selected ? <><p><b>왜 이 선택인가요?</b>{selected.why}</p><dl><div><dt>예상 세션</dt><dd>{selected.session}</dd></div><div><dt>취향 적합도</dt><dd>{selected.fit}/100</dd></div><div><dt>데이터 경계</dt><dd>공개 게임 정보 + 예시 취향 신호</dd></div></dl><div className="receipt-actions"><button type="button" onClick={() => focusSection(detailRef.current)}>← 다른 후보</button><button type="button" onClick={() => focusSection(communityRef.current)}>{selected.title} 커뮤니티 보기 →</button></div></> : <p>아틀라스의 세 후보 중 하나를 고르면 선택 근거가 여기에 남습니다.</p>}
      </section>

      <section id="community" ref={communityRef} tabIndex={-1} className="origin-community" aria-labelledby="community-title">
        <p className="origin-eyebrow">전체 게임 · 커뮤니티 비전</p>
        <h2 id="community-title">{selected ? `${selected.title}의 예시 커뮤니티` : "지금 다들 뭘 켜고 있을까요."}</h2>
        <p>공개 게임 커버와 예시 리뷰로, 선택한 같은 게임에서 이어질 제품 흐름을 보여줍니다.</p>
        <div className="origin-trending">{profile.candidates.map((candidate) => <article key={candidate.id}><CoverArt candidate={candidate} landscape /><h3>{candidate.title}</h3><p>{candidate.genre} · {candidate.session}</p></article>)}</div>
        {selected ? <article className="fixture-review"><strong>{selected.community.reviews[0].fixtureLabel}</strong><blockquote>“{selected.community.reviews[0].quote}”</blockquote><small>작성·좋아요·댓글 기능 없음</small></article> : null}
        <div className="locked-capabilities">{(selected ?? active).community.capabilities.map((capability) => <article key={capability.id}><small>COMING SOON</small><h3>{capability.label}</h3><p>{capability.id === "similar-taste" ? "매칭 기준과 사용자 밀도가 확인된 뒤 열립니다." : "스냅샷 수요와 이미지 권리가 승인된 뒤 열립니다."}</p><button type="button" disabled>준비 중</button></article>)}</div>
      </section>

      <footer className="origin-footer"><a href="/" className="origin-brand"><i aria-hidden="true" /> NEXT SAVE</a><p>취향 아틀라스 콘셉트 데모 · 공개 Steam 게임 커버 사용 · 개인 계정 조회 없음</p></footer>
    </main>
  );
}
