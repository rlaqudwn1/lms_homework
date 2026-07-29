# Step 01 — provider-neutral metadata enrichment

## Goal

Add one visible public-game metadata enrichment without selecting or contacting
an external provider.

## Ordered work

1. Define a public game identity allowlist and deterministic metadata fixtures.
2. Red-test a provider-neutral adapter for success, timeout, and provider error.
3. Add a server-side same-origin API boundary that accepts only allowlisted IDs.
4. Show the metadata source/fallback state in the existing prototype.
5. Run focused tests, the full suite, production build, and assignment harness.
6. Stop before provider selection or any external request.

## Contract

- Only the six already-approved public fixture game identities may cross the
  boundary.
- The browser sends only the public fixture game ID.
- Entered Steam URLs, accounts, libraries, cookies, secrets, and personal data
  are never sent or logged.
- Missing provider configuration, timeout, malformed provider data, and provider
  failure all return deterministic fixture metadata.
- No provider endpoint, key, account, environment value, attribution text, or
  licensing claim is selected in this step.

## Verification

- Red: focused adapter/API tests fail before their modules exist.
- Green: adapter/API tests cover allowlist, success, timeout, and error fallback.
- Refactor: full tests, production build, assignment harness, and secret/request
  scans pass.

## HITL gate

Stop before choosing a provider or endpoint, creating an account/key, entering
environment values, accepting attribution/licensing terms, or issuing any
external request. Present the exact target and operation for action-time
approval only when live-provider evidence becomes necessary.
