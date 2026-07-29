-- REVIEW ONLY. Destructive policy removal requires separate approval.
-- Exact target: public.selection_sessions in Supabase project
-- mxxuzfsqizgaaqhuioci.

drop policy if exists "day10_anon_insert_fictional_selection"
on public.selection_sessions;

drop policy if exists "day10_anon_select_fictional_selection"
on public.selection_sessions;
