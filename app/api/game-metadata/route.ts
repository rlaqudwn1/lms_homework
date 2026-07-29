import { NextResponse } from "next/server";
import {
  enrichPublicGameMetadata,
  createWikidataProvider,
  isApprovedPublicGameId,
} from "../../../lib/game-metadata";

type RouteOptions = {
  providerEnabled?: boolean;
  request?: typeof fetch;
};

export async function getGameMetadataResponse(
  request: Request,
  options: RouteOptions = {},
) {
  const gameId = new URL(request.url).searchParams.get("gameId") ?? "";
  if (!isApprovedPublicGameId(gameId)) {
    return NextResponse.json({ error: "unsupported_game_id" }, { status: 400 });
  }

  const providerEnabled =
    options.providerEnabled ??
    process.env.NEXT_SAVE_WIKIDATA_ENABLED === "true";
  const provider = providerEnabled
    ? createWikidataProvider(options.request)
    : undefined;
  const metadata = await enrichPublicGameMetadata(gameId, { provider });
  return NextResponse.json(metadata, {
    headers: { "Cache-Control": "private, max-age=300" },
  });
}

export async function GET(request: Request) {
  return getGameMetadataResponse(request);
}
