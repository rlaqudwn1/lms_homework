import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const port = Number(process.env.DAY07_CDP_PORT ?? 9337);
const appUrl = process.env.DAY07_URL ?? "http://localhost:3017/prototype";
const evidenceDir = resolve("assignments/day-07/evidence");
mkdirSync(evidenceDir, { recursive: true });

const browser = spawn(edge, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${join(tmpdir(), `next-save-day07-cdp-${Date.now()}`)}`,
  "about:blank",
], { stdio: "ignore" });
const wait = (ms) => new Promise((resolvePromise) => setTimeout(resolvePromise, ms));

async function getTarget() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const targets = await fetch(`http://127.0.0.1:${port}/json`).then((response) => response.json());
      const page = targets.find((target) => target.type === "page");
      if (page) return page;
    } catch {}
    await wait(250);
  }
  throw new Error("Edge DevTools target를 열 수 없습니다.");
}

const target = await getTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolvePromise, reject) => {
  socket.addEventListener("open", resolvePromise, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let sequence = 0;
const pending = new Map();
const browserExceptions = [];
const consoleErrors = [];
const networkRequests = [];
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === "Runtime.exceptionThrown") browserExceptions.push(message.params.exceptionDetails.text);
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") consoleErrors.push(message.params.args.map((arg) => arg.value).join(" "));
  if (message.method === "Network.requestWillBeSent") networkRequests.push(message.params.request.url);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve: resolvePromise, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolvePromise(message.result);
});

function send(method, params = {}) {
  sequence += 1;
  socket.send(JSON.stringify({ id: sequence, method, params }));
  return new Promise((resolvePromise, reject) => pending.set(sequence, { resolve: resolvePromise, reject }));
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text);
  return result.result.value;
}

async function navigate(width, height) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width <= 600 });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await send("Page.navigate", { url: appUrl });
  for (let attempt = 0; attempt < 40; attempt += 1) {
    await wait(200);
    if (await evaluate(`document.querySelectorAll('.atlas-game-controls button').length >= 3`)) return;
  }
  throw new Error("React hydration을 기다리는 동안 시간이 초과됐습니다.");
}

async function fullPageScreenshot(name) {
  const { contentSize } = await send("Page.getLayoutMetrics");
  const result = await send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: contentSize.width, height: contentSize.height, scale: 1 },
  });
  writeFileSync(join(evidenceDir, name), Buffer.from(result.data, "base64"));
}

async function runJourney(width, height, screenshotName) {
  await navigate(width, height);
  const focusOutline = await evaluate(`(() => {
    const button = document.querySelectorAll('.atlas-game-controls button')[1];
    button.focus();
    button.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    return getComputedStyle(button).outlineWidth;
  })()`);
  await wait(100);
  const focusPreview = {
    pressed: await evaluate(`document.querySelectorAll('.atlas-game-controls button')[1].getAttribute('aria-pressed')`),
    outline: focusOutline,
  };
  await evaluate(`document.querySelectorAll('.atlas-game-controls button')[1].click()`);
  await wait(100);
  const detailGame = await evaluate(`document.querySelector('#prototype-picks-title').textContent`);
  await evaluate(`document.querySelector('.origin-detail-body section:last-child > button').click()`);
  await wait(100);
  const receiptGame = await evaluate(`document.querySelector('#receipt-title').textContent`);
  await evaluate(`document.querySelector('.receipt-actions button:last-child').click()`);
  await wait(100);
  const communityGame = await evaluate(`document.querySelector('#community-title').textContent`);
  const result = await evaluate(`(() => ({
    width: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    sections: document.querySelectorAll('.origin-hero, .origin-how, .origin-atlas-section, .origin-detail, .selection-receipt, .origin-community').length,
    candidates: document.querySelectorAll('.prototype-cards > button').length,
    lockedCapabilities: document.querySelectorAll('.locked-capabilities button:disabled').length,
    reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
    focusedSection: document.activeElement?.id || document.activeElement?.getAttribute('aria-labelledby'),
    detailGame: ${JSON.stringify(detailGame)},
    receiptGame: ${JSON.stringify(receiptGame)},
    communityGame: ${JSON.stringify(communityGame)}
  }))()`);
  await fullPageScreenshot(screenshotName);
  return { ...result, focusPreview };
}

try {
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");
  const desktop = await runJourney(1440, 1000, "day-07-product-journey-desktop.png");
  const mobile = await runJourney(360, 800, "day-07-product-journey-mobile-360.png");
  const sameGame = desktop.receiptGame.includes(desktop.detailGame) && desktop.communityGame.includes(desktop.detailGame)
    && mobile.receiptGame.includes(mobile.detailGame) && mobile.communityGame.includes(mobile.detailGame);
  const steamMediaRequests = networkRequests.filter((url) => url.startsWith("https://cdn.cloudflare.steamstatic.com/steam/apps/"));
  const unexpectedExternalRequests = networkRequests.filter((url) =>
    !url.startsWith("http://localhost:3017")
    && !url.startsWith("https://cdn.cloudflare.steamstatic.com/steam/apps/"));
  const checks = {
    desktopNoOverflow: desktop.width === desktop.scrollWidth,
    mobileNoOverflow: mobile.width === mobile.scrollWidth,
    sourceAlignedSections: desktop.sections === 6 && mobile.sections === 6,
    exactlyThreeCandidates: desktop.candidates === 3 && mobile.candidates === 3,
    sameGameContinuity: sameGame,
    twoLockedCapabilities: desktop.lockedCapabilities === 2 && mobile.lockedCapabilities === 2,
    reducedMotion: desktop.reducedMotion && mobile.reducedMotion,
    focusPreview: desktop.focusPreview.pressed === "true",
    focusHandoff: desktop.focusedSection === "community" && mobile.focusedSection === "community",
    noBrowserExceptions: browserExceptions.length === 0,
    noConsoleErrors: consoleErrors.length === 0,
    approvedSteamMediaRequests: steamMediaRequests.length > 0,
    noUnexpectedExternalRequests: unexpectedExternalRequests.length === 0,
  };
  console.log(JSON.stringify({ checks, desktop, mobile, steamMediaRequestCount: steamMediaRequests.length, unexpectedExternalRequests, browserExceptions, consoleErrors }, null, 2));
  if (Object.values(checks).some((value) => !value)) process.exitCode = 1;
} finally {
  socket.close();
  browser.kill();
}
