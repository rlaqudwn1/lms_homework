# Day 11 — submission evidence

- Requirement: Enrich the existing service with one Open API.
- Provider: Wikidata Query Service, public game metadata only.
- Integration URL / commit SHA:
  `https://github.com/rlaqudwn1/lms_homework/pull/6` /
  `2ad9da5a4a29ba5d186d20596077d9b8eb6b3759`
- Verification: one approved Hollow Knight public metadata query succeeded;
  47 local tests, production build, and assignment harness pass.
- Fallback: deterministic local metadata remains visible on timeout, error, or
  invalid provider response.
- Data boundary: no Steam URL, account, library, cookie, secret, or personal data
  is transmitted.
- Attribution: the live-provider state links `Data from Wikidata`.
- LMS submission timestamp / receipt: `TBD`
