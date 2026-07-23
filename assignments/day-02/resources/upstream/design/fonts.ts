import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";

/**
 * v0.5 — Brand recovery. NEXT SAVE's canonical face is **Pretendard**
 * (landing/src/index.css → --font-sans), a Korean-friendly grotesque. It
 * replaces the Bricolage/Archivo stack that v0.4 borrowed wholesale from the
 * taste-atlas concept mockup (the user flagged: "you forgot our fonts").
 *
 * - Display + Body — Pretendard (one variable family, 400–800). The brand
 *     voice for wordmark, headlines, running text.
 * - Mono — Space Mono: a *functional* instrument voice for the atlas map
 *     labels, coordinates, eyebrows and tabular meta — the "surveyor's tool".
 *     Not a brand accent; kept only where cartography needs a mono texture.
 */
export const sans = localFont({
  src: "../../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  weight: "400 800",
  variable: "--f3-body",
  display: "swap",
});

export const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--f3-mono",
  display: "swap",
});
