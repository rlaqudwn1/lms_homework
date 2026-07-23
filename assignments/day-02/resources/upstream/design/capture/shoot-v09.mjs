// v0.9 render capture (옵션 D) — 배경 좌표그리드 워시 + Hero 우측 대륙 티저.
// Shoots hero(티저), full(배경 그리드 확장 확인), mobile(티저 숨김 확인).
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dir = dirname(fileURLToPath(import.meta.url));
const URL = process.env.NS_URL || "http://localhost:3111/e/003-next-save-landing";

async function waitReady(page, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 4000 });
      if (r && r.ok()) return true;
    } catch {}
    await page.waitForTimeout(1500);
  }
  return false;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const ok = await waitReady(page);
if (!ok) { console.error("server never became ready at " + URL); process.exit(1); }

await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {});
await page.waitForTimeout(1800);

await page.screenshot({ path: join(__dir, "v09-hero.png") });
await page.screenshot({ path: join(__dir, "v09-full.png"), fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {});
await page.waitForTimeout(1200);
await page.screenshot({ path: join(__dir, "v09-mobile-hero.png") });

console.log("shot v09-hero / v09-full / v09-mobile-hero");
await browser.close();
