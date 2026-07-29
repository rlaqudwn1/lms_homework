import { createHmac, timingSafeEqual } from "node:crypto";

export const AUTH_COOKIE_NAME = "next_save_day13_session";
export const AUTH_COOKIE_MAX_AGE_SECONDS = 60 * 60;

export type AuthSession = {
  subject: string;
  displayName: string;
  source: "fictional-test" | "provider";
  expiresAt: number;
};

export type AuthProvider = {
  id: string;
  exchangeCode(code: string): Promise<{
    subject: string;
    displayName: string;
  }>;
};

export type CallbackInput = {
  code: string | null;
  error: string | null;
  returnTo: string | null;
};

export type CallbackResult =
  | { ok: true; session: Omit<AuthSession, "expiresAt">; returnTo: string }
  | {
      ok: false;
      reason: "cancelled" | "provider-error" | "missing-code" | "exchange-failed";
      returnTo: string;
    };

export function validateReturnTo(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/profile";
  try {
    const parsed = new URL(value, "https://next-save.invalid");
    if (parsed.origin !== "https://next-save.invalid" || parsed.pathname !== "/profile") {
      return "/profile";
    }
    return `${parsed.pathname}${parsed.search}`;
  } catch {
    return "/profile";
  }
}

export async function completeAuthCallback(
  input: CallbackInput,
  provider: AuthProvider,
): Promise<CallbackResult> {
  const returnTo = validateReturnTo(input.returnTo);
  if (input.error) {
    return {
      ok: false,
      reason: input.error === "access_denied" ? "cancelled" : "provider-error",
      returnTo,
    };
  }
  if (!input.code) return { ok: false, reason: "missing-code", returnTo };

  try {
    const identity = await provider.exchangeCode(input.code);
    return {
      ok: true,
      session: { ...identity, source: "provider" },
      returnTo,
    };
  } catch {
    return { ok: false, reason: "exchange-failed", returnTo };
  }
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export async function createSession(
  session: Omit<AuthSession, "expiresAt">,
  secret: string,
): Promise<string> {
  if (secret.length < 32) throw new Error("Auth signing secret must be at least 32 characters");
  const payload = Buffer.from(
    JSON.stringify({
      ...session,
      expiresAt: Date.now() + AUTH_COOKIE_MAX_AGE_SECONDS * 1000,
    } satisfies AuthSession),
  ).toString("base64url");
  return `${payload}.${sign(payload, secret)}`;
}

export function createFictionalSession(secret: string) {
  return createSession(
    {
      subject: "fixture-day-13-user",
      displayName: "테스트 탐험가",
      source: "fictional-test",
    },
    secret,
  );
}

export async function readSession(
  value: string | undefined,
  secret: string | undefined,
): Promise<AuthSession | null> {
  if (!value || !secret || secret.length < 32) return null;
  const [payload, signature, extra] = value.split(".");
  if (!payload || !signature || extra) return null;
  const expected = Buffer.from(sign(payload, secret));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString()) as AuthSession;
    if (
      typeof session.subject !== "string" ||
      typeof session.displayName !== "string" ||
      !["fictional-test", "provider"].includes(session.source) ||
      typeof session.expiresAt !== "number" ||
      session.expiresAt <= Date.now()
    ) {
      return null;
    }
    return session;
  } catch {
    return null;
  }
}
