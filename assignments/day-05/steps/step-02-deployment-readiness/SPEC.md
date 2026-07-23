# Step 02 specification — deployment readiness and approval gate

## Outcome

Prepare a repeatable Vercel deployment runbook and validation plan for the disclosed NEXT SAVE course mock, then stop before any external Vercel or LMS action.

## Depends on

- Step 01 reusable browser submission kit is locally complete.
- The Day 2 course slice passes its local tests and production build.
- GitHub PR #1 remains inspectable; merging it is not part of this step.
- The user must choose the exact Vercel account, scope, project, environment, deployment type, and source commit before execution.

## Owned files

- `assignments/day-05/steps/step-02-deployment-readiness/*`
- Day 5 progress and submission rollups (coordinator only)
- Day 5 pending HITL record (coordinator only)

## LMS acceptance contract

- Assignment: `Day 5 나만의 홈페이지 배포하기`.
- Overview: use GitHub and Vercel to deploy the homepage.
- Submission accepts one deployment URL or PR URL; the LMS also states that either a link or an uploaded file is sufficient.
- LMS submission remains a separate user-approved action.

## Scope and honesty boundary

- Deploy only the current fixture-only course slice.
- Do not add or transmit a real Steam profile URL, personal Steam data, secrets, analytics, or live service credentials.
- Keep the visible fixture/mock disclosures intact.
- Do not imply that deferred community, account, sharing, or Steam capabilities are live.

## Acceptance checks

- The runbook names every approval field required before Vercel access or deployment.
- `npm test`, `npm run build`, and the assignment harness pass.
- Tracked files contain no committed live `.env` file or obvious live credential.
- The post-deploy plan checks the approved URL in a fresh browser, verifies fixture disclosure and the core flow, confirms no Steam request, and records the deployment URL and commit SHA.
- The packet stops at the Vercel HITL gate.

