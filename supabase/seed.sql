-- Fictional Day 9 verification rows only. Safe to remove and re-run locally.
insert into public.selection_sessions (
  id,
  fixture_profile_key,
  recommendation_id,
  selected_game_id,
  created_at
)
values
  (
    '00000000-0000-4000-8000-000000000901',
    'steady-explorer',
    '10000000-0000-4000-8000-000000000901',
    '20000000-0000-4000-8000-000000000901',
    '2026-07-27T00:00:00Z'
  ),
  (
    '00000000-0000-4000-8000-000000000902',
    'focused-tactician',
    '10000000-0000-4000-8000-000000000904',
    '20000000-0000-4000-8000-000000000904',
    '2026-07-27T00:01:00Z'
  );
