# Day 10 — service and Supabase connection

| Field | Value |
|---|---|
| State | submitted · late |
| Dependency | Day 09 test schema and a working core flow |
| Next action | Await code review; start Day 11 API-choice gate |
| HITL | Git/LMS complete; remote integration remains unapproved |

## Acceptance evidence

- One fictional selection is written and read through the approved test backend.
- Core demo remains usable without login.

## Local implementation

- Step 01 adds a server-only Supabase REST adapter and same-origin API route for
  one `selection_sessions` write followed by an exact-ID read.
- The browser writes its local receipt first and keeps it when configuration is
  absent or the API fails.
- Only the six approved fictional mappings pass the client, API, and adapter
  parsers.
- `.env.example` contains placeholder names only. No live URL or key was added.

## Stop gate

Remote acceptance evidence is not complete. The proposed policies, local
environment entry, and one fictional write/read against project
`mxxuzfsqizgaaqhuioci` require action-time approval. Deployment, Git
publication, and LMS submission remain separate gates.

## Publication

- Branch: `codex/day-10-supabase-service`
- Commit: `69cde84`
- Ready PR: `https://github.com/rlaqudwn1/lms_homework/pull/5`
- Base: `codex/day-09-supabase-schema`
- LMS submitted PR #5 at `2026-07-29 12:18 KST`; receipt is
  `제출됨 · 지각`, with code review pending.
