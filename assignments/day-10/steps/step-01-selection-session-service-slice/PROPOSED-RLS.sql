-- REVIEW ONLY. Do not execute without action-time approval.
-- Exact target: public.selection_sessions in Supabase project
-- mxxuzfsqizgaaqhuioci.

create policy "day10_anon_insert_fictional_selection"
on public.selection_sessions
for insert
to anon
with check (
  (fixture_profile_key, recommendation_id, selected_game_id) in (
    ('steady-explorer', '10000000-0000-4000-8000-000000000901'::uuid, '20000000-0000-4000-8000-000000000901'::uuid),
    ('steady-explorer', '10000000-0000-4000-8000-000000000902'::uuid, '20000000-0000-4000-8000-000000000902'::uuid),
    ('steady-explorer', '10000000-0000-4000-8000-000000000903'::uuid, '20000000-0000-4000-8000-000000000903'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000904'::uuid, '20000000-0000-4000-8000-000000000904'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000905'::uuid, '20000000-0000-4000-8000-000000000905'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000906'::uuid, '20000000-0000-4000-8000-000000000906'::uuid)
  )
);

create policy "day10_anon_select_fictional_selection"
on public.selection_sessions
for select
to anon
using (
  (fixture_profile_key, recommendation_id, selected_game_id) in (
    ('steady-explorer', '10000000-0000-4000-8000-000000000901'::uuid, '20000000-0000-4000-8000-000000000901'::uuid),
    ('steady-explorer', '10000000-0000-4000-8000-000000000902'::uuid, '20000000-0000-4000-8000-000000000902'::uuid),
    ('steady-explorer', '10000000-0000-4000-8000-000000000903'::uuid, '20000000-0000-4000-8000-000000000903'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000904'::uuid, '20000000-0000-4000-8000-000000000904'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000905'::uuid, '20000000-0000-4000-8000-000000000905'::uuid),
    ('focused-tactician', '10000000-0000-4000-8000-000000000906'::uuid, '20000000-0000-4000-8000-000000000906'::uuid)
  )
);
