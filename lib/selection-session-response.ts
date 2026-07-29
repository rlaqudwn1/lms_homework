import {
  candidateIdForSelection,
  type SelectionSession,
} from "./selection-session";

const exactKeys = [
  "id",
  "fixture_profile_key",
  "recommendation_id",
  "selected_game_id",
  "created_at",
] as const;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function parseSelectionSessionResponse(value: unknown): SelectionSession | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  const keys = Object.keys(record);
  if (
    keys.length !== exactKeys.length ||
    keys.some((key) => !exactKeys.includes(key as (typeof exactKeys)[number]))
  ) {
    return null;
  }
  if (
    typeof record.id !== "string" ||
    !uuidPattern.test(record.id) ||
    typeof record.fixture_profile_key !== "string" ||
    typeof record.recommendation_id !== "string" ||
    typeof record.selected_game_id !== "string" ||
    typeof record.created_at !== "string" ||
    Number.isNaN(Date.parse(record.created_at))
  ) {
    return null;
  }

  const session = record as SelectionSession;
  return candidateIdForSelection(session) ? session : null;
}
