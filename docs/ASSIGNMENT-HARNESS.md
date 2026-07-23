# Assignment harness

## Purpose

This harness turns a long sequence of LMS work into small, resumable proof packages. It is intentionally optimized for a course mock: every day can be assessed without silently turning NEXT SAVE into the production project.

## Recommended composition

```text
assignments/
  README.md                 # board: current state and next decision
  day-XX/
    PROGRESS.md             # goal, owner, state, dependencies, next action
    SUBMISSION.md           # evidence only; LMS timestamp remains empty until approved
    steps/
      step-XX-name/
        SPEC.md             # bounded outcome, scope, dependencies, acceptance tests
        PROGRESS.md         # owner/worktree, state, next action, blocker
        EVIDENCE.md         # red/green/refactor and final verification evidence
specs/
  course/next-save/         # canonical product SDD
  HITL-DECISIONS.md         # decisions that need the owner
handoffs/
  TASK-###.md               # pause/resume packet, when work changes hands
scripts/
  check-assignment-harness.ps1 # structural guard; no network or secret access
```

## Four rails

| Rail | What it prevents | Mechanism |
|---|---|---|
| Scope | A course assignment expanding into the real product | One core flow, explicit non-goals, fixture disclosure |
| Evidence | “Finished” without something assessable | Day-local progress and submission evidence |
| HITL | Accidental cost, public exposure, credentials, or LMS changes | Named checkpoint with exact target and reversal path |
| Resumption | Work losing context between short sessions | One next action, blocker, handoff and safe local check |

## State model

`planned → claimed → in-progress → local-review → ready-for-approval → submitted`

`blocked` is used only when a concrete decision or external prerequisite is missing. `submitted` requires the user's explicit LMS submission approval and timestamp.

## Step execution model

Create step packets only when a Day is actively claimed. Number them in dependency order; numbering communicates the normal merge sequence, not permission to ignore explicit dependencies.

- `SPEC.md` locks one outcome, in/out of scope, dependencies, file ownership, and acceptance checks before implementation.
- `PROGRESS.md` records owner, branch/worktree, current state, the next safe action, and any HITL blocker.
- `EVIDENCE.md` records the initial failing test/check, the passing implementation, refactor verification, and artifact links.
- Code-changing steps use red → green → refactor. Research, design, and documentation steps record a reproducible evidence check instead of manufacturing a meaningless test.
- Independent steps may run concurrently only when they have disjoint file ownership and no unmet data dependency. Shared manifests, lockfiles, Day rollups, canonical specs, and HITL logs belong to the coordinator.
- Parallel implementation uses separate worktrees with named branches and merge/reversal order. Read-only parallel review does not need a worktree.

## Required gates by assignment type

| Type | Local proof before HITL | HITL decision |
|---|---|---|
| Planning/design (6–8) | SDD section, diagram/screen, acceptance criteria | scope and design source |
| Build/deploy (2, 5, 16) | local build, responsive/keyboard check, mock disclosure | hosting project; Day 16 also domain/DNS |
| Data/API/auth (9–11, 13) | schema or adapter, test fixture/fallback, no secrets in Git | exact provider/project/credentials and data boundary |
| Worktree (14) | isolated branch evidence, tests and merge plan | whether custom-service substitution is instructor-acceptable |

## Why this is the right minimum harness

It avoids a heavyweight project-management tool while preserving the hard parts of coursework: traceable requirements, honest mock boundaries, short-session handoff, and owner approval immediately before irreversible external actions. Add CI only after the runtime exists; first make `build`, `test`, `lint`, and this structural check the stable local command set.
