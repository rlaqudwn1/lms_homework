# HITL decisions

Use this log for product, environment, and submission decisions that an agent must not infer.

## Day 11 Wikidata single-read verification

- Decision: Replace the unselected RAWG path with one keyless, read-only
  Wikidata Query Service verification for approved public game metadata.
- Owner: User
- Date (KST): 2026-07-29
- Status: approved and executed once
- Exact target/operation: one `GET` to
  `https://query.wikidata.org/sparql` for Hollow Knight developer, release date,
  and genre statements.
- Result: one request succeeded; developer `Team Cherry`, earliest release year
  `2017`, and public genre statements were available. Multiple platform release
  rows required the adapter to select the earliest year deterministically.
- Data boundary: only the public game label was sent. No Steam URL, account,
  library, cookie, secret, or personal data was sent or recorded.
- Attribution: the provider state links `Data from Wikidata`.
- Remaining gates: enabling repeated runtime requests, deployment, Git
  publication, and LMS submission require separate approval.

## Day 11 PR publication and LMS submission

- Decision: Publish the verified Wikidata enrichment as a ready PR and submit
  that PR URL to the exact Day 11 LMS assignment.
- Owner: User
- Date (KST): 2026-07-29
- Status: complete; PR #6 ready and LMS submitted at 2026-07-29 13:00 KST
- Exact target: branch `codex/day-11-open-api`, PR
  `https://github.com/rlaqudwn1/lms_homework/pull/6` targeting
  `codex/day-10-supabase-service`; LMS Day 11
  `내가 만든 서비스와 오픈 API 연결하기`.
- Receipt: `제출됨 · 지각`; code review is pending.
- Boundaries: no merge, deployment, repeated runtime Wikidata enablement,
  Supabase change, or Day 10 remote integration was authorized or performed.

## Day 2 runtime and demo-entry scope

- Decision: Use Next.js App Router + TypeScript + Tailwind CSS and exactly two fictional seeded profiles for the Day 2 introduction/demo-entry slice.
- Owner: User
- Date (KST): 2026-07-22
- Status: approved
- Scope / affected assignment: Day 2 `TASK-001`, `TASK-003`, `TASK-004`.
- Chosen option and reason: Keep the course slice small, locally verifiable, and reusable by later assignment Days.
- Exact target/environment: local branch `codex/day-02-next-save`; browser-only example-profile selection.
- Risks and data boundary: approved public game media is allowed; persistence,
  authentication, deployment, and private profile ingestion are not included.
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
- Risks and data boundary: public games and approved remote covers are allowed;
  profiles and personal interpretations remain examples. Accounts, live
  users/counts, relationships, feeds, UGC, and sharing pipes are not included.
- Reversal path: revert only Step 08-owned application files to the last locally verified composition.
- Evidence / links: `assignments/day-02/steps/step-08-approved-dashboard-implementation/` and the active Codex task.

## Day 2 public publication and LMS submission

- Decision: Make `rlaqudwn1/lms_homework` public, publish the reviewed Day 2 branch as a ready PR, and submit that PR URL to the Day 2 LMS assignment.
- Owner: User
- Date (KST): 2026-07-23
- Status: complete; repository and PR publication complete, LMS submitted at 2026-07-23 10:33 KST
- Scope / affected assignment: Day 2 only.
- Chosen option and reason: A public PR lets the instructor inspect both the implementation diff and full branch source without collaborator access.
- Exact target/environment: public GitHub repository `rlaqudwn1/lms_homework`, PR #1 to `master`, Day 2 LMS link field.
- Risks and data boundary: public source includes course evidence and no
  secrets, private profiles, or live social data. Approved public Steam game
  cover requests are permitted at runtime.
- Reversal path: LMS correction through the course UI if available; repository visibility or PR closure requires a separate follow-up decision.
- Evidence / links: `https://github.com/rlaqudwn1/lms_homework/pull/1` and `assignments/day-02/SUBMISSION.md`.

## Pending — Day 16 domain connection

