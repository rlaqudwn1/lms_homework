# Step 03 — product journey redesign

## Goal

Refine the existing Day 7 `/prototype` as a product-vision preview
that restores this continuity:

`아틀라스에서 게임 발견 → 실제 게임 상세 → 오늘 선택 → 같은 게임의 커뮤니티 → 비슷한 취향 → 아틀라스 공유`

This is a follow-on refinement. It does not replace, reopen, or expand the
already satisfied Day 7 LMS requirement, and it does not change the Day 2 `/`
landing.

## Product contract

- Preserve `기록보다 결정`, exactly three candidates, traceable reasons, and
  the calm decision-instrument visual language.
- The atlas recommendation, game detail, selection receipt, and community
  preview must refer to the same game.
- Separate public, game-level facts from example player-level
  interpretation in data, copy, markup, and tests.
- Keep all profile/history interpretation visibly disclosed as example data.
- Show user-base-dependent features, similar-player discovery, reviews,
  snapshot export, and sharing as examples or `coming soon`; do not imply live
  users, activity, member counts, UGC, or functioning social actions.
- Real game display names may be used as catalogue examples, but they must stay
  outside the fictional personal-history model.

## Scope

### Implement or refine

1. Atlas continent hover/focus selects a grounded recommendation; activation
   opens or reveals that same game's detail.
2. Detail presents objective game facts separately from `내 기록 해석`.
3. `오늘 선택` retains a rationale receipt for the same game.
4. Community preview is entered through the selected game and contains
   same-game example reviews only.
5. Similar-taste and atlas-share surfaces are visibly locked previews.
6. All media slots use approved public Steam covers, useful alt text, and a
   deterministic local fallback.

### Non-goals

- Authenticated Steam libraries, cookies, accounts, personal history, authentication,
  persistence, database changes, external APIs, deployment, or LMS submission.
- Working community, review submission, matching, follow, feed, export, or
  sharing behavior.
- Changes to the Day 2 `/` composition.

## Dependencies

```text
pinned idea/design research + image policy + independent UX review
                              ↓
coordinator synthesis and image-provider HITL record
                              ↓
typed data contract + failing tests
                              ↓
atlas/detail continuity → selection receipt → community locked previews
                              ↓
coordinator CSS/integration → browser verification → Day 7 rollup
```

- Source authority: `idea@56efd48`, `design@3aa6c37`, canonical course specs,
  and the restored checkpoint.
- Shared files remain coordinator-owned: canonical specs, Day rollups,
  `specs/HITL-DECISIONS.md`, shared CSS, `lib/prototype.ts`, exports,
  manifests, and lockfiles.
- Read-only research may run in parallel. Code edits remain serial unless a
  separate worktree, fixed ownership, merge order, and reversal plan are first
  recorded here.

## TDD contract

### Red

Add focused failing tests before production edits for:

1. atlas recommendation → same game detail → same game receipt → same game
   community continuity;
2. exactly three candidates for each fixture;
3. structural separation of objective game facts and personal interpretation;
4. no invented member/activity counts or enabled deferred social actions;
5. media alt text and deterministic local fallback;
6. example-profile disclosure, approved Steam cover requests, and no private
   Steam/account request;
7. preservation of the Day 2 `/` route.

Record the failing assertion and command in `EVIDENCE.md`.

### Green

Implement the smallest change that passes the focused tests and
the existing regression suite.

### Refactor

Improve types, component boundaries, copy, and shared styling without changing
the contract. Rerun focused tests, full tests, production build, and browser
checks.

## Verification contract

- Desktop at 1440 px and mobile at 360 px.
- Keyboard-only journey, visible focus, modal/detail focus handoff and return.
- `prefers-reduced-motion` behavior.
- Zero horizontal overflow and zero browser console errors.
- Exactly three candidates and same-game continuity through every implemented
  stage.
- Objective facts and personal interpretation remain visually and
  semantically separate.
- Every deferred/community surface is example-labelled or disabled.
- Public Steam CDN cover requests occur; no request targets an unapproved
  provider or includes private player data.

## Image-provider HITL gate

Status: **pending; hard stop for remote media implementation**.

The coordinator may research and design provider-neutral media contracts and
local fallbacks. Before any third-party image URL, request, hotlink, cache,
download, API key, or attribution implementation, the user must approve:

- exact provider and asset class;
- licence/terms basis and permitted course/demo use;
- attribution and link requirements;
- hotlink versus local-cache policy;
- failure, takedown, and offline fallback behavior;
- whether the approval covers local preview, public Git, deployment, or each.

Until approved, use only existing original local fixture art or neutral local
fallbacks.

## Ownership and parallelization

- Coordinator: this packet, synthesis, canonical/shared files, product
  decisions, HITL records, integration, and final evidence.
- Research A: pinned idea contracts, read-only.
- Research B: pinned design behavior/copy/assets, read-only.
- Research C: game image/metadata policy, read-only; no account/key/request.
- Research D: `ui-ux-pro-max` independent UX review, read-only.
- No parallel code-edit owner or worktree is authorized by this packet yet.

## Rollback

- Safe baseline: `48145f1` on `codex/day-02-next-save`.
- Keep changes isolated to this step until combined verification passes.
- If a later isolated worktree is approved, record its branch, base SHA, owned
  files, merge order, verification, and reversal commit before edits.
- Revert or omit only the step-owned change; never use destructive
  reset/checkout against user work.
- Preserve the current `/prototype` and Day 2 `/` if integration fails.

## External-action gate

Do not stage, commit, push, merge/close PR #1, deploy, change
Supabase/Vercel, or submit to the LMS without separate action-time approval.
