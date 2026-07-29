import { completeAuthCallback, validateReturnTo } from "@/lib/auth-boundary";
import { createSupabaseAuthProvider } from "@/lib/supabase-auth";
import {
  createSupabaseServerClient,
  hasSupabaseAuthConfig,
} from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const returnTo = validateReturnTo(url.searchParams.get("returnTo"));
  const error = url.searchParams.get("error");
  if (!hasSupabaseAuthConfig()) {
    const destination = new URL(returnTo, request.url);
    destination.searchParams.set("authError", "supabase-not-configured");
    return NextResponse.redirect(destination, 303);
  }
  const supabase = await createSupabaseServerClient();
  const result = await completeAuthCallback(
    { code: url.searchParams.get("code"), error, returnTo },
    createSupabaseAuthProvider(supabase.auth),
  );
  const destination = new URL(returnTo, request.url);
  if (!result.ok) destination.searchParams.set("authError", result.reason);
  return NextResponse.redirect(destination, 303);
}
