# NEXT SAVE — implementation tasks

Tasks are sized for 30–90 minutes. Claim an owner and branch before editing; record the verification result when complete.

| ID | Task | Depends on | Owner / branch | Verification | Status |
|---|---|---|---|---|---|
| TASK-001 | Confirm runtime (`Next.js + TypeScript + Tailwind`) and scaffold the app | SDD approval | coordinator / `codex/day-02-next-save` | dev server and production build passed | complete |
| TASK-002 | Define two typed profile fixtures and deterministic ranking | TASK-001 | unassigned / - | unit tests show stable, distinct outcomes | ready |
| TASK-003 | Build page shell, tokens, responsive nav and hero | TASK-001 | coordinator / `codex/day-02-next-save` | compose with source-locked design v0.10 and review render | in-progress |
| TASK-004 | Implement labelled URL form and demo disclosure | TASK-003 | coordinator / `codex/day-02-next-save` | behavioral tests exist; rerun after redesign | blocked |
| TASK-005 | Implement accessible taste atlas and text equivalent | TASK-002, TASK-003 | unassigned / - | legend, labels, no-color text summary | blocked |
| TASK-006 | Implement core summary and traceable evidence | TASK-002, TASK-005 | unassigned / - | every statement maps to fixture fields | blocked |
| TASK-007 | Implement three recommendation cards and detail disclosure | TASK-002, TASK-003 | unassigned / - | exactly three ranked cards per profile | blocked |
| TASK-008 | Implement selection receipt and restart path | TASK-007 | unassigned / - | end-to-end transition test | blocked |
| TASK-009 | Add responsive, reduced-motion and accessibility polish | TASK-004–008 | unassigned / - | keyboard check + Lighthouse report | blocked |
| TASK-010 | Create Day 2/6/7 evidence and submission screenshots | TASK-009 | unassigned / - | required fields in day submissions | blocked |
| TASK-011 | Deploy preview and record URL/commit SHA | TASK-009 | unassigned / - | fresh-browser smoke test | blocked |

## Optional follow-on tasks

These are separate LMS slices, not part of the base acceptance criteria.

- Day 8–10: design a minimal `selection_sessions` table and persist a fictional profile key plus chosen game ID in a test Supabase project.
- Day 11: add one non-sensitive public game metadata enrichment with a fixture fallback.
- Day 13: add Google login only to a protected profile route; keep the core demo public.
- Day 14: split two independent features into worktrees and preserve merge evidence.
