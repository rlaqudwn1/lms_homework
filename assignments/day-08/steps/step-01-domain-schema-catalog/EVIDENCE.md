# Step 01 evidence

## Local checks

| Check | Result |
|---|---|
| Domain coverage | PASS — SIG, ARC, MAP, PIC, LND, GME, COM, SNP, UXS, REV |
| Key/reference integrity | PASS — all mock tables have a PK; FK targets resolve |
| Forbidden-field scan | PASS — no private profile, secret, live-social, behavioral, or billing fields |
| Recommendation contract | PASS — exactly-three rule and named signal references represented |
| `npm test` | PASS — 5 files, 30 tests |
| `npm run build` | PASS — `/`, `/prototype`, and not-found routes statically generated |
| Assignment harness | PASS — 11 Day folders and all claimed step packets complete |
| Desktop render | PASS — landing-page DB catalog, mock-schema warning, domain cards, and minimal-write marker rendered at 1440 px |
| Mobile render | PASS — DB catalog reflowed to the 390 px viewport without an observed clipped domain card |
| ERD relationship render | PASS — 6 typed relationships rendered; 1440 px page has no horizontal overflow |
| ERD mobile behavior | PASS — page remains 390 px wide; the 900 px ERD canvas scrolls inside its labelled container |

Reverification was performed on 2026-07-27 KST from the isolated Day 8
worktree. The initial combined verification command exceeded its execution
window without producing output; the same checks passed when run separately.

## Files

- Typed schema catalog: `lib/domain-schema.ts`
- Contract tests: `lib/domain-schema.test.ts`
- Landing renderer: `components/domain-schema-catalog.tsx`
- Relationship and scope design: `SCHEMA.md`

The landing renderer includes an accessible ERD example for the core path:
`signal_runs → core_assessments → atlas_maps → recommendations →
selection_sessions`, plus the `games` reference and deferred
`atlas_snapshots` preview. The typed `schemaRelationships` collection is tested
against known table names so the visual legend cannot silently point to an
invented table.

## Review boundary

The landing catalog is a design visualization backed by local TypeScript data.
It is not evidence that any table exists in Supabase. Visual browser evidence
and any publication require their own review/approval checkpoints.

The contract test was authored before the implementation, but the first
attempted Red run was blocked by missing worktree dependencies rather than a
schema assertion failure. The passing contract suite is valid regression
evidence; it must not be represented as an observed semantic Red failure.
