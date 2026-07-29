# TASK-007 — Day 13 Google login continuation

- Track: provider-neutral protected profile and OAuth action-time gate
- Branch/worktree: detached `HEAD`; no branch, commit, push, PR, or deploy made
- Status: local boundary complete; exact OAuth target/operation approval pending
- Handoff at: 2026-07-29 KST

## Completed

- Added the ordered Day 13 Step 01 packet.
- Kept `/prototype` public and placed session protection only on `/profile`.
- Added a provider-neutral server exchange contract, signed expiring HTTP-only
  session, allowlisted `/profile` redirect validation, and safe callback
  cancel/error handling.
- Added a visibly fictional test login that is disabled unless an explicit
  local server flag and 32+ character secret are present.
- Added an `@supabase/ssr` Google OAuth initiation route, server-side PKCE code
  exchange adapter, and server-verified protected profile check. It remains
  inactive without approved public project configuration.
- Focused auth tests pass 9/9; full tests pass 56/56; production build and
  assignment harness pass.

## Next action-time gate

Supabase Auth is selected. The proposed target is the existing course test
project `mxxuzfsqizgaaqhuioci`, but use of that project is not yet authorized for
Auth changes. The user must approve that exact project, choose the exact Google
Cloud project/OAuth web client, origins and callback URIs, and approve the
configuration plus one test-account login operation.

## Boundaries

- Never record a personal account identifier, real email, token, cookie, OAuth
  code, client secret, or live environment value in Git, evidence, or handoff.
- Do not create/change a consent screen, OAuth client, redirect URI, provider,
  environment value, account, or project before action-time approval.
- Day 10 remote write/read, RLS, env and data actions remain unexecuted. Do not
  change `public.scores` or any unrelated table/data.
- Git publication, deployment, and LMS submission each require separate
  action-time approval.
