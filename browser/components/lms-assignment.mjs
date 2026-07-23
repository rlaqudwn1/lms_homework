const LMS_SUBMIT_ACTION = "submit-lms-assignment";
const ASSIGNMENT_PATH = /^\/my\/assignments\/[^/?#]+$/;

export function findAssignmentInSnapshot(snapshot, requestedDay) {
  const day = normalizeDay(requestedDay);
  const block = exactDayBlock(requireSnapshot(snapshot), day);
  const status = [...block.matchAll(/^\s+- generic: (.+)$/gm)]
    .map((match) => match[1].trim())
    .find((value) => value !== "Day" && !/^"?\d+"?$/.test(value));
  if (!status) throw new Error("과제 상태를 snapshot에서 찾지 못했습니다.");
  const links = [...block.matchAll(/link "([^"]+)":\s*\n\s*- \/url: ([^\s]+)/g)]
    .map(([, title, href]) => ({ title, href }))
    .filter(({ title, href }) => ASSIGNMENT_PATH.test(href) && !["제출하기", "리뷰 보기"].includes(title));

  if (links.length !== 1) {
    throw new Error(`Day ${day} 과제 링크를 유일하게 찾지 못했습니다.`);
  }

  return { day, status, ...links[0] };
}

export function parseAssignmentDetail(snapshot, requestedDay) {
  const day = normalizeDay(requestedDay);
  const source = requireSnapshot(snapshot);
  const heading = firstMatch(
    source,
    new RegExp(`heading "([^"]*Day ${day} [^"]+)" \\[level=1\\]`),
    "과제 제목",
  );
  const marker = `Day ${day} `;
  const markerIndex = heading.indexOf(marker);
  const status = heading.slice(0, markerIndex).trim();
  const title = heading.slice(markerIndex + marker.length).trim();
  const requirement = firstMatch(
    source,
    /heading "과제 개요" \[level=2\][\s\S]*?- paragraph: ([^\n]+)/,
    "과제 개요",
  ).trim();
  const linkFieldName = firstMatch(source, /textbox "([^"]+)"/, "제출 링크 입력란");
  const submitButtonName = firstMatch(source, /button "(제출하기|다시 제출)"(?: \[disabled\])?/, "제출 버튼");

  return { day, status, title, requirement, linkFieldName, submitButtonName };
}

export async function fillApprovedSubmissionLink({ tab, snapshot, authorization }) {
  const detail = parseAssignmentDetail(snapshot, authorization?.day);
  await assertAuthorization({ tab, detail, authorization });
  if (detail.status !== "미제출" || detail.submitButtonName !== "제출하기") {
    throw new Error("최초 미제출 과제만 이 컴포넌트로 제출할 수 있습니다. 재제출은 별도 승인이 필요합니다.");
  }

  const field = tab.playwright.getByRole("textbox", { name: detail.linkFieldName, exact: true });
  if (await field.count() !== 1) {
    throw new Error("승인된 제출 링크 입력란을 유일하게 찾지 못했습니다.");
  }
  await field.fill(authorization.submissionUrl);
}

export async function submitApprovedAssignment({ tab, snapshot, authorization }) {
  const detail = parseAssignmentDetail(snapshot, authorization?.day);
  await assertAuthorization({ tab, detail, authorization });
  if (!snapshot.includes(authorization.submissionUrl)) {
    throw new Error("승인된 제출 URL이 현재 양식에 입력된 것을 확인하지 못했습니다.");
  }
  if (detail.status !== "미제출" || detail.submitButtonName !== "제출하기") {
    throw new Error("최초 미제출 과제만 이 컴포넌트로 제출할 수 있습니다. 재제출은 별도 승인이 필요합니다.");
  }

  const button = tab.playwright.getByRole("button", { name: detail.submitButtonName, exact: true });
  if (await button.count() !== 1) {
    throw new Error("승인된 제출 버튼을 유일하게 찾지 못했습니다.");
  }
  if (!await button.isEnabled()) {
    throw new Error("제출 버튼이 활성화되지 않았습니다.");
  }
  await button.click();
}

