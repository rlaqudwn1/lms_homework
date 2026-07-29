# Step 01 evidence

## TDD log

- Environment note: the first command could not find `vitest`; `npm ci` then
  exposed a pre-existing package-lock sync error. `npm install
  --no-package-lock` restored local executables without changing the lockfile.
- Red: the focused command ran and both suites failed because
  `lib/game-metadata.ts` and `app/api/game-metadata/route.ts` did not exist.
- Green: focused adapter/API command passed, 2 files / 7 tests.
- Refactor: full test suite passed, 10 files / 47 tests. Production build passed
  and includes dynamic route `/api/game-metadata`.

## Implemented

- Provider-neutral `GameMetadataProvider` contract with an abort signal.
- Six-game public identity allowlist and deterministic metadata fixtures.
- Validated provider response path plus timeout, error, and invalid-response
  fallback reasons.
- Same-origin server route with no provider injection or external endpoint.
- Visible developer, release year, metadata-source label, and privacy disclosure
  in the prototype detail panel.

## Approved external verification

- User approved one keyless Wikidata read on 2026-07-29 KST.
- Exactly one `GET` was sent to `query.wikidata.org/sparql` for the approved
  public label `Hollow Knight`.
- The reduced result contained developer `Team Cherry`, earliest release year
  `2017`, and public genre statements. No raw response or personal data was
  retained.
- Platform-specific release statements produced multiple rows; the adapter now
  selects the earliest valid release year deterministically.

## External-state boundary

Wikidata was contacted exactly once under the recorded approval. Repeated
runtime requests remain disabled unless `NEXT_SAVE_WIKIDATA_ENABLED=true` is
set in an approved environment. No account, key, deployment, Git publication,
database change, or LMS action is authorized by this packet.
