import { AUTH_COOKIE_NAME, readSession } from "@/lib/auth-boundary";
import { cookies } from "next/headers";
import {
  createSupabaseServerClient,
  hasSupabaseAuthConfig,
} from "@/lib/supabase-server";

const errorMessages: Record<string, string> = {
  cancelled: "로그인이 취소되었습니다. 계정이나 데이터는 저장되지 않았습니다.",
  "provider-error": "로그인 공급자가 요청을 완료하지 못했습니다.",
  "provider-not-configured": "실제 OAuth 연결은 아직 승인·설정되지 않았습니다.",
  "missing-code": "로그인 응답에 필요한 코드가 없습니다.",
  "test-login-disabled": "fictional 테스트 로그인은 이 환경에서 비활성화되어 있습니다.",
  "supabase-not-configured": "Supabase Google Auth는 아직 승인·설정되지 않았습니다.",
};

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ authError?: string }>;
}) {
  const cookieStore = await cookies();
  const session = await readSession(
    cookieStore.get(AUTH_COOKIE_NAME)?.value,
    process.env.NEXT_SAVE_AUTH_SESSION_SECRET,
  );
  const supabaseUser = hasSupabaseAuthConfig()
    ? (await (await createSupabaseServerClient()).auth.getUser()).data.user
    : null;
  const { authError } = await searchParams;

  return (
    <main style={{ maxWidth: 720, margin: "64px auto", padding: 24, fontFamily: "sans-serif" }}>
      <p>NEXT SAVE · Day 13</p>
      <h1>보호된 프로필</h1>
      {authError && <p role="alert">{errorMessages[authError] ?? "로그인을 완료하지 못했습니다."}</p>}
      {supabaseUser ? (
        <p>Supabase가 서버에서 검증한 Google 로그인 세션으로 보호된 영역입니다.</p>
      ) : session ? (
        <>
          <p>{session.displayName} 세션으로 보호된 영역입니다.</p>
          {session.source === "fictional-test" && (
            <p role="status">
              fictional fixture · 테스트 전용 로그인입니다. 실제 Google 계정과 연결되지 않았습니다.
            </p>
          )}
        </>
      ) : (
        <>
          <p>이 페이지는 로그인 세션이 필요합니다. 공개 데모는 계속 로그인 없이 사용할 수 있습니다.</p>
          <form action="/auth/supabase-login" method="post">
            <input type="hidden" name="returnTo" value="/profile" />
            <button type="submit">Google로 로그인</button>
          </form>
          <form action="/auth/test-login" method="post">
            <input type="hidden" name="returnTo" value="/profile" />
            <button type="submit">fictional 테스트 세션으로 계속</button>
          </form>
          <p>Google 로그인은 승인된 Supabase/Google OAuth 설정이 있는 환경에서만 활성화됩니다.</p>
          <a href="/prototype">공개 데모로 돌아가기</a>
        </>
      )}
    </main>
  );
}
