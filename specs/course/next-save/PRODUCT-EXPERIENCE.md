# NEXT SAVE product experience contract

## Purpose

This document is the cross-assignment source of truth for NEXT SAVE actors, use cases, user journeys, and the staged community strategy. Individual LMS days may implement only a disclosed slice of this contract; they must not erase the longer product direction or present deferred capabilities as live.

## Authority and precedence

1. Product scope and sequencing: [`ideas/next-save.md`](https://github.com/rlaqudwn1/idea/blob/56efd48215a791febf111ccd4a5a3965364a4598/ideas/next-save.md).
2. Product-domain ledger: `ideas/next-save-domains.md` at the same pinned idea commit.
3. Landing specification: `specs/001-taste-atlas-landing/spec.md` at the same pinned idea commit.
4. User/problem evidence and visual rationale: [`brief.md`](https://github.com/rlaqudwn1/design/blob/3aa6c37c1c7415ff74917a803037cc227c62b209/app/e/003-next-save-landing/brief.md) and `direction.md` at that pinned design commit.
5. Course-slice behavior and honesty: [`SPEC.md`](./SPEC.md) wins for what an assignment actually claims to run.
6. Course-slice visual and accessibility rules: [`DESIGN.md`](./DESIGN.md) win for the rendered assignment surface.

Historical design experiments may supply patterns and assets, but they do not promote deferred product capabilities into a current implementation.

## Product promise

NEXT SAVE turns a player's Steam history into a taste atlas, uses traceable signals to explain what to play next, and may later turn that atlas into a shareable identity surface and archetype community.

The strategic sequence is:

1. evidence-backed recommendation as the acquisition wedge;
2. taste atlas and archetype as the identity bridge;
3. atlas snapshot expression as the sharing hypothesis;
4. archetype community as a possible retention moat after the sharing hypothesis is validated.

Community is part of the product vision. It is not permission to imply that accounts, live users, social graphs, reviews, or sharing pipes already exist.

## Primary actors

### Time-poor library owner

- Has a large Steam library and does not want to maintain another list manually.
- Wants one credible choice for tonight and a reason grounded in personal play signals.
- Needs reassurance that low play time or an unfinished game is not being framed as failure.

### Identity explorer

- Wants to understand recurring genre and play-style patterns.
- May value a static atlas snapshot as an expression artifact.
- Sharing demand remains a hypothesis until separately validated.

### Future archetype-community participant

- May want to discover people with a similar soft core and compare game-level context.
- Is not a current Day 2 account holder, follower, reviewer, or live community member.

## Product-wide use cases

| ID | Use case | Outcome | Current status |
|---|---|---|---|
| UC-01 | Enter or select a profile | A disclosed fixture or future authorized profile supplies the analysis signals. | Day 2 fixture implementation |
| UC-02 | Inspect the taste atlas | The player sees connected genre regions, a primary soft core, confidence, secondary tags, and evidence. | Course core |
| UC-03 | Review evidence-backed next picks | Exactly three recommendations explain why they fit using traceable signals. | Course core |
| UC-04 | Inspect a game profile | A recommended game connects game-level time/progress facts to a clearly separated personal interpretation. | Preview/next slice |
| UC-05 | Choose tonight's game | The player selects a pick and receives a persistent rationale receipt. | Course contract; implementation varies by day |
| UC-06 | Render an atlas snapshot | The atlas becomes one static, visibly labelled expression artifact. | Hypothesis preview; sharing pipe deferred |
| UC-07 | Discover similar archetypes | A future community may show people and aggregate context for the same soft core. | Coming soon; matching rule unresolved |
| UC-08 | Read or contribute opinions | Reviews may become an optional layer after objective facts and personal interpretation. | Deferred; no current UGC/moderation |

## Journey A: assignment-safe decision flow

1. **Discover** — read the decision-first promise and the fixture/no-Steam disclosure.
2. **Enter** — paste a valid-looking URL or choose one of two fictional profiles.
3. **Recover** — correct invalid input through an inline, announced error.
4. **Orient** — inspect the atlas, soft core, confidence, tags, and evidence.
5. **Compare** — scan exactly three fictional recommendations and their concrete signals.
6. **Decide** — choose one game and receive a persistent success/rationale state when that assignment includes selection.
7. **Preview the horizon** — see an honestly disabled community/snapshot preview without fake activity or live-user claims.

## Journey B: product vision

1. A recommendation solves the immediate “what should I play?” job.
2. Repeated evidence shapes a recognizable atlas and soft-core identity.
3. The player optionally renders a static atlas snapshot.
4. A separate validation gate measures whether people actually share or keep that artifact.
5. Only after positive evidence may the product add sharing pipes and an archetype-community surface.
6. Accounts, relationships, feeds, opinions, and moderation require their own product, privacy, and safety decisions.

## Community preview contract

A current landing page may communicate the future community direction only through a fixture-safe preview:

- one fictional recommended game's `GameProfilePreview`;
- clearly labelled game-level fixture metrics such as time or completion context;
- a separate personal interpretation derived from the active fictional profile;
- disabled `ComingSoonCapability` rows for similar archetypes, aggregate user context, and atlas snapshot sharing;
- an optional collapsed review preview labelled as example/future content.

The preview must not show or imply:

- real member counts, online presence, friends, follows, or a social graph;
- a functioning feed, review submission, likes, comments, ranking, or moderation;
- working sharing/export, account creation, or retention tracking;
- real Steam, HLTB, IGDB, Backloggd, or community-service requests.

## Component vocabulary across assignments

- `CommunityPreview`: the fixture-safe product-horizon section.
- `GameProfilePreview`: game-level facts plus separated personal interpretation.
- `ComingSoonCapability`: visibly disabled future capability with an honest status label.
- `AtlasSnapshotPreview`: static expression artifact; no sharing action unless separately approved and implemented.
- `RecommendationCard`: cover-led decision item with traceable evidence.
- `SelectionReceipt`: selected game and the exact signals supporting the choice.

## Scope ledger

| Capability | Day 2/course base | Product horizon |
|---|---|---|
| Fixture URL validation | Live locally | Replace only after data/privacy approval |
| Taste atlas and recommendation evidence | Live locally | Enrich with authorized real signals later |
| Three fictional recommendation cards | Live locally | Future ranking model remains unvalidated |
| Game profile | Preview allowed | Dedicated product surface later |
| Atlas snapshot | Static preview allowed | Sharing/export only after validation and approval |
| Similar archetype community | Coming-soon only | Future retention experiment |
| Accounts, friends, follows, feed | Not implemented | Separate product decision |
| Reviews, likes, comments, moderation | Not implemented | Separate trust/safety decision |

## Cross-assignment rule

Every future task that touches NEXT SAVE experience work must state which use cases it implements, previews, or defers. A preview must remain distinguishable from a functioning capability in copy, interaction, accessibility semantics, fixtures, tests, and evidence screenshots.
