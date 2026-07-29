# Day 11 — submission evidence

- Requirement: Enrich the existing service with one Open API.
- Provider: Wikidata Query Service, public game metadata only.
- Integration URL / commit SHA:
  `https://github.com/rlaqudwn1/lms_homework/pull/6` /
  `2ad9da58627612968303f10ea63018fd8bccbebd`
- Verification: one approved Hollow Knight public metadata query succeeded;
  47 local tests, production build, and assignment harness pass.
- Fallback: deterministic local metadata remains visible on timeout, error, or
  invalid provider response.
- Data boundary: no Steam URL, account, library, cookie, secret, or personal data
  is transmitted.
- Attribution: the live-provider state links `Data from Wikidata`.
- LMS submission timestamp: `2026-07-29 13:00 KST`
- LMS receipt: `제출됨 · 지각`; code review status:
  `리뷰를 기다리고 있어요`.
