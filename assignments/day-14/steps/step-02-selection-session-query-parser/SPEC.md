# Step 02 — selection-session query parser

## Goal

Normalize unknown URL/query values into a bounded, fixture-only session-history
filter without depending on the response parser.

## Ownership and isolation

- Branch: `codex/day-14-session-query-parser`
- Worktree: dedicated Day 14 query-parser worktree
- Owned files: `lib/selection-session-query.ts` and its test only
- Base: same Day 13 head as Step 01
- Depends on: none

## Contract

- Accept an optional fictional profile key, approved public/fixture game ID,
  and bounded result limit.
- Ignore or reject unknown keys, repeated values, unsafe numbers, and arbitrary
  identity strings deterministically.
- Return a provider-neutral filter; make no network or database call.

## TDD

Record red → green → refactor in `EVIDENCE.md`. The coordinator integrates this
branch after Step 01 and reruns the combined suite.

## Reversal

Remove the two owned files or omit the branch from the coordinator integration.
