# Repository guidance for Claude-compatible agents

`AGENTS.md` is the operating charter for this repository and must be read first.

## Browser work routing

For any task involving Chrome, browser use, an LMS requirement, a PR submission link, or an LMS receipt:

1. Read [`browser/CLAUDE.md`](browser/CLAUDE.md).
2. Follow [`browser/PR-AND-LMS-SUBMISSION.md`](browser/PR-AND-LMS-SUBMISSION.md).
3. Use the installed `chrome:control-chrome` skill and its complete current documentation before controlling Chrome.
4. Reuse [`browser/components/lms-assignment.mjs`](browser/components/lms-assignment.mjs) only after a fresh DOM snapshot establishes the exact Day, title, field, and button.

The browser components are safety-checked helpers, not permission. PR publication, deployment, form entry, LMS submission, resubmission, and post-submission Git publication remain separate user-controlled gates under `AGENTS.md`.

