$ErrorActionPreference = "Stop"

$migration = Get-Content -Raw -LiteralPath "supabase/migrations/20260727000100_create_selection_sessions.sql"
$seed = Get-Content -Raw -LiteralPath "supabase/seed.sql"
$rollback = Get-Content -Raw -LiteralPath "supabase/rollback/20260727000100_drop_selection_sessions.sql"

$requiredMigrationPatterns = @(
  "create table public\.selection_sessions",
  "id uuid primary key default gen_random_uuid\(\)",
  "fixture_profile_key text not null",
  "recommendation_id uuid not null",
  "selected_game_id uuid not null",
  "created_at timestamptz not null default now\(\)",
  "enable row level security"
)

foreach ($pattern in $requiredMigrationPatterns) {
  if ($migration -notmatch $pattern) {
    throw "Missing migration contract: $pattern"
  }
}

$createdTables = [regex]::Matches($migration, "(?im)^\s*create\s+table\s+")
if ($createdTables.Count -ne 1) {
  throw "Expected exactly one created table; found $($createdTables.Count)."
}

$forbidden = @("steam_url", "cookie", "secret", "private_library", "account_id", "email")
foreach ($term in $forbidden) {
  if ($migration -match "(?im)^\s*$term\s+" -or $seed -match "(?im)^\s*$term\s+") {
    throw "Forbidden persisted field found: $term"
  }
}

$seedRows = [regex]::Matches($seed, "'00000000-0000-4000-8000-00000000090[12]'")
if ($seedRows.Count -ne 2) {
  throw "Expected two deterministic fictional seed rows."
}

if ($rollback -notmatch "drop table if exists public\.selection_sessions") {
  throw "Rollback does not remove the Day 9 table."
}

Write-Output "PASS: Day 9 migration, fictional seed, RLS boundary, and rollback contract."

