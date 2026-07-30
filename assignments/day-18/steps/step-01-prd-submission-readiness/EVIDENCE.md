# Step 01 evidence

## Evidence checks

- Initial check: the repository had no Day 18 harness, so the local structural
  checker did not cover the assignment.
- Live LMS check: Day 18 is `자신만의 메인서비스 prd 만들기`, requires a PRD,
  accepts one link or image/PDF/ZIP files, and remains `미제출`.
- Source check: private upstream `master` and the course pin both resolve to
  `56efd48215a791febf111ccd4a5a3965364a4598`.
- Revision check: local source matches Git blob
  `f2b43cdcfaa73e4396af2f6833ef4d86c6f5216e` and manifest SHA-256
  `a2ab5f21477765fe12aa50104bbb19d3f777bf9efe50cf74309a93199bb0701f`.

## Artifact validation

To be filled after rendering:

- PDF: `../../artifacts/NEXT-SAVE-PRD-v0.5-56efd482.pdf`
- Page count: `9`
- File size: `224,880 bytes` (well below the LMS 25 MB per-file limit)
- PDF SHA-256:
  `22755a88c7fe8d8ae082711394af0b1976c5e23057c83b113ab3da6292cb1e62`
- Text extraction: passed for the title, product subtitle, riskiest-assumption
  section, and non-goals section.
- Visual review: rendered pages 1, 2, 5, and 9; Korean glyphs, margins,
  headings, tables, callouts, and footer/page numbers were legible with no
  clipping or overlap observed.
- Harness: passed, `12 day folders and all claimed step packets are complete`.

## External-state boundary

The exact LMS target and candidate are prepared, but no file was uploaded, no
link was entered, and `제출하기` was not clicked.
