# Day 7 human journey review

## Goal

Make the fixture-only prototype feel like a service helping a person decide,
not a dashboard asking them to interpret a report.

## Reference comparison

| Reference | Useful pattern | NEXT SAVE translation |
|---|---|---|
| Steam Discovery Queue | Every recommendation offers a concrete next action such as wishlist, follow, or ignore | Every stage ends with one explicit next action; the candidate stage ends with a decision |
| Netflix contextual call-outs | Short call-outs explain what makes a title relevant before the user commits | Each candidate leads with a human-readable role: safest, lighter, or exploratory |
| Netflix responsive recommendations | A visible response changes what the service understands about the user | Profile choice immediately changes the atlas, evidence, and all three candidates |
| UI/UX Pro Max | Multi-step progress, visible focus, 44 px touch targets, explicit success, reversible navigation | Four-step journey nav, focus handoff, 48 px CTAs, a decision receipt, and “다른 후보 다시 보기” |

Sources:

- https://store.steampowered.com/about/newstore
- https://www.netflix.com/tudum/articles/netflix-new-homepage-layout-user-guide
- https://about.netflix.com/en/news/two-thumbs-up-even-better-recommendations
- `UI-UX-PRO-MAX.md`
- `UI-UX-JOURNEY-RULES.txt`
- `UI-UX-NEXTJS-RULES.txt`

## Dialogue and movement contract

| Step | Service line | User action | UI movement and feedback |
|---|---|---|---|
| 1. Profile | “오늘 어떤 방식으로 고를까요?” | Choose the closest fixture and continue | Selected profile is visibly pressed; CTA moves and focuses the atlas |
| 2. Atlas | “이 취향 해석이 오늘도 맞나요?” | Read the plain-language interpretation and accept it | Current step changes to 2; CTA moves and focuses the three candidates |
| 3. Candidates | “오늘 밤에는 이 셋이면 충분해요” | Choose one of exactly three contextualised candidates | Selected button changes to “오늘의 선택”; receipt is populated and focused |
| 4. Receipt | “좋아요, 오늘은 {title}예요” | Confirm the reason or reconsider | Explicit success details remain visible; back action returns to candidate comparison |

## Copy rules

- Speak about the decision before the score.
- Explain what the user should notice; do not ask them to decode a chart.
- Use one primary action per stage.
- Promise the next screen in the CTA label.
- Keep uncertainty honest: fixture, confidence, and no-persistence boundaries remain visible.
- Make decisions reversible without framing reconsideration as failure.

## UI/UX Pro Max disposition

The generated FAQ/wellness layout, Lora/Raleway pairing, and bright cyan palette
were rejected because the database misclassified the product. The existing
Wanted Sans, ink/chalk palette, and calm decision-instrument contract remain
authoritative. Only applicable journey, accessibility, feedback, and responsive
rules were adopted.

