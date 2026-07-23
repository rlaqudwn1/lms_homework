# Step 01 — prototype design gate

## Goal

Freeze a submit-ready Day 7 prototype design for the already approved NEXT SAVE
course slice without adding product scope.

## Inputs

- Logged-in LMS Day 7 assignment, read-only
- `specs/course/next-save/SPEC.md`
- `specs/course/next-save/PRODUCT-EXPERIENCE.md`
- `specs/course/next-save/DESIGN.md`
- Day 2 and Day 6 rendered evidence

## In scope

- Select the LMS prototype-design track.
- Confirm the minimum screen/state set: landing/input, invalid input, atlas and
  evidence, exactly three recommendations, and selection completion.
- Compare the implemented desktop and 360 px renders with the canonical design
  and imported v0.10 direction.
- Record fixture, accessibility, responsive, and deferred-capability boundaries.

## Out of scope

- Administrator workflows, live Steam requests, real profiles or personal data.
- New screens, accounts, social behavior, reviews, sharing, or recommendation
  model changes.
- Git publication, PR changes, deployment changes, and LMS submission.

## Evidence checks

1. The LMS wording and chosen track are recorded exactly enough to audit.
2. Desktop and 360 px renders show the same information hierarchy and mock
   boundary without horizontal overflow.
3. The audit covers hierarchy, atlas legibility, CTA consistency, card
   repetition, focus treatment, and demo disclosure.
4. Differences from the imported source direction are explicitly resolved.
5. Existing automated and browser checks stay green; no code change is required
   when the current render already satisfies the gate.

