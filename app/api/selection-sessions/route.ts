import { NextResponse } from "next/server";
import { parseStoredSelectionSession } from "../../../lib/selection-session";
import {
  createSelectionSessionSupabaseAdapter,
  readSupabaseConfig,
} from "../../../lib/selection-session-supabase";

export async function POST(request: Request) {
  const config = readSupabaseConfig(process.env);
  if (!config) {
    return NextResponse.json(
      { mode: "local", message: "Supabase is not configured." },
      { status: 503 },
    );
  }

  const session = parseStoredSelectionSession(JSON.stringify(await request.json()));
  if (!session) {
    return NextResponse.json(
      { mode: "rejected", message: "Only approved fictional selections are accepted." },
      { status: 400 },
    );
  }

  try {
    const persisted = await createSelectionSessionSupabaseAdapter(config)
      .writeThenRead(session);
    return NextResponse.json({ mode: "remote", session: persisted });
  } catch {
    return NextResponse.json(
      { mode: "fallback", message: "The local receipt remains available." },
      { status: 502 },
    );
  }
}
