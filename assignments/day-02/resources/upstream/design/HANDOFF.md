# HANDOFF — 003 · NEXT SAVE 랜딩 (디자인 랩 실생산 실험)

> 🔴 **SUPERSEDED (2026-07-20).** 이 문서는 **v0.5 시대(2026-07-10)** 핸드오프로, 이후 `NEXT-SESSION.md`(v0.8)와 `direction.md` 리비전 v0.5~v0.9가 승계했다. 아래 §0~§7 = **역사 보존**(초기 맥락·CDP 캡처 절차·구 레퍼런스 세트). **현행 기준 = `direction.md`(결정 장부, 최신 = v0.9) + `NEXT-SESSION.md`(롤링 핸드오프).** 지금 이어받는 세션은 그 둘부터 읽어라.
>
> 이 문서를 읽는 다음 세션(다른 머신)은 이전 대화 맥락이 없다. 이 문서 하나로 이어받아 바로 작업한다.
> 🟢 **현재 상태(2026-07-10): v0.5 — v0.4 비평 6항목 중 ①②③④ 반영 완료, 남은 것 = ⑤(mock 리뷰 복원)·⑥(히어로 strip 중복 제거).** 👉 **다음 세션은 `NEXT-SESSION.md`부터 읽어라 (①~④엔 ✅완료 요약, ⑤⑥이 다음 작업).** v0.5 = ①브랜드 base 회수(Pretendard + teal/violet, ink-navy, amber는 아틀라스 맵으로 격리) ②추천 경험 맵-구동 통합(대륙 hover→추천 카드) ③이미지 안 정보(Steam 커버 위 오버레이) ④실제 이미지(Steam 캡슐아트 커버 + 브랜드 SVG 아키타입 포트레이트). 아래 §0~§7은 초기 맥락(역사 보존). **현행 기준 = `NEXT-SESSION.md` + `direction.md` 리비전 v0.5 + `meta.json` + 렌더 `capture/v05-*.png`.** 산출물: `atlas.tsx`·`page.tsx`·`landing.css`·`fonts.ts`·`steam.ts`. ⚠ **사용자 렌더 확정 대기**(색·폰트·카드 = 3단계 핵심 HITL). idea 원장은 R2까지만 반영, 정식 `/handoff` 도착 시 대조 필요.
> 랩 메모리(`~/.claude/.../memory/`)는 이 머신 로컬이라 git으로 안 따라온다 → 결정은 전부 이 문서에 박제한다.
> ⚠ **환경 메모(2026-07-10):** 이 체크아웃엔 `node_modules` 부재 → 렌더/빌드 전 `npm install` 필요. 캡처는 `next start -p 3111` + playwright(설치됨). v0.4 스크린샷 = `capture/v04-*.png`.

## 0. 이 실험이 뭔가
디자인 랩(`~/dev/design`)의 워크플로우로 **NEXT SAVE(작업명, 교체 예정)** 의 실제 랜딩을 생산하는 실험. 왕복 테스트(001/002)가 아니라 **실생산** — "랩 워크플로우가 진짜 쓸 만한 랜딩을 뽑는가"의 첫 검증.
- 제품 스펙(불변): `~/dev/landing/HANDOFF.md`·`MOAT.md`. 한 문장 = *Steam URL 하나로 ①설명가능한 백로그 추천 + ②공유가능한 게이밍 정체성.* 페르소나 4축·비타협 규율(바넘 금지, 숫자에 묶기) 포함.
- 감정 곡선(=랜딩 구조): 호기심 → receipts("이게 나네, 숫자로 증명") → 신뢰(근거 붙은 추천) → 공유욕.

