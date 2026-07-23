# brief.md — 003 · NEXT SAVE (A의 원본 · 최소 A 패킷)

> ADR-0002 소급 적용(2026-07-09). 이 실험은 원래 **B-first**로 진행됐다 — 결정 근거가 대부분 "backloggd가 이렇게 했다"(레퍼런스)거나 "사용자가 렌더 보고 싫다"(시각 피드백)였고, 유저 니즈(A)는 `design-needs.md`에서 전부 "기획이 정할 것"으로 밀렸다. 이 문서는 그 A를 **외부 흔적 삼각측량으로 사후 복원**한 것이다. 화면에서 역추론한 게 아니라(=워크플로우가 빠졌던 함정), 실제 게이머 육성과 경쟁 포지셔닝에서 끌어왔다.
>
> ⚠ 실사용자 인터뷰·리서치 예산 없음(1인 실험실). 그래서 이건 **삼각측량 하한선**이지 확증이 아니다. 신뢰도 라벨을 항목마다 붙인다.

---

## 1. Job/task 문장

> **"내 라이브러리에 안 깐 게임이 수백 개 쌓였는데, 오늘 밤 뭘 실제로 시작할지 못 정하겠다 — 스크롤만 하다 결국 늘 하던 걸 켜거나 유튜브를 본다. '이거다' 하고 한 판 골라 시작하고 싶다."**

- 1차 고통은 **결정(decision)**이다 — "수백 개 중 오늘 밤 뭘?"의 마비. (죄책감/정신적 부담은 부수적 텍스처일 뿐 이 제품이 노리는 코어 아님 — 사용자 판정 2026-07-09.)
- 핵심 동사는 **"고르기(decide)"에서 "시작하기(start & stick)"로** 이어진다. 포럼 유저들은 몇 개 골라 몇 시간 하다 3-5시간 안에 바운스오프하고 또 다른 걸 찾는다 → 진짜 과업은 *"한 판 고르기"가 아니라 "붙잡을 한 판 고르기"*. 여기서 NEXT SAVE의 차별화(**근거 붙은 추천 = "왜 이게 너를 붙잡을까"**)가 A와 맞물린다. `[신뢰도: 높음 — 포럼 다수 육성 일치]`

## 2. 단계별 필요 (task steps, ≥3)

과업을 밟는 순간마다 무엇이 필요한가:

1. **직면 순간** — 라이브러리를 열고 "수백 개"에 압도된다. 필요 = **압도를 줄여줄 것**(전체 리스트를 또 던지지 말 것). 경쟁사 표현: StackPop *"Getting past the scroll is the part nothing else solves"*, SavePoint *"No scrolling through 63 backlog games"*. `[높음]`
2. **결정 순간** — "오늘 밤 이 시간/기분/기기로 뭐?" 필요 = **소수의 후보 + 각각 왜**(리스트가 아니라 결정). 결정 변수 = 가용시간·기분·플랫폼(경쟁사가 수렴한 3축) + "이게 나를 붙잡을까". `[중간 — 변수는 vendor 수렴, 유저는 "how do you decide" 스레드로 육성]`
3. **착수·지속 순간** — 켠 게임이 3-5시간 안에 안 붙으면 버리고 악순환 복귀. 필요 = **"이건 네가 X 때문에 붙을 것"이라는 근거**로 착수 확신 + 바운스오프 방어. `[중간-높음 — 바운스오프는 포럼 육성(Devilgunman), 근거로 방어된다는 건 가설]`
4. **(2차) 회고·정체성 순간** — 내가 뭘·얼마나 했는지를 숫자로 확인하고 남에게 보이고 싶다(Wrapped/Year-in-Gaming 관습). 필요 = **공유 가능한 정체성 카드**. `[낮음-중간 — 관습적 수요는 있으나(Steam Replay 인기), 이 실험에선 B-led로 과대평가된 슬롯. §감사 참조]`

