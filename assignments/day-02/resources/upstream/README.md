# NEXT SAVE private upstream references

This folder is the durable, selective reference base for Day 7 and later LMS
work. It is not a vendored production application.

## Verified sources

Read-only verification date: **2026-07-24 KST**.

| Source | Private URL | Default branch | Verified HEAD / pin |
|---|---|---|---|
| Product | `https://github.com/rlaqudwn1/idea` | `master` | `56efd48215a791febf111ccd4a5a3965364a4598` |
| Design | `https://github.com/rlaqudwn1/design` | `main` | `3aa6c37c1c7415ff74917a803037cc227c62b209` |

Both default-branch HEADs matched the existing course pins on the verification
date. `SOURCE-MANIFEST.json` records each imported file's source path, local
path, Git blob, SHA-256, and usage class.

## Journey-critical reference files

### Product contract

- `idea/ideas/next-save.md`: current product promise, decision wedge,
  atlas/community/share sequence, and honesty constraints.
- `idea/ideas/next-save-domains.md`: use cases, state boundaries, game-level
  versus player-level separation, and unresolved community rules.
- `idea/specs/001-taste-atlas-landing/spec.md`: older landing requirements and
  conflicts that must be checked against the current PRD and course contract.

### Design behavior

- `design/atlas.tsx`: atlas hover/focus/activation and detail behavior.
- `design/components/Community.tsx`: game-detail/community hierarchy and
  same-game review reference.
- `design/copy.ts`: copy structure and staged community/share language.
- `design/direction.md`: visual, accessibility, and voice decisions.
- `design/steam.ts`: the pinned public Steam cover mapping adopted by the
  approved Day 7 media decision.

## Freshness and preservation

Before later Day work:

1. Use `gh` read-only to confirm each repository URL, default branch, and HEAD.
2. Compare the new HEAD to the pins above and record any change as an explicit
   source-review task; do not silently treat upstream changes as course truth.
3. Run the selective sync only after reviewing provenance and scope.
4. The sync script refuses to overwrite a local reference whose SHA-256 differs
   from the previous manifest. Preserve and resolve user changes deliberately.
5. Record newly used reference files in the active Day step evidence.

## Licence and use boundary

- These are private owner-provided references. Their presence here does not
  grant a general licence to redistribute third-party material.
- Do not import secrets, cookies, `.env` files, real Steam profiles, private
  user data, source-repository working state, or unrelated application code.
- Do not ship upstream React application code as the LMS product bundle.
  Extract behavior, information architecture, and copy constraints, then
  implement them within the course's own typed fixtures and components.
- `steam.ts` remains reference code, but its public Steam capsule/header URL
  pattern is approved for runtime hotlinks in the local prototype. Do not copy
  the upstream application code or cache/redistribute the images.
- Do not import third-party screenshots or candidate research captures.
- Keep local SVG fallbacks for unavailable public cover art.
