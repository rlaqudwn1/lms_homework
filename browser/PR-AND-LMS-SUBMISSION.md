# PR and LMS submission workflow

Use this workflow once per Day and once per submitted PR/deployment artifact. Repeating the browser skill does not make a previous approval reusable.

## 1. Establish the Day contract

1. Read `AGENTS.md`, the active Day `PROGRESS.md`, `SUBMISSION.md`, canonical product spec, and active step packet.
2. Run `git status --short --branch` and preserve unrelated changes.
3. In the logged-in LMS session, read the assignment list and locate the exact `Day N 과제` block from a current DOM snapshot.
4. Navigate only to the href observed in that block.
5. Record the visible Day, title, status, due time, requirement, accepted artifact type, field label, and submit-button state.
6. Stop if the LMS requirement conflicts with the local Day packet.

This phase is read-only. Do not fill a form merely to test whether it accepts a URL.

## 2. Prepare the PR artifact

1. Confirm the intended diff and run the Day's relevant tests, production build, browser checks, harness, and `git diff --check`.
2. Scan the intended files for secrets, personal data, real account/profile data, and prohibited remote assets.
3. Obtain explicit approval for stage, commit, push, repository visibility changes, and PR creation as applicable.
4. Stage only the approved scope, commit intentionally, and push the named branch.
5. Create a draft PR by default; use a ready PR only when the user requests a submission-ready artifact.
6. Verify the PR base/head, state, URL, latest commit, and checks.
7. Put the PR URL and implementation commit in the Day `SUBMISSION.md` before LMS entry when Git publication of that record is authorized.

PR creation does not authorize merge, deployment, or LMS submission.

## 3. Build an action-specific approval object

Immediately before form entry, the working context must contain explicit user approval for the exact action. Represent it as:

```js
var authorization = {
  approved: true,
  action: "submit-lms-assignment",
  destinationOrigin: "https://lms.codebootcamp.co.kr",
  day: 5,
  assignmentTitle: "<visible exact LMS title>",
  assignmentUrl: "<href observed from the current LMS snapshot>",
  submissionUrl: "<approved PR or deployment URL>",
};
```

Do not construct this object from inference. If the user approved “PR 생성” but not “LMS 제출,” `approved` is not true for this action.

## 4. Use the browser components

After the `chrome:control-chrome` runtime is initialized, its complete documentation is read, Chrome is selected, and the exact LMS tab is claimed:

```js
var { pathToFileURL } = await import("node:url");
var kit = await import(pathToFileURL(
  `${nodeRepl.cwd}/browser/components/lms-assignment.mjs`,
).href);

var indexSnapshot = await tab.playwright.domSnapshot();
var assignment = kit.findAssignmentInSnapshot(indexSnapshot, authorization.day);

// Navigate to the exact href observed above, then take a fresh snapshot.
var detailSnapshot = await tab.playwright.domSnapshot();
var detail = kit.parseAssignmentDetail(detailSnapshot, authorization.day);

await kit.fillApprovedSubmissionLink({ tab, snapshot: detailSnapshot, authorization });

// Required: take a fresh snapshot after fill and verify the URL is visible.
var filledSnapshot = await tab.playwright.domSnapshot();
await kit.submitApprovedAssignment({ tab, snapshot: filledSnapshot, authorization });

// Required: observe the resulting page before claiming success.
var receiptSnapshot = await tab.playwright.domSnapshot();
var receipt = kit.parseSubmissionReceipt(receiptSnapshot, authorization.day);
```

The component supports first submission only. A page showing `다시 제출` requires a separate resubmission decision and a different guarded workflow.

## 5. Verify and record the receipt

Success requires all of the following from the resulting page:

- the expected Day and title;
- a submitted status, including whether it is late;
- the LMS submission timestamp;
- the exact submitted PR/deployment URL;
- code-review status;
- the visible LMS confirmation message.

Update the active Day `SUBMISSION.md`, `PROGRESS.md`, assignment board, HITL record, and handoff with only those facts. Do not claim an on-time submission when the LMS says `지각`.

## 6. Browser cleanup and Git follow-up

1. Keep the LMS receipt tab as `deliverable` only if the user needs to inspect it; otherwise release it.
2. Finalize browser tabs once, after all observations are complete.
3. Run local documentation checks.
4. Publishing the receipt-documentation commit still requires the Git authorization that applies to the active task; do not silently push because LMS submission was authorized.

## Repetition checklist for every later Day

- [ ] Fresh LMS list snapshot; no reused assignment ID.
- [ ] Exact Day/title/requirement/artifact type recorded.
- [ ] Current branch/diff/tests and artifact URL verified.
- [ ] Exact publication approvals recorded.
- [ ] Exact LMS submission approval recorded immediately before action.
- [ ] Fresh detail snapshot before fill.
- [ ] Fresh form snapshot after fill and before click.
- [ ] Fresh receipt snapshot after click.
- [ ] Status/timestamp/URL/review/confirmation recorded.
- [ ] Browser finalized and only necessary tab retained.
- [ ] No credentials, cookies, personal data, or raw page dump committed.

