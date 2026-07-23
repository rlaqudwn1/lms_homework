# NEXT SAVE — submission plan

## Submission statement

NEXT SAVE is a React course mock that demonstrates one honest vertical slice: a disclosed sample Steam profile becomes a taste atlas, three traceable recommendations, and one selected game. It uses seeded data in the base version and does not contact Steam or claim production recommendation accuracy.

## Assignment mapping

| LMS Day | Evidence in this project | State |
|---|---|---|
| 2 | Responsive React introduction plus core-flow entry | planned |
| 5 | Private Git history and Vercel preview URL | planned |
| 6 | `SPEC.md`, core flow, non-goals, acceptance criteria | ready for review |
| 7 | `DESIGN.md`, source links, components, responsive/a11y rules | ready for review |
| 8 | Minimal data-model extension document | deferred |
| 9 | Test Supabase schema and migration evidence | deferred |
| 10 | One disclosed read/write selection flow | deferred |
| 11 | One public API enrichment with fallback | deferred |
| 13 | Test-account Google OAuth and protected route | deferred |
| 14 | Two independent scoped features with merge evidence | deferred |

## Required evidence checklist

- [ ] Create the applicable `assignments/day-XX/SUBMISSION.md` from the repository template requirement.
- [ ] Add deployed URL and PR/branch URL.
- [ ] Add exact commit SHA used for submission.
- [ ] Add desktop, 360 px, keyboard-focus, and completed-flow screenshots.
- [ ] Record build, test, and accessibility verification commands and results.
- [ ] Confirm `예시 데이터 · 데모` is visible on input and result surfaces.
- [ ] Confirm browser network logs contain no Steam request.
- [ ] Record known limitations and any failed checks instead of hiding them.
- [ ] Record the user-approved LMS submission timestamp only after explicit approval.

## Placeholders

- Repository: `https://github.com/rlaqudwn1/lms_homework`
- Branch / PR: `TBD`
- Deploy URL: `TBD`
- Submission commit: `TBD`
- Verification date: `TBD`
- LMS submission date: `TBD — requires user approval`

## Reviewer walkthrough

1. Open the deployed route and confirm the demo disclosure.
2. Submit an invalid value and observe the inline accessible error.
3. Submit a valid-looking Steam profile URL and confirm that no Steam request occurs.
4. Compare both seeded profiles and inspect their different atlas/evidence output.
5. Expand a recommendation reason, select one game, and capture the selection receipt.
