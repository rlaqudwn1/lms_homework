# NEXT SAVE course project brief

## Executive summary

NEXT SAVE is an assignment-sized interactive product demo for Steam players who own many games but struggle to choose what to start. A user enters a Steam-style profile URL, sees an explicit demo-data disclosure, receives a taste atlas and three evidence-backed game recommendations, and selects one game as tonight's choice.

The project reuses the strongest product reasoning from the private `idea` repository and the strongest visual direction from the private `design` repository. It does not merge either repository wholesale and does not claim to be a production Steam service.

## Product promise

> 오늘 시작할 한 판을, 이유와 함께.

- Primary user: a time-poor adult Steam player with roughly 100–500 owned games.
- Core problem: existing libraries and trackers provide another long list instead of a small, trustworthy decision.
- Differentiator: a taste atlas plus recommendation reasons tied to visible profile signals.
- Assignment outcome: a polished, deployed, testable vertical slice with honest fixture disclosure.

## Source-to-deliverable map

| Source | Reused material | Local destination |
|---|---|---|
| `idea/ideas/next-save.md` | problem, ICP, wedge, risky assumptions, non-goals | `SPEC.md`, submission narrative |
| `design/.../brief.md` | decision-paralysis evidence and user job | landing copy and rationale |
| `design/.../direction.md` | ink-navy stage, Pretendard, teal, atlas semantics | `DESIGN.md`, tokens and components |
| `design/.../copy.ts` | reviewed Korean voice | interface copy after source review |
| `design/.../page.tsx`, `atlas.tsx` | structural and interaction reference | selective component port only |

Pinned source commit hashes are recorded in `specs/intake/2026-07-22-next-save.md`.

## Base experience

One responsive route is sufficient for the first complete slice:

1. Decision-first hero and Steam profile URL field.
2. Visible `예시 데이터 · 데모` boundary.
3. Two fictionalized seeded profiles with different play signals.
4. A labelled taste atlas with non-color text equivalents.
5. One primary play-style core, confidence, secondary tags, and evidence.
6. Exactly three deterministic recommendations with time, fit, and traceable reasons.
7. A `오늘의 한 판` action and persistent selection receipt.

The input is presentation-only. The base slice makes no Steam request and stores no real Steam URL.

## Technical baseline

- Proposed app: Next.js, TypeScript, Tailwind CSS.
- Testing: unit tests for URL validation and deterministic recommendation logic; one browser-level core-flow test.
- Visual QA: desktop and 360 px, keyboard focus, reduced motion, console and network inspection.
- Hosting: Vercel, only after target-specific approval.
- Optional database: Supabase test project, added as a later assignment slice.
- Installed tooling: Claude CLI `2.1.217`, Vercel CLI `56.4.1`, Supabase CLI `2.109.1`.
- Local Supabase prerequisite: Docker Desktop engine running.

## Assignment and PR plan

Each assignment is implemented and reviewed independently. Before every PR, the user receives the rendered result and verification package described in `docs/DESIGN-AND-PREVIEW-WORKFLOW.md`.

| Wave | LMS evidence | Proposed PR scope | Exit evidence |
|---|---|---|---|
| 0 | Day 6–7 | SDD, source lock, design rules | reviewed documents |
| 1 | Day 2 | responsive landing and fixture-driven core flow | build, screenshots, browser flow |
| 2 | Day 5 | Vercel-ready configuration and approved preview | preview URL and smoke test |
| 3 | Day 8–10 | minimal schema and one selection read/write flow | migration, RLS notes, test record |
| 4 | Day 11 | one public metadata enrichment with fixture fallback | success/failure-path evidence |
| 5 | Day 13 | Google login for a protected history route | test-account OAuth evidence |
| 6 | Day 14 | two independent worktree features | PR and merge evidence |
| 7 | Day 16 | approved deployment and custom domain | HTTPS/domain verification |

Wave 1 is the primary quality target. Later waves must not delay a polished core flow.

## Supabase plan

Supabase is not required for the base demo. When its assignment begins:

- Use a named test project or local stack, never production data.
- Store `session_id`, `demo_profile_key`, `selected_game_id`, and `selected_at` only.
- Do not store the submitted Steam-style URL.
- Define migration and RLS policy before the first remote write.
- Show the exact project and migration plan to the user before linking or applying it.

## Vercel plan

- Complete a successful local production build first.
- Show local desktop/mobile results before any deployment.
- Obtain approval for the exact Vercel account, team, and project before login/link/deploy actions.
- A preview deployment, production deployment, and custom-domain connection are separate approvals.
- Record URL, commit SHA, verification time, and limitations in the applicable Day submission.

## Design execution

- Claude is an independent design reviewer, not the source of truth.
- The pinned idea/design sources and local SDD control scope and visual rules.
- Browser verification evaluates the actual render, responsive states, interaction, accessibility-visible behavior, console, and network activity.
- Computer Use is a fallback for desktop-only surfaces that browser control cannot reach.
- Material visual changes return to the user review gate before publication.

## Explicit non-goals for the course slice

- Live Steam library ingestion or arbitrary profile support.
- A production ML recommender or claims of scientific archetype validity.
- Social feed, follows, reviews, moderation, payments, or production analytics.
- Production OAuth rollout or storage of private user data.
- Merging the source repositories into the assignment history.

## Decisions still requiring the user

1. Approve the proposed Next.js/TypeScript/Tailwind baseline before app scaffolding.
2. Approve the current mock boundary and two seeded profiles.
3. Approve the final rendered design after desktop/mobile review.
4. Name the Supabase and Vercel targets before external linking.
5. Approve each PR after seeing its result package.
6. Separately approve deployment, domain/DNS operations, and LMS submission.

## Definition of overall success

- A reviewer can understand the problem and complete the core flow without instruction.
- Every recommendation reason maps to fixture data.
- Mock/live boundaries are unmistakable.
- The result works at 360 px and with keyboard navigation.
- Build, tests, browser verification, deployment evidence, and known limitations are recorded.
- No external publication or representational action occurs without the corresponding user approval.
