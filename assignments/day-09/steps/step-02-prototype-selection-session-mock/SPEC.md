# Step 02 — prototype selection session mock

## Goal

Make the prototype demonstrate the Day 9 row shape with fictional browser data
while remaining visibly disconnected from Supabase.

## Dependency

Step 01 migration readiness and its approved one-table boundary.

## Red → green → refactor

1. **Red:** the receipt stored only a candidate string in React state and could
   not demonstrate the SQL record shape or reload restoration.
2. **Green:** create a typed fixture mapper, save one fictional record in
   `localStorage`, restore it on reload, and render its approved fields.
3. **Refactor:** validate stored data against the fixed two-profile/six-game
   fixture map and keep storage failures safely in memory.

## Acceptance

- All six candidates map to checked-in UUID fixture identifiers.
- Receipt renders the SQL-shaped session and survives reload where storage is
  available.
- Unknown profile/game records and real-profile-shaped values are rejected.
- The UI says `브라우저 mock · Supabase 미연동`.
- No Supabase request, credential, or real Steam profile data is introduced.

## Reversal

Remove the selection-session module/tests and restore the receipt to component
state only. Remove the Day 9 browser storage key.

