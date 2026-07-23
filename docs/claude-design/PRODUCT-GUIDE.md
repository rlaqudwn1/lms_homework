# Claude Design product guide

## Evidence basis

No separate public help article was found during the 2026-07-22 check. This guide therefore distinguishes direct first-party UI observations from workspace policy.

Observed first-party surfaces:

- [Claude Design home](https://claude.ai/design?via=web_sidebar_products), labelled `Claude Design Beta`;
- the in-product `What's new` panel;
- the new-project controls;
- a generated project editor and its project menu.

## New-project controls

The home screen asks `What should we create?` and exposes these choices before generation:

| Control | Observed behavior | Workspace use |
|---|---|---|
| Design system | Select, clear, multi-select, or create a design system | Clear unrelated defaults before a NEXT SAVE run |
| Template | Optional starting template | Use only when it matches the requested artifact |
| Start from code | `None`, local codebase `Attach`, or `Connect GitHub` | Keep off unless source transmission is explicitly approved |
| Model | Select the generation model | Record the visible model name in evidence |
| Prompt | Describe the artifact and constraints | Include exact copy, states, breakpoints, exclusions, and honesty boundary |

The home UI also listed templates including mobile app design, slides, document, wireframe, animation, UI mockups, research, HTML email, color/type pairing, diagram, flier, and others. A template is a starting bias, not an acceptance criterion.

## Recommended creation flow

1. Confirm the artifact type and owner-approved product direction.
2. Remove any unrelated default design system.
3. Decide whether a template adds value. Record the choice.
4. Leave `Start from code` off unless attachment or GitHub access has been explicitly authorized.
5. Write one bounded prompt containing:
   - target viewport or frame sizes;
   - exact required content and states;
   - visual direction and explicit anti-patterns;
   - accessibility and responsive constraints;
   - fixture, simulation, and data boundaries;
   - expected deliverables.
6. Generate a new project and record its project URL.
7. Review the canvas and ask focused follow-ups rather than replacing the entire brief casually.
8. Capture the selected proposal and translate it into the local implementation under the repository's step packet and TDD rules.
9. Re-verify the local application. The Claude Design canvas is not browser evidence for the implementation.

## Project editor observations

The generated-project surface contains:

- a canvas iframe;
- project title and project menu;
- chat history and a follow-up prompt;
- model/reasoning selection;
- file selection;
- a Share control;
- project menu actions for rename, duplicate, and delete.

Deleting a project is destructive. Sharing or exporting can transmit the artifact outside the private editing surface. Those actions require the gates in `SAFETY-AND-APPROVALS.md`.

## What's new observations

The panel visible on 2026-07-22 reported:

- a design can be published publicly as a web artifact from the export menu;
- slide decks can be sent to Google Slides;
- exports include unsaved edits and may ask before Claude applies them;
- drafts survive refresh, tab close, and crashes;
- a default design system can be selected;
- canvas panning supports background drag, middle-mouse drag, or Space plus drag.

These are product observations, not authorization to use the external actions.

## Limitations

- Beta controls and model labels may change.
- A generated design can violate copy, accessibility, responsive, or fixture constraints even when the prompt includes them.
- A visual canvas does not prove production CSS behavior, keyboard navigation, validation semantics, or network isolation.
- Local code attachment and GitHub connection disclose source to an external service; they are not routine defaults.
- Public artifact publishing is different from opening a GitHub PR, and neither action submits the LMS assignment.
