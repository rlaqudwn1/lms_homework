type PrototypeCandidateInput = {
  id:string; title:string; genre:string; session:string; fit:number; status:string;
  why:string; signalIds:string[]; mapPoint:{x:number;y:number};
  coverKey:"passage"|"orbit"|"paper"|"stealth"|"glass"|"protocol";
  coverTagline:string;
  steamAppId:number;
};
export type PrototypeCandidate = PrototypeCandidateInput & {
  media:{
    kind:"public-steam-cdn";
    portraitUrl:string;
    headerUrl:string;
    alt:string;
    fallbackLabel:string;
  };
  detail:{
    gameId:string;
    facts:{label:string;value:string;sourceStatus:"fixture-catalog"}[];
    personalInterpretation:{
      label:"내 기록 기반 해석";
      summary:string;
      signalIds:string[];
    };
  };
  community:{
    gameId:string;
    reviews:{id:string;gameId:string;quote:string;fixtureLabel:string}[];
    capabilities:{
      id:"similar-taste"|"atlas-share";
      label:string;
      status:"coming-soon";
      enabled:false;
    }[];
  };
};
export type PrototypeProfile = {
  id:string; label:string; core:string; confidence:number; fixtureLabel:string;
  signals:{ id:string; label:string; value:string }[]; evidence:string[];
  atlas:{ summary:string; routeLabel:string; landmarks:{label:string;state:"known"|"frontier"|"unknown";x:number;y:number}[]; regions:{ label:string; state:"established"|"exploring"|"unexplored"; value:number }[] };
  candidates:PrototypeCandidate[];
};

export const prototypeJourney = [
  { id:"profile", eyebrow:"먼저", title:"오늘 어떤 방식으로 고를까요?", action:"이 프로필로 취향 지도 보기" },
  { id:"atlas", eyebrow:"발견", title:"아틀라스에서 오늘의 방향을 찾기", action:"지도에서 게임 상세 보기" },
  { id:"detail", eyebrow:"확인", title:"게임 정보와 내 기록 해석을 나눠 보기", action:"이 게임으로 정할게요" },
  { id:"receipt", eyebrow:"결정", title:"오늘의 선택과 근거를 남기기", action:"같은 게임의 커뮤니티 보기" },
  { id:"community", eyebrow:"연결", title:"선택한 게임의 예시 커뮤니티", action:"비슷한 취향과 공유 예고 보기" },
  { id:"share", eyebrow:"다음", title:"비슷한 취향과 아틀라스 공유", action:"아틀라스로 돌아가기" },
] as const;

function createCandidate(candidate:PrototypeCandidateInput):PrototypeCandidate {
  return {
    ...candidate,
    media:{
      kind:"public-steam-cdn",
      portraitUrl:`https://cdn.cloudflare.steamstatic.com/steam/apps/${candidate.steamAppId}/library_600x900.jpg`,
      headerUrl:`https://cdn.cloudflare.steamstatic.com/steam/apps/${candidate.steamAppId}/header.jpg`,
      alt:`${candidate.title} 공식 Steam 커버`,
      fallbackLabel:`${candidate.title} 커버 이미지 준비 중`,
    },
    detail:{
      gameId:candidate.id,
      facts:[
        {label:"장르",value:candidate.genre,sourceStatus:"fixture-catalog"},
        {label:"예상 세션",value:candidate.session,sourceStatus:"fixture-catalog"},
        {label:"진행 예시",value:candidate.status,sourceStatus:"fixture-catalog"},
      ],
      personalInterpretation:{
        label:"내 기록 기반 해석",
        summary:candidate.why,
        signalIds:[...candidate.signalIds],
      },
    },
    community:{
      gameId:candidate.id,
      reviews:[
        {
          id:`${candidate.id}-review-example`,
          gameId:candidate.id,
          quote:`${candidate.genre}의 흐름을 차분히 이어 가는 점이 좋았어요.`,
          fixtureLabel:"예시 리뷰 · fixture",
        },
      ],
      capabilities:[
        {id:"similar-taste",label:"비슷한 취향의 플레이어",status:"coming-soon",enabled:false},
        {id:"atlas-share",label:"아틀라스 스냅샷 공유",status:"coming-soon",enabled:false},
      ],
    },
  };
}

