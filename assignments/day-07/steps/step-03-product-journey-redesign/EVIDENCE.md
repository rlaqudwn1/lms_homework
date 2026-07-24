# Step 03 evidence

## Contract evidence

- Restored checkpoint:
  `C:\Users\rlaqu\.gstack\projects\rlaqudwn1-lms_homework\checkpoints\20260724-102601-next-save-product-journey-redesign.md`
- Safe baseline confirmed: `48145f1`, branch
  `codex/day-02-next-save`, clean worktree before Step 03 packet creation.
- Read authority: repository `AGENTS.md`, `assignments/README.md`, Day 7
  `PROGRESS.md`/`SUBMISSION.md`, canonical `SPEC.md`, `DESIGN.md`,
  `PRODUCT-EXPERIENCE.md`, `TASKS.md`, `specs/HITL-DECISIONS.md`,
  `docs/OPERATING-MODEL.md`, and Step 02's packet.

## Private upstream verification

- Read-only `gh` verification on 2026-07-24 KST:
  - `https://github.com/rlaqudwn1/idea`, private, default `master`, HEAD
    `56efd48215a791febf111ccd4a5a3965364a4598`;
  - `https://github.com/rlaqudwn1/design`, private, default `main`, HEAD
    `3aa6c37c1c7415ff74917a803037cc227c62b209`.
- Both HEADs matched the existing pins. No source drift required a product
  decision.
- Seven journey-critical local files already present under
  `assignments/day-02/resources/upstream/` matched their pinned remote Git blobs:
  `next-save.md`, `next-save-domains.md`, `atlas.tsx`, `Community.tsx`,
  `copy.ts`, `steam.ts`, and `direction.md`.
- Missing reference imported additively:
  `idea/specs/001-taste-atlas-landing/spec.md`.
  Remote/local Git blob:
  `baae55fdc1f90f9586a3d85f8ef85ac2ffd6369c`; SHA-256:
  `97ec4ccdc875e8cec3a9c4fae85bf1ee6f2411c8dfb8101cd7e019233228fe58`.
- Provenance, acquisition date, journey usage, future-Day freshness loop, and
  licence/use boundary:
  `assignments/day-02/resources/upstream/README.md` and
  `assignments/day-02/resources/SOURCE-MANIFEST.json`.
- The selective sync now refuses to overwrite an untracked or locally modified
  reference whose SHA-256 differs from the previous manifest.
- No upstream application code or Steam/CDN asset was copied into the product
  bundle. Step 03 continues to implement only abstracted behavior with original
  typed fixtures and local SVG art.

## Scope decision

Step 03 is a local follow-on product-journey refinement. The completed Day 7
submission contract remains intact. Day 2 `/` is a protected regression
surface.

## TDD evidence

- Red command: `npm test -- --run lib/prototype.test.ts`.
- Red result: 5 passed, 4 failed. Missing `detail`, `community`, and `media`
  contracts caused each new focused group to fail.
- Green result: 9/9 focused tests passed after adding a provider-neutral
  `createCandidate` fixture contract.
- Refactor result: full suite 25/25 passed and `npm run build` succeeded.
- Build routes: `/`, `/_not-found`, and `/prototype`; both product routes are
  statically generated.

## Research evidence

Four bounded read-only investigations completed; no research agent edited the
repository.

| Source | Adopt | Reject or defer |
|---|---|---|
| `idea@56efd48` | atlas discovery, grounded detail, facts before opinions, same-game community preview, atlas snapshot payoff | real matching, counts, sharing/export, separate live routes |
| `design@3aa6c37` | hover/focus preview, Enter/Space activation, detail dismissal, same-game review rule, restrained cartographic language | fixed Hollow Knight handoff, generic trending detour, live-Steam wording, unverified fact labels, Steam CDN hotlinks |
| Official media policies | original local fixture art; optionally a game-specific, explicitly permitted press-kit asset after approval | treating Steam/IGDB/RAWG as automatically licensed image sources |
| `ui-ux-pro-max` review | one `gameId` state chain, progressive disclosure, focus return, stacked 360 px detail, stable fallback, reduced-motion-safe scroll | hover-only markers, six-column mobile stepper, score wall, fake social proof, glass/glow |

### Coordinator decisions

