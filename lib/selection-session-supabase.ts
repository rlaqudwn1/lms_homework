import {
  parseStoredSelectionSession,
  type SelectionSession,
} from "./selection-session";

export type SelectionSessionSupabaseConfig = {
  url: string;
  anonKey: string;
};

type AdapterOptions = SelectionSessionSupabaseConfig & {
  fetcher?: typeof fetch;
};

export function readSupabaseConfig(
  environment: Record<string, string | undefined>,
): SelectionSessionSupabaseConfig | null {
  const url = environment.NEXT_SAVE_SUPABASE_URL?.trim();
  const anonKey = environment.NEXT_SAVE_SUPABASE_ANON_KEY?.trim();
  const writeEnabled = environment.NEXT_SAVE_SUPABASE_WRITE_ENABLED === "true";
  if (!url || !anonKey || !writeEnabled) return null;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return null;
    return { url: parsed.origin, anonKey };
  } catch {
    return null;
  }
}

function parseSingleRecord(payload: unknown): SelectionSession {
  const record = Array.isArray(payload) ? payload[0] : null;
  const parsed = parseStoredSelectionSession(
    record ? JSON.stringify(record) : null,
  );
  if (!parsed) {
    throw new Error("Supabase returned an invalid fictional selection session.");
  }
  return parsed;
}

export function createSelectionSessionSupabaseAdapter({
  url,
  anonKey,
  fetcher = fetch,
}: AdapterOptions) {
  const headers = {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    "Content-Type": "application/json",
  };

  async function request(endpoint: string, init: RequestInit) {
    const response = await fetcher(`${url}/rest/v1/${endpoint}`, init);
    if (!response.ok) {
      throw new Error(`Supabase selection-session request failed (${response.status}).`);
    }
    return parseSingleRecord(await response.json());
  }

  return {
    async writeThenRead(session: SelectionSession): Promise<SelectionSession> {
      const validated = parseStoredSelectionSession(JSON.stringify(session));
      if (!validated) throw new Error("Only approved fictional selection sessions may be written.");

      const written = await request("selection_sessions", {
        method: "POST",
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
        body: JSON.stringify(validated),
        cache: "no-store",
      });
      if (written.id !== validated.id) {
        throw new Error("Supabase returned a different selection session.");
      }

      return request(
        `selection_sessions?id=eq.${encodeURIComponent(validated.id)}&select=*&limit=1`,
        {
          method: "GET",
          headers,
          cache: "no-store",
        },
      );
    },
  };
}
