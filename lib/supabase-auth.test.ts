import { describe, expect, it, vi } from "vitest";
import { createSupabaseAuthProvider } from "./supabase-auth";

describe("Day 13 Supabase Auth adapter", () => {
  it("maps the server-side exchange without requiring an email", async () => {
    const exchangeCodeForSession = vi.fn().mockResolvedValue({
      data: { user: { id: "opaque-test-subject", user_metadata: {} } },
      error: null,
    });
    const provider = createSupabaseAuthProvider({ exchangeCodeForSession });
    await expect(provider.exchangeCode("one-time-code")).resolves.toEqual({
      subject: "opaque-test-subject",
      displayName: "로그인 사용자",
    });
    expect(exchangeCodeForSession).toHaveBeenCalledWith("one-time-code");
  });

  it("returns only a generic failure at the provider boundary", async () => {
    const provider = createSupabaseAuthProvider({
      exchangeCodeForSession: vi.fn().mockResolvedValue({
        data: { user: null },
        error: { message: "provider detail that must not escape" },
      }),
    });
    await expect(provider.exchangeCode("bad-code")).rejects.toThrow(
      "Supabase auth exchange failed",
    );
  });
});
