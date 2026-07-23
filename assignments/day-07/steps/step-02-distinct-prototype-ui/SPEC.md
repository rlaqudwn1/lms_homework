# Step 02 — distinct prototype UI

## Goal

Implement a Day 7-only prototype workspace that is visibly and behaviorally
distinct from the Day 2 landing page.

## Route and flow

- Route: `/prototype`
- Flow: choose fixture → inspect atlas and evidence → compare exactly three
  candidates → select tonight's game → retain a rationale receipt.

## Ownership

- `app/prototype/page.tsx`
- `components/prototype-workspace.tsx`
- `lib/prototype.ts`
- `lib/prototype.test.ts`
- Day 7-specific additions in `app/globals.css`
- Day 7 packet and evidence

## TDD contract

1. Two fictional profiles have different cores and candidate sets.
2. Each profile renders exactly three deterministic candidates.
3. Every candidate cites at least two named fixture signals.
4. Selection creates a persistent receipt without storage or network activity.
5. Desktop and 360 px layouts preserve the full flow and visible fixture label.

## Non-goals

No live Steam, real personal data, authentication, database, external API,
community action, sharing, or changes to the Day 2 landing composition.

