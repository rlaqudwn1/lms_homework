# Step 01 progress

| Field | Value |
|---|---|
| State | local implementation + one approved API check complete |
| Owner | local coordinator |
| Dependency | Day 10 submitted course slice |
| Current checkpoint | Render review, then publication/deployment/LMS gates |
| Stop gate | Provider/endpoint choice and every external action |

## Completed locally

- Six approved public fixture game identities are allowlisted.
- The provider-neutral adapter validates responses and handles timeout, error,
  and malformed responses with deterministic fixture fallback.
- `GET /api/game-metadata` accepts only a public game ID and has no live provider
  injection.
- The prototype visibly labels fixture fallback metadata and its privacy boundary.
- One approved Wikidata query for Hollow Knight succeeded.
- Focused tests, 47 full tests, and production build pass.

## Verification plan after approval

1. Record the chosen provider, exact endpoint, authentication mode, rate limit,
   license, attribution text, and cache requirements.
2. Add only placeholder variable names to tracked files; enter any live value in
   the separately approved local or hosting secret store.
3. Issue one request for one allowlisted public game identity. Do not send the
   entered Steam URL or any player/account field.
4. Capture status, response-field validation, timeout behavior, and fallback
   behavior without recording secrets or full raw responses.
5. Re-run focused tests, full tests, build, harness, and rendered-screen review.
6. Obtain separate approval for Git publication, deployment, and LMS submission.
