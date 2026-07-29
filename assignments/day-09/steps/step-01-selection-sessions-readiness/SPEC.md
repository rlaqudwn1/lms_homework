# Step 01 — selection sessions migration readiness

## Goal

Prepare a reversible, fixture-only `selection_sessions` migration for review
without authenticating to, linking, or writing to Supabase.

## Ordered execution

1. Reconcile the Day 8 design with the approved one-table executable boundary.
2. Write the local migration, fictional seed, rollback, and verification plan.
3. Run static local checks that require neither credentials nor Docker.
4. Stop at HITL and present the exact account, project, region, and schema-write
   choices.
5. Only after separate approval, install the lockfile dependencies, authenticate
   if needed, link the named test project, apply the reviewed migration and seed,
   and collect schema evidence.

Steps 4–5 remain blocked. A remote-apply packet must not be claimed until the
target and write are approved.

## Schema contract

- `public.selection_sessions` is the only executable table.
- Rows contain a generated UUID, fictional profile key, fixture recommendation
  UUID, fixture/public game UUID, and creation timestamp.
- No real Steam URL, account identity, private library, cookie, secret,
  telemetry, or live social data is stored.
- `games` and `recommendations` remain deferred, so their identifiers cannot
  have foreign keys in this one-table migration.
- RLS is enabled with no Data API policies. Day 10 integration policies require
  a separate decision.

## Red → green → refactor

1. **Red:** the repository had no Day 9 migration, seed, rollback, or validation
   artifact.
2. **Green:** add the smallest one-table SQL artifacts satisfying the boundary.
3. **Refactor:** document the deferred-FK limitation and isolate destructive
   rollback SQL from normal migration execution.

## Reversal

Before any approved remote rollback, confirm the exact project and that every
row is fictional course data. Then run the reviewed rollback file. Project
deletion, credential changes, and unrelated schema changes are out of scope.

