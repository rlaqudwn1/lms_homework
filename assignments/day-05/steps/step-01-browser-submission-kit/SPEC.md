# Step 01 specification — reusable browser submission kit

## Outcome

Turn the verified Day 2 PR/LMS browser sequence into reusable, guarded components and repository instructions for later assignment Days.

## Depends on

- Day 2 PR #1 and LMS receipt.
- `chrome:control-chrome` safety, tab, locator, confirmation, and cleanup rules.
- `docs/ACCESS-REGISTER.md` publication and submission gates.

## Owned files

- `browser/**`
- root `CLAUDE.md`
- this step packet
- Day 5 progress rollup

## Acceptance checks

- Exact-Day parsing cannot confuse Day 2 with Day 20.
- Form actions refuse missing or mismatched explicit authorization.
- The receipt parser records status, timestamp, submitted URL, and review state.
- Root and browser-local `CLAUDE.md` files route browser work to the same workflow.
- `npm test`, assignment harness, and `git diff --check` pass.

## Non-goals

- No LMS form action, PR publication, Vercel connection, deployment, or Day 5 submission.
- No cookies, credentials, account identifiers, or browser history stored in Git.
- The components do not replace the browser skill or grant external authority.
