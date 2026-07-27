# Step 01 — domain schema catalog

## Goal

Design a fixture-safe mock database catalog for every NEXT SAVE product domain
and publish the design as a readable section on the local landing page.

## Scope

- Model `SIG`, `ARC`, `MAP`, `PIC`, `LND`, `GME`, `COM`, `SNP`, `UXS`, and
  `REV`.
- Mark every domain as `core`, `preview`, or `deferred`.
- Keep the Day 8 persistence slice centered on a generated selection session,
  a fictional profile key, and a chosen public game ID.
- Render tables, fields, keys, relationships, constraints, and data boundaries
  without connecting to Supabase or another external database.

## Red → green → refactor

1. Red: add contract tests for domain coverage, key integrity, relationship
   targets, and forbidden private/live fields.
2. Green: add the smallest typed schema catalog and landing section that pass.
3. Refactor: improve responsive presentation while preserving the contracts.

## Acceptance checks

- All ten domains are represented once.
- Every mock table has a primary key and every foreign key resolves.
- Core recommendation records retain traceable fixture-signal references.
- Entered Steam URLs, cookies, secrets, live social metrics, billing, and real
  player data are absent.
- The landing section explicitly says the schemas are design-only fixtures.
- `npm test` and `npm run build` pass.

## Ownership and reversal

The coordinator alone edits shared application and Day rollup files. Parallel
agents provide read-only domain proposals. Reversal is removal of the schema
catalog module, landing component, styles, and this step packet.
