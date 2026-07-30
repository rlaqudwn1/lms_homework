# Step 01 — PRD submission readiness

## Goal

Prepare one revision-locked NEXT SAVE PRD candidate for the exact Day 18 LMS
assignment without changing external state.

## Ordered checks

1. Read the live LMS assignment and record its exact contract.
2. Recheck the private upstream HEAD and pinned source identity.
3. Compare original-product and course-slice authority.
4. Render the pinned original PRD to a self-contained PDF.
5. Validate the PDF and stop at the LMS HITL gate.

## In scope

- Day 18 documentation and a local PDF candidate.
- Read-only LMS and private-source inspection.
- Harness and artifact verification.

## Out of scope

- Day 16 changes.
- Editing the original PRD or silently promoting course mocks to product truth.
- Git commit/push/PR, deployment, access changes, LMS upload, or submission.

## Acceptance checks

- Exact Day 18 title, URL, requirement, deadline, state, and submission formats
  are recorded.
- Pin, Git blob, and SHA-256 identify the source.
- PDF is below 25 MB and yields readable extracted Korean text.
- Submission packet explains private-link risk and the mock boundary.
- Harness passes with Day 18 included.

