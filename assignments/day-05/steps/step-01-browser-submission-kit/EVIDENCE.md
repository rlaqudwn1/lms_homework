# Step 01 evidence

## TDD log

- Red: `npm test -- --run browser/components/lms-assignment.test.mjs` failed because `./lms-assignment.mjs` did not exist; zero tests executed.
- Green: the same command first exposed a real nested-status parsing defect (`Day` vs `미제출`), then passed 5/5 after the smallest parser correction.
- Refactor: split policy, workflow, example, template, and executable guards into separate files; `npm test` passed 13/13, the assignment harness passed, and `git diff --check` passed.

## Delivered artifacts

- Root routing: `CLAUDE.md`.
- Browser-local rules: `browser/CLAUDE.md`.
- Repeatable workflow: `browser/PR-AND-LMS-SUBMISSION.md`.
- Guarded component and tests: `browser/components/lms-assignment.{mjs,test.mjs}`.
- Sanitized precedent and reusable record: `browser/examples/day-02.md`, `browser/templates/DAY-PR-SUBMISSION.md`.

## External-action boundary

This step only creates local reusable browser guidance and components. It does not open, edit, or submit an LMS form and does not publish Git changes.
