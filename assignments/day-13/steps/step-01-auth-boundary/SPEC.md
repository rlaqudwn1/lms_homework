# Step 01 — provider-neutral protected profile

## Goal

Add a server-owned authentication boundary for `/profile` without changing the
public `/prototype` demo or contacting an OAuth/Supabase provider.

## Contract

- Keep provider code behind an `AuthProvider` exchange interface.
- Accept redirects only to the allowlisted `/profile` route.
- Store the session in a signed, HTTP-only, same-site cookie.
- Permit a visibly disclosed fictional login only when an explicit local
  test flag and a server-only signing secret are present.
- Handle cancel, provider error, missing code, and exchange failure without
  exposing provider details.
- Do not record a real identity, email, token, cookie, OAuth code, or secret.

## TDD and dependencies

This is the first and only active Day 13 packet. Red: focused unit tests for
redirects, sessions, provider exchange, and error states. Green: minimal
boundary, routes, and protected page. Refactor: run focused/full tests, build,
and harness while keeping external OAuth disabled.

## Stop gate

Stop before selecting or changing any Google Cloud/Supabase target, creating an
OAuth client or consent screen, entering environment values, changing redirect
URIs, attempting a real login, publishing Git state, deploying, or submitting.
