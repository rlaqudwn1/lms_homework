import { describe, expect, it, vi } from "vitest";

import {
  fillApprovedSubmissionLink,
  findAssignmentInSnapshot,
  parseAssignmentDetail,
  parseSubmissionReceipt,
  submitApprovedAssignment,
} from "./lms-assignment.mjs";

const assignmentListSnapshot = `
- main:
  - generic "Day 20 과제":
    - generic: Day
    - generic: "20"
  - generic: 미제출
  - link "다른 과제":
    - /url: /my/assignments/day-20
  - generic "Day 2 과제":
    - generic: Day
    - generic: "02"
  - generic: 미제출
  - link "나만의 홈페이지 만들기":
    - /url: /my/assignments/day-02
  - link "제출하기":
    - /url: /my/assignments/day-02
`;

const detailSnapshot = `
- main:
  - heading "미제출 Day 2 나만의 홈페이지 만들기" [level=1]
  - heading "과제 개요" [level=2]
  - paragraph: 1. 내 메인 프로젝트 구상하기 2. 메인 프로젝트 소개사이트 만들기 - React 활용
  - heading "제출" [level=2]
  - textbox "제출 링크 (배포 주소 또는 PR)"
  - button "제출하기"
`;

const filledSnapshot = `${detailSnapshot}
  - textbox "제출 링크 (배포 주소 또는 PR)" [active]:
    - text: https://github.com/example/course/pull/7
`;

const receiptSnapshot = `
- main:
  - heading "제출됨 · 지각 Day 2 나만의 홈페이지 만들기" [level=1]
  - paragraph: 2026.07.23 10:33 제출
  - link "https://github.com/example/course/pull/7 (새 탭에서 열림)":
    - /url: https://github.com/example/course/pull/7
  - heading "코드 리뷰" [level=2]
  - paragraph: 리뷰를 기다리고 있어요
- status: 과제를 제출했어요. 마감 후에 제출해서 지각으로 표시돼요.
`;

const authorization = {
  approved: true,
  action: "submit-lms-assignment",
  destinationOrigin: "https://lms.codebootcamp.co.kr",
  day: 2,
  assignmentTitle: "나만의 홈페이지 만들기",
  assignmentUrl: "https://lms.codebootcamp.co.kr/my/assignments/day-02",
  submissionUrl: "https://github.com/example/course/pull/7",
};

describe("LMS assignment browser components", () => {
  it("finds the exact Day block instead of a similarly numbered Day", () => {
    expect(findAssignmentInSnapshot(assignmentListSnapshot, 2)).toEqual({
      day: 2,
      status: "미제출",
      title: "나만의 홈페이지 만들기",
      href: "/my/assignments/day-02",
    });
  });

  it("extracts the assignment contract before any form action", () => {
    expect(parseAssignmentDetail(detailSnapshot, 2)).toMatchObject({
      day: 2,
      status: "미제출",
      title: "나만의 홈페이지 만들기",
      requirement: expect.stringContaining("React 활용"),
      linkFieldName: "제출 링크 (배포 주소 또는 PR)",
      submitButtonName: "제출하기",
    });
  });

  it("refuses to fill or submit without a matching explicit authorization", async () => {
    const tab = createMockTab();
    await expect(fillApprovedSubmissionLink({
      tab,
      snapshot: detailSnapshot,
      authorization: { ...authorization, approved: false },
    })).rejects.toThrow(/승인/);
    expect(tab.link.fill).not.toHaveBeenCalled();

    await expect(submitApprovedAssignment({
      tab,
      snapshot: filledSnapshot,
      authorization: { ...authorization, assignmentTitle: "다른 과제" },
    })).rejects.toThrow(/과제명/);
    expect(tab.button.click).not.toHaveBeenCalled();
  });

  it("fills and submits only the approved exact target", async () => {
    const tab = createMockTab();
    await fillApprovedSubmissionLink({ tab, snapshot: detailSnapshot, authorization });
    expect(tab.link.fill).toHaveBeenCalledWith(authorization.submissionUrl);

    await submitApprovedAssignment({ tab, snapshot: filledSnapshot, authorization });
    expect(tab.button.click).toHaveBeenCalledOnce();
  });

  it("parses the authoritative receipt after submission", () => {
    expect(parseSubmissionReceipt(receiptSnapshot, 2)).toEqual({
      day: 2,
      status: "제출됨 · 지각",
      title: "나만의 홈페이지 만들기",
      submittedAt: "2026.07.23 10:33",
      submittedUrl: "https://github.com/example/course/pull/7",
      reviewStatus: "리뷰를 기다리고 있어요",
      confirmation: "과제를 제출했어요. 마감 후에 제출해서 지각으로 표시돼요.",
    });
  });
});

function createMockTab() {
  const link = {
    count: vi.fn().mockResolvedValue(1),
    fill: vi.fn().mockResolvedValue(undefined),
  };
  const button = {
    count: vi.fn().mockResolvedValue(1),
    isEnabled: vi.fn().mockResolvedValue(true),
    click: vi.fn().mockResolvedValue(undefined),
  };
  return {
    link,
    button,
    url: vi.fn().mockResolvedValue(authorization.assignmentUrl),
    playwright: {
      getByRole: vi.fn((role) => role === "textbox" ? link : button),
    },
  };
}
