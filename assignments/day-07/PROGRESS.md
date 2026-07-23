# Day 07 — prototype design

| Field | Value |
|---|---|
| State | prototype UI complete; submission approval pending |
| Dependency | `specs/course/next-save/DESIGN.md` |
| Next action | Obtain action-time approval before external publication or LMS submission |
| HITL | External Git, deployment, and LMS actions remain unapproved |

## Evidence

- Design specification: [`../../specs/course/next-save/DESIGN.md`](../../specs/course/next-save/DESIGN.md)
- Completed packet:
  [`steps/step-01-prototype-design-gate/`](steps/step-01-prototype-design-gate/)
- Implementation packet:
  [`steps/step-02-distinct-prototype-ui/`](steps/step-02-distinct-prototype-ui/)
- Desktop render:
  [`evidence/day-07-claude-design-desktop.png`](evidence/day-07-claude-design-desktop.png)
- 360 px render:
  [`evidence/day-07-claude-design-mobile-360.png`](evidence/day-07-claude-design-mobile-360.png)
- Selected-success render:
  [`evidence/day-07-claude-design-selection-360.png`](evidence/day-07-claude-design-selection-360.png)
- Readability-pass desktop:
  [`evidence/day-07-readable-map-desktop.png`](evidence/day-07-readable-map-desktop.png)
- Readability-pass mobile 360 px:
  [`evidence/day-07-readable-map-mobile-360.png`](evidence/day-07-readable-map-mobile-360.png)
- Human-journey selected desktop:
  [`evidence/day-07-human-journey-selected-desktop.png`](evidence/day-07-human-journey-selected-desktop.png)
- Human-journey mobile 360 px:
  [`evidence/day-07-human-journey-mobile-360.png`](evidence/day-07-human-journey-mobile-360.png)
- Game-language refinement desktop:
  [`evidence/day-07-game-language-desktop.png`](evidence/day-07-game-language-desktop.png)
- Game-language refinement mobile 360 px:
  [`evidence/day-07-game-language-mobile-360.png`](evidence/day-07-game-language-mobile-360.png)

## Gate result

The new `/prototype` route is visibly and behaviorally distinct from the Day 2
landing. It implements fixture selection, profile-dependent atlas evidence,
exactly three candidates, and a persistent selection receipt while preserving
the canonical calm decision instrument and fixture-only boundary.
The readability pass replaces decorative terrain blocks with a labelled
two-axis decision map that connects all three candidates to visible points.
The final journey pass turns the four sections into an explicit conversation:
each CTA names the next outcome, moves the viewport, and hands focus to the next
region; the receipt confirms the decision and offers a reversible return.
The public-reference refinement adds game-readable capsule and world-map
grammar without copying game assets: all six covers, both route systems,
landmarks, names, and fixture values remain original local SVG/data.

The final visual system was generated as additive frames in Claude Design,
translated through external design-system/font references, and implemented with
a locally bundled Wanted Sans Variable font.
