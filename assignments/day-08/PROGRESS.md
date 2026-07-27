# Day 08 — database design

| Field | Value |
|---|---|
| State | submitted · late; code review pending |
| Dependency | Day 06 scope and minimal persistence choice |
| Next action | Await code review |
| HITL | Complete for Day 8 publication and LMS submission |

## Acceptance evidence

- Entities, relationships, keys and constraints are understandable without implementation.
- No real Steam profile data is modelled or stored.

## Active step

- [`step-01-domain-schema-catalog`](steps/step-01-domain-schema-catalog/PROGRESS.md)
  models all ten product domains while keeping the executable boundary small.
- Local verification: 30 tests, production build, assignment harness, and
  desktop/mobile rendered review pass.
- User approved `selection_sessions` as the only Day 9 executable candidate on
  2026-07-27 KST; all other domains remain mock/deferred.
- PR #3 is published from `codex/day-08-domain-schema`; no external database or
  deployment change was performed.
- LMS submitted PR #3 at 2026-07-27 11:16 KST; receipt is `제출됨 · 지각`.
