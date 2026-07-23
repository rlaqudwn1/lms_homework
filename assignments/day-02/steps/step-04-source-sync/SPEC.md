# Step 04 spec — latest NEXT SAVE source sync

## Outcome

Selectively import the latest usable NEXT SAVE product and design resources before any further Day 2 visual implementation.

## Source authority

- Product: `rlaqudwn1/idea`, branch `master`.
- Design: `rlaqudwn1/design`, branch `main`, directory `app/e/003-next-save-landing`.
- The generated `assignments/day-02/resources/SOURCE-MANIFEST.json` locks every imported file to a commit, Git blob, and local SHA-256.

## Owned files

- `scripts/sync-next-save-resources.ps1`
- `assignments/day-02/resources/**`
- This step packet and Day 2 source/progress rollups.

## Import policy

- Import canonical PRD/handoff/research inputs needed to resolve current product decisions.
- Import owned NEXT SAVE runtime source, copy, explorations, and latest v0.9 render captures as implementation references.
- Do not import unrelated repository files, secrets, historical archives, or third-party candidate screenshots.
- Treat upstream source as reference material. Adapt it into the tested Day 2 runtime; do not route the app directly through this folder.
- Do not add Steam CDN calls or remote font downloads to the Day 2 runtime.

## Acceptance checks

- Remote branch HEADs are resolved and recorded.
- `idea/master` and `design/main` selective resources are present locally.
- Every imported file has provenance and SHA-256 metadata.
- Third-party `candidates/*.png` are absent.
- A secret-pattern scan of imported text reports no findings.
- Existing unit tests and production build remain green.
