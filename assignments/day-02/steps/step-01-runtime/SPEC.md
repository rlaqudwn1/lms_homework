# Step 01 spec — runtime foundation

## Outcome

Provide a reproducible Next.js App Router + TypeScript + Tailwind CSS runtime for the Day 2 course slice.

## Dependencies

- Canonical `specs/course/next-save/SPEC.md` and runtime approval.

## Owned files

- `package.json`, `package-lock.json`, `tsconfig.json`, `postcss.config.mjs`, `next-env.d.ts`.

## Acceptance checks

- Development server starts locally.
- `npm run build` creates the static `/` route.
- No secret or `.env` value is required.
