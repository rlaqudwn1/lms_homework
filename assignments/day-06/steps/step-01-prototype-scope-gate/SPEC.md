# Day 06 Step 01 — prototype scope gate

## Objective

Convert the Day 6 LMS prompt into a bounded prototype plan for NEXT SAVE and
freeze the minimum course-mock core flow that Day 8–10 may extend.

## LMS interpretation

- Selected track: **prototype planning**, not an administrator service.
- Main service relationship: this prototype demonstrates the decision flow that
  the future NEXT SAVE service may implement.
- Submission format: a reviewable repository or PR link may be submitted later;
  this step prepares local evidence only.

## In scope

1. Accept a valid-looking Steam Community URL as presentation-only input.
2. Select one of exactly two fictional seeded profiles without a Steam request.
3. Show the selected profile's labelled taste atlas, primary play-style core,
   confidence, secondary tags, and traceable fixture evidence.
4. Rank exactly three deterministic recommendations with time estimate, fit
   label, and fixture-backed reasons.
5. Let the user choose one `오늘의 한 판` and show a persistent selection
   receipt.
6. Preserve visible `예시 데이터 · 데모` disclosure, keyboard navigation, and
   the full flow at 360 px.

The course-mock core flow is:

`input → disclosed fixture selection → atlas/evidence → three recommendations → selection receipt`

## Day 8–10 handoff boundary

- Day 8 may design only the minimum persistence concept needed for the final
  selection: a generated session identifier, fictional profile key, and chosen
  game identifier.
- Day 9 may create that schema only in an explicitly approved test Supabase
  target.
- Day 10 may connect only the selection receipt to that approved test schema.
- A real Steam URL must never be stored. The base flow remains usable without a
  database or environment secret.

## Out of scope

- Administrator dashboards or content-management workflows.
- Live Steam, HLTB, IGDB, Backloggd, or community-service requests.
- Real Steam profiles, personal play history, secrets, or production data.
- Accounts, OAuth, friends/follows, feeds, reviews, moderation, sharing/export,
  payments, or production analytics.
- Claims that recommendation quality or play-style cores are validated.

## Dependencies

- Canonical behavior: `specs/course/next-save/SPEC.md`
- Product horizon and deferred use cases:
  `specs/course/next-save/PRODUCT-EXPERIENCE.md`
- Intake: `specs/intake/2026-07-22-next-save.md`
- Later execution plan: `specs/course/next-save/TASKS.md`
- Scope authority: `specs/HITL-DECISIONS.md`

## Evidence checks

1. The LMS prompt is recorded verbatim enough to distinguish prototype planning
   from administrator-service planning.
2. There is one core flow and no more than three user-visible feature groups:
   demo entry, taste evidence, and next-pick decision.
3. The flow, acceptance criteria, and non-goals agree with the canonical SDD.
4. The Day 8–10 boundary names the minimum future persistence without approving
   Supabase access or writes.
5. The fixture-only/no-Steam/no-secret boundary is explicit.

## Completion condition

All checks are recorded in `EVIDENCE.md`, the Day rollup points to this packet,
and `SUBMISSION.md` contains an honest, locally reviewable evidence bundle.

