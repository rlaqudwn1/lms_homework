# Browser workspace guidance

This directory contains the reusable browser submission procedure for the LMS assignment repository.

## Required reading order

1. Repository `AGENTS.md`.
2. The active Day `PROGRESS.md` and step packet.
3. `docs/ACCESS-REGISTER.md`.
4. This file and `PR-AND-LMS-SUBMISSION.md`.
5. The installed `chrome:control-chrome` skill and the complete documentation it requires at runtime.

## Mandatory rules

- Use Chrome through `chrome:control-chrome` when the task depends on the user's logged-in LMS session. Do not substitute Computer Use, a standalone browser server, or guessed HTTP endpoints.
- Name the browser session, claim an LMS tab returned by the current open-tab listing, and derive navigation targets from the latest visible DOM snapshot.
- Never guess assignment IDs or reuse a stored Day 2 assignment URL for another Day.
- Before every fill or click, confirm a unique locator from the latest snapshot. After every state change, collect the smallest fresh observation needed for the next decision.
- Reading a requirement is allowed; filling a form, submitting, or resubmitting requires explicit approval for the exact Day, assignment, destination, and artifact URL.
- `browser/components/lms-assignment.mjs` refuses incomplete or mismatched approval. Do not bypass its guard to make automation easier.
- A successful click is not proof of submission. Parse the resulting status, timestamp, submitted URL, review state, and confirmation message.
- Keep no cookies, credentials, tokens, personal identifiers, broad browser history, or raw full-page dumps in Git.
- Finalize the browser session once, keeping only a result page the user needs as a deliverable or an unfinished page as a handoff.

## Change discipline

- Browser component changes require Red → Green → Refactor evidence in the active Day step packet.
- Sanitized DOM fragments may be used in tests. Do not copy account names, opaque assignment IDs, or unrelated LMS content into fixtures.
- The local test suite proves parsing and safety guards only. It does not authorize or simulate a real external submission.

