# Step 01 — selection-session response parser

## Goal

Parse an unknown selection-session API response into a fixture-safe receipt
without trusting provider or network-shaped data.

## Ownership and isolation

- Branch: `codex/day-14-session-response-parser`
- Worktree: dedicated Day 14 response-parser worktree
- Owned files: `lib/selection-session-response.ts` and its test only
- Base: Day 13 PR branch head recorded before worktree creation
- Depends on: none

## Contract

- Accept only a UUID session ID, one of the two fictional profile keys, one of
  the approved public/fixture game IDs, and a valid timestamp.
- Reject extra personal/profile fields such as email, Steam URL, cookie, token,
  or arbitrary metadata.
- Return a provider-neutral parsed result; make no network or database call.

## TDD

Record red → green → refactor in `EVIDENCE.md`. The coordinator integrates this
branch before Step 02 and reruns the combined suite.

## Reversal

Remove the two owned files or omit the branch from the coordinator integration.
