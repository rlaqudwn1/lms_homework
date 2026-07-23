# 아키타입 코어 네이밍 조사 — 타이폴로지 연구 · 실서비스 사례 · 카토그래피 후보

> **정체:** 태스크 M4(O1 잔여) 산출물 — 소프트 코어 5종의 카토그래피 레지스터 이름 후보 조사.
> **날짜:** 2026-07-20
> **상태:** 조사 완료 · **확정 아님 — 비차단, v0는 임시명 유지.** 확정은 사람이 한다(빌드 게이트 밖 유보 항목).
> **전제:** 레지스터 = 카토그래피(지도학·탐험) ✅ 확정(2026-07-10 clarify) · 표면 카피 = 한국어 주 + 영문 포인트 · 톤 가드 = 5코어 동등 레지스터(우열·결핍 프레이밍 금지, 폭력 은유 금지).

---

## §1 플레이어 타이폴로지 연구 레퍼런스

| 체계 (연도) | 유형/요인명 | 레지스터 | 수용·시사점 | 출처 |
|---|---|---|---|---|
| **Bartle 4유형** (1996) | Achievers · Explorers · Socialisers · Killers — 카드 무늬 연상법(다이아=보물, 스페이드=파기, 하트=공감, 클럽=타격) | 행동 기술형 행위자 명사 + 기억 보조 장치 | [검증] 30년 유통된 원조. 카드 무늬라는 **연상 장치**가 기억·전파에 기여. 반면 "Killer" 명명은 이후 프레임워크들이 개명 대상으로 삼았고, 실무에서 예측력·어감 비판이 이어짐(아래 Hexad 참조). Bartle 본인도 2009년 회고에서 이 모델이 예상 밖으로 널리 퍼지며 문맥 밖 오남용이 생겼다고 기록. | [원문 PDF](https://markfloryan.github.io/gamedesign/readings/Bartle_1996.pdf) · [Wikipedia](https://en.wikipedia.org/wiki/Bartle_taxonomy_of_player_types) · [Bartle 2009 회고](https://mud.co.uk/richard/BeyondGameDesign09.pdf) · [실무 비판 예](https://www.gamedeveloper.com/design/bartle-player-types-revisited) |
| **Nick Yee 동기 모델** (2006) | 주요인 3 — Achievement · Social · Immersion (+ 하위 10: Advancement, Mechanics, Competition / Socializing, Relationship, Teamwork / Discovery, Role-Playing, Customization, Escapism) | 추상 심리 요인명(건조·학술) | [검증] 인용 2,800+회의 학술 표준. 단, **유형 "상자"가 아니라 연속 축** — 사람을 한 칸에 넣지 않는다. 소비자 표면용 이름은 아니었고, 표면화는 후속(Quantic Foundry)에서 이뤄짐. | [논문 PDF](https://nickyee.com/pubs/Yee%20-%20Motivations%20(2006).pdf) · [DOI](https://doi.org/10.1089/cpb.2006.9.772) |
| **Quantic Foundry Gamer Motivation Model** (2015~) | 12동기 6쌍 — Action(Destruction·Excitement) / Social(Competition·Community) / Mastery(Challenge·Strategy) / Achievement(Completion·Power) / Immersion(Fantasy·Story) / Creativity(Design·Discovery) | 행동·동기 명사(정밀·건조) | [검증] 125만+ 게이머가 참여한 **실서비스이기도 한 연구**. 공식 문서가 "낮은 점수 ≠ 선호가 약함"을 명시 — **스펙트럼 사상 + 동등 레지스터의 선례**로, NEXT SAVE의 소프트 코어(강도%)와 같은 사상. 다만 요인명 자체는 건조해 자기서술("나는 Completion이야")로는 덜 쓰임. | [모델 개요](https://quanticfoundry.com/gamer-motivation-model/) · [레퍼런스 PDF](https://quanticfoundry.com/wp-content/uploads/2019/04/Gamer-Motivation-Model-Reference.pdf) · [개발기](https://quanticfoundry.com/2015/07/20/how-we-developed-the-gamer-motivation-profile-v2/) · [Nick Yee 해설](https://medium.com/ironsource-levelup/a-closer-look-into-the-12-gamer-motivations-8d156ff0151a) |
| **BrainHex** (2011/2013) | Seeker · Survivor · Daredevil · Mastermind · Conqueror · Socialiser · Achiever (7 아키타입) | 신경생물 근거 + **페르소나형 행위자 명사**(신화·모험 어감) | [검증] 인용 335회. 추상 요인 대신 "사람 꼴"의 이름을 붙인 대표 사례 — 자기서술과 기억에 유리. 단, 후속 CHI 연구에서 심리측정 신뢰도 한계가 지적됨 → **측정의 질과 명명의 매력은 별개 축**이라는 교훈(이름이 좋아도 판정 근거는 따로 검증해야 함 = M1 트랙과 동일 원칙). | [Wikipedia](https://en.wikipedia.org/wiki/BrainHex) · [논문 DOI](https://doi.org/10.1016/j.entcom.2013.06.002) · [검증 연구](https://dl.acm.org/doi/10.1145/2851581.2892399) · [온라인 테스트](https://psytests.org/cyber/brhexen.html) |
| **Gamification User Types Hexad** (Marczewski 2012~) | Philanthropist · Socialiser · Free Spirit · Achiever · Player · Disruptor | 동기 기반 행위자 명사 — **Bartle의 긍정 재명명 계보** | [검증] Bartle을 기업·서비스 맥락에 맞게 확장하며 "Killer"를 Player/Disruptor 등으로 재명명. **경쟁·교란 성향도 비폭력 이름으로 표현 가능함을 보여준 확립된 계보** — 경쟁소셜형 명명의 직접 근거. 학술 척도(Tondello et al. 2016)로도 정식화. | [공식 사이트](https://hexad.gamified.uk/) · [Waterloo Games Institute](https://uwaterloo.ca/games-institute/news/marczewskis-gamification-user-types-20) · [척도 논문](https://uwspace.uwaterloo.ca/bitstreams/54b91a16-df62-4d69-b24c-d9ac55b38420/download) |

**§1 요지 — 연구 계보에서 배우는 명명 원칙 4가지**

1. **행위자 명사(agent noun)가 추상 요인명보다 표면에서 강하다.** Yee·Quantic Foundry의 요인명(Completion 등)은 정밀하지만 자기서술로 쓰이지 않고, BrainHex·Bartle의 "사람 꼴" 이름(Seeker, Explorer)은 기억되고 인용된다. [검증]
2. **유형은 상자가 아니라 스펙트럼으로 제시하는 것이 학술적으로도 서비스적으로도 정착된 방향.** Yee(연속 축)·Quantic Foundry("낮은 점수 ≠ 부족") 모두 — 소프트 코어(주 코어+강도%) 설계와 정합. [검증]
3. **부정·폭력 어감의 유형명은 반드시 개명 압력을 받는다.** Killer → Hexad의 Player/Disruptor. 경쟁 성향의 비폭력 명명은 이미 확립된 관행. [검증]
4. **연상 장치가 전파를 만든다.** Bartle의 카드 무늬처럼, 이름 묶음을 하나의 은유 체계로 묶으면 기억·공유가 쉬워진다 — NEXT SAVE에서는 아틀라스(지도) 은유가 그 역할. [가정: 아틀라스 은유의 전파 효과 자체는 미검증 — M5 $0 게이트에서 관찰 가능]

---

## §2 실서비스 명명 사례

| 서비스 | 명명 방식 | 공유 반응·시사점 | 출처 |
|---|---|---|---|
| **Spotify Wrapped — Listening Personality** (2022) | 4개 이진 축(Familiarity/Exploration · Timelessness/Newness · Loyalty/Variety · Commonality/Uniqueness) → **16유형 + 4글자 코드**(MBTI 문법). 이름은 "The Adventurer, Voyager, Nomad, Time Traveler, Deep Diver, Devotee, Specialist…" — **여행·탐험 은유가 다수** | [검증] 언론이 즉각 "별자리의 재발명"(Fast Company) · "음악 성격 테스트"(Engadget)로 명명 — MBTI/별자리 유비가 자기서술·SNS 공유를 견인. 설계자 공식 해설의 마감 문장: *"It's not a contest. You can't lose. There's no wrong way to listen to music, and these are 16 of the right ways."* — **동등 레지스터를 카피로 명시한 선례**(NEXT SAVE 톤 가드와 동일 원칙). | [엔지니어링 해설](https://engineering.atspotify.com/2023/1/whats-a-listening-personality) · [공식 발표](https://newsroom.spotify.com/2022-11-30/get-to-know-your-music-listening-personality-from-2022-wrapped/) · [16유형 전체](https://archive.thetab.com/uk/2022/11/30/spotify-wrapped-2022-music-personality-meaning-283996) · [Fast Company](https://www.fastcompany.com/90817606/spotify-wrapped-just-reinvented-zodiac-signs-for-music-addicts) · [Engadget](https://www.engadget.com/spotify-wrapped-2022-130037719.html) |
| **Steam Replay** (2022~) | 연간 통계 리캡(플레이 시간·게임 수·장르 분포) — **유형명 없음**, 공유 이미지 제공 | [검증] "Wrapped화" 흐름의 PC 대표지만 페르소나 레이어는 없음 — 통계 나열형. | [PCMag](https://www.pcmag.com/news/steam-replay-is-here-to-recap-your-year-in-pc-gaming) · [Engadget](https://www.engadget.com/gaming/pc/steam-replay-2025-is-here-to-recap-your-pc-gaming-habits-205430951.html) |
| **Xbox Year in Review** | 통계 + "Your Look" 개인화 — **유형명 없음** | [검증] 최다 플레이·도전과제 중심 스탯 리캡. | [Xbox Wire](https://news.xbox.com/en-us/2024/12/04/xbox-year-in-review-2024/) |
| **PlayStation Wrap-Up** (2021~, 2025 리뉴얼) | 통계 리캡 + 완료 보상(아바타) — **유형명 없음** | [검증] 언론이 "궁금하거나 자랑(flex)하고 싶은 사람용"으로 소개 — 공유 동기는 있으나 페르소나 없이 스탯 자랑에 머묾. | [PS Blog 2025](https://blog.playstation.com/2025/12/09/playstation-2025-wrap-up-launches-starting-today-explore-your-personalized-gaming-recap-for-2025/) · [Push Square](https://www.pushsquare.com/news/2022/01/playstation-wrap-up-2021-available-now-share-your-gaming-stats) |
| **서드파티 바이럴** (Icebergify · Instafest · Receiptify 등) | 유형명 대신 **강한 시각 은유 1장**(빙산·페스티벌 라인업·영수증)으로 취향을 렌더 | [검증: 언급] Mashable이 Wrapped 기사에서 "Icebergify와 Instafest에서 살아남은 당신"이라 쓸 정도로 선행 바이럴로 정착 — **은유 한 장짜리 이미지가 공유의 단위**라는 문법. 아틀라스 스냅샷(지도 한 장)과 같은 문법. | [Mashable](https://mashable.com/article/spotify-wrapped-2022-listening-personality) |
| **Quantic Foundry Gamer Motivation Profile** | 5분 설문 → 개인 동기 리포트(백분위 그래프) — 유형명 대신 동기 프로필 | [검증] 125만+ 참여. 건조한 요인명에도 리포트 공유가 일어나는 것은 **"남과 비교되는 나"라는 백분위 장치** 덕 — 이름과 별개로 상대 위치 표시가 공유 재료가 됨을 시사. | [프로필](https://quanticfoundry.com/gamer-motivation-model/) |

**§2 요지 — 서비스 사례에서 배우는 명명 원칙 3가지**

5. **플랫폼 공식 리캡(Steam·Xbox·PS)은 전부 유형명 없이 통계만 준다** — 게이밍에서 "성격 유형" 레이어는 아직 비어 있는 차별화 여백이고, Spotify가 음악에서 그 여백을 채워 공유 폭발을 만들었다. [검증]
6. **공유를 만드는 것은 이름 + 유비 문법이다.** Spotify 16유형은 이름 자체보다 "MBTI/별자리처럼 나를 한 단어로 말할 수 있다"는 문법이 공유를 견인. 이름은 그 문법에 올라탈 수 있게 **행위자 명사 + 일관된 은유 체계**여야 한다. [검증(정황): 언론 반응 기반]
7. **동등 레지스터는 이름만으로 완성되지 않고 카피로 못 박는다.** Spotify는 "틀린 청취법은 없다"를 공식 해설에 명시 — 아키타입 표면 카피에도 같은 장치(모든 코어가 유효한 탐험 방식이라는 한 줄)를 권장. [검증]

---

## §3 코어별 카토그래피 네이밍 후보

> 표기 = 한국어 주 + 영문 포인트. 각 후보에 계보(어느 레퍼런스에서 왔는지)와 정합 근거를 단다.
> 기존 자산: 구 2×2 그리드 명명 = 개척자 Explorer(넓+얕) · 지도제작자 Cartographer(넓+깊) · 정착자 Settler(좁+깊) · 산책자 Wanderer(좁+얕, 임시). 소프트 코어 5종은 축이 다르므로 **재사용하되 의미 이동을 명시**한다.

### 1. 완주자 — 시작한 게임의 도전과제 달성%가 높음

| 후보 | 계보 | 근거 |
|---|---|---|
| **종주자 Thru-hiker** ⭐ | BrainHex Achiever("100% completion" 추구)의 카토그래피 번역 | 등산 용어 '종주'(능선·트레일을 처음부터 끝까지 걷기) — "시작한 길은 끝까지 걷는다"가 신호 정의와 1:1. 한국어에서 백두대간 종주 등 성취·긍지의 어감으로 자연스럽고, Thru-hiker는 AT/PCT 하이킹 문화의 실존 용어라 영문 포인트도 살아 있음. |
| 측량사 Surveyor | Quantic Foundry 'Completion' 동기의 직업형 번역 | 측량사는 한 지역의 구석구석을 재고 기록해야 지도를 완성한다 = 도전과제를 전부 채우는 성향. 직업 레지스터라 약간 건조하나 지도학 정합은 최고. |
| 등정가 Summiteer | 등반 문화(정상 도달 = 완료) | 봉우리 정상 = 엔딩/100%. 다만 '정상'이 경쟁 어감과 겹쳐 경쟁소셜형과의 대비가 흐려질 수 있음. |

### 2. 잡식가 — 다장르 분산, 넓게 탐험

| 후보 | 계보 | 근거 |
|---|---|---|
| **항해자 Voyager** ⭐ | Spotify Voyager("musical globetrotter") 직계 | 아틀라스 지도의 단위가 '장르 대륙'이므로, 대륙과 대륙 사이를 건너다니는 원양 항해 은유가 신호 정의(다장르 분산)와 정확히 맞음. 공유 검증된 이름 계보. |
| 개척자 Explorer | Bartle Explorer + 구 그리드 넓+얕 재사용(연속성) | 목업 v3 자산 재사용 이점. 다만 Bartle의 Explorer는 '깊이 파는 발견'에 가까워 의미가 약간 어긋나고, 서비스 전체 톤이 이미 '탐험·개척'이라 개별 코어명으로는 변별력이 낮음. |
| 순회탐험가 Circumnavigator | 탐험사(세계일주 항해) | '한 바퀴 도는 사람' — 넓이를 가장 강하게 표현하나 한국어·영문 모두 길다. |

### 3. 수집가 — 보유 게임 많음, 백로그율 높음

> 중립 명명의 핵심 케이스: 백로그를 결핍이 아니라 **"아직 떠나지 않은 여정의 지도 서재"**로 프레이밍한다.

| 후보 | 계보 | 근거 |
|---|---|---|
| **지도제작자 Cartographer** ⭐ | 구 그리드 넓+깊 이름 재사용 + 서비스명(아틀라스)과 공명 | 지도제작자는 수많은 지도·해도를 모아 아틀라스로 엮는 사람 — 가 본 곳과 **갈 곳**의 지도를 모두 서재에 갖춘다. 백로그 = 미래 여정의 해도라는 긍정 전환이 이름 안에서 일어남. 단, 구 그리드(넓+깊)와 의미가 달라지므로 전파 시 주석 필요. |
| 아틀라스지기 Atlas Keeper | 신조(서고지기 문법) | 지도 서고를 지키는 사람 — 수집을 가장 직접적으로 표현. 신선하나 영문 포인트가 다소 설명적. |
| 해도수집가 Chart Collector | 항해 문화(해도 수집) | 직관적이지만 'Collector'가 내부 작업명과 동어반복이라 은유의 이득이 없음. |

### 4. 헌신형 — 단일 게임에 시간 집중

| 후보 | 계보 | 근거 |
|---|---|---|
| **정착자 Settler** ⭐ | 구 그리드 좁+깊 이름 재사용 + Spotify Devotee/Specialist의 카토그래피 번역 | 한 땅에 깊이 뿌리내려 그 땅의 사계절을 다 아는 사람 — 시간 집중 신호와 1:1. 목업 v3 연속성 이점이 가장 큼(의미 이동도 작음: 좁+깊 → 단일 게임 집중). |
| 심층탐사가 Deep Diver | Spotify Deep Diver 직계 | 한 세계를 수직으로 깊게 파고든다. 공유 검증된 이름이나 잠수 은유는 지도학보다 해양탐사 레지스터라 세트 일관성이 약간 떨어짐. |
| 등대지기 Lighthouse Keeper | 항해 문화(한 자리를 오래 지킴) | 서정적이고 스냅샷 아이콘화에 유리하나, '게임을 깊게 판다'는 능동성이 약함. |

### 5. 경쟁소셜형 — 멀티플레이·PvP 장르 비중 높음

> Slayer 레지스터는 경쟁사(Backlog Shuffle)가 선점(spec 001 Clarifications) + 폭력 은유 톤 가드 → **탐험사(探險史)의 경쟁 어휘**로 푼다. 탐험사에서 경쟁은 타격이 아니라 "먼저 도달하기"(아문센 vs 스콧의 극점 경쟁)이고, 원정은 혼자가 아니라 대원들과 함께 한다(소셜). Killer→Hexad 개명 계보(§1 원칙 3)의 직접 적용.

| 후보 | 계보 | 근거 |
|---|---|---|
| **원정대장 Expedition Captain** ⭐ | Hexad의 긍정 재명명 계보 + 탐험사 은유 | 대원들과 **함께**(소셜) 정상·극점 도달을 **겨루는**(경쟁) 원정대의 리더. 경쟁과 소셜을 한 단어에 담는 유일한 후보. 리더 어감이 자기서술 시 자부심 재료가 됨. |
| 깃발수 Flagbearer | 탐험사(정상에 깃발을 먼저 꽂기) + 팀 깃발(소셜) | 짧고 시각적 — 스냅샷 아이콘화에 가장 유리. 다만 '기수'와의 동음 혼동 여지. |
| 선봉대원 Vanguard | 원정대의 맨 앞 | 함께 나아가는 무리의 최전선. 단, vanguard는 군사 어원이 남아 있어 **톤 가드 정합 재검토 필요** — 후보로 두되 주의 표기. |

---

## §4 추천 1세트 + 판단 기준

### 추천 세트 (⭐ 후보 조합)

| 코어 | 한국어 주 | 영문 포인트 | 한 줄 컨셉 (표면 카피 씨앗) |
|---|---|---|---|
| 완주자 | **종주자** | Thru-hiker | 시작한 길은 끝까지 걷는다 |
| 잡식가 | **항해자** | Voyager | 대륙과 대륙 사이를 건넌다 |
| 수집가 | **지도제작자** | Cartographer | 아직 떠나지 않은 여정의 지도까지 서재에 모은다 |
| 헌신형 | **정착자** | Settler | 한 땅에 깊이 뿌리내려 그 땅의 사계절을 안다 |
| 경쟁소셜형 | **원정대장** | Expedition Captain | 대원들과 함께, 먼저 도달하기를 겨룬다 |

### 판단 기준 (이 세트를 고른 이유 — 조사 원칙 1~7의 적용)

1. **카토그래피 세계관 정합** — 다섯 이름 모두 지도·탐험사의 실존 어휘(종주·항해·지도제작·정착·원정). clarify 확정 조건 충족.
2. **동등 레지스터** — 다섯 모두 "자기 방식으로 탐험하는 사람"이며 어떤 이름도 결핍·과잉·우열을 암시하지 않음(§2 원칙 7: Spotify "틀린 청취법은 없다" 문법. 표면 카피에 "다섯 가지 모두 유효한 탐험 방식"류 한 줄 동반 권장).
3. **행위자 명사** — 전원 agent noun(§1 원칙 1). "나는 항해자 72%"처럼 강도%와 자연 결합.
4. **자산 연속성** — 지도제작자·정착자는 목업 v3 재사용(단, 구 그리드 축이 아니라 신 코어에 붙는다는 의미 이동을 전파 시 명시 — G1·X1에서).
5. **경쟁 코어의 비폭력 명명** — Killer 수용사·Hexad 계보 적용 + Slayer 선점 회피(§1 원칙 3). 원정대장은 경쟁(먼저 도달)과 소셜(대원들과 함께)을 한 단어로 묶음.
6. **세트 내 대비** — 길(종주자)·바다(항해자)·서재(지도제작자)·땅(정착자)·원정(원정대장)로 다섯 무대가 겹치지 않아, 아틀라스 스냅샷 한 장 안에서 시각적으로 구분 가능(§2 원칙: 은유 한 장 문법).

[가정] 이 세트의 공유욕 유발력은 미검증 — 판단 기준 2·6은 레퍼런스 정황 근거이며, 실측은 M5 $0 게이트 스냅샷 시안에 이름을 실어 관찰할 수 있다.

---

## §5 열린 항목

- **[미정] 산책자 Wanderer의 거취** — 소프트 코어 5종에는 구 좁+얕 슬롯의 대응 코어가 없음. v0 목업은 임시명 유지(비차단). ARC 표면 거취(X1)·spec 갱신(G1)에서 함께 정리.
- **[미정] 코어 5↔6 판정(M1) 연동** — 경쟁형↔협동소셜형이 분리될 경우 이름 1개 추가 필요. 예비안: 경쟁 = 깃발수 Flagbearer, 협동 = 원정대장 Expedition Captain으로 분할하면 본 세트에서 자연 파생 가능.
- **[미정] 영문 포인트 표기 형식** — "The Voyager"식 관사 여부, Thru-hiker 하이픈, Expedition Captain 2단어 허용 여부 등 카피 규칙은 design과 X 라운드에서 합의(ARC UI/UX 칸 = X1 소프트 코어 표시 형식과 함께).
- **[미정] 강도%·보조태그와 이름의 결합 문구** — "항해자 72% + 정착자 기미" 같은 표면 문장 설계는 X1 소속.
- **[가정] 이름 공유욕 실측** — M5 $0 공유 게이트 설계 시 스냅샷 시안에 후보명을 노출해 반응(자기서술 인용 여부)을 관찰하는 항목을 포함할 것을 제안.
- **[검증 필요 후속] 한국어 수용성** — 종주자·깃발수 등은 등산·기수 문화 어감에 기대는데, 게이머 표본에서의 수용도는 미조사. 필요 시 M5 게이트와 병합 가능.
