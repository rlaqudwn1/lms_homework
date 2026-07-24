"use client";

type Candidate = { id:string; title:string; genre:string; fit:number };
type Island = {
  cat:string; p:number; cx:number; cy:number; r:number; seed:number;
  frontier?:boolean; candidateIndex?:number;
};

const ISLANDS:Island[] = [
  {cat:"RPG",p:.95,cx:120,cy:122,r:52,seed:1.1,candidateIndex:2},
  {cat:"어드벤처",p:.72,cx:252,cy:92,r:41,seed:2.3,candidateIndex:1},
  {cat:"전략",p:.45,cx:392,cy:112,r:40,seed:3.7,candidateIndex:0},
  {cat:"퍼즐",p:.38,cx:512,cy:98,r:30,seed:4.2},
  {cat:"액션",p:.30,cx:176,cy:250,r:45,seed:5.5},
  {cat:"레이싱",p:.22,cx:302,cy:228,r:33,seed:6.1},
  {cat:"시뮬레이션",p:.18,cx:432,cy:238,r:37,seed:7.9},
  {cat:"메트로배니아",p:0,cx:540,cy:212,r:30,seed:8.4,frontier:true},
  {cat:"로그라이크",p:.08,cx:112,cy:362,r:32,seed:9.2},
  {cat:"호러",p:.05,cx:252,cy:356,r:34,seed:10.6},
  {cat:"FPS·슈팅",p:0,cx:392,cy:352,r:36,seed:11.3},
  {cat:"대전격투",p:0,cx:516,cy:346,r:27,seed:12.8},
];
type State = "claim"|"explore"|"unchart";
const stateOf=(p:number):State=>p>=.6?"claim":p>=.1?"explore":"unchart";

function coast(cx:number,cy:number,r:number,seed:number){
  const count=18;
  const points=Array.from({length:count},(_,index)=>{
    const angle=index/count*Math.PI*2;
    const radius=r*(1+.17*Math.sin(angle*3+seed)+.10*Math.sin(angle*5+seed*2)+.06*Math.sin(angle*7+seed*.6));
    return [cx+radius*Math.cos(angle),cy+radius*Math.sin(angle)] as const;
  });
  let path=`M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
  for(let index=0;index<count;index+=1){
    const p0=points[(index-1+count)%count],p1=points[index],p2=points[(index+1)%count],p3=points[(index+2)%count];
    const c1x=p1[0]+(p2[0]-p0[0])/6,c1y=p1[1]+(p2[1]-p0[1])/6;
    const c2x=p2[0]-(p3[0]-p1[0])/6,c2y=p2[1]-(p3[1]-p1[1])/6;
    path+=`C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return `${path}Z`;
}

export function IdeaV3Atlas({
  candidates,activeId,onPreview,onOpen,
}:{
  candidates:readonly Candidate[];activeId:string;
  onPreview:(id:string)=>void;onOpen:(id:string)=>void;
}){
  return <div className="idea-v3-wrap">
    <svg className="idea-v3-map charted" viewBox="0 0 600 440" role="group" aria-label="idea v3의 12개 장르 섬 탐험 해도">
      <g className="idea-v3-grat">
        {[100,200,300,400,500].map(x=><line key={`x${x}`} x1={x} y1="0" x2={x} y2="440"/>)}
        {[100,200,300,400].map(y=><line key={`y${y}`} x1="0" y1={y} x2="600" y2={y}/>)}
      </g>
      {ISLANDS.map((island,index)=>{
        const state=stateOf(island.p);
        const candidate=island.candidateIndex===undefined?undefined:candidates[island.candidateIndex];
        const active=candidate?.id===activeId;
        return <g key={island.cat}
          className={`idea-v3-island ${state}${active?" active":""}`}
          style={{transitionDelay:`${index*70}ms`}}
          tabIndex={candidate?0:-1} role={candidate?"button":undefined}
          aria-label={candidate?`${island.cat} · ${candidate.title} 추천`:`${island.cat} · ${state}`}
          onMouseMove={event=>{if(candidate&&(event.movementX||event.movementY))onPreview(candidate.id)}}
          onFocus={()=>candidate&&onPreview(candidate.id)}
          onClick={()=>candidate&&onOpen(candidate.id)}
          onKeyDown={event=>{if(candidate&&(event.key==="Enter"||event.key===" ")){event.preventDefault();onOpen(candidate.id)}}}>
          <path className="idea-v3-coast" d={coast(island.cx,island.cy,island.r,island.seed)}/>
          {state==="claim"&&<>
            <path className="idea-v3-contour" d={coast(island.cx,island.cy,island.r*.66,island.seed)}/>
            <path className="idea-v3-contour faint" d={coast(island.cx,island.cy,island.r*.4,island.seed)}/>
          </>}
          {state==="explore"&&<path className="idea-v3-contour" d={coast(island.cx,island.cy,island.r*.58,island.seed)}/>}
          <circle className="idea-v3-hit" cx={island.cx} cy={island.cy} r={island.r+4}/>
          <text x={island.cx} y={island.cy+island.r+15} textAnchor="middle" className="idea-v3-label">{island.cat}</text>
        </g>;
      })}
      {ISLANDS.filter(island=>island.frontier).map(island=><g key={island.cat} className="idea-v3-frontier" aria-hidden="true">
        <circle cx={island.cx} cy={island.cy} r="9"/>
        <circle className="dot" cx={island.cx} cy={island.cy} r="3.2"/>
        <text x={island.cx} y={island.cy-island.r-8} textAnchor="middle">▲ 다음</text>
      </g>)}
      <g className="idea-v3-compass" aria-hidden="true">
        <line x1="300" y1="300" x2="300" y2="280"/><line x1="300" y1="300" x2="320" y2="300"/>
        <line x1="300" y1="300" x2="300" y2="320"/><line x1="300" y1="300" x2="280" y2="300"/>
        <text x="300" y="274">N</text><text x="328" y="304">E</text><text x="300" y="332">S</text><text x="272" y="304">W</text>
        <polygon points="300,291 306,300 300,309 294,300"/>
      </g>
    </svg>
    <div className="idea-v3-legend"><span><i className="claim"/>정복 (많이 플레이)</span><span><i className="explore"/>탐험 중</span><span><i className="unchart"/>미개척</span></div>
    <p>해안선 = 장르 · 채색 = 플레이타임 · 보유만으론 뭍이 되지 않는다</p>
  </div>;
}