export const prototypeProfiles: PrototypeProfile[] = [
  {
    id:"steady-explorer", label:"꾸준한 탐험가", core:"세계 탐험형", confidence:86,
    fixtureLabel:"FIXTURE A · 저장되지 않는 예시",
    signals:[
      { id:"long-session",label:"선호 세션",value:"45–70분" },
      { id:"story-return",label:"복귀 신호",value:"서사형 게임 재실행" },
      { id:"open-world",label:"강한 지역",value:"탐험 · 어드벤처" },
    ],
    evidence:["완료보다 천천히 다시 찾는 패턴이 강해요.","넓은 지역을 한 번에 45분 이상 탐색해요.","최근 서사형 게임으로 돌아온 fixture 기록이 있어요."],
    atlas:{ summary:"탐험과 서사가 맞닿은 대륙이 가장 넓고, 전략 지역은 아직 탐색 중이에요.", routeLabel:"다시 찾은 이야기 길",landmarks:[
      {label:"귀환 항구",state:"known",x:24,y:68},{label:"고요 능선",state:"frontier",x:48,y:48},{label:"미지의 관문",state:"unknown",x:82,y:30},
    ], regions:[
      { label:"탐험",state:"established",value:92 },{ label:"서사",state:"established",value:82 },
      { label:"전략",state:"exploring",value:48 },{ label:"액션",state:"unexplored",value:20 },
    ]},
    candidates:[
      createCandidate({ id:"hollow-knight",title:"Hollow Knight",genre:"메트로배니아",session:"60분",fit:94,status:"최근 복귀",why:"서사형 게임으로 돌아온 기록과 45–70분 탐험 세션이 함께 맞아요.",signalIds:["story-return","long-session"],mapPoint:{x:72,y:28},coverKey:"passage",coverTagline:"잊힌 왕국으로 돌아가는 길",steamAppId:367520 }),
      createCandidate({ id:"outer-wilds",title:"Outer Wilds",genre:"탐험",session:"45분",fit:88,status:"중간 지점",why:"탐험·어드벤처 지역의 강한 신호와 오늘 가능한 세션 길이가 겹쳐요.",signalIds:["open-world","long-session"],mapPoint:{x:60,y:52},coverKey:"orbit",coverTagline:"별빛을 따라 도는 작은 세계",steamAppId:753640 }),
      createCandidate({ id:"disco-elysium",title:"Disco Elysium",genre:"서사 RPG",session:"70분",fit:81,status:"첫 실행",why:"서사 복귀 신호와 넓은 지역을 천천히 보는 플레이 패턴을 반영했어요.",signalIds:["story-return","open-world"],mapPoint:{x:38,y:35},coverKey:"paper",coverTagline:"한 도시에서 이어지는 깊은 이야기",steamAppId:632470 }),
    ],
  },
  {
    id:"focused-tactician",label:"집중형 전술가",core:"전술 숙련형",confidence:81,
    fixtureLabel:"FIXTURE B · 저장되지 않는 예시",
    signals:[
      { id:"short-session",label:"선호 세션",value:"25–45분" },
      { id:"repeat-mastery",label:"반복 신호",value:"짧은 런 재도전" },
      { id:"strategy-core",label:"강한 지역",value:"전략 · 덱빌딩" },
    ],
    evidence:["짧은 세션에서 같은 규칙을 반복해 익혀요.","덱과 전술을 바꾼 뒤 바로 다시 시도해요.","최근 전략형 fixture 게임의 실행 간격이 짧아요."],
    atlas:{ summary:"전략과 덱빌딩 지역이 단단하게 연결되고, 긴 서사 지역은 아직 미개척이에요.", routeLabel:"숙련을 잇는 전술선",landmarks:[
      {label:"훈련 기지",state:"known",x:22,y:70},{label:"유리 협곡",state:"frontier",x:52,y:50},{label:"봉인 구역",state:"unknown",x:84,y:28},
    ], regions:[
      { label:"전략",state:"established",value:94 },{ label:"덱빌딩",state:"established",value:86 },
      { label:"잠입",state:"exploring",value:54 },{ label:"서사",state:"unexplored",value:18 },
    ]},
    candidates:[
      createCandidate({ id:"into-the-breach",title:"Into the Breach",genre:"전략",session:"40분",fit:96,status:"30% 남음",why:"전략·덱빌딩 코어와 25–45분 반복 세션이 가장 직접적으로 맞아요.",signalIds:["strategy-core","short-session"],mapPoint:{x:76,y:30},coverKey:"stealth",coverTagline:"격자 위에서 완성하는 작전",steamAppId:590380 }),
      createCandidate({ id:"balatro",title:"Balatro",genre:"덱빌딩",session:"30분",fit:91,status:"런 4회",why:"짧은 런을 다시 시도하는 기록과 덱빌딩의 강한 신호를 함께 반영했어요.",signalIds:["repeat-mastery","strategy-core"],mapPoint:{x:64,y:48},coverKey:"glass",coverTagline:"다시 섞을수록 선명해지는 한 장",steamAppId:2379780 }),
      createCandidate({ id:"hades",title:"Hades",genre:"액션 로그라이크",session:"35분",fit:85,status:"체크포인트",why:"반복 숙련 패턴과 오늘 가능한 짧은 세션 범위 안에 들어와요.",signalIds:["repeat-mastery","short-session"],mapPoint:{x:45,y:38},coverKey:"protocol",coverTagline:"탈출과 귀환을 잇는 다음 한 수",steamAppId:1145360 }),
    ],
  },
];
