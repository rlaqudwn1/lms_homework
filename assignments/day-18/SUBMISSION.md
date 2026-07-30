# Day 18 — submission evidence

## Exact LMS target

- Assignment: Day 18 `자신만의 메인서비스 prd 만들기`
- Assignment URL:
  `https://lms.codebootcamp.co.kr/my/assignments/4c147ca6-5043-4f9c-a992-8354a310334e`
- Requirement: `자신만의 메인 서비스의 prd를 만들어주세요.`
- Due / current state: `2026-07-24 10:00 KST` / `미제출`
- Accepted modes shown by LMS: one link, or image/PDF/ZIP files (25 MB each,
  up to 10 files). The page says a link or a file alone is sufficient.

## Recommended submission candidate

- Preferred: public Day 18 PR in `rlaqudwn1/lms_homework` (`TBD after creation`).
- Reason: the LMS explicitly accepts a PR link, the submission repository is
  public, and the PR keeps the source, revision record, course/mock boundary,
  and reviewer-facing PDF together.
- Source:
  `../day-02/resources/upstream/idea/ideas/next-save.md`
- Source repository revision:
  `https://github.com/rlaqudwn1/idea/blob/56efd48215a791febf111ccd4a5a3965364a4598/ideas/next-save.md`
- Source identity: Git blob `f2b43cdcfaa73e4396af2f6833ef4d86c6f5216e`;
  SHA-256 `a2ab5f21477765fe12aa50104bbb19d3f777bf9efe50cf74309a93199bb0701f`.

## Included PDF evidence

- `artifacts/NEXT-SAVE-PRD-v0.5-56efd482.pdf`
- The PDF is self-contained and preserves the exact pinned original PRD rather
  than replacing it with the narrower course implementation contract.
- Do not submit the private `idea` URL by itself. It is provenance, not the
  reviewer-facing target.

## Original PRD versus course slice

| Concern | Original PRD | Course-slice specification |
|---|---|---|
| Authority | Product vision and current product decisions | Assignment-safe implementation contract |
| Status | v0.5, `reviewed`, verdict `Pivot` | course mock, not production |
| Data | Envisions future authorized Steam/public signals | two fictional seeded profiles; entered URL is not stored or transmitted |
| Recommendations | Product direction includes evidence-backed ranking and identity | deterministic fixtures and exactly three picks |
| Community/share | Strategic horizon gated by validation | disabled/fixture preview only; no live social behavior |
| Submission role | Correct Day 18 PRD artifact | Supporting scope/honesty note, not a substitute for the product PRD |

## Mock and honesty boundary

The LMS artifact is a product-requirements document, not proof that all described
product capabilities are implemented. The current course app remains a disclosed
fixture-only prototype. It may request approved public game media, but it does
not send entered Steam URLs, analyze private libraries, authenticate real users,
or operate live sharing/community features.

## Verification

- LMS requirement read from the exact live Day 18 page on 2026-07-30.
- Private upstream default branch rechecked read-only: `master` still points to
  `56efd48215a791febf111ccd4a5a3965364a4598`.
- Local source identity rechecked against `SOURCE-MANIFEST.json`.
- PDF render, page count, text extraction, file size, and checksum are recorded
  in the step evidence.
- Public PR URL: `TBD after PR creation`.
- LMS submission timestamp: `TBD — separate action-time user approval required`.

