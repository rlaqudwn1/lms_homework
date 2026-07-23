# NEXT SAVE Day 2 Claude Design procedure

## Goal

Use Claude Design to propose a stronger responsive visual composition for the already-tested Day 2 React introduction page. Preserve the fixture-only demo behavior and the pinned NEXT SAVE product decisions.

## Run record

| Field | Value |
|---|---|
| Date | 2026-07-22 KST |
| Product | `https://claude.ai/design?via=web_sidebar_products` |
| Project | `https://claude.ai/design/p/d9266124-ea4b-48b7-a75d-cf55c6148819` |
| Project title | `# NEXT SAVE 랜딩페이지` |
| Design system | None; unrelated `미니 노션 디자인 시스템` was cleared |
| Template | None |
| Start from code | Off; no local files attached and no GitHub connection |
| Model shown before generation | Opus 4.8 |
| Source data sent | Non-sensitive text brief plus a canonical `DESIGN.md` reference digest |
| Initial status | Initial four-frame board generated; `DESIGN.md` audit/revision in progress |

## Prompt contract

The initial brief requested four consistent frames:

1. desktop landing at 1440 px;
2. mobile landing at 360 px;
3. mobile invalid-URL state;
4. mobile demo-started success state.

It locked the existing Korean Hero copy, exactly two fictional profiles, the connected RPG/adventure/strategy/action pixel continent, three-step explanation, and fixture-only disclosures. It requested a midnight/cyan/teal editorial game-atlas direction, restrained violet accents, strong hierarchy, accessible contrast, clear focus/error/success states, and no 360 px overflow.

It explicitly excluded circular taste nodes, warm atlas chrome, generic SaaS card repetition, remote-image dependence, and real Steam data.

## Canonical design reference

The owner required `specs/course/next-save/DESIGN.md` to be an explicit Claude Design reference rather than relying only on the initial prompt summary.

- A direct `Attach file` attempt for that single file was blocked by the browser-control surface before upload completed.
- Pasting the full 77-line file produced a `Pasted text` attachment that remained stuck in `Uploading...`; it was removed rather than left in an ambiguous state.
- The coordinator then sent a bounded `Canonical reference: specs/course/next-save/DESIGN.md` message preserving every normative section: intent, source precedence, information architecture, tokens, component contracts, responsive/accessibility rules, copy/honesty rules, and the visual review gate.
- The follow-up tells Claude Design to audit and revise the existing desktop, 360 px, invalid, and success frames against that reference and to preserve usable v0.10 Hero/page-shell work.
- No GitHub connection, repository attachment, or unrelated file upload was used.

## Review checklist

Before accepting any generated proposal, verify:

- all required Korean copy remains accurate and legible;
- fixture disclosure appears before or at the data-entry decision;
- exactly two example profiles remain visible and clearly fictional;
- the continent remains one connected pixel form and is not just decorative noise;
- the desktop and mobile frames share one system;
- mobile type and controls remain comfortably readable at 360 px;
- invalid and success states are distinguishable without relying on color alone;
- no generated claim implies real Steam login, lookup, transmission, or storage;
- the composition can be implemented without remote runtime assets;
- the result improves the current implementation enough to justify a material change.

## Supplemental reference: Backloggd

- URL: `https://backloggd.com/`
- Role: secondary product/visual reference only; it is subordinate to `DESIGN.md`, the pinned v0.10 Hero/page shell, and the fixture-only course boundary.
- The public home page repeatedly exceeded the browser-control loading deadline, so the coordinator did not claim unverified details about its current layout.
- Claude Design was instructed to inspect the URL if accessible, identify at most four relevant high-level patterns, and report inability to access it rather than invent observations.
- Allowed influence is limited to general game-content hierarchy, information density, library browsing, or cover-led scanning when those patterns improve NEXT SAVE without changing its decision job.
- Explicitly excluded: copying Backloggd's logo, brand identity, proprietary copy, artwork, exact layout, CSS, or assets; runtime requests to Backloggd; external cover/image dependencies; turning NEXT SAVE into a collection tracker.
- No Backloggd asset or code is imported, so this URL is not added to the selective source manifest.

## Local implementation gate

If a proposal is accepted as the implementation direction:

1. record the selected visual decisions and rejected alternatives;
2. add failing tests or reproducible checks for any new behavioral/design contract;
3. implement the smallest passing local change;
4. refactor while keeping the same checks green;
5. run unit tests, production build, assignment harness, and browser verification;
6. capture desktop, 360 px, invalid, and success evidence;
7. show the new result package to the owner;
8. only after explicit visual/PR approval, stage intentional files, commit, push, and open the PR;
9. do not submit the LMS form without separate explicit approval.
