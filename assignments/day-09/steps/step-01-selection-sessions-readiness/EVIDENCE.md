# Step 01 evidence

## Prepared artifacts

| Artifact | Purpose |
|---|---|
| `supabase/migrations/20260727000100_create_selection_sessions.sql` | one-table schema with RLS enabled |
| `supabase/seed.sql` | two deterministic fictional receipts |
| `supabase/rollback/20260727000100_drop_selection_sessions.sql` | explicit reversal |
| `scripts/check-day-09-supabase.ps1` | credential-free static contract check |
| `RUNBOOK.md` | approval gate, apply, verify, and rollback procedure |

## Boundary review

- Only `public.selection_sessions` is created.
- `games` and `recommendations` are not created and no invalid foreign keys point
  to them.
- Seed values are fictional UUIDs and fixture labels.
- RLS is enabled and no anon/authenticated policy is introduced.
- This is local preparation evidence, not proof of a Supabase schema.

## Remote evidence — 2026-07-29 KST

| Check | Result |
|---|---|
| Target | `mxxuzfsqizgaaqhuioci`, `ap-southeast-2` |
| Restore | PASS — `ACTIVE_HEALTHY` |
| Preflight | existing `scores`; `selection_sessions` absent |
| Dry-run | only migration `20260727000100` |
| Columns | PASS — five approved non-null columns |
| Seed | PASS — `steady-explorer` + `focused-tactician`, two rows |
| RLS / policies | enabled / zero |
| Other tables | `scores` observed, not referenced by migration or seed |

Rollback was reviewed but not executed because the requested schema is now the
assignment deliverable.
