# Day 06 — prototype planning submission

## Requirement

Plan an admin service or prototype with a clear product brief and user flow.

## Selected track

**Prototype planning.** NEXT SAVE's assignment-safe prototype directly supports
the future main service. An administrator service is intentionally excluded
because it would introduce management actors and workflows outside the
canonical product problem.

## Submitted evidence

- Product intake: [`../../specs/intake/2026-07-22-next-save.md`](../../specs/intake/2026-07-22-next-save.md)
- Course specification: [`../../specs/course/next-save/SPEC.md`](../../specs/course/next-save/SPEC.md)
- Product experience contract: [`../../specs/course/next-save/PRODUCT-EXPERIENCE.md`](../../specs/course/next-save/PRODUCT-EXPERIENCE.md)
- Implementation tasks: [`../../specs/course/next-save/TASKS.md`](../../specs/course/next-save/TASKS.md)
- Scope-gate evidence:
  [`steps/step-01-prototype-scope-gate/EVIDENCE.md`](steps/step-01-prototype-scope-gate/EVIDENCE.md)
- Operating-service landscape:
  [`steps/step-02-market-positioning/MARKET-LANDSCAPE.md`](steps/step-02-market-positioning/MARKET-LANDSCAPE.md)
- Market-positioning implementation evidence:
  [`steps/step-02-market-positioning/EVIDENCE.md`](steps/step-02-market-positioning/EVIDENCE.md)
- Desktop positioning render:
  [`evidence/day-06-positioning-desktop.png`](evidence/day-06-positioning-desktop.png)
- 360 px positioning render:
  [`evidence/day-06-positioning-mobile-360.png`](evidence/day-06-positioning-mobile-360.png)
- Source PRD revision: `rlaqudwn1/idea@56efd48215a791febf111ccd4a5a3965364a4598`

## Core flow

`input → disclosed fixture selection → atlas/evidence → three recommendations → selection receipt`

User-visible feature groups are limited to:

1. demo entry;
2. taste evidence;
3. next-pick decision.

## Market position

Backloggd, Grouvee, and HowLongToBeat demonstrate that collection tracking,
shelves/statuses, journals/reviews, community activity, and completion-time
context are already served by operating products. NEXT SAVE does not claim
those capabilities are missing. Its course-mock hypothesis is narrower:
explained personal signals plus exactly three candidates may help a user decide
what to start tonight.

The landing page translates this comparison into three claims:
`기록보다 결정`, `전체 목록보다 세 가지 후보`, and
`인기순보다 설명 가능한 근거`. Demand remains unvalidated.

## Verification

1. Confirm the specification contains one core flow, no more than three user-visible feature groups, explicit non-goals, and measurable acceptance criteria.
2. Confirm the data boundary states that the base slice uses fixtures and makes no Steam request.
3. Confirm implementation tasks name dependencies and verification evidence.
4. Confirm Day 8–10 may add only minimum selection persistence after separate
   target approval and must never store a real Steam URL.

## Mock disclosure

This plan describes a course mock with two seeded profiles and deterministic recommendations. It is not a live Steam integration or a validated recommendation product.

## Submission record

- Repository: `https://github.com/rlaqudwn1/lms_homework`
- Commit SHA: `f0a5a2863fb59ad22b305b3470be0944a0988e28`
- Open PR: `https://github.com/rlaqudwn1/lms_homework/pull/1`
- Submitted URL: `https://next-save-course-mock.vercel.app`
- Production deployment:
  `https://next-save-course-mock-bs7sz8veb-kimbyeongju.vercel.app`
- User-approved LMS submission timestamp: `2026-07-23 12:52 KST`
- LMS receipt: `제출됨 · 지각`
- Code review: `리뷰를 기다리고 있어요`

PR #1 remains open and unmerged. The deployed page links directly to the public
Day 6 backlog-service comparison document.
