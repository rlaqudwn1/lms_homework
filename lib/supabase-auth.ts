import type { AuthProvider } from "./auth-boundary";

type SupabaseAuthExchange = {
  exchangeCodeForSession(code: string): Promise<{
    data: { user: { id: string; user_metadata?: Record<string, unknown> } | null };
    error: { message: string } | null;
  }>;
};

export function createSupabaseAuthProvider(auth: SupabaseAuthExchange): AuthProvider {
  return {
    id: "supabase-google",
    async exchangeCode(code) {
      const { data, error } = await auth.exchangeCodeForSession(code);
      if (error || !data.user) throw new Error("Supabase auth exchange failed");
      const candidate = data.user.user_metadata?.name;
      return {
        subject: data.user.id,
        displayName: typeof candidate === "string" && candidate.trim()
          ? candidate.trim()
          : "로그인 사용자",
      };
    },
  };
}