- **Decision:** Select the registrar, exact domain, and Vercel target for the course slice.
- **Owner:** User
- **Status:** Pending
- **Deadline:** 2026-07-23 10:00 KST
- **Options:** Purchase a new course-slice domain; use an existing user-owned domain; request instructor confirmation that a preview URL is acceptable.
- **Required confirmation before execution:** Exact domain, registrar account, annual price/renewal terms, Vercel project, and DNS-change approval.
- **Reversal:** Remove the Vercel domain assignment and restore prior DNS records; do not cancel a purchased domain without separate user approval.

## Approved — Day 5 Vercel deployment target

- Decision: Select the exact Vercel target and deployment type for the fixture-only NEXT SAVE course slice.
- Owner: User
- Date (KST): 2026-07-23
- Status: approved and executed; LMS submitted at 2026-07-23 11:39 KST
- Scope / affected assignment: Day 5 deployment only; no custom domain or Day 16 production-domain work.
- Options considered: preview to an existing named course-mock project; preview to a new specifically named course-mock project; production only if explicitly selected.
- Chosen option and reason: new fixture-only project and Preview deployment, keeping Day 5 isolated from later production/domain work.
- Exact target/environment: personal scope `kimbyeongju` (CLI user `rlaqudwn1`), project `next-save-course-mock`, Preview, no environment variables, no custom domains, branch `codex/day-02-next-save`, source `fef598cc26c05e348030dbb5bb301f9dd870a2ae`.
- Risks and mock boundary: deployment remains fixture-only, requires no real Steam data or live secrets, and preserves visible mock disclosures. No environment variables or custom domains were added.
- Reversal path: remove the approved deployment or unlink the local project only with follow-up approval; keep local source and evidence intact.
- Execution note: the first Vercel CLI invocation unexpectedly produced a production deployment and public aliases; an explicit Preview was subsequently created. Removal was not authorized, so both are documented without concealment.
- LMS execution: after separate action-time approval, submitted `https://next-save-course-mock.vercel.app`; receipt is `제출됨 · 지각`, with code review pending.
- Evidence / links: `assignments/day-05/steps/step-02-deployment-readiness/`, `https://next-save-course-mock.vercel.app`, and protected Preview `https://next-save-course-mock-pundrek0l-kimbyeongju.vercel.app`.

## Day 6 prototype scope gate

- Decision: Use the prototype-planning option and freeze the minimum NEXT SAVE
  course-mock flow as input → disclosed fixture selection → atlas/evidence →
  exactly three recommendations → selection receipt.
- Owner: User
- Date (KST): 2026-07-23
- Status: complete; published, deployed, and LMS-submitted at 2026-07-23 12:52 KST
- Scope / affected assignment: Day 6 planning and the scope boundary inherited
  by Day 8–10.
- Options considered: administrator-service planning; prototype planning.
- Chosen option and reason: the prototype directly exercises NEXT SAVE's primary
  user job. An administrator service would introduce unsupported actors and
  management workflows.
- Exact target/environment: local branch `codex/day-02-next-save`; disclosed
  example-profile course documents.
- Risks and data boundary: exactly two example profiles and deterministic
  recommendations; approved public game media/metadata is allowed. Private
  player data, secrets, database writes, accounts, and live community behavior
  are not included.
- Reversal path: revise the local Day 6 packet and canonical scope before any
  publication; no external state was changed by this decision.
- Evidence / links:
  `assignments/day-06/steps/`, commit
  `f0a5a2863fb59ad22b305b3470be0944a0988e28`,
  `https://next-save-course-mock.vercel.app`, and Day 6 LMS receipt
  `제출됨 · 지각`.

## Day 7 prototype design gate

- Decision: Use the prototype-design track and accept the existing NEXT SAVE
  course-mock render as the minimum Day 7 design.
- Owner: User
- Date (KST): 2026-07-23
- Status: approved for local evidence only; external submission pending
- Scope / affected assignment: Day 7 design packet and rendered evidence.
- Options considered: administrator-service design; prototype design; unnecessary
  product expansion or visual regeneration.
