# NEXT SAVE — submission plan

## Submission statement

NEXT SAVE is a React course prototype that demonstrates one honest vertical slice: a disclosed example Steam profile becomes a taste atlas, three traceable recommendations, and one selected game. It may request approved public Steam game covers while keeping entered URLs and private player data local.

## Assignment mapping

| LMS Day | Evidence in this project | State |
|---|---|---|
| 2 | Responsive React introduction plus core-flow entry | submitted 2026-07-23 10:33 KST; review pending |
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

- [x] Create the applicable `assignments/day-XX/SUBMISSION.md` from the repository template requirement.
- [ ] Add deployed URL and PR/branch URL.
- [x] Add exact commit SHA used for submission.
- [x] Add desktop, 360 px, keyboard-focus, and completed-flow screenshots.
- [x] Record build, test, and accessibility verification commands and results.
- [ ] Confirm `예시 데이터 · 데모` is visible on input and result surfaces.
- [x] Confirm browser network logs contain only approved public Steam cover
  requests and no private-account or unexpected external request.
- [ ] Record known limitations and any failed checks instead of hiding them.
- [x] Record the user-approved LMS submission timestamp only after explicit approval.

## Placeholders

- Repository: `https://github.com/rlaqudwn1/lms_homework`
- Branch / PR: `codex/day-02-next-save` / `https://github.com/rlaqudwn1/lms_homework/pull/1`
- Deploy URL: `TBD`
- Submission commit: `ee9db565a82eda9bf8634c20b62263304ea2c709`
- Verification date: `2026-07-23 KST`
- LMS submission date: `2026-07-23 10:33 KST` (`제출됨 · 지각`)

## Reviewer walkthrough

1. Open the deployed route and confirm the demo disclosure.
2. Submit an invalid value and observe the inline accessible error.
3. Submit a valid-looking Steam profile URL and confirm it is not transmitted;
   public game-cover requests may occur independently.
4. Compare both seeded profiles and inspect their different atlas/evidence output.
5. Expand a recommendation reason, select one game, and capture the selection receipt.
