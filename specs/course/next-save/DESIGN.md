# NEXT SAVE — minimum design specification

## Design intent

The interface should feel like a calm decision instrument, not a neon gaming dashboard. The UI is a dark stage; cover art and the atlas carry the visual energy. Evidence must be easier to find than decorative lore.

## Source and precedence

1. Current product scope: [`ideas/next-save.md`](https://github.com/rlaqudwn1/idea/blob/56efd48215a791febf111ccd4a5a3965364a4598/ideas/next-save.md).
2. User/problem evidence: [`brief.md`](https://github.com/rlaqudwn1/design/blob/3aa6c37c1c7415ff74917a803037cc227c62b209/app/e/003-next-save-landing/brief.md).
3. Visual decisions: [`direction.md`](https://github.com/rlaqudwn1/design/blob/3aa6c37c1c7415ff74917a803037cc227c62b209/app/e/003-next-save-landing/direction.md) and the v0.10 Hero/page-shell render.
4. Selective local source: [`assignments/day-02/resources/SOURCE-MANIFEST.json`](../../../assignments/day-02/resources/SOURCE-MANIFEST.json).
5. This file wins for course-slice scope and accessibility. Historical revisions in `direction.md` are rationale, not simultaneous requirements.

Product-wide actors, use cases, journeys, and the staged community strategy are defined in [`PRODUCT-EXPERIENCE.md`](./PRODUCT-EXPERIENCE.md). This file defines how the current course slice renders that larger direction honestly.

## Information architecture

1. Navigation: wordmark, `데모 보기` anchor.
2. Hero/input: decision-first headline, honest demo label, URL field, primary CTA.
3. Market positioning: explain that NEXT SAVE supports a decision rather than
   adding another tracking list; keep competitor details in planning evidence.
4. How it works: read signals → map taste → explain three picks.
5. Atlas result: profile summary, genre map, core/confidence, evidence.
6. Next picks: three ranked cards with expandable reasons.
7. Completion: selected game, rationale recap, restart action.

## Visual tokens

| Role | Baseline | Use |
|---|---|---|
| Canvas | ink navy / near-black | page background |
| Surface | cool navy, one elevation step | panels and cards |
| Text primary | cool white | headings and decisive content |
| Text secondary | blue-gray | explanations and metadata |
| Brand accent | teal `#2dd4bf` | CTA, focus, active state |
| Secondary accent | violet `#8b5cf6` | rare comparative emphasis |
| Atlas claimed | deep teal | cool elevation/claimed state |
| Atlas frontier | violet | frontier and next-exploration state |

- Typeface: Pretendard variable, 400–800. Use a monospace face only for atlas coordinates or compact evidence labels.
- Type scale: hero 48–64 px desktop / 36–44 px mobile; section 32–40 px; body 16 px / 24 px line height; labels 13–14 px.
- Radius and shadow: restrained; do not use glow as the default emphasis mechanism.
- Motion: short opacity/transform transitions only. Disable non-essential movement under `prefers-reduced-motion`.
- Signature texture: a restrained 64 px coordinate-grid wash and one connected pixel-continent teaser. Do not return to floating circular nodes or disconnected islands.
- Warm colors are not page or atlas chrome. Reserve them for game-cover content or unavoidable semantic conventions.

## Components

- `DemoDisclosure`: persistent, plain-language mock boundary.
- `ProfileUrlForm`: label, helper text, validation, loading transition.
- `ProfileSwitcher`: two fixtures; visibly identifies the active demo.
- `TasteAtlas`: SVG or semantic HTML visualization with text equivalent and legend.
- `CoreSummary`: core label, confidence, secondary tags, evidence list.
- `RecommendationCard`: rank, cover, time, fit, expandable evidence, selection action.
- `SelectionReceipt`: final choice and the exact signals that supported it.
- `CommunityPreview`: a clearly separated product-horizon section using fictional content only.
- `GameProfilePreview`: game-level fixture facts plus a separately labelled personal interpretation.
- `ComingSoonCapability`: disabled future capability; no fake activity, count, or enabled action.
- `AtlasSnapshotPreview`: a static preview only; sharing/export remains unavailable.

## Course-slice journey

1. Read the decision promise and fixture/no-Steam disclosure.
2. Enter a valid-looking URL or choose one of two fictional profiles.
3. Recover from an announced invalid-input state when necessary.
4. Inspect the taste atlas, soft core, confidence, tags, and evidence.
5. Compare exactly three fictional recommendations and their concrete signals.
6. Reach a selection receipt when the active assignment implements selection.
7. See the community direction only as a disabled, explicitly future-facing preview.

The longer recommendation → identity → snapshot → community journey belongs to `PRODUCT-EXPERIENCE.md`; it is not evidence that the current slice has accounts or social behavior.

## Responsive and accessibility rules

- Collapse two columns to a single reading order below 768 px; never require horizontal scrolling at 360 px.
- Maintain a 44×44 px minimum interactive target and a clearly visible teal focus ring.
- Atlas meaning must not rely on color alone; pair color with labels/patterns and provide a text summary.
- Validation and selection changes use a live region where appropriate.
- Cover images have descriptive alt text; decorative map texture has empty alt text.
- Contrast target: WCAG AA for text and controls.

## Copy rules

- Lead with the decision job: “오늘 시작할 한 판을, 이유와 함께.”
- Use first-person-friendly, respectful Korean; avoid guilt, death, waste, or gamer-rank shaming.
- Say `추천` only when a concrete signal appears next to it.
- Label all fixtures and generated-looking results as demo data.

## Visual review gate

Before marking Day 7 complete, review desktop and 360 px screenshots for hierarchy, atlas legibility, CTA consistency, card repetition, focus visibility, and demo disclosure. The owner must explicitly resolve any difference between this baseline and the imported v0.10 source render. Claude Design/Pencil generation remains a later option for missing final atlas texture after its biome/spec gate; it is not a reason to discard usable upstream v0.10 resources.
