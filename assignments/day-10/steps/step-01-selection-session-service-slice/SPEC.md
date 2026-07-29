# Step 01 — selection-session service slice

## Goal

Connect the existing fictional selection receipt to a server-side Supabase
adapter while keeping the prototype usable without credentials, login, or a
remote write.

## Ordered work

1. Define and test the environment/configuration boundary.
2. Define and test one `selection_sessions` write-then-read adapter.
3. Add a same-origin API boundary and preserve the browser-local fallback.
4. Verify tests, build, secret scans, and the assignment harness.
5. Stop at HITL before adding live values, changing RLS/policies, or issuing a
   remote request.

## Contract

- Only `public.selection_sessions` may be addressed.
- Only records accepted by the existing fictional fixture parser may cross the
  API boundary.
- `NEXT_SAVE_SUPABASE_URL`, `NEXT_SAVE_SUPABASE_ANON_KEY`, and the explicit
  `NEXT_SAVE_SUPABASE_WRITE_ENABLED` switch are server-only.
- Missing configuration or a request failure preserves the local receipt.
- No entered Steam URL, cookie, personal profile, or service-role key is sent.
- `public.scores` and every other table/data set are out of scope.

## Verification

- Red: the focused adapter test fails because the module does not exist.
- Green: focused adapter/API tests pass.
- Refactor: full tests, production build, harness, and tracked-secret scan pass.

## HITL gate

Before remote verification, obtain action-time approval for the exact Supabase
project, the proposed `selection_sessions` RLS policies, the environment in
which URL/key values will be entered, and the single fictional write/read
operation. Deployment, Git publication, and LMS submission remain separate
gates.
