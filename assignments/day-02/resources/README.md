# NEXT SAVE source resources

This directory is a selective, provenance-locked import used to assemble the Day 2 course slice.

## Layout

- `upstream/idea/`: current product, handoff, domain, and research inputs.
- `upstream/design/`: current NEXT SAVE source, copy, design records, self-contained explorations, and latest owned render captures.
- `SOURCE-MANIFEST.json`: source repository, commit, Git blob, SHA-256, and usage class for every imported file.

The upstream TypeScript is excluded from the LMS app's TypeScript project. It is reference source, not a second application entry point. Production code must be adapted into `app/`, `components/`, and `lib/` while keeping the existing Day 2 TDD checks.

## Explicit exclusions

- `design/.../candidates/*.png`: third-party product screenshots; research-only in the source repository.
- old v0.4–v0.7 captures: superseded by the latest imported v0.9 render set.
- `idea/archive/**` and legacy 2×2 archetype/island prototypes: historical and inconsistent with the current soft-core/connected-continent direction.
- secrets, cookies, `.env` files, real Steam profile data, remote fonts, and runtime Steam CDN dependencies.

Run `powershell -ExecutionPolicy Bypass -File scripts/sync-next-save-resources.ps1` to refresh the selective import and manifest.
