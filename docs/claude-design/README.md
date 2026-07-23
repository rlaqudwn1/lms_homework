# Claude Design usage notes

This folder records how this workspace uses the first-party Claude Design web product at [claude.ai/design](https://claude.ai/design?via=web_sidebar_products).

Claude Design is currently marked **Beta** in the product UI. These notes were verified against the logged-in product on 2026-07-22 KST. The UI may change, so re-check the product before relying on a control that affects sharing, source access, or export.

## Documents

- [`PRODUCT-GUIDE.md`](PRODUCT-GUIDE.md): observed controls, creation flow, iteration, export, and limitations.
- [`SAFETY-AND-APPROVALS.md`](SAFETY-AND-APPROVALS.md): data transmission and external-action gates.
- [`NEXT-SAVE-DAY-02.md`](NEXT-SAVE-DAY-02.md): the exact Day 2 procedure, settings, prompt, and evidence contract.

## Authority

Claude Design is a design collaborator, not the source of product truth. In this repository, authority remains:

1. `specs/course/next-save/SPEC.md` and `DESIGN.md`;
2. recorded HITL decisions;
3. pinned product and design source manifests;
4. Claude Design output as a replaceable visual proposal.

Generated output is not publication approval. A material visual change must be implemented locally, tested, captured at desktop and 360 px, and shown to the owner before Git staging or GitHub publication.