1. Keep the redesign inside `/prototype` as an accessible state flow, not a new
   live product route.
2. Make exactly three atlas markers operable and synchronize each marker with a
   textual preview.
3. Carry one `gameId` through atlas, detail, receipt, and community. Changing it
   requires returning to the candidate chooser and clearing downstream state.
4. Render `게임 정보` and `내 기록 기반 해석` as separate typed and labelled
   regions. Each fact carries fixture/source status.
5. Allow same-game review examples only as labelled fixtures. Similar taste,
   counts, follow, export, and sharing remain disabled `coming soon`.
6. Use local original fallback art until a provider and exact asset rights are
   approved.

### Source anchors

- Idea: `ideas/next-save.md:43-47,68-75,87-120`;
  `ideas/next-save-domains.md:51-66`;
  `specs/001-taste-atlas-landing/spec.md:41-45,94-116,136-143` at
  `56efd48215a791febf111ccd4a5a3965364a4598`.
- Design: `atlas.tsx:343-376,444-581,593-661`;
  `components/Community.tsx:35-159`; `copy.ts:71-162`;
  `steam.ts:1-40`; `direction.md:102-159,193-208,250-251` at
  `3aa6c37c1c7415ff74917a803037cc227c62b209`.
- Official policy URLs:
  `partner.steamgames.com/doc/webapi_overview`,
  `partner.steamgames.com/doc/store/assets`,
  `store.steampowered.com/subscriber_agreement/`,
  `api-docs.igdb.com/`, `legal.twitch.com/en/legal/developer-agreement/`,
  `rawg.io/apidocs`, `rawg.io/tos_api`, and verified publisher-specific press
  kit terms when a title is selected.

## Image-provider gate evidence

Superseded by the user's 2026-07-24 approval in
`specs/HITL-DECISIONS.md`. The prototype now requests cover/header images from
`cdn.cloudflare.steamstatic.com/steam/apps/` using the pinned upstream
`steam.ts` convention. SVG fallbacks remain; no cookie, API key, entered
profile URL, or private player data is sent.

## Browser and regression evidence

- Reproducible verifier: `node scripts/verify-day-07-journey.mjs` with
  `DAY07_URL=http://localhost:3017/prototype`.
- The preferred `browse` executable could not start because its Windows bundle
  could not resolve `server.ts`; the built-in Node browser kernel also failed
  on its kernel-assets path. Verification continued through the repository's
  established raw Edge DevTools protocol pattern without adding dependencies.
- 1440 px: client/scroll width 1425/1425, six stages, three candidates, two
  disabled capabilities, same-game continuity, reduced motion, visible 3 px
  focus outline, focus handoff to the share section, zero console errors.
- 360 px: client/scroll width 360/360 with the same behavioral results.
- Network: approved public Steam CDN cover/header requests are expected; the
  verifier rejects every other external origin.
- Screenshots:
  `assignments/day-07/evidence/day-07-product-journey-desktop.png` and
  `assignments/day-07/evidence/day-07-product-journey-mobile-360.png`.
- Visual review: desktop preserves the calm decision hierarchy and makes the
  same-game chain legible; mobile collapses to one readable column without
  horizontal scrolling. All community and share surfaces remain visibly
  example-labelled or disabled.

### Final source-aligned visual pass

- Replaced the rejected intermediate workspace with an adaptation of pinned
  `capture/v09-full.png`, `page.tsx`, `atlas.tsx`, `Community.tsx`,
  `direction.md`, and `copy.ts`.
- Adopted: large decision-first hero, dark coordinate-grid field, pixel genre
  continents, atlas/recommendation split, game-led detail, and community
  continuation.
- Adopted after owner approval: real game names and Steam CDN covers. Still
  excluded: fixed Hollow Knight continuity, fake public statistics, private
  player data, and the source's horizontally clipped mobile behavior.
- Final browser verifier passed at 1440 px and 360 px: source-aligned six
  content regions, exactly three candidates, same-game continuity, two locked
  capabilities, reduced motion, focus preview/handoff, zero overflow, zero
  console errors, and only allowlisted public Steam cover requests.
- Post-approval run observed 12 requests to
  `https://cdn.cloudflare.steamstatic.com/steam/apps/...`, zero unexpected
  external origins, and preserved `Outer Wilds` across detail, receipt, and
  community.
