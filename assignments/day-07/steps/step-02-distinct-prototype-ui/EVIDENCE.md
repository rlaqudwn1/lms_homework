# Step 02 evidence

## TDD

- Red: the new focused test failed because `lib/prototype.ts` did not exist.
- Green: the fixture model and `/prototype` workspace made all 21 tests pass.
- Refactor: Day 7 styling, state, and copy remain isolated from the Day 2 landing;
  the same tests and production build stay green.

## Distinction from Day 2

| Day 2 landing | Day 7 prototype |
|---|---|
| Introduces the product and previews its direction | Completes a focused decision task |
| URL-led explanatory composition | Fixture switcher and explicit four-step workflow |
| Static recommendation preview | Profile-dependent candidate sets |
| Atlas teaser | Labelled atlas states and evidence |
| Product-horizon preview | Persistent selection receipt |

## Render and interaction evidence

- Desktop:
  `assignments/day-07/evidence/day-07-claude-design-desktop.png`
- Mobile 360 px:
  `assignments/day-07/evidence/day-07-claude-design-mobile-360.png`
- Mobile selected-success:
  `assignments/day-07/evidence/day-07-claude-design-selection-360.png`
- Readability-pass desktop:
  `assignments/day-07/evidence/day-07-readable-map-desktop.png`
- Readability-pass mobile 360 px:
  `assignments/day-07/evidence/day-07-readable-map-mobile-360.png`
- Human-journey selected desktop:
  `assignments/day-07/evidence/day-07-human-journey-selected-desktop.png`
- Human-journey mobile 360 px:
  `assignments/day-07/evidence/day-07-human-journey-mobile-360.png`
- Desktop viewport: 1440 px client and scroll width; three candidates.
- Mobile viewport: client and scroll width matched; no horizontal overflow.
- Switching to `집중형 전술가` changed the first candidate to
  `전술 잠입 캠페인`.
- Selecting it displayed a persistent decision receipt.
- No external service, persistence, or Steam request was introduced.
- The readability pass verified one rendered decision-map SVG, three labelled
  candidate locations, three candidate cards, three mobile map-key rows, zero
  horizontal overflow, and zero browser console errors.
- The human-journey pass verified all four conversational steps, CTA-driven
  section movement, focus handoff, contextual candidate call-outs, explicit
  receipt success, reversible navigation, 16 px mobile body copy, 48 px CTAs,
  and zero console errors.
- Public-reference refinement red: the new cartographic/cover contract failed
  because `atlas.landmarks` and candidate `coverKey` values did not exist.
- Public-reference refinement green/refactor: 21/21 tests pass with three
  invented discovery-state landmarks per profile, one invented route per
  profile, six unique fictional cover motifs, neutral Korean receipt copy, and
  no external URL in fixture data.
- Final browser pass: 1440 px and 360 px client/scroll widths match; three
  candidate covers and three map landmarks render; the second fixture completes
  steps 1→4, focuses the receipt, and reports zero console errors.
- Reference comparison and line-by-line movement contract:
  [`JOURNEY-REVIEW.md`](JOURNEY-REVIEW.md).

## Claude Design translation

- Removed the oversized marketing hero.
- Reframed the page as four numbered work sections.
- Replaced bright-white UI type with Wanted Sans on a chalk/ink palette.
- Rebuilt the atlas as a two-axis decision plot with a preferred zone,
  unexplored zone, candidate coordinates, scores, session lengths, and a mobile
  text key. This replaces the earlier overlapping block terrain that did not
  communicate a readable relationship.
- Changed candidate presentation to a single cover-led comparison strip on
  desktop and a sequential list on 360 px.
- Used square controls, thin dividers, minimal shadow, and restrained mineral
  teal/periwinkle states.
- Full source ledger:
  [`DESIGN-SOURCES.md`](DESIGN-SOURCES.md).
- Final reference-refinement renders:
  `assignments/day-07/evidence/day-07-game-language-desktop.png` and
  `assignments/day-07/evidence/day-07-game-language-mobile-360.png`.
