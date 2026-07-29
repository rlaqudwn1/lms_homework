import { afterEach, describe, expect, it } from "vitest";
import { POST } from "./route";

const originalUrl = process.env.NEXT_SAVE_SUPABASE_URL;
const originalKey = process.env.NEXT_SAVE_SUPABASE_ANON_KEY;
const originalWriteEnabled = process.env.NEXT_SAVE_SUPABASE_WRITE_ENABLED;

afterEach(() => {
  if (originalUrl === undefined) delete process.env.NEXT_SAVE_SUPABASE_URL;
  else process.env.NEXT_SAVE_SUPABASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.NEXT_SAVE_SUPABASE_ANON_KEY;
  else process.env.NEXT_SAVE_SUPABASE_ANON_KEY = originalKey;
  if (originalWriteEnabled === undefined) delete process.env.NEXT_SAVE_SUPABASE_WRITE_ENABLED;
  else process.env.NEXT_SAVE_SUPABASE_WRITE_ENABLED = originalWriteEnabled;
});

describe("Day 10 selection-session API boundary", () => {
  it("returns local fallback without Supabase configuration", async () => {
    delete process.env.NEXT_SAVE_SUPABASE_URL;
    delete process.env.NEXT_SAVE_SUPABASE_ANON_KEY;
    delete process.env.NEXT_SAVE_SUPABASE_WRITE_ENABLED;

    const response = await POST(new Request("http://localhost/api/selection-sessions", {
      method: "POST",
      body: JSON.stringify({}),
    }));

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({ mode: "local" });
  });

  it("rejects non-fictional input before the adapter can issue a request", async () => {
    process.env.NEXT_SAVE_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_SAVE_SUPABASE_ANON_KEY = "test-placeholder";
    process.env.NEXT_SAVE_SUPABASE_WRITE_ENABLED = "true";

    const response = await POST(new Request("http://localhost/api/selection-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: "00000000-0000-4000-8000-000000000901",
        fixture_profile_key: "https://steamcommunity.com/id/real-user",
        recommendation_id: "10000000-0000-4000-8000-000000000901",
        selected_game_id: "20000000-0000-4000-8000-000000000901",
        created_at: "2026-07-27T00:00:00Z",
      }),
    }));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ mode: "rejected" });
  });
});
