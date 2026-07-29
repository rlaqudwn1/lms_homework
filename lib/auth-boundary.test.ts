import { describe, expect, it, vi } from "vitest";
import {
  completeAuthCallback,
  createFictionalSession,
  readSession,
  validateReturnTo,
  type AuthProvider,
} from "./auth-boundary";

describe("Day 13 provider-neutral auth boundary", () => {
  it("allows only the protected profile route as a return target", () => {
    expect(validateReturnTo("/profile")).toBe("/profile");
    expect(validateReturnTo("/profile?from=login")).toBe("/profile?from=login");
    expect(validateReturnTo("https://attacker.example/profile")).toBe("/profile");
    expect(validateReturnTo("//attacker.example")).toBe("/profile");
    expect(validateReturnTo("/prototype")).toBe("/profile");
  });

  it("creates and reads only the disclosed fictional test session", async () => {
    const secret = "local-test-secret-at-least-32-characters";
    const cookie = await createFictionalSession(secret);
    await expect(readSession(cookie, secret)).resolves.toMatchObject({
      subject: "fixture-day-13-user",
      displayName: "테스트 탐험가",
      source: "fictional-test",
    });
    await expect(readSession(`${cookie}tampered`, secret)).resolves.toBeNull();
  });

  it("exchanges an approved callback code through a server-side provider", async () => {
    const provider: AuthProvider = {
      id: "approved-provider",
      exchangeCode: vi.fn().mockResolvedValue({
        subject: "provider-neutral-subject",
        displayName: "Approved test user",
      }),
    };

    const result = await completeAuthCallback(
      { code: "one-time-code", error: null, returnTo: "/profile" },
      provider,
    );

    expect(result).toMatchObject({ ok: true, returnTo: "/profile" });
    expect(provider.exchangeCode).toHaveBeenCalledWith("one-time-code");
  });

  it.each([
    [{ code: null, error: "access_denied", returnTo: "/profile" }, "cancelled"],
    [{ code: null, error: "server_error", returnTo: "/profile" }, "provider-error"],
    [{ code: null, error: null, returnTo: "/profile" }, "missing-code"],
  ] as const)("handles callback error/cancel states", async (input, reason) => {
    const provider: AuthProvider = {
      id: "unused",
      exchangeCode: vi.fn(),
    };
    await expect(completeAuthCallback(input, provider)).resolves.toEqual({
      ok: false,
      reason,
      returnTo: "/profile",
    });
    expect(provider.exchangeCode).not.toHaveBeenCalled();
  });

  it("does not leak provider exchange failures", async () => {
    const provider: AuthProvider = {
      id: "approved-provider",
      exchangeCode: vi.fn().mockRejectedValue(new Error("secret provider detail")),
    };
    await expect(
      completeAuthCallback(
        { code: "bad-code", error: null, returnTo: "/profile" },
        provider,
      ),
    ).resolves.toEqual({
      ok: false,
      reason: "exchange-failed",
      returnTo: "/profile",
    });
  });
});
