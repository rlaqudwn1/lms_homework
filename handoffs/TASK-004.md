# TASK-004 — Day 5 deployment continuation

- Owner: incoming Day 5 coordinator
- Track: course-mock deployment evidence
- Branch/worktree: `codex/day-02-next-save` / main working line
- Status: Day 2 submitted; Day 5 deployed and verified; LMS submission pending
- Handoff at: 2026-07-23 10:33 KST

## Completed dependency

- Public repository: `https://github.com/rlaqudwn1/lms_homework`.
- Ready PR: `https://github.com/rlaqudwn1/lms_homework/pull/1`, targeting `master`.
- Current branch head: `fc54a68ad4d06bdbc6e9a744b4d1dead1ecd1436` before this handoff-only commit.
- Day 2 LMS submission: `2026-07-23 10:33 KST`, marked `제출됨 · 지각`; code review pending.
- Verification: 8/8 unit tests, production build, browser flow, assignment harness, and fixture/no-Steam-request checks passed.

## First actions in the new task

1. Read `AGENTS.md`, this handoff, `assignments/README.md`, `assignments/day-05/PROGRESS.md`, and `docs/ACCESS-REGISTER.md`.
2. Run `git status --short --branch` and inspect PR #1 without merging it.
3. Review the Day 5 LMS requirement and prepare a scoped deployment runbook/step packet.
4. Identify the exact Vercel account, project, environment, and preview-versus-production choice needed from the owner.

## Reusable browser submission kit

- Read root `CLAUDE.md`, then `browser/CLAUDE.md` and `browser/PR-AND-LMS-SUBMISSION.md` for every browser/PR/LMS flow.
- `browser/components/lms-assignment.mjs` now provides exact-Day discovery, explicit-authorization guards, and receipt parsing.
- Day 2 is documented only as a sanitized example; never reuse its assignment identifier or approval for Day 5.
- Step evidence: `assignments/day-05/steps/step-01-browser-submission-kit/`.

## Authorization boundary

- The request to continue Day work authorizes local Day 5 inspection, planning, and documentation.
- It does not authorize merging PR #1, linking a Vercel account, creating a Vercel project, deploying, changing environment variables/domains, or submitting Day 5 to the LMS.
- Ask for the exact Vercel target and deploy type immediately before any external deployment action.
- Preserve the fixture-only boundary and do not add secrets or real Steam/profile/social data.

## Day 5 deployment result

- Personal Vercel scope/project: `kimbyeongju/next-save-course-mock` (authenticated CLI user: `rlaqudwn1`).
- Approved Preview: `https://next-save-course-mock-pundrek0l-kimbyeongju.vercel.app`; it is protected by Vercel Authentication.
- Public verification URL: `https://next-save-course-mock.vercel.app`.
- Deployed source: `fef598cc26c05e348030dbb5bb301f9dd870a2ae` from `codex/day-02-next-save`.
- Fresh-browser verification passed, including visible fixture disclosure and zero Steam-domain requests.
- The first CLI invocation unexpectedly targeted production; no environment variables or custom domains were added. Do not remove it without separate approval.
- PR #1 should be updated by pushing this evidence commit, but must not be merged. Day 5 LMS submission remains separately gated.

## Day 5 LMS submission result

- Submitted with explicit action-time approval at `2026-07-23 11:39 KST`.
- Submitted URL: `https://next-save-course-mock.vercel.app`.
- LMS receipt: `제출됨 · 지각`; code review `리뷰를 기다리고 있어요`.
- PR #1 remains open and unmerged.

## Important references

- `assignments/day-05/PROGRESS.md`
- `assignments/day-05/SUBMISSION.md`
- `assignments/day-02/SUBMISSION.md`
- `specs/course/next-save/SPEC.md`
- `specs/course/next-save/PRODUCT-EXPERIENCE.md`
- `docs/OPERATING-MODEL.md`
- `docs/ACCESS-REGISTER.md`
- `specs/HITL-DECISIONS.md`
