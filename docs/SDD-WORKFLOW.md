# Small SDD workflow: PRD to submission

This workflow intentionally keeps course work small. It creates a submit-ready vertical slice, not a complete version of the user's product.

## Phase 1 — Intake and track decision

1. Copy [PRD intake](../specs/PRD-INTAKE.md) into `specs/intake/YYYY-MM-DD-<name>.md`.
2. Attach or link the user's design.
3. Choose one: `course-only mock`, `reusable course slice` (default), or `real-project foundation`.
4. Write a **hold list**: every product feature deliberately excluded from the course slice.

Stop here if the core flow, design source, or mock boundary is unknown.

## Phase 2 — Four-file SDD package

Create one folder, for example `specs/course/<name>/`, containing:

| File | Required content |
|---|---|
| `SPEC.md` | One user flow, 3 or fewer core features, non-goals, measurable acceptance criteria |
| `DESIGN.md` | Design source, 2–4 screens, components, responsive/accessibility notes |
| `TASKS.md` | 30–90 minute tasks, dependencies, owner, branch/worktree, verification command |
| `SUBMISSION.md` | Day mapping, mock disclosure, planned deploy/PR, evidence checklist |

No implementation begins until the mock boundary and acceptance criteria are written.

## Phase 3 — Course-slice implementation

Build in this order:

1. Static landing or entry screen.
2. One data-backed user action, using a fixture or test Supabase project as declared.
3. One visible result after refresh.
4. One assignment-specific integration at a time: deployment, Open API, or Google login.

Do not add payments, multi-role administration, complex notifications, multi-tenant data, or production operations merely because they appear in the full PRD.

## Phase 4 — Submission checkpoints

| Checkpoint | Evidence |
|---|---|
| Spec review | SDD package and assignment mapping are complete |
| Demo review | Core flow works; mock limitations are visible or documented |
| Security review | No secret is tracked; test/project target is correct |
| Submission review | URL or PR, commit SHA, screenshots if needed, and Day requirement evidence |

Only after the final checkpoint may the user approve an L4 LMS submission.

## Phase 5 — Promote selectively

After course review, move only stable, generic items to the real project: design tokens, a generic component, a type, or a validated user-flow insight. Do not copy mock credentials, seed data, course-only shortcuts, or submission evidence.

