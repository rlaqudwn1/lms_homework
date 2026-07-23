"use client";

import { useRef, useState } from "react";
import { prototypeJourney, prototypeProfiles } from "@/lib/prototype";

const stateLabels={established:"자리 잡음",exploring:"탐색 중",unexplored:"미개척"} as const;

function TasteMap({profile}:{profile:(typeof prototypeProfiles)[number]}){
  return <div className="taste-map">
    <div className="map-reading"><strong>{profile.core}</strong><span>오른쪽일수록 익숙함 · 위쪽일수록 지금 끌림</span></div>
    <svg viewBox="0 0 800 430" role="img" aria-label={`${profile.atlas.summary} 세 후보의 위치도 함께 표시됩니다.`}>
      <defs>
        <linearGradient id="comfort-zone" x1="0" x2="1"><stop stopColor="#4fa89b" stopOpacity=".12"/><stop offset="1" stopColor="#4fa89b" stopOpacity=".34"/></linearGradient>
        <pattern id="map-grid" width="80" height="54" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 54" fill="none" stroke="#4a5468" strokeOpacity=".28"/></pattern>
        <pattern id="fog-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="10" stroke="#78808c" strokeOpacity=".34" strokeWidth="3"/></pattern>
      </defs>
      <rect x="72" y="34" width="680" height="330" fill="url(#map-grid)"/>
      <path d="M105 283 C142 232 186 230 213 181 C241 130 305 148 347 122 C397 91 443 143 480 126 C532 102 555 66 620 88 C681 109 721 146 700 199 C680 249 623 242 582 281 C536 325 478 291 421 305 C354 321 319 282 263 310 C206 338 145 325 105 283Z" fill="url(#comfort-zone)" stroke="#4fa89b" strokeWidth="2"/>
      <path d="M186 272 C258 236 302 215 388 221 S520 184 635 132" fill="none" stroke="#b6905f" strokeWidth="3" strokeDasharray="9 7"/>
      <text x="300" y="244" className="map-route-label">{profile.atlas.routeLabel}</text>
      <text x="132" y="275" className="map-zone-title">선호 영역</text>
      <text x="132" y="294" className="map-zone-note">반복 기록이 쌓인 안전한 선택</text>
      <path d="M548 248 C594 226 682 238 710 272 L702 332 L558 332Z" fill="url(#fog-hatch)" stroke="#6d7684" strokeDasharray="5 5"/>
      <text x="574" y="296" className="map-avoid-title">미개척 영역</text>
      <text x="574" y="314" className="map-zone-note">근거가 아직 부족함</text>
      {profile.atlas.landmarks.map((landmark)=>{
        const x=72+(landmark.x/100)*680; const y=34+((100-landmark.y)/100)*330;
        return <g key={landmark.label} className={`map-landmark is-${landmark.state}`}><path d={`M${x} ${y-8}l8 8-8 8-8-8Z`}/><text x={x+13} y={y+4}>{landmark.label}</text></g>;
      })}
      {profile.candidates.map((candidate,index)=>{
        const x=72+(candidate.mapPoint.x/100)*680;
        const y=34+((100-candidate.mapPoint.y)/100)*330;
        return <g key={candidate.id} className={`map-candidate map-candidate-${index+1}`}>
          <circle cx={x} cy={y} r="18"/><text x={x} y={y+4} textAnchor="middle">0{index+1}</text>
          <line x1={x+18} y1={y} x2={x+42} y2={y} />
          <text x={x+48} y={y-4} className="map-game-title">{candidate.title}</text>
          <text x={x+48} y={y+14} className="map-game-score">{candidate.fit}점 · {candidate.session}</text>
        </g>;
      })}
      <line x1="72" y1="364" x2="752" y2="364" className="map-axis"/><line x1="72" y1="364" x2="72" y2="34" className="map-axis"/>
      <text x="72" y="398" className="map-axis-label">낯섦</text><text x="718" y="398" className="map-axis-label">익숙함</text>
      <text x="23" y="352" className="map-axis-label">나중에</text><text x="23" y="50" className="map-axis-label">지금</text>
    </svg>
    <ol className="map-candidate-key">{profile.candidates.map((candidate,index)=><li key={candidate.id}><i>0{index+1}</i><span><strong>{candidate.title}</strong>{candidate.genre} · {candidate.fit}점</span></li>)}</ol>
  </div>;
}