## 3. A 근거 로그 (삼각측량: 공개 흔적 2종 + 경쟁 화면 1종 + 본인 프록시)

### 흔적 A — 포럼 유저 육성 (가장 강한 증거)
실제 게이머가 자기 말로 고통을 증언. 결정 마비·죄책감·바운스오프가 **유저-voiced**로 확인됨:
- **Famiboards, "Decision Paralysis when deciding what to play next"** (Kasur1309, 2024): *"All in the search for the next game that hooks me fully... after I close the game I end again up in the almost toxic circle of checking sales for games or Googleing about even more games. Always searching for something else."*
- **ResetEra, "Backlog Era — saving good games to play later instead of just playing them"** (AviAvi, 2025): *"backlog of HUNDREDS of unplayed games... I looked at the number just now and my eyes bugged out."*
- **Famiboards, "How do you mentally cope with a backlog?"** (BJJer, 2025): *"extremely busy... dependents, a career, a daily commute... The concept of a backlog really weighs me down mentally and impacts what I want to play and what I want to purchase."* → **시간-빈곤 성인 게이머** 페르소나 확증.
- **ResetEra, "keep bouncing off games after few hours"** (Devilgunman, 2022): *"if it doesn't hook me up in 3-5 hrs then I'll just uninstall it and move on."* → 과업이 "고르기"가 아니라 "붙잡을 것 고르기"임을 증언.
- (약한 신호) **ResetEra, Valcrist (2022):** 사고 안 함 — 동기/우울 축. 일부 유저는 도구가 아니라 심리 문제 → NEXT SAVE 범위 밖.

### 흔적 B — 경쟁 포지셔닝 (수요의 방향, 단 vendor-voiced)
동일 시장 제품들이 **거의 같은 언어로 이 job을 정식화** → 시장이 이 문제를 인지. 단 이건 파는 쪽 말이라 "해법 형태(3-pick 엔진)"까지 유저 검증된 건 아님:
- **SavePoint** (직접 경쟁): *"The backlog is a burden" · "Decisions, not lists" · Decision Engine(mood/time/platform로 3개) · Backlog Score(안 깐 게임에 묶인 돈) · Year in Gaming(공유 카드).* 명시 대조: *"instead of dumping a list back in your lap."*
- **StackPop** (직접 경쟁): *"You own 200 games and play the same three... You scroll for fifteen minutes. Nothing jumps out... Cataloging is easy. Getting past the scroll is the part nothing else solves."* 추천 = *"each with a quick reason why"* (= NEXT SAVE의 근거 추천과 동일 착상).
- **Backloggd / HLTB / Grouvee** (로깅형 기존): 전부 **Decision Support: No**. Grouvee 포럼 유저 실제 요구는 리뷰·자동임포트·모바일앱 — **결정 지원이 아님**. → 기존 도구가 못 메우는 빈칸 = 결정 지원(빈칸은 진짜, 해법은 미검증).

### 흔적 C — 본인 프록시 (✅ 실행 2026-07-10)
레포 오너(Steam `rlaqudwn`, 표시명 "KBJ", 경기도) 자가 워크스루로 채움 = **1인 실험실의 유일한 실사용 프록시** → 삼각측량 4번째 다리 완성.

- **객관 앵커(공개 프로필):** 프로필 public, 배지에 **"Sharp-Eyed Stockpiler"**(Steam 세일 쟁여두기 배지, 218 XP) 보유 = 백로그 축적 성향의 외부 신호. (games 상세 탭은 프라이버시 게이트라 플레이타임 분포는 자동 회수 불가 → 자가 응답으로 대체.)
- **자가 판정 — brief 4개 A-주장에 1:1 워크스루:**

  | brief A-주장 | 오너 자가 응답 | 판정 |
  |---|---|---|
  | 백로그 규모 = 수백 개 압도 | **압도적(수백 개)** | ✅ 확증 |
  | 1차 고통 = 결정 마비("오늘 밤 뭘") | **자주 막힌다**(스크롤→늘 하던 것/유튜브) | ✅ 확증 |
  | 진짜 과업 = "붙잡을 한 판"(바운스오프 방어) | **그렇다, 전형적 패턴** | ✅ 확증 |
  | 페르소나 = 시간-빈곤 성인 | **시간이 부족하다** | ✅ 확증 |

