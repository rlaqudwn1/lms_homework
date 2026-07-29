# Step 01 evidence

No secrets, identity values, live tokens, cookies, or OAuth codes belong here.

## TDD

- Red: `lib/auth-boundary.test.ts` was created first. Its initial execution was
  blocked by missing `node_modules`; `npm ci` then reported the existing
  package/lock mismatch. No lockfile rewrite was made.
- Green/refactor: focused auth tests 9/9; full tests 56/56; Next.js production
  build passed with dynamic `/auth/callback`, `/auth/supabase-login`,
  `/auth/test-login`, and `/profile`;
  assignment harness passed.

## Boundary review

- Public demo remains login-free: `/prototype` was not changed.
- Protected route/session behavior: `/profile` reads only a signed, expiring,
  HTTP-only session; fictional login requires explicit server-side test mode.
- Redirect allowlist and error/cancel behavior: focused tests cover external and
  non-profile redirects, cancellation, provider error, missing code, provider
  exchange failure, and cookie tampering.
- External network/account/project changes: none
- Supabase adapter: server-side PKCE exchange uses `@supabase/ssr`; the profile
  checks `getUser()` and does not render or persist the provider email.
