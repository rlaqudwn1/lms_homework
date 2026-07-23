# Day 06 Step 02 — market positioning

## Objective

Differentiate the Day 6 planning deliverable from the Day 2 implementation by
comparing operating backlog services and turning the comparison into one compact
landing-page positioning section.

## Dependencies

- Step 01 prototype scope gate
- `specs/course/next-save/SPEC.md`
- `specs/course/next-save/DESIGN.md`
- Existing Day 2 fixture-only landing implementation

## Scope

- Document Backloggd, Grouvee, and HowLongToBeat using their operating pages.
- Compare primary user jobs without asserting unsupported market size, revenue,
  superiority, or validated demand.
- Position NEXT SAVE around the decision job: choose one game tonight.
- Add one explanatory landing section with three pillars.
- Keep competitor names and links in planning evidence, not promotional UI.

## TDD contract

1. Red: a test requires three sourced comparison records and exactly three
   decision-first positioning pillars.
2. Green: add typed content and render the three pillars.
3. Refactor: preserve the existing design tokens, 360 px flow, disclosure, and
   semantic heading structure.

## Out of scope

- Live competitor data, scraping, logos, screenshots, pricing, or traffic claims.
- Real Steam requests, personal data, accounts, secrets, persistence, or APIs.
- Changing the core flow or adding a fourth functional feature group.

## Completion

Tests, production build, assignment harness, and local content checks pass;
evidence records sources and the rendered claim boundary.

