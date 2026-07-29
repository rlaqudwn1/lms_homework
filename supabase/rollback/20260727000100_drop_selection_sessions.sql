-- Destructive by design: run only against the explicitly approved Day 9 test
-- project after confirming that the table contains fictional course data only.
drop table if exists public.selection_sessions;