- Chosen option and reason: the prototype directly continues the approved Day 6
  flow and already expresses the canonical calm decision instrument. New screens
  or generated assets would add scope without improving the assignment evidence.
- Exact target/environment: local branch `codex/day-02-next-save`; disclosed
  example-profile desktop and 360 px renders.
- Risks and data boundary: approved public game media/metadata requests are
  allowed. Private profiles, personal data, secrets, accounts, social actions,
  and database writes are not included.
- Reversal path: revise only the local Day 7 packet and screenshots before any
  approved publication or LMS submission.
- Evidence / links:
  `assignments/day-07/steps/step-01-prototype-design-gate/`.

## Day 7 PR publication and LMS submission

- Decision: Publish the reviewed Day 7 idea-atlas journey as a separate ready
  PR and submit that PR URL to the exact Day 7 LMS assignment.
- Owner: User
- Date (KST): 2026-07-24
- Status: complete; PR #2 ready and LMS submitted at 2026-07-24 12:59 KST
- Scope / affected assignment: Day 7 only.
- Exact target/environment: branch `codex/day-07-idea-atlas`, PR
  `https://github.com/rlaqudwn1/lms_homework/pull/2`, LMS Day 7
  `나만의 메인서비스에서 활용될 관리자서비스 또는 프로토타입 디자인 하기`.
- Receipt: `제출됨 · 지각`; submitted URL is PR #2.
- Boundaries: no merge, deployment, resubmission, LMS file upload, or PR #1
  state change was authorized or performed.

## Superseded — Day 7 game image and metadata provider

- Decision: Select whether and how the Step 03 product-journey preview may use
  third-party real-game cover/header art or metadata.
- Owner: User
- Date (KST): 2026-07-24
- Status: superseded by the approved public Steam media decision below
- Scope / affected assignment: Day 7
  `steps/step-03-product-journey-redesign/` and any later public preview.
- Options considered: keep original fixture art only; use individually verified
  official publisher/developer press-kit assets hosted locally; integrate
  IGDB/RAWG after account, attribution, cache, and rights review; use Steam
  CDN/Steamworks assets.
- Chosen option and reason: superseded. The user explicitly removed the blanket
  no-Steam/no-remote-asset constraint and directed the prototype to use the
  original design's public Steam cover approach.
- Exact target/environment: not selected. Approval must distinguish local
  preview, public Git, Vercel deployment, and LMS submission.
- Risks and mock boundary: retained as historical risk analysis; authority now
  comes from the decision below.
- Reversal path: one provider-neutral media adapter and deterministic local
  fallback; remove provider configuration/asset manifest and return to original
  fixture art without changing the decision journey.
- Evidence / links:
  `assignments/day-07/steps/step-03-product-journey-redesign/EVIDENCE.md`;
  official Steam/Steamworks, IGDB/Twitch, RAWG, and publisher press-kit policy
  sources recorded there.

## Approved — public Steam game covers; blanket external-request ban superseded

- Decision: Permit browser requests for public Steam game cover/header images
  and public game metadata, starting with the original design's
  `cdn.cloudflare.steamstatic.com/steam/apps/<appid>/...` cover pattern.
- Owner: User
- Date (KST): 2026-07-24
- Status: approved for the local Day 7 prototype
- Scope / affected assignment: current Day 7 Step 03 and later NEXT SAVE Days.
  This supersedes earlier Day 2, Day 6, and Day 7 wording that treated every
  Steam request, every remote asset, or every non-fixture game field as banned.
- Chosen option and reason: restore the real-game visual language of the pinned
  original design instead of substituting fictional local covers.
- Exact target/environment: local `/prototype`; public Steam CDN cover/header
  requests are allowed. No commit, push, deployment, or LMS submission is
  authorized by this decision.
- Risks and data boundary: third-party images may fail or change and reveal
  ordinary request metadata to the CDN. Deterministic local SVG fallbacks stay
  in place. Entered Steam URLs, player libraries, cookies, API keys, and private
  or personal Steam data must not be transmitted without a separate approval.
- Reversal path: switch the media adapter back to local fallbacks while keeping
  the same game identity and journey.
