export type SelectionSession = {
  id: string;
  fixture_profile_key: string;
  recommendation_id: string;
  selected_game_id: string;
  created_at: string;
};

type FixtureMapping = {
  profileKey: "steady-explorer" | "focused-tactician";
  candidateId: string;
  recommendationId: string;
  gameId: string;
};

export const selectionSessionMappings: FixtureMapping[] = [
  ["steady-explorer", "hollow-knight", "901"],
  ["steady-explorer", "outer-wilds", "902"],
  ["steady-explorer", "disco-elysium", "903"],
  ["focused-tactician", "into-the-breach", "904"],
  ["focused-tactician", "balatro", "905"],
  ["focused-tactician", "hades", "906"],
].map(([profileKey, candidateId, suffix]) => ({
  profileKey: profileKey as FixtureMapping["profileKey"],
  candidateId,
  recommendationId: `10000000-0000-4000-8000-000000000${suffix}`,
  gameId: `20000000-0000-4000-8000-000000000${suffix}`,
}));

export const selectionSessionStorageKey = "next-save:day-09:selection-session:v1";
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function createMockSelectionSession(
  profileKey: string,
  candidateId: string,
  options: { id?: string; now?: Date } = {},
): SelectionSession {
  const mapping = selectionSessionMappings.find(
    (item) => item.profileKey === profileKey && item.candidateId === candidateId,
  );
  if (!mapping) throw new Error("Unknown fictional selection fixture.");
  const id = options.id ?? crypto.randomUUID();
  if (!uuidPattern.test(id)) throw new Error("Selection session id must be a UUID.");
  return {
    id,
    fixture_profile_key: mapping.profileKey,
    recommendation_id: mapping.recommendationId,
    selected_game_id: mapping.gameId,
    created_at: (options.now ?? new Date()).toISOString(),
  };
}

export function candidateIdForSelection(session: SelectionSession): string | null {
  return selectionSessionMappings.find(
    (item) =>
      item.profileKey === session.fixture_profile_key &&
      item.recommendationId === session.recommendation_id &&
      item.gameId === session.selected_game_id,
  )?.candidateId ?? null;
}

export function parseStoredSelectionSession(value: string | null): SelectionSession | null {
  if (!value) return null;
  try {
    const candidate = JSON.parse(value) as Partial<SelectionSession>;
    if (
      typeof candidate.id !== "string" || !uuidPattern.test(candidate.id) ||
      typeof candidate.fixture_profile_key !== "string" ||
      typeof candidate.recommendation_id !== "string" ||
      typeof candidate.selected_game_id !== "string" ||
      typeof candidate.created_at !== "string" ||
      Number.isNaN(Date.parse(candidate.created_at))
    ) return null;
    const session = candidate as SelectionSession;
    return candidateIdForSelection(session) ? session : null;
  } catch {
    return null;
  }
}
