# Operating model

This document contains the detailed procedure behind the short charter in `AGENTS.md`.

## 1. Course-slice boundary

NEXT SAVE is a reusable course slice, not the future production application. Its base flow uses disclosed example profiles to produce a taste atlas, three traceable recommendations, and one selected game. Approved public game metadata and media may be requested; private player data, production authentication, payments, live social features, and a production recommendation engine remain out of scope until the user explicitly changes the track.

The canonical requirements are in `specs/course/next-save/`. Assignment packets do not invent competing product requirements; they record only what must be shown for a particular LMS day.

### Source revisions

- Product/PRD source: private `rlaqudwn1/idea`, default branch `master`.
- Design source: private `rlaqudwn1/design`, default branch `main`.
- Assignment source: private `rlaqudwn1/lms_homework`, default branch `master`.

Pin source commit SHAs in the relevant intake under `specs/intake/`; do not merge source repositories wholesale into this course repository. Contradictory source decisions remain open decisions rather than being silently resolved.

Every Day that changes the NEXT SAVE journey must continue to consult both
private upstream sources. At the start of the Day or source-sensitive step:

1. use `gh` read-only to confirm each repository URL, default branch, and HEAD;
2. compare HEAD with the pinned commits and the selective local reference
   manifest under `assignments/day-02/resources/`;
3. add only missing, in-scope reference files after checking provenance and
   local modifications;
4. record the exact files used in that Day's evidence.

The local upstream folder is reference material, not product source. Do not
bundle private upstream app code, third-party captures, secrets, or personal
data. Runtime requests for approved public Steam CDN cover art are allowed;
keep deterministic local SVG fallbacks and record the origin in evidence.

## 2. Day-packet lifecycle

```text
planned → claimed → in-progress → local-review → ready-for-approval → submitted
                              ↘ blocked
```

- `planned`: requirement known; no work started.
- `claimed` / `in-progress`: one owner is doing the stated next action.
- `local-review`: implementation and local checks are complete; evidence is being assembled.
- `ready-for-approval`: user can inspect the result before any external publishing or LMS action.
- `blocked`: a specific missing decision or prerequisite is written in `PROGRESS.md` and, if material, `specs/HITL-DECISIONS.md`.
- `submitted`: only after explicit user approval and an LMS timestamp.

Each packet contains:

| File | Responsibility |
|---|---|
| `PROGRESS.md` | State, one next action, dependencies, acceptance proof, and the next HITL gate |
| `SUBMISSION.md` | Requirement, URL/PR/commit, verification, mock disclosure, known limitation, and approved LMS timestamp |

An active Day also contains step packets under `steps/step-XX-name/`. A step packet has `SPEC.md`, `PROGRESS.md`, and `EVIDENCE.md`. The Day files are coordinator-owned rollups; they are not edited concurrently by step owners.

### Step lifecycle and TDD

1. **Specify:** lock one bounded outcome, dependencies, owned files, non-goals, and executable acceptance checks.
2. **Red:** add or run the smallest test/check that demonstrates the missing behavior. Preserve its failing result in `EVIDENCE.md`.
3. **Green:** make the smallest implementation that passes the new check and relevant regression suite.
4. **Refactor:** improve structure without changing behavior; rerun the same checks.
5. **Review:** attach artifacts, update the step packet, and let the coordinator update shared Day/HITL records.

TDD is mandatory for code-changing steps. Documentation, research, and read-only review steps use a reproducible evidence check where a failing automated test would be artificial.

## 3. HITL gates

The coordinator may prepare locally, research read-only sources, and run local verification. The user must approve immediately before:

1. **Scope/design:** change of track, core flow, user-supplied PRD/design interpretation, or use of real data.
2. **Integration:** Supabase project/schema, Open API, Google OAuth client/test account, Vercel account/project/environment.
3. **External exposure or cost:** deployment, domain purchase, custom-domain assignment, and DNS records.
4. **Publication/submission:** staging, commit, push, PR, LMS form entry, and final LMS submission.

For each material decision, record the options, owner, chosen target, date, scope, and reversal path in `specs/HITL-DECISIONS.md`.

## 4. Dependency plan, parallel steps, and worktrees

The default is one working line because the course is dependency-led rather than feature-led:

```text
Day 2 base slice → Day 5 deployable build → Day 8 schema → Day 9 test DB
→ Day 10 persistence → Day 11 enrichment → Day 13 OAuth → Day 16 domain
                         ↘ Day 14: isolated worktree evidence
```

The course Days remain dependency-led, but work inside an active Day is modeled as a small dependency graph. The coordinator identifies ready steps from their explicit `Depends on` fields.

- Run independent read-only research/review steps concurrently in the main working line.
- Run independent code-changing steps concurrently only in separate worktrees with disjoint file ownership.
- Keep dependency manifests, lockfiles, canonical specs, Day rollups, and HITL logs coordinator-owned and merge them serially.
- Before creating a worktree, record step, owner, branch, base SHA, owned files, expected merge order, verification, and reversal path.
- Do not create one worktree per Day by default, and do not create worktrees for read-only review.

After each parallel batch, the coordinator integrates in dependency order, reruns the combined regression checks, resolves the Day packet, and removes a worktree only after its evidence is retained.

## 5. Agent use

Agents are invoked on demand, never as background ceremony.

| Situation | Recommended form | Output |
|---|---|---|
| One clear code/doc task | Coordinator local work | Changed files and local verification |
| Compare LMS requirement with sources | One read-only research agent | Short evidence table and unresolved conflict |
| Independent design/accessibility critique | One read-only reviewer | Ranked findings; no file edits |
| Two isolated code slices | Separate owners/worktrees after approval | Per-task proof and merge plan |
| Domain, OAuth, Supabase, Vercel | Coordinator prepares; user approves exact target | HITL decision plus runbook |

Every agent task has a single question, bounded scope, explicit ownership, and expected evidence. Its findings go into the day packet. An agent cannot grant itself external authority.

## 6. Pause and resumption

When a task will not finish in the current session or changes owner, create `handoffs/TASK-###.md` using `handoffs/README.md`. A new owner first reads the handoff, runs `git status`, confirms the branch/worktree, runs the listed safe check, then updates `PROGRESS.md`.

## 7. Quality and evidence minimum

Before marking local review complete, check the relevant parts of: production build, tests/lint where available, responsive 360 px layout, keyboard flow, visible focus, reduced motion, useful labels/alt text, fixture disclosure, and factual traceability from fixture fields. Record failures and known limitations; do not hide them.

Run the structural check before a handoff or result review:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/check-assignment-harness.ps1
```
