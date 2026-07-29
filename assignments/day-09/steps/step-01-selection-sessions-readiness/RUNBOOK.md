# Day 9 Supabase runbook

## Preconditions and HITL

Do not authenticate, create/select/link a project, enter secrets, or write
schema/data until the user confirms:

1. Supabase account or organization.
2. Existing dedicated test project versus creation of a new dedicated test
   project.
3. Exact project name/reference and region.
4. Approval to apply exactly the reviewed migration and two fictional seed rows.

Production or shared projects are not acceptable for this course-mock run.

## Approved execution outline

1. Re-read `git diff` and run `scripts/check-day-09-supabase.ps1`.
2. Install lockfile dependencies with `npm ci` if still absent.
3. Confirm CLI `2.109.1`.
4. Authenticate only through the user-approved method and link only the named
   test project.
5. Use a dry-run/diff inspection where the CLI supports it; stop if unrelated
   remote changes appear.
6. Apply the single migration, then seed exactly the two fictional rows.
7. Verify table columns, defaults, checks, RLS enabled/no policies, row count
   `2`, and absence of forbidden fields.
8. Record non-secret evidence; never copy tokens, connection strings, or keys.

Exact CLI commands must be reconfirmed against the installed CLI help and the
approved target at execution time.

## Verification queries

```sql
select column_name, data_type, is_nullable, column_default
from information_schema.columns
where table_schema = 'public' and table_name = 'selection_sessions'
order by ordinal_position;

select relrowsecurity
from pg_class
where oid = 'public.selection_sessions'::regclass;

select count(*) as fictional_row_count
from public.selection_sessions;
```

Expected: five approved columns, RLS `true`, and two fictional rows. No query
should return or request credentials or personal Steam data.

## Rollback

Rollback is a separate destructive schema write and requires action-time
confirmation of the same test project. Inspect the row count and fixture-only
boundary, then execute
`supabase/rollback/20260727000100_drop_selection_sessions.sql`. Verify the table
is absent. Do not delete the Supabase project or touch unrelated schemas.

