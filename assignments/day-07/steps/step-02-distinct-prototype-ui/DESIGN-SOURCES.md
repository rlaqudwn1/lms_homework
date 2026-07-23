# Day 7 design sources

## Claude Design

- Project: `NEXT SAVE 랜딩 페이지 UI`
- Added pages:
  - `Day7Frame.dc.html`
  - `NEXT SAVE Day 7 Prototype.dc.html`
- Frames: 1440 px interactive workspace, 360 px workspace, and selected-success
  state.
- Existing Day 2 pages were preserved.

Claude Design translated these patterns:

- Wanted product-system discipline: compact segmented controls, strong alignment,
  restrained tokens, and thin dividers.
- Cover-led library scanning: cover → title → metadata → reason, used only for
  the three-candidate decision.
- Editorial data instruments: controlled numeric confidence, mono evidence
  labels, cartographic legend, contour/grid marks, and a text summary.

Rejected: generic AI dashboard cards, neon glow, glassmorphism, gradient blobs,
floating badges, excessive rounding, empty marketing hero space, and SaaS copy.

## External references

- [Wanted design.md](https://www.getdesign.kr/services/wanted?tab=preview):
  information density, type hierarchy, component/token discipline.
- [Wanted brand center](https://www.wanted.co.kr/brandcenter/): Wanted Sans
  identity and intended Korean brand use.
- [Wanted Sans package](https://www.npmjs.com/package/wanted-sans): local,
  OFL-1.1 licensed font package used by the prototype.
- [SUIT](https://github.com/sun-typeface/SUIT): Korean UI fallback direction.
- [Pretendard](https://github.com/orioncactus/pretendard): final system-style
  fallback.

No reference layout, brand asset, artwork, CSS, or logo was copied.

## Public game-interface reference pass

The July 23 refinement used public references only as a vocabulary study:

- [Steamworks graphical asset rules](https://partner.steamgames.com/doc/store/assets/rules):
  abstracted the capsule hierarchy of artwork + readable fictional title, while
  keeping score, session, and recommendation evidence outside the cover.
- [ELDEN RING starter guide](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-starter-guide-tips-know-playing-the-game):
  abstracted discovered locations, selectable points, and a route leading from
  a known place toward a next destination.
- [Making Maps Available for Play](https://ir.cwi.nl/pub/29042/Making-Maps-Available-for-Play.pdf):
  abstracted the map-as-action-interface idea, layered discovery state, and
  user-readable markers rather than treating the map as decoration.

Implemented abstraction:

- one original continent silhouette per taste profile;
- a named fixture route, three invented landmarks, and non-color
  `known / frontier / unknown` marker states;
- six original inline-SVG cover motifs with fictional Korean titles and short
  fictional taglines;
- candidate fit, session, and evidence remain in the decision UI, not baked
  into the cover artwork.

Copyright boundary: no game screenshot, map geometry, icon, logo, cover,
character, texture, CSS, or downloadable asset was copied or bundled. All
rendered art is local JSX/SVG and all names/data are fixtures.

## Implemented type and tokens

- Primary: locally bundled Wanted Sans Variable.
- Fallback: SUIT Variable, Pretendard, system UI.
- Small English labels/numbers: IBM Plex Mono/Space Mono/monospace fallback.
- Ink: `#0b0f19`
- Chalk: `#ece6d7`
- Mineral teal: `#4fa89b`
- Periwinkle: `#8b90cf`
- Hatched slate: `#4a5468`
- Story accent: `#b6905f`
- Radius: 0–6 px; 1 px dividers; minimal shadow.
