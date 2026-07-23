# Reusable browser submission kit

This directory turns the Day 2 browser work into a repeatable, guarded process for later LMS Days.

| Path | Purpose |
|---|---|
| `CLAUDE.md` | Scoped instructions for any Claude-compatible agent doing browser work |
| `PR-AND-LMS-SUBMISSION.md` | End-to-end PR and LMS workflow with approval gates |
| `components/lms-assignment.mjs` | Exact-Day discovery, guarded form actions, and receipt parsing |
| `components/lms-assignment.test.mjs` | Sanitized contract and guard tests |
| `examples/day-02.md` | What the verified Day 2 browser sequence actually did |
| `templates/DAY-PR-SUBMISSION.md` | Per-Day evidence record to copy into the active step packet |

## What is reusable

- exact-Day selection from a fresh assignment-list snapshot;
- requirement/title/status extraction before submission;
- approval matching against Day, assignment name, LMS origin, detail URL, and artifact URL;
- unique textbox/button checks;
- authoritative receipt extraction after submission.

## What is deliberately not reusable

- cookies, login state, account names, assignment UUIDs, or one user's open-tab IDs;
- a hard-coded Day 2 link;
- implicit permission to publish, deploy, submit, or resubmit;
- broad LMS scraping or storage of unrelated course content.

