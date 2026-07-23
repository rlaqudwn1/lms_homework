# atlas-explorations — 아틀라스 표현 탐구 (2026-07-20 세션)

취향 아틀라스의 **표현 방식**을 오너와 대화로 좁힌 시각 자료 소스. 전부 **자체완결 HTML(Canvas)** — 브라우저로 열면 렌더됨. 결정 근거는 `../direction.md` 리비전 v0.9, 계획은 `../atlas-plan.md`.

> 이건 **판단용 시각 자료**지 최종 산출물이 아니다. 최종 질감은 생성기(Claude Design/Pencil)가 만든다. 스케치의 지형/조각은 "거친 방향".

| 파일 | 무엇 | 관련 결정 | 게시 URL |
|---|---|---|---|
| `atlas-structure.html` | 흩어진 군도 vs 이어진 대륙 | v0.9 #2 (대륙 확정) | https://claude.ai/code/artifact/ed8f5579-92fb-4725-b531-1f0a191b8d2e |
| `continent-character.html` | 대륙 특징 4레버(심장부·넓이·고도·변방) | v0.9 형태 레버 | — |
| `atlas-howitworks.html` | 데이터→대륙 생성 파이프라인 5단계 + 결정론 대비 + 진화(자람) | v0.9 #3 하이브리드·안정적 진화 | https://claude.ai/code/artifact/9e274845-e473-4f3a-9308-27d1105e1463 |
| `atlas-a1-howto.html` | A-1 진행법: biome 사전·5과정·난이도·블라인드 게이트 | atlas-plan A-1 | https://claude.ai/code/artifact/66c5f6b1-a6d4-45df-a5c7-78ab22c852ba |
| `atlas-symbol-vs-terrain.html` | 심볼-퉁 ❌ vs 맵 자체가 장르 ✅ (같은 실루엣) | v0.9 #4 (스펙 교정) | https://claude.ai/code/artifact/b0f373f4-e9e3-4d47-ab2f-3ca1751ab468 |
| `atlas-map-vs-image.html` | 맵 vs 이미지 4형태 + 트레이드오프 매트릭스 | v0.9 #5 (대안 검토) | https://claude.ai/code/artifact/599ff30c-a2f4-43b8-95fa-13aad3ee5502 |

레퍼런스 보드 #2(인식성, 계열 A/B 6종 판정)는 스크린샷 임베드라 소스 미보존 — URL만: https://claude.ai/code/artifact/edfd4650-5722-4095-b28c-6daa9e9410ac

## 재게시(다음 세션이 수정 시)
Artifact 툴에 `url`(위 표) + 로컬 파일 경로를 넘기면 같은 URL로 갱신됨.

## 열린 판정 (다음 세션 시작점)
1. **다이얼 위치** — 지형-네이티브(★한 매질) vs 더 정체성. (v0.9 #4) → **UX-게이트로 이월**(아래 #2와 함께 판정).
2. ~~표현 방식~~ **[판정 2026-07-20] 맵 = 활성 기본값.** 이미지/포스터/성좌는 **스왑 가능 후보군**, 스왑 게이트 = UI/UX 전체 관점. 채택 이유 = 결정지원(땅 클릭→추천) 유지. (v0.9 #5)
