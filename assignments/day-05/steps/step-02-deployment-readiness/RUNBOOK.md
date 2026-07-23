# Day 5 Vercel deployment runbook

## 1. Starting facts

- Repository: `https://github.com/rlaqudwn1/lms_homework`.
- Candidate source branch: `codex/day-02-next-save`.
- PR #1 targets `master`; it must not be merged during Day 5 preparation.
- Application: Next.js fixture-only course mock; build command `npm run build`.
- The base slice requires no environment variables or live external services.

## 2. Local, read-only preflight

```powershell
git status --short --branch
git rev-parse HEAD
npm test
npm run build
powershell -ExecutionPolicy Bypass -File scripts/check-assignment-harness.ps1
git ls-files '.env' '.env.*'
```

Record the exact branch and commit. Tests, build, and harness must pass. No live `.env` file may be tracked; only placeholder names in `.env.example` are acceptable if configuration is added later.

## 3. Mandatory user decision — stop here

Immediately before any Vercel login, link, project creation, or deployment, ask the owner to confirm all of the following:

1. Exact Vercel account email or account label; never record credentials.
2. Exact personal or team scope.
3. Existing named project or creation of a new specifically named course-mock project.
4. Target environment.
5. Deployment type: preview or production.
6. Exact source branch and commit.
7. Whether environment variables are expected; the default for this slice is none.

Do not proceed on a partial answer. Login, project creation/linking, preview deploy, production deploy, environment changes, and domain changes are separate external actions.

## 4. Approved execution — not yet authorized

After exact target approval only:

1. Confirm the worktree and commit still match the approved source.
2. Authenticate to the approved account without copying tokens or credentials into files or chat.
3. Link only the approved project, or create only the specifically approved course-mock project.
4. Confirm framework detection is Next.js and no secret/environment value is required.
5. Execute only the approved preview or production deployment type.
6. Record the resulting HTTPS URL, project name/scope, deployment type, source commit, and timestamp in evidence; never record credentials.

## 5. Post-deploy validation

Open the approved URL in a fresh browser context and verify:

- HTTPS loads without authentication or a platform error.
- The page visibly states that it uses examples/fixtures and does not contact Steam.
- Blank or malformed input shows an inline accessible error.
- A valid-looking Steam Community URL selects a seeded profile without transmitting the input to Steam.
- Both seeded profiles remain fictional and visibly different.
- The primary flow works at desktop and 360 CSS-pixel width with keyboard navigation.
- Browser network evidence contains no Steam-domain request, and page output/logs expose no secret.
- The deployed commit matches the recorded approved SHA.

If a check fails, do not submit to the LMS. Record the failure and return to a new local fix packet.

## 6. LMS gate — separately authorized

The LMS accepts a deployment URL or PR URL. Prefer the verified Vercel URL because it directly demonstrates deployment, but do not paste or submit it until the user explicitly approves that exact Day 5 submission.

