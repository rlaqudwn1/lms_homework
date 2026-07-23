# HITL decisions

Use this log for product, environment, and submission decisions that an agent must not infer.

## Day 2 runtime and demo-entry scope

- Decision: Use Next.js App Router + TypeScript + Tailwind CSS and exactly two fictional seeded profiles for the Day 2 introduction/demo-entry slice.
- Owner: User
- Date (KST): 2026-07-22
- Status: approved
- Scope / affected assignment: Day 2 `TASK-001`, `TASK-003`, `TASK-004`.
- Chosen option and reason: Keep the course slice small, locally verifiable, and reusable by later assignment Days.
- Exact target/environment: local branch `codex/day-02-next-save`; browser-only fixture selection.
- Risks and mock boundary: no live Steam request, persistence, authentication, deployment, or real profile data.
- Reversal path: remove the local app files and restore the prior package manifest before publication.
- Evidence / links: `assignments/day-02/steps/` and `assignments/day-02/evidence/`.

## Day 2 Git publication authority — superseded

- Decision: Commit and push the reviewed Day 2 branch after the mandatory rendered-screen review.
- Owner: User
- Date (KST): 2026-07-22
- Status: superseded after user rejected the visual direction; no publication executed
- Scope / affected assignment: Day 2 implementation, step packets, verification evidence, and directly related operating-model updates.
- Exact target/environment: `origin`, branch `codex/day-02-next-save`.
- Risks and mock boundary: push does not authorize a PR, deployment, external account changes, or LMS submission.
- Reversal path: follow-up revert commit or delete the remote feature branch after separate confirmation.
- Evidence / links: user instruction in the active Codex task; commit SHA recorded after execution.

## Day 2 source sync, composition, and PR submission

- Decision: Refresh the latest usable NEXT SAVE resources, compose them with the tested Day 2 behavior, create only missing resources as needed, and use a GitHub PR URL as the LMS submission artifact.
- Owner: User
- Date (KST): 2026-07-22
- Status: source sync approved and complete; composed render review pending
- Scope / affected assignment: Day 2 visual specification, implementation, review evidence, and eventual PR.
- Exact target/environment: `rlaqudwn1/lms_homework`, feature branch and PR target to be confirmed after visual approval.
- Chosen option and reason: imported design v0.10 already supplies the missing Hero connected-continent teaser and coordinate grid. Claude Design/Pencil remains available for genuinely missing atlas texture after its source-defined spec gate, not as a mandatory duplicate of approved upstream work.
- Risks and mock boundary: the rejected prototype must not be published; imported `steam.ts` and remote-font patterns are reference-only; PR creation and LMS submission remain separate HITL actions.
- Reversal path: retain the rejected prototype only until the approved redesign passes regression tests, then replace it in the same feature branch.
- Evidence / links: `assignments/day-02/SOURCE-AUDIT.md`, `assignments/day-02/resources/SOURCE-MANIFEST.json`.

## Day 2 revised visual implementation

- Decision: Approve the revised Claude Design desktop, 360 px default/invalid/success states, and component map, then apply that composition to the local frontend through a new TDD step packet.
- Owner: User
- Date (KST): 2026-07-22
- Status: approved for local implementation only
- Scope / affected assignment: Day 2 Step 08 and its fixed application/test files.
- Chosen option and reason: The revised design preserves the decision-first dashboard while previewing the product horizon without implying live community behavior.
- Exact target/environment: local branch `codex/day-02-next-save`.
- Risks and mock boundary: all games, profiles, facts, and interpretations remain fixtures; no accounts, live users/counts, relationships, feeds, UGC, sharing pipes, or remote assets.
- Reversal path: revert only Step 08-owned application files to the last locally verified composition.
- Evidence / links: `assignments/day-02/steps/step-08-approved-dashboard-implementation/` and the active Codex task.

## Pending — Day 16 domain connection

- **Decision:** Select the registrar, exact domain, and Vercel target for the course slice.
- **Owner:** User
- **Status:** Pending
- **Deadline:** 2026-07-23 10:00 KST
- **Options:** Purchase a new course-slice domain; use an existing user-owned domain; request instructor confirmation that a preview URL is acceptable.
- **Required confirmation before execution:** Exact domain, registrar account, annual price/renewal terms, Vercel project, and DNS-change approval.
- **Reversal:** Remove the Vercel domain assignment and restore prior DNS records; do not cancel a purchased domain without separate user approval.

## Decision record template

```md
## <decision title>

- Decision:
- Owner:
- Date (KST):
- Status: pending | approved | rejected | superseded
- Scope / affected assignment:
- Options considered:
- Chosen option and reason:
- Exact target/environment:
- Risks and mock boundary:
- Reversal path:
- Evidence / links:
```