- **정직 caveat (확증 편향):** 오너는 이 job을 노리고 제품을 만드는 사람 → self-proxy 확증은 독립 유저 증언보다 **약하다**(founder-market-fit 신호이자 동시에 편향원). 단 **다른 3개 다리(포럼 육성·경쟁 포지셔닝·로깅형 빈칸)와 독립적으로 같은 방향에 수렴** → 삼각측량 하한선은 넘긴다. A가 *뒤집는* 검증은 여전히 다음 브리프-first 실험 몫(§감사 예측과 동일).

**→ 삼각측량 상태: 완성** (흔적 A 포럼 · B 경쟁 · C 본인 프록시 = 4다리 전부 채움).

## 4. 트레이드오프 (각 결정에서 무엇을 포기했나)

- **결정지원 job에 집중 = 로깅/카탈로그 완성도는 포기.** 기존 시장(Backloggd)이 이미 잘함. NEXT SAVE는 "또 하나의 트래커"가 되면 죽음 — 차별화는 로깅이 아니라 **결정+근거**. (HANDOFF의 "해자" 판단과 일치)
- **"근거 붙은 추천"의 대가 = 진실성 부담.** 근거가 진짜 데이터(플레이시간·완주율·장르)에서 나와야 신뢰가 산다. 바넘 금지 규율(direction §0)이 이 트레이드오프의 방어선. 가짜 근거 = A를 배신.
- **정체성 카드(2차 A) 우선순위 = 결정 job에서 시선 분산 위험.** 아래 감사 참조.

## 5. 신뢰도 라벨 요약

| A 주장 | 신뢰도 | 근거 유형 |
|---|---|---|
| **결정 마비**(수백 개 중 오늘 밤 뭘)가 1차 고통 | **높음** | 포럼 다수 육성 |
| (부수) 죄책감/정신적 부담 — 코어 아님 | 참고만 | 일부 포럼 육성, but 제품 노림수 아님(사용자 판정) |
| 시간-빈곤 성인이 핵심 페르소나 | **높음** | 포럼 육성(BJJer 등) + 경쟁 페르소나 수렴 |
| "붙잡을 한 판" (바운스오프 방어)이 진짜 과업 | **중간-높음** | 고통은 육성, 근거-추천이 이를 푼다는 건 가설 |
| 결정 변수 = 시간·기분·플랫폼 | **중간** | vendor 수렴, 유저는 부분 육성 |
| 알고리즘 3-pick 엔진이 옳은 해법 형태 | **낮음-중간** | vendor-voiced. 빈칸은 진짜, 해법 검증 안 됨 |
| 공유 정체성 카드가 강한 수요 | **낮음-중간** | 관습(Wrapped) 존재, but B-led 과대평가 |

> **본인 프록시(2026-07-10) 반영:** 흔적 C가 위 표의 **고통·페르소나 4주장(1~4행 성격)을 자가 확증** — 단 오너=설계자 편향 감안이라 확신을 "높음↑"으로 올리진 않는다(수렴 재확인에 그침). 프록시가 **못 건드린 것**: 해법 형태 주장(**알고리즘 3-pick 엔진**·**공유 카드** = 6~7행)은 자가 워크스루 범위 밖 → **여전히 낮음-중간**. 즉 프록시는 "문제는 진짜"를 굳혔지 "해법이 옳다"를 검증하진 못했다.

---

## §감사 — 이 A가 003의 B 결정에 던지는 것 (direction.md 재검토용)

