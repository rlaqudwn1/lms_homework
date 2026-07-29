# Day 10 integration runbook

## Current stop point

Local code is credential-free. The API route returns local fallback unless both
server-only values exist. Do not add them or contact Supabase before approval.

## Proposed action-time approval

- Target: Supabase project `mxxuzfsqizgaaqhuioci`,
  `public.selection_sessions` only.
- Operation 1: apply the two policies in `PROPOSED-RLS.sql`.
- Operation 2: set `NEXT_SAVE_SUPABASE_URL` and
  `NEXT_SAVE_SUPABASE_ANON_KEY` in untracked `.env.local` for local verification
  only, then set `NEXT_SAVE_SUPABASE_WRITE_ENABLED=true` for the approved test.
- Operation 3: through the local service route, insert one generated fictional
  `steady-explorer` / `hollow-knight` row and select that same UUID once.
- Verification: returned record exactly matches all five submitted fields;
  policies are exactly the two proposed names; `public.scores` is not queried or
  changed.

## Rollback

Policy removal uses `PROPOSED-RLS-ROLLBACK.sql` only after separate destructive
approval. The single test row may be deleted only by its exact generated UUID
after separate approval. Never drop the table or touch another table/data set.

## Separate later gates

Deployment configuration, deploy, Git commit/push/PR, and LMS submission each
require their own action-time approval.