export function parseSubmissionReceipt(snapshot, requestedDay) {
  const day = normalizeDay(requestedDay);
  const source = requireSnapshot(snapshot);
  const heading = firstMatch(
    source,
    new RegExp(`heading "([^"]*Day ${day} [^"]+)" \\[level=1\\]`),
    "제출 결과 제목",
  );
  const marker = `Day ${day} `;
  const markerIndex = heading.indexOf(marker);
  const status = heading.slice(0, markerIndex).trim();
  const title = heading.slice(markerIndex + marker.length).trim();
  const submittedAt = firstMatch(source, /paragraph: (\d{4}\.\d{2}\.\d{2} \d{2}:\d{2}) 제출/, "제출 시각");
  const submittedUrl = firstMatch(
    source,
    /link "https?:\/\/[^\n]+":\s*\n\s*- \/url: (https?:\/\/[^\s]+)/,
    "제출 URL",
  );
  const reviewStatus = firstMatch(
    source,
    /heading "코드 리뷰" \[level=2\]\s*\n\s*- paragraph: ([^\n]+)/,
    "리뷰 상태",
  ).trim();
  const confirmation = firstMatch(source, /^- status: (.+)$/m, "제출 확인 메시지").trim();

  return { day, status, title, submittedAt, submittedUrl, reviewStatus, confirmation };
}

async function assertAuthorization({ tab, detail, authorization }) {
  if (!authorization?.approved || authorization.action !== LMS_SUBMIT_ACTION) {
    throw new Error("LMS 제출에 대한 명시 승인이 필요합니다.");
  }
  if (authorization.day !== detail.day) {
    throw new Error("승인된 Day와 현재 과제가 일치하지 않습니다.");
  }
  if (authorization.assignmentTitle !== detail.title) {
    throw new Error("승인된 과제명과 현재 과제가 일치하지 않습니다.");
  }

  const currentUrl = new URL(await tab.url());
  const assignmentUrl = new URL(authorization.assignmentUrl);
  const destinationOrigin = new URL(authorization.destinationOrigin).origin;
  const submissionUrl = new URL(authorization.submissionUrl);
  if (currentUrl.href !== assignmentUrl.href || currentUrl.origin !== destinationOrigin) {
    throw new Error("승인된 LMS 대상과 현재 탭이 일치하지 않습니다.");
  }
  if (!ASSIGNMENT_PATH.test(currentUrl.pathname)) {
    throw new Error("현재 탭이 LMS 과제 상세 경로가 아닙니다.");
  }
  if (!["http:", "https:"].includes(submissionUrl.protocol)) {
    throw new Error("제출 URL은 HTTP(S) 링크여야 합니다.");
  }
}

function exactDayBlock(snapshot, day) {
  const marker = `generic "Day ${day} 과제":`;
  const start = snapshot.indexOf(marker);
  if (start < 0) throw new Error(`Day ${day} 과제를 현재 목록에서 찾지 못했습니다.`);
  const remainder = snapshot.slice(start + marker.length);
  const next = remainder.search(/\n\s+- generic "Day \d+ 과제":/);
  return next < 0 ? snapshot.slice(start) : snapshot.slice(start, start + marker.length + next);
}

function normalizeDay(value) {
  const day = Number(value);
  if (!Number.isInteger(day) || day < 1 || day > 99) {
    throw new Error("Day는 1부터 99 사이의 정수여야 합니다.");
  }
  return day;
}

function requireSnapshot(snapshot) {
  if (typeof snapshot !== "string" || !snapshot.trim()) {
    throw new Error("현재 브라우저 DOM snapshot이 필요합니다.");
  }
  return snapshot;
}

function firstMatch(source, pattern, label) {
  const match = source.match(pattern);
  if (!match) throw new Error(`${label}을(를) snapshot에서 찾지 못했습니다.`);
  return match[1];
}