- Evidence / links: pinned upstream
  `assignments/day-02/resources/upstream/design/steam.ts`; Day 7 Step 03
  evidence and browser request verification.

## Day 8 minimal executable schema

- Decision: Approve `selection_sessions` as the only schema eligible for
  implementation in the Day 9 test Supabase project; retain the remaining
  product-domain schemas as mock/deferred design documentation.
- Owner: User
- Date (KST): 2026-07-27
- Status: approved for local Day 8 completion only
- Scope / affected assignment: Day 8 database design and the schema boundary
  inherited by Day 9.
- Options considered: implement all ten domain schemas; design only
  `selection_sessions`; document all domains while limiting the executable
  boundary to `selection_sessions`.
- Chosen option and reason: the catalog explains the complete product boundary
  while the single executable table keeps the course slice reversible,
  fixture-only, and proportionate to the assignment.
- Exact target/environment: isolated local Day 8 worktree. No Supabase project,
  remote Git branch, deployment, or LMS state is included in this approval.
- Risks and mock boundary: only fictional profile keys and selected public game
  identifiers may be represented. Real Steam profiles, libraries, behavioral
  telemetry, live social activity, credentials, and billing data remain
  excluded.
- Reversal path: remove the local Day 8 catalog and schema packet, or keep the
  catalog while marking `selection_sessions` deferred before publication.
- Evidence / links:
  `assignments/day-08/steps/step-01-domain-schema-catalog/`.

## Day 8 PR publication and LMS submission

- Decision: Publish the reviewed Day 8 database blueprint as a ready PR and
  submit that PR URL to the exact Day 8 LMS assignment.
- Owner: User
- Date (KST): 2026-07-27
- Status: complete; PR #3 published and LMS submitted at 11:16 KST
- Scope / affected assignment: Day 8 only.
- Exact target/environment: branch `codex/day-08-domain-schema`, PR
  `https://github.com/rlaqudwn1/lms_homework/pull/3`, LMS assignment
  `나만의 메인서비스에서 활용될 관리자서비스 또는 프로토타입 DB 설계하기`.
- Receipt: `제출됨 · 지각`; code review pending.
- Boundaries: no merge, deployment, Supabase schema, resubmission, or file
  upload was authorized or performed.
- Reversal path: use the LMS resubmission control only after separate approval;
  closing the PR or deleting the remote branch also requires follow-up approval.
- Evidence / links: PR #3 and `assignments/day-08/SUBMISSION.md`.

## Decision record template

## Pending — Day 13 Google login target and activation

- Decision: select the exact isolated OAuth test target and authorize one
  reviewed activation operation, or retain the local fictional fallback.
- Owner: User
- Date (KST): 2026-07-29
- Status: pending
- Scope / affected assignment: Day 13 Step 01 only; protected `/profile`.
- Options considered: (A, selected locally) an isolated Google Cloud OAuth web client
  connected through a named Supabase test project's Google provider, using only
  an approved test account; (B) direct provider adapter without Supabase; (C)
  retain the disclosed fictional/test-only local session and make no external
  change.
- Chosen option and reason: Supabase Auth was selected to own PKCE/session
  handling while the app keeps a provider-neutral server boundary.
- Proposed exact Supabase target: existing course test project
  `mxxuzfsqizgaaqhuioci` (`rlaqudwn1's Project`). This is a proposal, not
  authorization. The Google Cloud project/OAuth client, local or preview origin,
  and every exact callback/redirect URI remain unselected.
- Proposed operation after approval: configure only the named Google consent screen,
  OAuth client and allowlisted redirect URIs; place values only in untracked
  local/server environment storage; enable the corresponding server-side
  provider adapter; perform one approved test-account login/cancel check.
- Risks and data boundary: the provider may transmit an account identifier and
  login metadata. Do not request unnecessary scopes, record email/identity,
  expose tokens/cookies/secrets, touch `public.scores` or other table/data, or
  imply that the public demo requires login.
- Reversal path: disable only the named provider/client and remove only its
  named redirect/environment configuration after separate approval.