function CoverArt({candidate}:{candidate:(typeof prototypeProfiles)[number]["candidates"][number]}){
  return <div className={`candidate-cover cover-${candidate.coverKey}`} role="img" aria-label={`${candidate.title}, ${candidate.coverTagline}. 자체 제작 가상 게임 커버`}>
    <svg viewBox="0 0 160 220" aria-hidden="true">
      <path className="cover-frame" d="M12 12h136v196H12z"/>
      {candidate.coverKey==="passage"?<><circle cx="111" cy="58" r="27"/><path d="M18 166 58 102l27 32 27-57 34 89M25 181c38-14 72-14 110 0"/></>:
       candidate.coverKey==="orbit"?<><circle cx="80" cy="89" r="43"/><ellipse cx="80" cy="89" rx="66" ry="24"/><circle cx="121" cy="50" r="8"/><path d="M31 174h98"/></>:
       candidate.coverKey==="paper"?<><path d="m24 172 28-74 27 25 24-48 33 97M52 98l27-19 24-4M36 188h88M80 26v53"/></>:
       candidate.coverKey==="stealth"?<><path d="M24 44h112v132H24zM24 93h112M80 44v132M32 164l96-108M46 119l22 22 50-58"/></>:
       candidate.coverKey==="glass"?<><path d="m80 27 49 45-19 101-30 25-30-25L31 72ZM80 27l-8 62 38 84M72 89l-22 84M72 89l57-17"/></>:
       <><circle cx="80" cy="92" r="51"/><circle cx="80" cy="92" r="31"/><path d="M80 25v134M13 92h134M45 57l70 70M115 57l-70 70M28 183h104"/></>}
    </svg>
    <small>{candidate.coverTagline}</small><span>{candidate.genre}</span><b>{candidate.title}</b>
  </div>;
}

