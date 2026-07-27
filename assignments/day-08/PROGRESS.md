# Day 08 — database design

| Field | Value |
|---|---|
| State | PR published; LMS submission in progress |
| Dependency | Day 06 scope and minimal persistence choice |
| Next action | Submit PR #3 to the exact Day 8 LMS assignment and record the receipt |
| HITL | Minimal schema and publication approved; LMS submission approved |

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
