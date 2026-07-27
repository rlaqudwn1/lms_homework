# Day 08 — database design

| Field | Value |
|---|---|
| State | local design complete; publication pending |
| Dependency | Day 06 scope and minimal persistence choice |
| Next action | Approve commit/push/PR scope and the exact Day 8 LMS submission artifact |
| HITL | Minimal schema approved; Git publication and LMS submission remain pending |

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
- External database, commit, push, PR, deployment, and LMS submission remain
  unperformed.
