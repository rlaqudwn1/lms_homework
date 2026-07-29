# Day 13 — Google login

| Field | Value |
|---|---|
| State | local boundary complete; action-time HITL pending |
| Dependency | Approved exact OAuth test target for live-provider work |
| Next action | Choose the exact Google Cloud/Supabase OAuth target and approve the named operation, or submit the disclosed fictional fallback evidence |
| HITL | Google OAuth client, redirect URI, test account and credential approval |

## Acceptance evidence

- Test-account login protects only the approved profile route.
- No OAuth secret appears in Git, handoffs, screenshots or LMS evidence.

## Local implementation

- Ordered packet:
  [`step-01-auth-boundary`](steps/step-01-auth-boundary/PROGRESS.md)
- Public `/prototype` remains login-free; `/profile` alone reads an expiring,
  signed, HTTP-only server session.
- Provider-neutral callback exchange and the Supabase adapter are unit-tested.
  The live route fails closed until exact Supabase/Google configuration exists.
- Fictional login is visibly test-only and disabled unless
  `NEXT_SAVE_AUTH_TEST_MODE=true` plus a local 32+ character signing secret.
- Focused tests 9/9, full tests 56/56, production build, and assignment harness
  pass. No external OAuth/Supabase operation was performed.
