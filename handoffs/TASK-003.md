# TASK-003 — NEXT SAVE product journey and community-preview continuation

- Owner: incoming coordinator
- Track: course-mock with cross-assignment product contract
- Branch/worktree: `codex/day-02-next-save` / main working line
- Status: complete; superseded by `TASK-004.md` after Day 2 publication and LMS submission
- Goal: revise the completed Claude Design direction with the restored product-wide community-preview contract, obtain owner visual approval, then implement the approved Day 2 slice through a new TDD packet.
- Handoff at: 2026-07-22 15:14 KST

## Done

- Owner approved the revised Claude Design direction on 2026-07-22 KST and explicitly authorized local frontend application.
- Implemented Step 08 through recorded Red → Green → Refactor: 8/8 tests, production build, and browser verification pass.
- Refreshed desktop, 360 px default, invalid, and success evidence screenshots with the fixture-safe community preview.

- Restored checkpoint context from `day-02-v010-visual-review` earlier in the task.
- Confirmed the existing local Day 2 v0.10-based implementation, 5/5 tests, build, browser flow, and four older evidence screenshots; those screens are no longer the chosen visual direction.
- Documented the first-party Claude Design Beta workflow under `docs/claude-design/` and Step 06.
- Created and revised the Claude Design project: `https://claude.ai/design/p/d9266124-ea4b-48b7-a75d-cf55c6148819`.
- Claude Design currently contains a game-community-style four-state landing and `NEXT SAVE Component Map / Wireframe`. Its current revision has three fictional recommendation cards, compact profiles, atlas, default/invalid/success mobile states, component anatomy, state matrix, responsive rules, and tokens.
- Two bounded read-only agents independently audited pinned idea commit `56efd48215a791febf111ccd4a5a3965364a4598` and design commit `3aa6c37c1c7415ff74917a803037cc227c62b209`.
- Reconciled the apparent community conflict:
  - community is the product's strategic retention moat;
  - v0 live community implementation is exactly zero;
  - the landing may show one fictional game profile and disabled `coming soon` community/snapshot capabilities;
  - accounts, live members/counts, friends/follows, feeds, sharing pipes, UGC, and moderation remain deferred.
- Added `specs/course/next-save/PRODUCT-EXPERIENCE.md` as the cross-assignment authority for actors, use cases, journeys, community preview, components, and scope ledger.
- Updated `specs/course/next-save/SPEC.md` and `DESIGN.md` to reference that authority while preserving assignment honesty.
- Added Step 07 documentation and updated the Day 2 rollup.
- `git diff --check` passes. No staging, commit, push, PR, deployment, public share, export, or LMS submission occurred.

## Completion record

- Public repository and ready PR #1 created on 2026-07-23 KST.
- Day 2 submitted to the LMS at 2026-07-23 10:33 KST and marked `제출됨 · 지각`.
- Continue from `handoffs/TASK-004.md` for Day 5 deployment preparation.

## Historical next safe action

1. Inspect the Step 08 production-render evidence and current dirty tree.
2. If the owner requests refinements, keep them inside the Step 08 fixture and product-scope contract and rerun all verification.
3. Do not stage, commit, push, open a PR, deploy, or submit to the LMS without a new explicit approval covering that exact action.

## Important files

- `AGENTS.md`
- `assignments/day-02/PROGRESS.md`
- `assignments/day-02/SOURCE-AUDIT.md`
- `assignments/day-02/resources/SOURCE-MANIFEST.json`
- `assignments/day-02/steps/step-06-claude-design-workflow/`
- `assignments/day-02/steps/step-07-product-experience-contract/`
- `assignments/day-02/steps/step-08-approved-dashboard-implementation/`
- `specs/course/next-save/PRODUCT-EXPERIENCE.md`
- `specs/course/next-save/SPEC.md`
- `specs/course/next-save/DESIGN.md`
- `assignments/day-02/resources/upstream/idea/ideas/next-save.md`
- `assignments/day-02/resources/upstream/idea/ideas/next-save-domains.md`
- `assignments/day-02/resources/upstream/design/components/Community.tsx`
- `assignments/day-02/resources/upstream/design/direction.md`

## Decisions and open HITL gate

- Owner approved using a product-wide document rather than a Day 2-only journey document.
- Owner requested the documents be reinforced and the work continued in a fresh Codex task.
- Owner approved the corrected Claude Design direction and local frontend application.
- Step 08 implements the approved composition and is locally verified.
- LMS submission always requires separate explicit approval, even after a PR exists.

## Do not do without approval

- Do not stage, commit, push, create a PR, deploy, publish/share Claude Design, connect GitHub, export source, or enter an LMS submission.
- Do not add real Steam data, real profiles, secrets, remote game art, or live community claims.
- Do not implement friends, follows, a social feed, live counts, reviews, comments, likes, sharing pipes, or moderation.
- Do not claim `superpowers` was used; it is not installed.

## Safe resume commands

```powershell
git status --short --branch
Get-Content -LiteralPath AGENTS.md -Raw
Get-Content -LiteralPath handoffs/TASK-003.md -Raw
Get-Content -LiteralPath specs/course/next-save/PRODUCT-EXPERIENCE.md -Raw
Get-Content -LiteralPath assignments/day-02/PROGRESS.md -Raw
git diff --check
```