export function PrototypeWorkspace(){
  const [profileId,setProfileId]=useState(prototypeProfiles[0].id);
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const [currentStep,setCurrentStep]=useState(1);
  const profileRef=useRef<HTMLElement>(null);
  const atlasRef=useRef<HTMLElement>(null);
  const candidatesRef=useRef<HTMLElement>(null);
  const receiptRef=useRef<HTMLElement>(null);
  const profile=prototypeProfiles.find(({id})=>id===profileId)??prototypeProfiles[0];
  const selected=profile.candidates.find(({id})=>id===selectedId);
  const refs=[profileRef,atlasRef,candidatesRef,receiptRef];
  const goToStep=(step:number)=>{
    setCurrentStep(step);
    requestAnimationFrame(()=>{
      const target=refs[step-1].current;
      target?.scrollIntoView({behavior:"smooth",block:"start"});
      target?.focus({preventScroll:true});
    });
  };
  const switchProfile=(id:string)=>{setProfileId(id);setSelectedId(null);setCurrentStep(1);};
  const chooseCandidate=(id:string)=>{setSelectedId(id);goToStep(4);};

  return <main className="prototype-shell">
    <header className="prototype-topbar"><a href="/" className="prototype-brand"><i aria-hidden="true"/> NEXT SAVE</a><div><span>DAY 7 · 결정 워크스페이스</span><strong>오늘 밤 뭐 켜지 → 4단계로 결정</strong></div></header>
    <aside className="prototype-disclosure" role="note"><strong>수업용 인터랙티브 목업</strong><span>가상의 fixture만 사용하며 Steam 조회·로그인·저장을 하지 않습니다.</span></aside>
    <nav className="journey-progress" aria-label="오늘의 게임 결정 단계"><ol>{prototypeJourney.map((step,index)=><li key={step.id} className={currentStep===index+1?"is-current":currentStep>index+1?"is-complete":""}><button type="button" onClick={()=>goToStep(index+1)} aria-current={currentStep===index+1?"step":undefined}><i>{currentStep>index+1?"✓":`0${index+1}`}</i><span>{step.eyebrow}<strong>{step.title}</strong></span></button></li>)}</ol></nav>
    <section ref={profileRef} tabIndex={-1} className={`prototype-profile-rail ${currentStep===1?"is-current":""}`} aria-labelledby="fixture-title">
      <div className="prototype-step-copy"><span>01</span><div><code>CHOOSE YOUR MODE</code><h1 id="fixture-title">{prototypeJourney[0].title}</h1><p>오늘의 나와 가까운 예시를 골라보세요. 정답은 없고, 언제든 바꿀 수 있어요.</p></div></div>
      <div className="prototype-profile-buttons">{prototypeProfiles.map(item=><button key={item.id} type="button" aria-pressed={item.id===profile.id} onClick={()=>switchProfile(item.id)}><span>{item.label}</span><small>{item.core} · {item.confidence}%</small></button>)}</div>
      <div className="prototype-core-strip"><div><small>BIOME</small><strong>{profile.core}</strong></div><div><small>SESSION</small><strong>{profile.signals[0].value}</strong></div><div><small>CONFIDENCE</small><strong>{profile.confidence}/100</strong></div><code>{profile.fixtureLabel}</code></div>
      <div className="journey-next"><p><strong>{profile.label}</strong>의 기록을 바탕으로 지도를 준비했어요.</p><button type="button" onClick={()=>goToStep(2)}>{profile.label}로 취향 지도 보기 <span aria-hidden="true">→</span></button></div>
    </section>
    <div className="prototype-grid">
      <section ref={atlasRef} tabIndex={-1} className={`prototype-atlas ${currentStep===2?"is-current":currentStep<2?"is-upcoming":""}`} aria-labelledby="prototype-atlas-title">
        <header><div><span>02 / MAKE SENSE OF IT</span><h2 id="prototype-atlas-title">{prototypeJourney[1].title}</h2><p>숫자를 외울 필요는 없어요. 지금 끌리는 방향과 익숙한 방향이 만나는 곳만 보면 돼요.</p></div><b>{profile.confidence}<small>/100</small></b></header>
        <TasteMap profile={profile}/>
        <div className="atlas-claude-legend">{profile.atlas.regions.map(region=><span key={region.label}><b>{region.value}</b>{region.label}<small>{stateLabels[region.state]}</small></span>)}</div><p className="atlas-summary">{profile.atlas.summary}</p>
        <p className="evidence-kicker">근거 3 · 이 코어를 만든 신호</p><ul className="prototype-evidence">{profile.evidence.map((item,index)=><li key={item}><span>0{index+1}</span><div><code>SIGNAL · {profile.signals[index].label}</code><p>{item}</p></div></li>)}</ul>
        <div className="journey-next"><p>이 해석이 오늘의 기분과 비슷하다면, 목록을 더 늘리지 않고 세 개만 보여드릴게요.</p><button type="button" onClick={()=>goToStep(3)}>{prototypeJourney[1].action} <span aria-hidden="true">→</span></button></div>
      </section>
      <section ref={candidatesRef} tabIndex={-1} className={`prototype-picks ${currentStep===3?"is-current":currentStep<3?"is-upcoming":""}`} aria-labelledby="prototype-picks-title">
        <header><div><span>03 / THREE IS ENOUGH</span><h2 id="prototype-picks-title">{prototypeJourney[2].title}</h2><p>{profile.label}의 기록과 오늘 가능한 시간을 함께 봤어요. 점수가 아니라, 지금 시작하기 쉬운 이유부터 읽어보세요.</p></div><b>3 ONLY</b></header>
        <div className="prototype-cards">{profile.candidates.map((candidate,index)=><article key={candidate.id} className={selectedId===candidate.id?"is-selected":""}><div className="candidate-rank">0{index+1}</div><CoverArt candidate={candidate}/><div className="candidate-body"><header><div><h3>{candidate.title}</h3><p>{candidate.status} · {candidate.session}</p></div><strong>{candidate.fit}<small>/100</small></strong></header><p className="candidate-callout">{index===0?"가장 자연스러운 선택":index===1?"조금 더 가벼운 선택":"새로운 쪽으로 한 걸음"}</p><p className="candidate-why">{candidate.why}</p><div className="signal-chips">{candidate.signalIds.map(id=>{const signal=profile.signals.find(item=>item.id===id);return <span key={id}>{signal?.label}: {signal?.value}</span>;})}</div><button type="button" onClick={()=>chooseCandidate(candidate.id)}>{selectedId===candidate.id?"✓ 오늘의 선택":"이 게임으로 정할게요"}</button></div></article>)}</div>
      </section>
    </div>
    <section ref={receiptRef} tabIndex={-1} className={`selection-receipt ${selected?"is-visible":""} ${currentStep===4?"is-current":currentStep<4?"is-upcoming":""}`} aria-live="polite" aria-labelledby="receipt-title"><div><span>04 / DECIDED</span><h2 id="receipt-title">{selected?`좋아요, 오늘의 선택은 ${selected.title}`:"선택하면 여기에서 한 번 더 확인해드릴게요"}</h2><strong>{selected?"오늘의 선택 완료":"후보 선택을 기다리는 중"}</strong></div>{selected?<><p><b>왜 이 선택인가요?</b>{selected.why} 지금 시작하면 약 {selected.session} 동안 즐길 수 있어요.</p><dl><div><dt>예상 세션</dt><dd>{selected.session}</dd></div><div><dt>취향 적합도</dt><dd>{selected.fit}/100</dd></div><div><dt>데이터 경계</dt><dd>fixture only</dd></div></dl><button className="journey-back" type="button" onClick={()=>goToStep(3)}>← 다른 후보 다시 보기</button></>:<p>위 세 후보 중 하나를 고르면, 선택한 이유와 예상 시간이 여기에 남아요. 새로고침 전까지만 유지됩니다.</p>}</section>
    <footer className="prototype-footer"><strong>FIXTURE ONLY</strong><p>모든 프로필·지도·후보·신뢰도·영수증은 미리 준비된 예시 데이터입니다. 실제 Steam 계정 조회·저장·공유는 없습니다.</p><span>NEXT SAVE · DAY 7 PROTOTYPE</span></footer>
  </main>;
}
