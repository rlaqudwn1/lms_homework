# Step 08 spec: approved dashboard implementation

## Outcome

Implement the owner-approved Claude Design dashboard in the local Day 2 app, including exactly three fictional recommendations and a fixture-safe `CommunityPreview`.

## Owned files

- `app/page.tsx`
- `app/globals.css`
- `components/demo-experience.tsx`
- `components/atlas-teaser.tsx`
- `components/community-preview.tsx`
- `lib/demo.ts`
- `lib/demo.test.ts`
- `scripts/verify-day-02-browser.mjs`
- this step packet and the Day 2 rollup/evidence

## Dependencies

- Step 07 product-experience contract
- Owner visual approval recorded on 2026-07-22 KST

## TDD contract

1. Red: tests require exactly three fictional recommendations, a linked fictional game profile, separated fixture facts/personal interpretation, and three disabled capabilities.
2. Green: implement the smallest data and UI change that satisfies those tests and the approved responsive composition.
3. Refactor: consolidate repeated fixture rendering while tests, build, and browser checks remain green.

## Acceptance checks

- Desktop and 360 px follow the approved reading order.
- Default, invalid URL, and success states remain distinguishable without color alone.
- `CommunityPreview` contains no account, member count, friend/follow, feed, review-writing, reaction, comment, sharing, or remote-asset behavior.
- Game facts and active-profile interpretation use separate labelled containers.
- No Steam or other external data request is made.
