# Day 09 — Supabase schema

| Field | Value |
|---|---|
| State | submitted · late |
| Dependency | Approved Day 08 schema |
| Next action | Await code review |
| HITL | Supabase, Git publication, and LMS submission complete |

## Acceptance evidence

- Only approved test schema and fictional seed rows exist.
- Migration/reversal instructions are recorded.

## Prepared locally

- Ordered packet:
  `steps/step-01-selection-sessions-readiness/`
- Migration: one fixture-only `public.selection_sessions` table.
- Seed: two deterministic fictional rows.
- Safety: RLS enabled with no Data API policies; no real Steam/profile data.
- Reversal and verification: recorded in the step runbook.
- Prototype mock:
  `steps/step-02-prototype-selection-session-mock/` mirrors the SQL row shape
  in browser-local fictional data and explicitly remains Supabase-disconnected.

The approved project was restored, linked locally, inspected, migrated, and
seeded with exactly two fictional rows. Existing `public.scores` was observed
but not changed.

Ready PR #4 was published from `codex/day-09-supabase-schema` to
`codex/day-08-domain-schema`. The PR URL was submitted to the exact Day 9 LMS
assignment at `2026-07-29 10:30 KST`; receipt is `제출됨 · 지각` and code review
is pending.
