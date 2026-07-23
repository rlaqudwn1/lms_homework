# Step 02 spec — introduction and demo entry

## Outcome

Explain NEXT SAVE and start an honestly disclosed fixture-only demo from a labelled Steam URL form.

## Dependencies

- Step 01 runtime foundation.

## Owned files

- `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/demo-experience.tsx`, `lib/demo.ts`, `lib/demo.test.ts`.

## In scope

- Responsive navigation, hero, three-step explanation, URL validation, two seeded-profile previews, persistent mock disclosure, demo-start state, keyboard focus, and reduced motion.

## Out of scope

- Ranking, three recommendation cards, selection receipt, persistence, live Steam access, deployment, and LMS submission.

## Acceptance checks

- Valid Steam vanity/numeric paths pass; blank, foreign, HTTP, and malformed Steam paths fail.
- Exactly two profiles produce distinct labels, cores, confidence, tags, and summaries.
- 360 px has no horizontal overflow; submission keeps the mock boundary visible.
- Keyboard reaches URL, CTA, and profile group, changes the profile, and submits.
