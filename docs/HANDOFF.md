# Handoff policy

The goal is that a person or agent can resume a paused task in five minutes without guessing.

## Ownership and scope

- Every change belongs to one `TASK-###` item in `STATUS.md`.
- Only one owner may edit a task's code or handoff at a time.
- Shared files (`STATUS.md`, shared specs, templates) are changed only by the coordinator. Other workers propose changes in their handoff.
- One worktree or branch owns one task. Do not modify another task's files to unblock it; record a dependency instead.
- Stop and mark `blocked` when the task needs a user decision, an external permission, credentials, or a scope change.

## Required handoff

Create `handoffs/TASK-###.md` before pausing, transferring work, or asking for review.

```md
# TASK-### — short title

- Owner:
- Track: course-mock | real-project | shared
- Branch/worktree:
- Status: ready | claimed | in-progress | paused | blocked | review | done
- Goal: one sentence
- Done: completed work and verification result
- Next: 1–3 exact next actions
- Files: changed or important paths
- Decisions: decision and reason
- Blocker: required information, approval, or account access
- Safe commands: exact commands to resume or verify
- Handoff at: YYYY-MM-DD HH:mm KST
```

Do not record secret values, cookies, tokens, OAuth codes, or personal data. Name the required variable or account instead.

## Pause and resume

1. Before pausing, save the current state, update `STATUS.md`, and write the handoff.
2. A new owner reads the handoff, checks `git status`, verifies the stated branch/worktree, then runs the listed safe verification command before editing.
3. A `claimed` task untouched for 24 hours becomes `stale`; the coordinator must reassign or pause it.

## Gates

| Gate | Required evidence |
|---|---|
| Spec | Scope, mock boundary, acceptance criteria, and day-assignment mapping are written |
| Review | Build/test result, scope check, and secret check are recorded |
| Submit | `SUBMISSION.md` has URL or PR, commit SHA, evidence, and user approval to submit |

LMS submission, deployment, account creation, permission changes, and any upload occur only after the user approves the exact action.

