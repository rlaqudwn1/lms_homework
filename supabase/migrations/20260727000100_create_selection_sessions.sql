-- Day 9 course-mock schema: fixture-only selection receipts.
-- No Steam URL, account identity, private library, or behavioral telemetry.

create table public.selection_sessions (
  id uuid primary key default gen_random_uuid(),
  fixture_profile_key text not null,
  recommendation_id uuid not null,
  selected_game_id uuid not null,
  created_at timestamptz not null default now(),
  constraint selection_sessions_fixture_profile_key_not_blank
    check (fixture_profile_key = btrim(fixture_profile_key) and length(fixture_profile_key) between 1 and 64)
);

comment on table public.selection_sessions is
  'Course-mock selection receipts containing fictional fixture identifiers only.';
comment on column public.selection_sessions.fixture_profile_key is
  'Fictional demo profile key; never a Steam URL or account identifier.';
comment on column public.selection_sessions.recommendation_id is
  'Fixture recommendation UUID. No foreign key until that deferred table is separately approved.';
comment on column public.selection_sessions.selected_game_id is
  'Fixture/public game UUID. No foreign key until that deferred table is separately approved.';

alter table public.selection_sessions enable row level security;

-- Intentionally no policies or grants in Day 9. RLS therefore blocks Data API
-- access for anon/authenticated roles. Day 10 must receive separate approval
-- before adding a narrowly scoped read/write policy.

