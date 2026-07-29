import { validateReturnTo } from "@/lib/auth-boundary";
import {
  createSupabaseServerClient,
  hasSupabaseAuthConfig,
} from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!hasSupabaseAuthConfig()) {
    return NextResponse.redirect(new URL("/profile?authError=supabase-not-configured", request.url), 303);
  }
  const form = await request.formData();
  const returnTo = validateReturnTo(String(form.get("returnTo") ?? "/profile"));
  const callback = new URL("/auth/callback", request.url);
  callback.searchParams.set("returnTo", returnTo);

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: callback.toString(),
      skipBrowserRedirect: true,
    },
  });
  if (error || !data.url) {
    return NextResponse.redirect(new URL("/profile?authError=provider-error", request.url), 303);
  }
  return NextResponse.redirect(data.url, 303);
}
