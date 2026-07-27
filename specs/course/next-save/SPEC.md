# NEXT SAVE — course-slice specification

## Product statement

NEXT SAVE helps a Steam player escape backlog decision paralysis by turning disclosed example play history into a taste atlas and a short, evidence-backed list of what to play next.

This specification deliberately describes an assignment prototype. It may load approved public game metadata and cover art, but it does not claim authenticated personal Steam analysis or validated recommendation quality.

Product-wide actors, use cases, journeys, and the staged community strategy live in [`PRODUCT-EXPERIENCE.md`](./PRODUCT-EXPERIENCE.md). This specification narrows that contract to an assignment-safe implementation slice.

## User and job

- User: time-poor adult Steam player with a large library and low tolerance for manual cataloguing.
- Job: “Help me choose one game I am likely to keep playing tonight, without making me sort another long list.”
- Desired outcome: within 30 seconds of entering the flow, the user can identify one recommendation and explain why it was shown.

## Core flow

1. The user sees a concise value proposition and a Steam profile URL field.
2. A valid-looking URL starts the demo. Public game catalogue/media requests are allowed; the entered URL and private account data are not transmitted.
3. The app discloses that it selected one of two seeded profiles.
4. The result shows the profile’s genre atlas, primary play-style core, confidence, and evidence.
5. The app shows exactly three ranked games. Opening a card reveals the signals behind the recommendation.
6. The user selects `오늘의 한 판` and reaches a completion state suitable for screenshot evidence.

## Functional requirements

- FR-001: Accept a Steam Community profile URL and reject blank or clearly malformed input with an inline message.
- FR-002: Distinguish public game catalogue/media from example personal play signals before and after submission.
- FR-003: Provide two selectable seeded profiles with visibly different atlas and recommendation outcomes.
- FR-004: Render a labelled genre atlas with at least three states: unexplored, exploring, and established.
- FR-005: Show one primary play-style core, confidence percentage, secondary tags, and at least two evidence statements derived from the fixture.
- FR-006: Rank exactly three next-game picks and show time estimate, fit label, and an evidence-backed “why”.
- FR-007: Allow the user to choose one pick and display a persistent success state.
- FR-008: Preserve the full core flow at 360 px width and with keyboard-only navigation.
- FR-009: If the community direction is previewed, show one fictional game profile with clearly separated game-level fixture facts and personal interpretation, plus disabled `coming soon` capability rows.

## Data boundary

- Input is presentation-only. It selects an example profile and is not stored or transmitted.
- Example profiles contain fictionalized labels, play-time bands, genre signals, and recommendation reasons; approved public game titles, metadata, and cover art may be fetched separately.
- Recommendation output is deterministic. Each reason must cite fixture fields; generic LLM-generated claims are prohibited.
- A future Supabase exercise may persist only the chosen pick and a generated session ID. It must not store a real Steam URL.
- The Day 8 landing may visualize a fixture-only mock schema for every product
  domain. That educational blueprint does not authorize those tables for Day 9:
  the first executable persistence slice remains the generated selection
  session, fictional profile key, and chosen public/fixture game ID.

## Acceptance criteria

- A first-time tester completes input → atlas → recommendation → selection in under 2 minutes without instruction.
- Invalid input is announced visually and to assistive technology, while valid input reaches results.
- Both seeded profiles produce different primary cores and at least two different recommendations.
- Every displayed recommendation reason is traceable to a named fixture field in a test.
- Automated tests cover URL validation, deterministic ranking, and the success-state transition.
- Lighthouse accessibility is at least 90 on the deployed submission route, or exceptions are documented.
- Browser requests to approved public game-media/catalogue origins are allowed and verified. The base slice sends no entered Steam URL, cookie, secret, or private player data.

## Non-goals

- Authenticated/private Steam library ingestion, OAuth, or provider integration requiring unapproved secrets.
- Accounts, sharing pipes, social feed, reviews, moderation, payments, or production analytics.
- Claims that the five play-style cores are scientifically validated.
- A general-purpose recommender for arbitrary private or sparse profiles.

## Success and honesty

### Community scope interpretation

Community remains part of the product vision, but the current slice may render only an explicitly future-facing fixture preview. Live members or counts, friends/follows, social feeds, review submission, likes/comments, moderation, and functioning snapshot export remain non-goals.

- Assignment success: a polished, deployed, verifiable vertical slice with a clear mock disclosure.
- Product hypothesis still open: whether people value or share an automatically generated atlas.
- Any user-testing result must record sample size and distinguish owner/self-proxy feedback from independent participants.
