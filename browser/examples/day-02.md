# Day 2 verified browser sequence

This is a sanitized record of the browser work that produced the Day 2 LMS receipt. It is an example, not a reusable assignment URL.

## Observed contract

- LMS Day: 2.
- Title: `나만의 홈페이지 만들기`.
- Requirement: plan the main project and build its introduction site using React.
- Accepted field: `제출 링크 (배포 주소 또는 PR)`.
- Initial status: `미제출`.
- Submitted artifact: public ready PR #1 for NEXT SAVE.

## Browser actions

1. Connected to the user's existing Chrome session using `chrome:control-chrome`.
2. Claimed the already-open LMS tab from the current open-tab list.
3. Navigated to `/my/assignments` from a visible LMS navigation href.
4. Took a fresh assignment-list snapshot and selected the exact Day 2 block.
5. Navigated to the Day 2 href observed in that snapshot; no assignment identifier was guessed.
6. Verified the Day, title, requirement, link field, `미제출` state, and disabled submit button.
7. After explicit approval for PR creation and LMS submission, filled `https://github.com/rlaqudwn1/lms_homework/pull/1`.
8. Took a fresh snapshot, confirmed the URL and enabled `제출하기` button, then submitted.
9. Verified the authoritative receipt: `제출됨 · 지각`, `2026.07.23 10:33`, the exact PR URL, and `리뷰를 기다리고 있어요`.
10. Kept the receipt tab open as a user-facing deliverable and recorded the facts in Day 2 submission documents.

## Safety properties preserved

- No cookies, credentials, open-tab IDs, account name, or assignment UUID are stored here.
- No LMS endpoint was called outside the visible Chrome session.
- The submitted PR contains disclosed fictional fixtures and no live Steam request.
- Day 2 approval is not reusable for Day 5 or any resubmission.