## 1. 이번 세션 확정 결정 (되돌리지 말 것)
- **리셋:** `~/dev/landing`의 기존 레퍼런스 6종(Linear/Spotify/PS/Raycast/Vercel/NVIDIA+Literal)·"확정 방향"(다크 게이밍/이중레지스터)은 **폐기**. `landing/DESIGN.md`는 이 워크플로우를 고려하지 않고 만든 **레거시** → 게이트 판정 승계 안 함. (제품 스펙은 유지, 디자인 방향만 리셋.)
- **미학 방향 = 루트 B: 다크 무대** (정제된 다크, 네온 게이머 아님). 근거: 게임 커버아트가 색을 내는 극장(“UI는 극장, 색은 콘텐츠가 낸다”) + 게임적 user journey 표현. 사용자가 고른 3 레지스터 = **데이터-신뢰 · 에디토리얼 · 공유 카드** (게이머 에너지는 의도적 제외).
- **차별화 원천:** 다크 회피가 아니라 **backloggd에 없는 두 레이어 = 근거(Trust) + 정체성(Aha)**. (해자 = "또 하나의 트래커 아님".)
- **역할 분리:** backloggd/howlongtobeat는 미학이 아니라 **콘텐츠/저니** 레퍼런스.

## 2. 레퍼런스 세트 · 역할 · 깊이
| 레퍼런스 | 역할 | 깊이 |
|---|---|---|
| **backloggd** | 다크 게임-콘텐츠 무대 + 저니(커버 모자이크·라이브러리 그리드·스탯 카운터·게임상세·프로필) | **풀 역공학** |
| **stats.fm** | 다크 데이터 + 공유 정체성 카드 | **풀 역공학** |
| Letterboxd | 다크 위 에디토리얼 절제(타이포 규율) | 모티프 |
| Ramp | 영수증·라이브 메트릭·자신만만한 숫자(Trust) | 모티프 |
| howlongtobeat | 완주시간 표 패턴(Finisher 축 재료) | 모티프 |
| Receiptify | 영수증=정체성 카드 포맷 (로그인 뒤라 예시 이미지 필요) | 모티프 |

`candidates/`에 각 사이트 above-the-fold 스샷 보존(메인 머신에서 눈으로 확인용). 정식 역공학 캡처는 아래 CDP로 새로 뜬다.

## 3. 캡처 방식 = CDP (확정)
플러그인 수동(픽셀만) vs CDP(정밀 토큰+로그인+봇월 우회)를 시간·토큰·리스크로 비교한 결과 **CDP 채택** — 일회성 셋업이 앞으로 모든 로그인 레퍼런스에 amortize되고, backloggd 앱 다(多)상태를 픽셀 정확히 봐야 하므로.
- 도구: `.claude/skills/design-deconstruct/capture-cdp.mjs` (connectOverCDP로 로그인된 실크롬에 얹혀 탐 → 스샷 + computed CSS).
- **실행 절차** (파일 상단 주석에 OS별 명령 있음):
  1. 전용 프로필로 디버그 크롬 켜기: `chrome --remote-debugging-port=9222 --user-data-dir=<전용폴더>`
  2. 그 창에서 backloggd 로그인(머신마다 첫 1회, 쿠키 잔류)
  3. `node .claude/skills/design-deconstruct/capture-cdp.mjs <url> <outDir>`
  - ⚠ 전용 프로필만 사용, 끝나면 크롬 닫아 포트 닫기. 캡처 스테이션 여러 대면 머신마다 로그인 1회.
- 실브라우저라 Cloudflare/봇월도 자연 통과(Letterboxd 등도 이걸로 뜨면 깔끔).

## 4. 캡처할 페이지 목록 → `references/<slug>/`
- **backloggd** (`references/backloggd/`): `home/` · `games/`(브라우즈) · `game-detail/`(평점 분포·통계·리뷰·"played by" — 대표 게임 하나) · `profile/`(**로그인** — 내 라이브러리·즐겨찾기·스탯, 정체성 직결)
- **stats.fm** (`references/stats-fm/`): `home/` (+가능하면 스탯 상세 화면)
- (모티프, 여유되면) Ramp / Letterboxd / howlongtobeat 게임상세 / Receiptify 영수증 예시

