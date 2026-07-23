# LMS assignment map for a small SDD project

Use the table as a coverage checklist, not as a requirement to reproduce mini-Notion.

| Day | LMS requirement | Small-project evidence | Mock-friendly boundary |
|---|---|---|---|
| 2 | React-based main-project introduction site | Landing page and one core-flow entry point | Static content is acceptable |
| 5 | GitHub and Vercel deployment | Private Git history and deploy URL | Preview deployment is sufficient unless stated otherwise |
| 6 | Admin service or prototype planning | `SPEC.md` product brief and flow | No implementation required |
| 7 | Prototype/admin design | `DESIGN.md` and supplied screens | Use only needed screens |
| 8 | Core DB design | `data-model` section with entities and relationships | Diagram or written schema before DB creation |
| 9 | Create designed DB in Supabase | Small test-project schema | Seed/test data only |
| 10 | Connect service and Supabase | One read/write flow, excluding login | One table or feature slice is enough |
| 11 | Connect an Open API | One user-visible enrichment | Use a non-sensitive public API |
| 13 | Google login | Test-account OAuth flow and protected profile area | No production user rollout |
| 14 | Worktree feature completion | 2–3 independent scoped features with merge evidence | Features follow the user's product, not Notion UI |

| 16 | Vercel deployment and custom-domain connection | Final HTTPS URL, domain/DNS evidence and fresh-browser smoke test | Course slice remains separate from production; purchase and DNS are HITL |

## Minimum submission package

For each day, create `assignments/day-XX/SUBMISSION.md` containing the requirement, submitted URL or PR, commit SHA, verification steps, mock disclosure, and any user-approved LMS submission timestamp.
