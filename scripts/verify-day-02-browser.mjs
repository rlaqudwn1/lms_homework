import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const port = Number(process.env.DAY02_CDP_PORT ?? 9334);
const appUrl = process.env.DAY02_URL ?? "http://localhost:3000";
const evidenceDir = resolve("assignments/day-02/evidence");
mkdirSync(evidenceDir, { recursive: true });

const browser = spawn(edge, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${join(tmpdir(), `next-save-cdp-${Date.now()}`)}`,
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
const networkRequests = [];
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === "Runtime.exceptionThrown") browserExceptions.push(message.params.exceptionDetails.text);
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
  await send("Page.navigate", { url: appUrl });
  for (let attempt = 0; attempt < 40; attempt += 1) {
    await wait(200);
    const hydrated = await evaluate(`(() => {
      const form = document.querySelector('form');
      return Boolean(form && Object.keys(form).some((key) => key.startsWith('__reactProps$')));
    })()`);
    if (hydrated) return;
  }
  throw new Error("React hydration을 기다리는 동안 시간이 초과됐습니다.");
}

async function screenshot(name) {
  const result = await send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
  writeFileSync(join(evidenceDir, name), Buffer.from(result.data, "base64"));
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

try {
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");

  await navigate(360, 900);
  const mobile = await evaluate(`(() => ({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    demoDisclosure: document.body.innerText.includes('실제 Steam 연동이나 로그인은 없습니다'),
    profileCount: document.querySelectorAll('.profile-switcher button').length,
    recommendationCount: document.querySelectorAll('.recommendation-card').length,
    capabilityCount: document.querySelectorAll('.coming-soon-row[aria-disabled="true"]').length
  }))()`);
  await fullPageScreenshot("day-02-mobile-360.png");

  await evaluate(`document.querySelector('form').requestSubmit()`);
  await wait(150);
  const invalidMessage = await evaluate(`document.querySelector('#url-error').textContent`);
  await screenshot("day-02-invalid-input.png");

  await evaluate(`(() => {
    const input = document.querySelector('#steam-url');
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    setter.call(input, 'https://steamcommunity.com/id/demo-player');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  })()`);
  await wait(100);
  await evaluate(`document.querySelector('form').requestSubmit()`);
  await wait(150);
  const successMessage = await evaluate(`document.querySelector('.success-state').textContent.trim()`);
  const postSubmitDisclosure = await evaluate(`document.body.innerText.includes('실제 Steam 연동이나 로그인은 없습니다') && document.body.innerText.includes('예시 프로필 불러옴')`);
  await evaluate(`document.querySelector('.success-state').scrollIntoView({ block: 'center' })`);
  await wait(100);
  await screenshot("day-02-demo-started.png");

  await evaluate(`document.querySelector('.wordmark').focus()`);
  const focusPath = [];
  for (let index = 0; index < 5; index += 1) {
    await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab" });
    await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab" });
    focusPath.push(await evaluate(`(() => {
      const element = document.activeElement;
      const style = getComputedStyle(element);
      return { id: element.id, type: element.type, text: element.textContent.trim().slice(0,24), outlineWidth: style.outlineWidth };
    })()`));
  }
  await evaluate(`document.querySelector('.success-state button').click()`);
  await wait(100);
  await evaluate(`document.querySelector('.profile-switcher button[aria-pressed="false"]').focus()`);
  await send("Input.dispatchKeyEvent", { type: "rawKeyDown", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  await send("Input.dispatchKeyEvent", { type: "char", key: "Enter", code: "Enter", text: "\r", windowsVirtualKeyCode: 13 });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  await wait(100);
  const switchedProfile = await evaluate(`(() => ({
    pressed: document.querySelector('.profile-switcher button[aria-pressed="true"]').textContent,
    summary: document.querySelector('.core-summary').textContent,
    successReset: document.querySelector('.success-state') === null
  }))()`);
  await evaluate(`(() => {
    const input = document.querySelector('#steam-url');
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    setter.call(input, 'https://steamcommunity.com/id/demo-player');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await wait(100);
  await evaluate(`document.querySelector('#steam-url').focus()`);
  const inputFocus = await evaluate(`(() => {
    const element = document.activeElement;
    return { id: element.id, outlineWidth: getComputedStyle(element).outlineWidth };
  })()`);
  await evaluate(`document.querySelector('button[type="submit"]').focus()`);
  const keyboardSubmitTarget = await evaluate(`document.activeElement.type`);
  await send("Input.dispatchKeyEvent", { type: "rawKeyDown", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  await send("Input.dispatchKeyEvent", { type: "char", key: "Enter", code: "Enter", text: "\r", windowsVirtualKeyCode: 13 });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  await wait(150);
  const keyboardSubmit = await evaluate(`document.querySelector('.success-state') !== null`);

  const postSubmitNoOverflow = await evaluate(`document.documentElement.scrollWidth === innerWidth`);

  await navigate(1440, 1000);
  await fullPageScreenshot("day-02-desktop.png");

  const checks = {
    mobileWidth: mobile.innerWidth === 360,
    noHorizontalOverflow: mobile.scrollWidth === mobile.innerWidth,
    demoDisclosure: mobile.demoDisclosure,
    exactlyTwoProfiles: mobile.profileCount === 2,
    exactlyThreeRecommendations: mobile.recommendationCount === 3,
    exactlyThreeDisabledCapabilities: mobile.capabilityCount === 3,
    invalidInputAnnounced: invalidMessage.includes("입력"),
    validInputStartsDemo: successMessage.includes("예시 프로필 불러옴"),
    postSubmitDisclosure,
    postSubmitNoOverflow,
    noBrowserExceptions: browserExceptions.length === 0,
    noSteamNetworkRequest: networkRequests.every((requestUrl) => !requestUrl.includes("steamcommunity.com")),
    focusableUrlInput: inputFocus.id === "steam-url",
    focusableCta: keyboardSubmitTarget === "submit",
    focusableProfileGroup: await evaluate(`document.querySelector('.profile-switcher button[aria-pressed="true"]') !== null`),
    visibleFocusRing: inputFocus.outlineWidth !== "0px",
    keyboardProfileSwitch: switchedProfile.pressed.includes("꾸준한 탐험가") && switchedProfile.summary.includes("세계 탐험형"),
    profileSwitchResetsSuccess: switchedProfile.successReset,
    keyboardSubmit: keyboardSubmitTarget === "submit" && keyboardSubmit,
    keyboardPath: focusPath,
  };
  const failed = Object.entries(checks).filter(([key, value]) => key !== "keyboardPath" && !value);
  console.log(JSON.stringify(checks, null, 2));
  if (failed.length) process.exitCode = 1;
} finally {
  socket.close();
  browser.kill();
}
