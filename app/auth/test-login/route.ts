import {
  AUTH_COOKIE_MAX_AGE_SECONDS,
  AUTH_COOKIE_NAME,
  createFictionalSession,
  validateReturnTo,
} from "@/lib/auth-boundary";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const returnTo = validateReturnTo(String(form.get("returnTo") ?? "/profile"));
  const secret = process.env.NEXT_SAVE_AUTH_SESSION_SECRET;

  if (process.env.NEXT_SAVE_AUTH_TEST_MODE !== "true" || !secret || secret.length < 32) {
    return NextResponse.redirect(new URL("/profile?authError=test-login-disabled", request.url), 303);
  }

  const value = await createFictionalSession(secret);
  const response = NextResponse.redirect(new URL(returnTo, request.url), 303);
  response.cookies.set(AUTH_COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE_SECONDS,
  });
  return response;
}
