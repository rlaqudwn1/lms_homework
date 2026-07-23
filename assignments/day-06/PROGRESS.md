# Day 06 — prototype planning

| Field | Value |
|---|---|
| State | submitted · late |
| Dependency | `specs/course/next-save/SPEC.md` |
| Next action | Await code review |
| HITL | Complete for Day 6 publication/deployment/submission |

## Evidence

- Product brief and flow: [`../../specs/course/next-save/SPEC.md`](../../specs/course/next-save/SPEC.md)
- Product-wide use cases and deferred scope:
  [`../../specs/course/next-save/PRODUCT-EXPERIENCE.md`](../../specs/course/next-save/PRODUCT-EXPERIENCE.md)
- Completed scope gate:
  [`steps/step-01-prototype-scope-gate/EVIDENCE.md`](steps/step-01-prototype-scope-gate/EVIDENCE.md)
- Backlog-service comparison and landing positioning:
  [`steps/step-02-market-positioning/MARKET-LANDSCAPE.md`](steps/step-02-market-positioning/MARKET-LANDSCAPE.md)
- Step 02 verification:
  [`steps/step-02-market-positioning/EVIDENCE.md`](steps/step-02-market-positioning/EVIDENCE.md)

## Frozen course-mock flow

`input → disclosed fixture selection → atlas/evidence → three recommendations → selection receipt`

The plan contains three user-visible feature groups: demo entry, taste evidence,
and next-pick decision. Day 8–10 may extend only the minimum selection
persistence described in the scope packet and still require their own HITL
approvals.

The landing page now adds one non-functional positioning section derived from
operating-service research: `기록보다 결정`, `전체 목록보다 세 가지 후보`,
and `인기순보다 설명 가능한 근거`. It explains the existing flow without
expanding the functional product scope.

## External-action status

Published commit `f0a5a2863fb59ad22b305b3470be0944a0988e28` to the existing
open PR #1, deployed the updated fixture-only course mock to
`https://next-save-course-mock.vercel.app`, and submitted that URL to Day 6 at
2026-07-23 12:52 KST. LMS receipt: `제출됨 · 지각`; code review pending.
PR #1 remains open and unmerged. No Supabase, Steam, personal-data, secret, or
custom-domain change was made.
