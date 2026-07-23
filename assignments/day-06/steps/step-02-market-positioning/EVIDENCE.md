# Evidence — Day 06 market positioning

## Research boundary

- Checked 2026-07-23.
- Compared official operating pages for Backloggd, Grouvee, and
  HowLongToBeat.
- Recorded the qualitative comparison in `MARKET-LANDSCAPE.md`.
- Made no market-size, traffic, revenue, superiority, or validated-demand claim.

## Red

Command:

`npm test -- --run lib/market-positioning.test.ts`

Expected failure:

`Cannot find module './market-positioning'`

The failing test required three sourced service comparisons and exactly three
landing-positioning pillars before their implementation existed.

## Green

- Focused test: 2/2 passed.
- Full unit suite: 15/15 passed across 3 files.
- Production build: passed, including TypeScript and static page generation.
- Local production browser verification: passed all checks, including 360 px
  overflow, keyboard flow/focus, fixture disclosure, two profiles, exactly
  three recommendations, zero browser exceptions, and zero Steam-domain
  requests.

## Implemented result

- Research content: `MARKET-LANDSCAPE.md`
- Typed, testable copy: `lib/market-positioning.ts`
- Landing component: `components/market-positioning.tsx`
- Rendered after the existing dashboard and before `작동법`.
- Responsive layout changes from three columns to one column on mobile.
- Disclosure states that the positioning is a hypothesis and the current
  product is a fixture-only course mock.
- Desktop evidence:
  [`../../evidence/day-06-positioning-desktop.png`](../../evidence/day-06-positioning-desktop.png)
- 360 px evidence:
  [`../../evidence/day-06-positioning-mobile-360.png`](../../evidence/day-06-positioning-mobile-360.png)

## Refactor/scope check

- Existing color, type, spacing, and focus tokens are reused.
- The core input → atlas/evidence → three picks flow is unchanged.
- The new section explains the existing product; it is not a fourth functional
  feature group.
- Competitor logos and comparative claims are not rendered in the promotional
  UI.
- The section ends with a clearly labelled source link to the public Day 6
  comparison document; competitor details remain outside the marketing claims.
- No Steam request, real profile/personal data, secret, persistence, account, or
  external API was added.
