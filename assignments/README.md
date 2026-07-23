# Assignment delivery board — Day 2 to Day 16

This board tracks only the incomplete LMS work required before Day 16. It is a planning and evidence harness, not an LMS submission record.

| Day | Folder | Deliverable | Local state | Next checkpoint |
|---|---|---|---|---|
| 02 | [day-02](day-02/PROGRESS.md) | React project-introduction page | submitted · late | Await code review |
| 05 | [day-05](day-05/PROGRESS.md) | GitHub + Vercel deployment | submitted · late | Await code review |
| 06 | [day-06](day-06/PROGRESS.md) | Prototype planning | evidence drafted | Scope gate |
| 07 | [day-07](day-07/PROGRESS.md) | Prototype design | evidence drafted | Design gate |
| 08 | [day-08](day-08/PROGRESS.md) | Database design | planned | Minimal schema approval |
| 09 | [day-09](day-09/PROGRESS.md) | Supabase test schema | planned | Supabase target approval |
| 10 | [day-10](day-10/PROGRESS.md) | Service–Supabase slice | planned | Integration gate |
| 11 | [day-11](day-11/PROGRESS.md) | One Open API enrichment | planned | API choice approval |
| 13 | [day-13](day-13/PROGRESS.md) | Google login | planned | OAuth target/test-account approval |
| 14 | [day-14](day-14/PROGRESS.md) | Worktree feature evidence | planned | Instructor compatibility decision |
| 16 | [day-16](day-16/PROGRESS.md) | Vercel + custom domain | HITL pending | Domain, registrar and Vercel target |

## How to use this harness

1. Claim the next implementation task in [`../specs/course/next-save/TASKS.md`](../specs/course/next-save/TASKS.md).
2. Update the corresponding `PROGRESS.md` after each meaningful check; link evidence rather than pasting large logs.
3. Resolve the named HITL decision in [`../specs/HITL-DECISIONS.md`](../specs/HITL-DECISIONS.md) before any external action.
4. Complete `SUBMISSION.md`, then pass the mandatory local preview gate before any staging, deployment, or LMS submission.

Run `powershell -ExecutionPolicy Bypass -File scripts/check-assignment-harness.ps1` to validate the folder contract locally.