- Evidence / links:
  `assignments/day-13/steps/step-01-auth-boundary/`.

## Day 13 PR publication and LMS submission

- Decision: expose the protected-profile Google login entry on the landing,
  verify locally, publish a ready stacked PR, and submit its URL to the exact
  Day 13 LMS assignment.
- Owner: User
- Date (KST): 2026-07-29
- Status: PR published; LMS UI execution pending
- Exact target: branch `codex/day-13-supabase-google-auth`, ready PR
  `https://github.com/rlaqudwn1/lms_homework/pull/7` targeting
  `codex/day-11-open-api`; LMS Day 13
  `내가 만든 서비스에 구글로그인 연결하기`.
- Boundaries: publication and submission do not authorize Google Cloud or
  Supabase Auth configuration, real login, environment entry, deployment, or
  database/RLS/data changes. The submission must disclose that provider
  activation and real-account verification remain pending.
- Evidence / links: PR #7 and `assignments/day-13/SUBMISSION.md`.

## Day 14 worktree integration, PR publication, and LMS submission

- Decision: implement two fixture-safe selection-session parsers in isolated
  worktrees, integrate them serially, publish a ready PR, and submit its URL to
  the exact Day 14 LMS assignment.
- Owner: User
- Date (KST): 2026-07-29
- Status: local integration complete; PR/LMS execution pending
- Exact branches: `codex/day-14-session-response-parser`,
  `codex/day-14-session-query-parser`, and coordinator
  `codex/day-14-session-parsers`, all based on
  `bb804999ae9d92295c51d7c56f62eb0d48256e54`.
- Integration order: response feature `9c0cf81` as `6651db2`, then query feature
  `b63319b` as `f0f7eef`.
- Verification: focused 11/11 and 9/9; combined 76/76; production build and
  assignment harness pass.
- Risks and boundary: parsers accept only fictional/allowlisted selection data.
  No Supabase read/write, RLS, OAuth, real identity, deployment, or unrelated
  table/data change is authorized or performed.
- Reversal path: revert the two coordinator commits in reverse order; remove
  worktrees/branches only after evidence is preserved and separate destructive
  approval is obtained.
- Evidence / links: `assignments/day-14/steps/` and
  `assignments/day-14/SUBMISSION.md`.

## Pending — Day 10 selection-session service integration

- Decision: authorize or reject the minimal anonymous fictional
  `selection_sessions` service path.
- Owner: User
- Date (KST): 2026-07-29
- Status: pending
- Scope / affected assignment: Day 10 Step 01 only.
- Options considered: apply the two narrow fictional-row policies and run one
  local write/read; revise the policy boundary; retain local fallback evidence
  without remote integration.
- Exact target/environment: Supabase project `mxxuzfsqizgaaqhuioci`,
  `public.selection_sessions`; untracked local `.env.local`; one generated
  `steady-explorer` / `hollow-knight` row.
- Proposed operation: apply only the two policies in
  `assignments/day-10/steps/step-01-selection-session-service-slice/PROPOSED-RLS.sql`,
  enter the server-only URL/key locally, explicitly set
  `NEXT_SAVE_SUPABASE_WRITE_ENABLED=true`, then issue one insert and one
  exact-ID select through `/api/selection-sessions`.
- Risks and mock boundary: the anon role would be able to insert and select only
  the six hard-coded fictional mappings, but the endpoint is still publicly
  callable if deployed. No real Steam/profile data or service-role key is
  allowed. `public.scores` and all other tables/data are excluded.
- Reversal path: after separate destructive approval, drop only the two named
  policies and delete only the exact generated test UUID if requested.
- Evidence / links:
  `assignments/day-10/steps/step-01-selection-session-service-slice/`.

## Day 10 PR publication and LMS submission

- Decision: publish the reviewed local-fallback Day 10 slice as a ready PR and
  submit that PR URL to the exact Day 10 LMS assignment without executing the
  pending remote RLS/config/write-read integration.
