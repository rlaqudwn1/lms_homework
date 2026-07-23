# Step 02 evidence

## Requirement source

- LMS read-only check on 2026-07-23 KST: `Day 5 나만의 홈페이지 배포하기` asks the learner to use GitHub and Vercel to deploy a homepage.
- The submission field accepts a deployment URL or PR URL; no LMS input or submission was made.

## GitHub dependency

- PR: `https://github.com/rlaqudwn1/lms_homework/pull/1`
- Read-only status on 2026-07-23 KST: open, ready (not draft), merge state `CLEAN`, `codex/day-02-next-save` to `master`, no reported status checks.
- PR was not merged or modified.

## Local preflight

- Branch / exact commit: `codex/day-02-next-save` / `fef598cc26c05e348030dbb5bb301f9dd870a2ae`
- `npm test`: passed, 2 files and 13/13 tests.
- `npm run build`: passed; `/` and `/_not-found` statically prerendered.
- Assignment harness: passed; 11 Day folders and all claimed packets complete.
- `git diff --check`: passed.
- Tracked environment/credential boundary: `git ls-files '.env' '.env.*'` returned zero files; focused tracked-source scan found zero Vercel token, Steam API key, Supabase service-role key, or private-key markers.
- Local Vercel CLI availability: `56.4.1`; no login, link, inspect, or deployment command was run.
- Detailed command logs: local temporary directory `C:\Users\rlaqu\AppData\Local\Temp\next-save-day05-preflight` (not repository evidence and not intended for Git).

## External evidence

- User approval: personal Vercel account, new project `next-save-course-mock`, Preview deployment, source branch `codex/day-02-next-save`, no environment variables, and no domain changes.
- Authenticated account: CLI user `rlaqudwn1`; Vercel personal scope shown by the platform as `kimbyeongju`.
- Project: `kimbyeongju/next-save-course-mock`; GitHub repository connected to `https://github.com/rlaqudwn1/lms_homework`.
- Approved Preview: `https://next-save-course-mock-pundrek0l-kimbyeongju.vercel.app`, Ready. The account's Vercel Authentication protects this Preview, so an anonymous browser is redirected to Vercel login.
- Unexpected first deployment: the initial CLI invocation reported target `production` and created `https://next-save-course-mock.vercel.app`, despite the requested Preview intent. No environment variables or custom domains were configured. This public deployment was retained because removing it was not separately authorized.
- Fresh-browser smoke: the public URL passed the existing full browser verifier at 360 and 1440 CSS pixels. It confirmed fixture disclosure, two fictional profiles, three fixture recommendations, accessible invalid-input feedback, keyboard submission/profile switching, no browser exceptions, and no request whose URL contains `steamcommunity.com`.
- Source SHA at deployment: `fef598cc26c05e348030dbb5bb301f9dd870a2ae`.
- LMS submission: not attempted; not authorized.
