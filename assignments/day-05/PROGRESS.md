# Day 05 — GitHub and Vercel deployment

| Field | Value |
|---|---|
| State | Steps 01–02 complete; Vercel deployment verified; LMS submission pending |
| Dependency | Working Day 02 slice and local production build |
| Next action | Obtain separate approval before submitting the verified URL to the LMS |
| HITL | LMS submission remains unapproved |

## Acceptance evidence

- Private GitHub history identifies the course slice.
- A user-approved Vercel URL passes a fresh-browser smoke test.
- Reusable browser components preserve exact-Day selection, action-specific approval, and authoritative LMS receipt recording.

## Ordered steps

1. [`step-01-browser-submission-kit`](steps/step-01-browser-submission-kit/PROGRESS.md) — complete; reusable guarded browser/PR submission components.
2. [`step-02-deployment-readiness`](steps/step-02-deployment-readiness/PROGRESS.md) — deployment runbook, local preflight, and target-specific Vercel gate.

## LMS requirement verified

- `Day 5 나만의 홈페이지 배포하기`: use GitHub and Vercel to deploy the homepage.
- Submission accepts a deployment address or PR link; actual submission requires separate user approval.
