# Handoff packets

Create `TASK-###.md` only when work pauses, changes owner, or must be resumed in a later session.

Each packet must contain:

1. Goal, current assignment day, owner, branch/worktree, and KST timestamp.
2. Completed work and verification evidence.
3. The one next safe action and relevant file paths.
4. Open HITL decision or blocker, plus what not to do without approval.
5. Exact safe resume commands, beginning with `git status`.

The incoming owner reads this packet before editing and updates the related `assignments/day-XX/PROGRESS.md` after resuming.
