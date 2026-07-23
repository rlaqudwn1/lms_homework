# Design execution and pre-PR preview workflow

This workflow applies to every LMS assignment that changes a user-visible screen. Its purpose is to combine the pinned NEXT SAVE product/design sources with independent design critique and a mandatory user review before GitHub publication.

## Tool order

1. **Pinned source documents** — product and visual authority.
2. **Local implementation and automated checks** — build the smallest assignment slice.
3. **Claude design pass** — independent reasoning, critique, and option comparison.
4. **Browser skill** — inspect the actual rendered page and capture evidence.
5. **Computer Use fallback** — only for desktop UI or webview operations the browser skill cannot perform.
6. **User review** — required before any staging, commit, push, or PR.

No tool may silently override `specs/course/next-save/SPEC.md`, `DESIGN.md`, or a recorded HITL decision.

## Claude design method

The machine currently has Claude CLI `2.1.217`. Use it as a reviewer or bounded design collaborator, not as the final decision maker.

### Input packet

Provide only the material needed for the current assignment:

- LMS Day and exact requirement.
- The relevant acceptance criteria from `SPEC.md`.
- The relevant visual rules from `DESIGN.md`.
- Pinned source references from `specs/intake/2026-07-22-next-save.md`.
- Current component/file paths.
- Desktop and 360 px screenshots when a render exists.
- One explicit question, such as hierarchy, atlas legibility, responsive behavior, or copy clarity.

Do not provide credentials, `.env` contents, real Steam URLs, private user data, or unrelated repository material.

### Expected output

Ask Claude to return:

1. Findings ordered by user impact.
2. Evidence tied to a screenshot, component, or design rule.
3. At most three concrete alternatives with trade-offs.
4. A recommended option and the acceptance criterion it improves.
5. Items that require owner judgment rather than automatic implementation.

Claude should not edit shared files during a review-only pass. The task owner decides which findings to implement and records material design decisions in `specs/HITL-DECISIONS.md`.

## Browser verification

After local build/tests pass, use the browser skill to inspect the running application.

Required checks:

- Core flow: input → disclosed fixture → atlas → three recommendations → selection receipt.
- Desktop viewport and a 360 px mobile viewport.
- Keyboard-only navigation and visible focus.
- Invalid-input and success states.
- Demo disclosure on input and result surfaces.
- Atlas text equivalent and non-color meaning.
- Reduced-motion behavior where practical.
- Browser console errors and unexpected network requests, especially requests to Steam.

Capture at least these screenshots:

1. Landing/input state.
2. Atlas and recommendation result.
3. 360 px mobile result.
4. Keyboard focus or validation state.
5. Completed selection receipt.

## Computer Use fallback

Use Computer Use only when browser automation cannot access the required surface—for example, a native desktop dialog, an embedded application webview, or a visual tool without usable browser controls.

Before fallback:

- State which browser limitation blocks the check.
- Limit the desktop operation to the current assignment.
- Do not approve purchases, permissions, deployments, submissions, or account changes through UI without a separate user authorization.
- Add the fallback reason and result to the assignment verification notes.

## Result package shown before PR

For each assignment, present the user with:

| Item | Required content |
|---|---|
| Assignment | LMS Day and requirement |
| Result | What now works in plain language |
| Visuals | Rendered desktop/mobile screenshots relevant to the assignment |
| Scope | Changed files and intentionally excluded features |
| Verification | Build, tests, browser flow, accessibility, and console/network results |
| Honesty | Fixture/mock disclosure and known limitations |
| Git state | Current branch and unstaged diff summary; no publication yet |
| Proposed PR | Suggested title, scope, and evidence to include |

The user can respond with changes or explicitly authorize the next action. `PR 진행` authorizes the requested PR workflow only; it does not authorize merge, production deployment, LMS submission, database mutation, OAuth configuration, or domain/DNS changes.

## Per-assignment lifecycle

```text
Claim assignment task
  → implement locally
  → build and automated tests
  → Claude design critique
  → apply accepted fixes
  → browser verification and screenshots
  → update assignments/day-XX/SUBMISSION.md
  → show result package to user
  → user requests changes OR explicitly approves PR
  → stage/commit/push/create PR
```

If a material change is made after approval, the result package must be shown again before the PR is created.

## Supabase and Vercel boundary

- Verified on 2026-07-22: global Vercel CLI `56.4.1` and repository-local Supabase CLI `2.109.1` are installed.
- Use `vercel` for Vercel CLI work and `npx supabase` or `npm run supabase -- <command>` for the pinned Supabase CLI.
- Docker Desktop is installed, but the Docker engine must be started before running a local Supabase stack.
- Local build and screenshots do not require either integration.
- Supabase authentication, project linking, migrations, RLS/policy changes, seeding, or data writes require an approved project and environment.
- Vercel login, project linking, preview deployment, environment variables, production deployment, and domain changes require separate target-specific approval.
- If a needed operation cannot be completed with the local CLI and available built-in tools, identify the exact missing capability before recommending an MCP server or plugin.
