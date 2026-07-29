# Day 10 — service and Supabase connection

| Field | Value |
|---|---|
| State | local slice complete; integration HITL pending |
| Dependency | Day 09 test schema and a working core flow |
| Next action | Approve the exact RLS/config/fictional write-read operation |
| HITL | Pending action-time approval; see Step 01 runbook |

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
