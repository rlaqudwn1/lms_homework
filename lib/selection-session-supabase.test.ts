import { describe, expect, it, vi } from "vitest";
import { createMockSelectionSession } from "./selection-session";
import {
  createSelectionSessionSupabaseAdapter,
  readSupabaseConfig,
} from "./selection-session-supabase";

const fixture = createMockSelectionSession("steady-explorer", "hollow-knight", {
  id: "00000000-0000-4000-8000-000000000901",
  now: new Date("2026-07-27T00:00:00Z"),
});

describe("Day 10 Supabase selection-session adapter", () => {
  it("stays disabled until both server-only environment values are present", () => {
    expect(readSupabaseConfig({})).toBeNull();
    expect(readSupabaseConfig({
      NEXT_SAVE_SUPABASE_URL: "https://example.supabase.co",
    })).toBeNull();
    expect(readSupabaseConfig({
      NEXT_SAVE_SUPABASE_URL: "https://example.supabase.co",
      NEXT_SAVE_SUPABASE_ANON_KEY: "test-placeholder",
      NEXT_SAVE_SUPABASE_WRITE_ENABLED: "false",
    })).toBeNull();
  });

  it("writes one fictional record and reads the same id back", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response(JSON.stringify([fixture]), {
        status: 201,
        headers: { "content-type": "application/json" },
      }))
      .mockResolvedValueOnce(new Response(JSON.stringify([fixture]), {
        status: 200,
        headers: { "content-type": "application/json" },
      }));
    const adapter = createSelectionSessionSupabaseAdapter({
      url: "https://example.supabase.co",
      anonKey: "test-placeholder",
      fetcher,
    });

    await expect(adapter.writeThenRead(fixture)).resolves.toEqual(fixture);
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(fetcher.mock.calls[0][0]).toBe(
      "https://example.supabase.co/rest/v1/selection_sessions",
    );
    expect(fetcher.mock.calls[0][1]).toMatchObject({
      method: "POST",
      body: JSON.stringify(fixture),
    });
    expect(fetcher.mock.calls[1][0]).toContain(
      "/rest/v1/selection_sessions?id=eq.00000000-0000-4000-8000-000000000901",
    );
  });

  it("rejects a backend response that does not match the approved fixture mapping", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify([{
        ...fixture,
        fixture_profile_key: "https://steamcommunity.com/id/real-user",
      }]), {
        status: 201,
        headers: { "content-type": "application/json" },
      }),
    );
    const adapter = createSelectionSessionSupabaseAdapter({
      url: "https://example.supabase.co",
      anonKey: "test-placeholder",
      fetcher,
    });

    await expect(adapter.writeThenRead(fixture)).rejects.toThrow(
      "Supabase returned an invalid fictional selection session.",
    );
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
});