- Owner: User
- Date (KST): 2026-07-29
- Status: PR published; LMS UI execution pending
- Scope / affected assignment: Day 10 only.
- Exact target/environment: branch `codex/day-10-supabase-service`, base
  `codex/day-09-supabase-schema`, ready PR
  `https://github.com/rlaqudwn1/lms_homework/pull/5`.
- Risks and mock boundary: submission explicitly documents local adapter/API
  and fallback evidence; it does not claim a successful remote write/read.
  No Supabase policy, credential, remote row, deployment, or unrelated table
  state was changed.
- Reversal path: LMS correction, PR closure, or remote branch deletion requires
  follow-up approval.
- Execution note: PR #5 was created successfully. The PR URL was submitted to
  LMS Day 10 `내가 만든 서비스와 Supabase 연동하기` at
  `2026-07-29 12:18 KST`. Receipt is `제출됨 · 지각`; code review status is
  `리뷰를 기다리고 있어요`. No remote Supabase write/read, RLS policy, env,
  deployment, or unrelated table/data change was performed.

## Approved — Day 9 Supabase test target and schema write

- Decision: Select the exact isolated Supabase test target and authorize (or
  reject) the reviewed one-table migration plus two fictional seed rows.
- Owner: User
- Date (KST): 2026-07-29
- Status: approved and executed
- Scope / affected assignment: Day 9 only.
- Options considered: reuse and, if required, reactivate the existing unlinked
  project `rlaqudwn1's Project` (`mxxuzfsqizgaaqhuioci`,
  `ap-southeast-2`, currently `INACTIVE`) after confirming it is dedicated to
  course fixtures; create a new dedicated course test project; postpone remote
  execution and retain local migration/mock evidence only.
- Chosen option and reason: reactivate the existing project, inspect its schema
  read-only, then apply only the reviewed `selection_sessions` migration and two
  fictional rows. The user explicitly prohibited changes to other tables/data.
- Exact target/environment: `rlaqudwn1's Org`, project
  `mxxuzfsqizgaaqhuioci` (`rlaqudwn1's Project`), region `ap-southeast-2`.
- Risks and mock boundary: apply creates `public.selection_sessions` and two
  fictional rows. No real Steam URL, identity, library, secret, telemetry, or
  live social data. RLS is enabled with no Data API policy.
- Reversal path: after separate destructive-write confirmation, drop only
  `public.selection_sessions` in the same test project; do not delete the
  project or touch unrelated schemas.
- Evidence / links:
  `assignments/day-09/steps/step-01-selection-sessions-readiness/`.
- Execution: project restored from `INACTIVE` to `ACTIVE_HEALTHY`; read-only
  inspection found existing `public.scores`; dry-run listed only
  `20260727000100_create_selection_sessions.sql`; migration and two fictional
  rows applied. Final public tables are `scores,selection_sessions`; RLS is on
  and `selection_sessions` has zero policies.

## Day 9 PR publication and LMS submission

- Decision: Publish the reviewed Day 9 Supabase migration/evidence as a ready
  stacked PR and submit that PR URL to the exact Day 9 LMS assignment.
- Owner: User
- Date (KST): 2026-07-29
- Status: complete; PR #4 published and LMS submitted at 10:30 KST
- Scope / affected assignment: Day 9 only.
- Exact target/environment: branch `codex/day-09-supabase-schema`, base
  `codex/day-08-domain-schema`, PR
  `https://github.com/rlaqudwn1/lms_homework/pull/4`, LMS Day 9
  `어제 만든 DB 수파베이스에 만들기`.
- Receipt: `제출됨 · 지각`; submitted URL is PR #4; code review status is
  `리뷰를 기다리고 있어요`.
- Risks and mock boundary: the PR contains migration, fictional seed, rollback,
  sanitized project reference/evidence, and browser-mock disclosure; no secret,
  personal Steam data, or Supabase CLI `.temp` metadata.
- Reversal path: LMS resubmission, PR closure, or remote branch deletion requires
  follow-up approval. Database rollback remains a separate destructive action.
- Evidence / links: PR #4 and `assignments/day-09/SUBMISSION.md`.

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
