# LMS Assignment Workspace — operating charter

## Purpose

This repository turns NEXT SAVE into a small, honest, submit-ready course slice. It is not the production repository and it must not silently become one.

## Default operating loop

1. Start at `assignments/README.md`; select one current LMS day and its next checkpoint.
2. Read that day’s `PROGRESS.md`, the canonical SDD in `specs/course/next-save/`, and the relevant intake.
3. Claim one `assignments/day-XX/steps/step-XX-name/` packet, follow its SPEC, and update its progress/evidence plus the Day rollup.
4. Stop at a HITL gate before any external or irreversible action.
5. If pausing, create or update `handoffs/TASK-###.md`; the next owner resumes from it.

## Authority and safety

- The user decides product direction, real data, external accounts, money, domains/DNS, deployments, OAuth, Git publishing, and LMS submission.
- Course mocks must visibly disclose fixtures, simulation, and test-only boundaries.
- Keep secrets, cookies, real `.env` files, and personal Steam data out of Git and handoffs.
- Preserve unrelated dirty-worktree changes. Do not stage, commit, push, deploy, create a PR, or submit to the LMS without explicit approval.

## Worktree rule

Use one working line by default. These assignments are mostly serial: the Day 2 slice enables Day 5, which enables later data, API, authentication, and deployment evidence.

Create a separate worktree only when it creates real isolation value:

- Day 14 explicitly requires worktree evidence;
- two approved, independently testable implementation tasks run in parallel;
- an experiment or risky integration must not disturb the stable course slice.

Read-only research does not need a worktree. A worktree never replaces the day packet or HITL gate.

## Step packets and TDD

- Break an active Day into ordered `steps/step-XX-name/` packets. Each implementation step owns `SPEC.md`, `PROGRESS.md`, and `EVIDENCE.md`; do not create empty packets for future work.
- Express dependencies explicitly. Steps with no shared-file or data dependency may run in parallel; dependent steps remain serial.
- Every code-changing step uses red → green → refactor: first record a failing test or reproducible check, implement the smallest passing change, then refactor while the same checks stay green.
- Documentation, research, and review-only steps may use evidence checks instead of artificial tests.
- Shared Day rollups, canonical specs, dependency manifests, lockfiles, and HITL records have one coordinator owner and are merged serially.

## Agent rule

Work locally for a clear single task. Use a bounded agent only for independent review, parallel source research, or an isolated implementation step with fixed file ownership. Parallel code edits require separate worktrees and a written merge/reversal plan. Synthesize results into the Day rollup; the coordinator retains shared files, product, and HITL decisions.

## Detailed operating documents

| Need | Source of truth |
|---|---|
| Current assignment, state, and next action | `assignments/README.md`, then `assignments/day-XX/PROGRESS.md` |
| Per-day evidence | `assignments/day-XX/SUBMISSION.md` |
| Product specification and tasks | `specs/course/next-save/` |
| Material decisions and approval gates | `specs/HITL-DECISIONS.md` |
| Full workflow, gates, agent and worktree criteria | `docs/OPERATING-MODEL.md` |
| Harness structure and validation | `docs/ASSIGNMENT-HARNESS.md`, `scripts/check-assignment-harness.ps1` |
| Pause and resumption packet | `handoffs/README.md` |
| Tool and account access boundaries | `docs/ACCESS-REGISTER.md` |
| Design and preview process | `docs/DESIGN-AND-PREVIEW-WORKFLOW.md` |
