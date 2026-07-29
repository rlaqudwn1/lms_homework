# Day 09 — Supabase schema

| Field | Value |
|---|---|
| State | remote migration + fictional seed complete; prototype evidence ready |
| Dependency | Approved Day 08 schema |
| Next action | Review rendered DB-status evidence before Git publication |
| HITL | Supabase target/schema write approved and executed; Git/LMS still pending |

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
but not changed. No Git publication, deployment, or LMS action has occurred.