ADR-0002의 핵심 질문: **"direction.md의 시각 결정들은 A(유저 니즈)가 지휘한 것인가, 아니면 레퍼런스/취향(B)이 지휘하고 A는 사후 합리화인가?"**

1. **[A가 지지] iter-2의 히어로 피벗(정체성→백로그 유틸, "YOUR GAME BACKLOG, FINALLY MAKING SENSE")** — A가 강하게 지지. 유저 육성의 1차 고통은 **결정**이지 "내 정체성을 공유하고 싶다"가 아니다. `design-needs.md 결정1`(정체성 vs 유틸, 미해결로 남았던 것)의 **정답은 A상 유틸-우선(선택지 B)**. iter-2가 우연히 A와 맞은 것.

2. **[대체로 A와 정렬됨 — 렌더가 이미 이동] §5 시그니처 "발광하는 정체성 카드"** — 원래 B-led 결정(stats-fm 공유카드 + backloggd 커버발광의 미감 합성)이었고 A상 정체성 카드는 2차 수요다. **그러나 실제 렌더는 사용자 시각 직관으로 이미 A쪽으로 옮겨왔다**: iter-2에서 히어로 = "백로그 정리 보드"(결정 오브젝트)로 교체돼 정체성 카드는 **페이지 최우선에서 강등**됨(사용자 확인 2026-07-09), 발광도 제거 방향 확정. → **A가 새로 뒤집을 건 없고, 남은 건 문서 잔재뿐**: `direction.md §5` 텍스트가 아직 "정체성 카드"를 시그니처로 명명. 이건 렌더 실상에 맞게 "근거 붙은 결정 카드"로 갱신하면 끝. **핵심: A 리서치가 방향을 바꾼 게 아니라 사용자의 B-직관이 이미 A-건전했음을 확증했다.**

3. **[A 중립] 쿨 잉크 무대·단일 액센트·앰버 별** — 순수 미감(B) 결정. A는 여기 대해 할 말이 거의 없다(유저는 "차가운 네이비를 원한다"고 말한 적 없음). 이건 정당한 B 영역 — 역공학이 B-도구로서 최선을 낸 부분. 강등이지 폐기 아님(ADR-0002)의 실례.

4. **[A가 새로 요구] 바운스오프 방어를 페이지가 말하는가?** — A의 3단계(착수·지속)에서 나온 "이건 네가 X 때문에 붙을 것"을 현재 랜딩은 "근거 붙은 추천"으로 부분 담지만, **"안 붙으면?"의 안심**(skip/cooldown 류, StackPop이 파는 것)은 없다. A가 새로 드러낸 빈칸.

### Problem-aware 재생성 예측 (ADR-0002 kill-criteria 셀프체크)
①시그니처 정체성카드→결정카드, ②정체성/공유 블록 강등 — **둘 다 이미 렌더에 반영됨**(사용자 직관이 iter-2/4에서 먼저 했음). A가 net-new로 더하는 건 ③**바운스오프 안심 요소**(StackPop식 skip/cooldown 착상)와, ④"기획 몫"이던 `design-needs 결정1`을 **리서치로 확정**(추측이 아니라 근거로).
- **정직한 판정:** A 리서치는 이 실험에서 방향을 *뒤집지* 않았다 — 대체로 **확증**했다. 이건 kill-criteria("Problem-aware ≈ Visual-only → 합리화")에 *가깝게* 걸린다. 단 성격이 다르다: 여기 수렴은 "A언어로 B를 사후 정당화"가 아니라 **사용자의 B-직관이 애초에 A-건전**했기 때문. → A라인의 값 = "새 방향"이 아니라 **"직관이 옳았다는 확증 + 저신뢰였던 슬롯(정체성/공유)의 우선순위를 근거로 낮춤 + design-needs 공백 해소"**. 다음 브리프-first 실험(신PRD)에서 A가 *뒤집는* 사례가 나오는지가 진짜 검증.
