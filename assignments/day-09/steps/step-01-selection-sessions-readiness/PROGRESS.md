# Step 01 progress

| Field | Value |
|---|---|
| State | approved remote migration and seed complete |
| Owner | coordinator |
| External changes | project restored; one table + two fictional rows added |
| Next checkpoint | rendered evidence and Git publication HITL |

## Local state

- Repository-local Supabase CLI `2.109.1` is installed from the existing
  dependency declaration without changing the lockfile.
- Docker CLI is installed; Docker Desktop engine is not running.
- No `supabase/` configuration or migration existed before this step.
- No tracked `.env` or `.env.*` files were found.
- No Supabase login, project creation/linking/reactivation, remote schema
  inspection, write, secret entry, or seed execution was performed.

## Read-only account discovery

- Browser dashboard session: signed out.
- CLI session: authenticated independently.
- Visible organization: `rlaqudwn1's Org`.
- One visible, unlinked project:
  `rlaqudwn1's Project` (`mxxuzfsqizgaaqhuioci`), region
  `ap-southeast-2`, status `INACTIVE`.
- No link, project resume, project creation, schema inspection, or write was
  performed. Reuse requires the user to confirm that this is a dedicated course
  test project and approve its reactivation/use.

## Approved execution — 2026-07-29 KST

- User approved restore, read-only schema inspection, the reviewed migration,
  and two fictional seed rows for `mxxuzfsqizgaaqhuioci`.
- Project transitioned `INACTIVE` → `COMING_UP` → `RESTORING` →
  `ACTIVE_HEALTHY`.
- Existing `public.scores` was found and left unchanged.
- Dry-run listed only `20260727000100_create_selection_sessions.sql`.
- Migration applied successfully, followed by `supabase/seed.sql`.
- Final verification: five expected non-null columns, two exact fictional rows,
  RLS enabled, zero policies, and public tables
  `scores,selection_sessions`.

## TDD record

- **Red:** required Day 9 artifacts were absent.
- **Green:** a one-table migration, two fictional seed rows, rollback SQL, and a
  validation script were added.
- **Refactor:** remote execution is explicitly separated from local readiness;
  deferred-table foreign keys and Day 10 API policies are not invented.
