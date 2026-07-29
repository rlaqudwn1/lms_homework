# Step 01 evidence

## TDD log

- Red: `npm test -- --run lib/selection-session-supabase.test.ts` failed with
  `Cannot find module './selection-session-supabase'`.
- Green: the same focused command passed, 3 tests.
- Refactor: full verification passed with 8 files / 38 tests, production build,
  assignment harness, and the unchanged Day 9 schema contract.

## Implemented

- Server-only configuration parser using `NEXT_SAVE_SUPABASE_URL` and
  `NEXT_SAVE_SUPABASE_ANON_KEY`, gated by the explicit
  `NEXT_SAVE_SUPABASE_WRITE_ENABLED=true` switch.
- PostgREST adapter that inserts one validated fictional row, then selects its
  exact UUID and validates the returned record.
- Same-origin `POST /api/selection-sessions` boundary.
- Local-first browser receipt with explicit remote/fallback status.
- Review-only RLS proposal, rollback, and action-time runbook.

## External-state boundary

No remote operation is evidence until the separate HITL gate is approved and
executed against the named target.