## 4-B. 캡처 완료 로그 (2026-07-07, 이 머신 = 캡처 스테이션)
캡처된 세트(각 desktop/mobile × hero/full + `computed-styles.json`, `references/` 루트):
- `backloggd/`: `home` · `games`(popular 브라우즈) · `game-detail`(Elden Ring) · `profile`(로그인 rlaqudwn — **계정이 비어 000/000/000, 셸·스탯카운터 레퍼런스로만 유효**) · `profile-populated`(공개 활성유저 **Paggi** — Favorite Games 쇼케이스·populated 스탯·**Personal Ratings 히스토그램**·Recently Played 커버모자이크·리뷰 카드·배지 = 저니 본체) · `library-grid`(Paggi/games — 커버 그리드 + Played/Playing/Backlog/Wishlist 필터)
- `stats-fm/home` · `ramp/home`(Trust 숫자 모티프)
- 미완: Letterboxd(홈 fullPage 스샷 타임아웃 — 재시도 시 특정 영화 페이지 or hero-only), howlongtobeat·Receiptify(생략).
- ⚠ backloggd populated/library 스샷에 Adobe/TopToon 한국 광고 주입됨 — 핵심 레이아웃은 안 가림. design.md 뽑을 때 광고 영역 무시.

### 환경 세팅 (다음 캡처 스테이션이 재현할 것)
- **playwright**: `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright` (connectOverCDP는 번들 브라우저 불필요). package.json에 박힘.
- **포트**: 이 머신은 **wmux가 9222·9223 점유** → 디버그 크롬은 **9333** 사용. (`capture-cdp.mjs` 기본값 9222이니 **3번째 인자로 `http://localhost:9333` 반드시 전달**.)
- **크롬 실행**: bash 백그라운드로 띄우면 태스크 종료 때 딸려 죽음 → **PowerShell `Start-Process`로 분리 실행**:
  `Start-Process "C:\Program Files\Google\Chrome\Application\chrome.exe" -ArgumentList '--remote-debugging-port=9333','--user-data-dir=C:\Users\rlaqu\chrome-debug','--no-first-run','--no-default-browser-check','about:blank'`
- **전용 프로필** `C:\Users\rlaqu\chrome-debug`에 backloggd 로그인(rlaqudwn) 쿠키 잔류 → 이 머신 재캡처 시 재로그인 불필요.
- **capture-cdp.mjs 개선**: `networkidle` 타임아웃 시 `domcontentloaded` 폴백 추가(stats.fm 등 SPA 필수). 커밋됨.

## 5. 남은 파이프라인
- **2단계 역공학:** 위 캡처 → `/design-deconstruct` → `references/<slug>/design.md`. (실생산이라 익명화·source 격리 규칙은 **완화** — 블라인드 재생성 에이전트가 없음.)
- **3단계 언어 번역:** brief(제품 스펙) + design.md들 + `taste.md`(아직 빔) → `app/e/003-next-save-landing/direction.md` (다크 무대 토큰: 색 4~6, 타입 역할, 레이아웃, 시그니처 = 정체성 카드).
- **4단계 생성:** frontend-design + shadcn → `page.tsx`. 히어로 Aha = 발광하는 정체성 카드. 품질 하한(반응형·포커스·reduced-motion).
- **5단계 비평:** `/design-critique` → `retro.md`.

## 6. 열린 질문 → 결정됨 (2026-07-07 세션)
- **산출물 위치:** ✅ **랩(app/e/003)에서 프로토타입 후 `~/dev/landing`에 이식.**
- **제품명:** ✅ "NEXT SAVE" **잠정·교체 예정** → 히어로 워드마크는 placeholder.
- **단일 제품 vs 쇼케이스:** ✅ **단일 제품 랜딩.**
- **표본 지정:** ✅ 게임 상세 표본 = **Elden Ring** (`backloggd.com/games/elden-ring/`, 인기작 아무거나로 지정). 프로필은 로그인 계정 그대로.

## 7. 랩 위생 메모 (별건)
- `app/e/002-roundtrip-v2`는 아직 `retro.md` 미작성(비평은 진행됨). 002를 정식으로 닫으려면 retro 필요.
