# Step 02 evidence

## Red

- Boundary tests first showed `/profiles/not-a-number` and `/id/name/extra` were accepted.
- Browser review showed keyboard/profile/disclosure checks were logged but not enforced.

## Green

- `npm test`: 3 tests pass, including malformed Steam paths.
- `npm run test:browser`: 360 px, no overflow, two distinct profiles, invalid/valid submission, post-submit disclosure, visible focus, keyboard profile switch/submission, no browser exception, and no Steam request all pass.

## Refactor/regression

- URL validation and typed fixtures live in `lib/demo.ts`; UI state remains presentation-only.
- The selected profile change is announced through a polite live region.
