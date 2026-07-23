# Step 05 evidence

## TDD

- Red: the v0.10 Hero-copy and connected-continent tests both failed before implementation.
- Green: 5/5 unit tests passed after implementation.
- Refactor: circular nodes and warm atlas chrome were removed; the form and fixture behavior stayed intact.

## Build and browser

- Next.js production build passed.
- Browser checks: 360 px width and no horizontal overflow; exactly two profiles; invalid input announcement; valid submit; post-submit fixture disclosure; visible keyboard focus; keyboard profile switch/reset/submit; no browser exceptions; no Steam network request — all passed.
- Independent visual gate found no P0. Its two P1 findings were fixed before the final captures: Korean Hero words no longer split mid-word, and mobile disclosure/map labels use larger, higher-contrast text.
- Production-render screenshots:
  - `assignments/day-02/evidence/day-02-desktop.png`
  - `assignments/day-02/evidence/day-02-mobile-360.png`
  - `assignments/day-02/evidence/day-02-invalid-input.png`
  - `assignments/day-02/evidence/day-02-demo-started.png`

## Remaining gate

- User visual approval before staging, commit, push, or PR.
