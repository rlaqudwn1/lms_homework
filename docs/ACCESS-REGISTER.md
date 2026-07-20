# Access register and permission policy

Record only account names, scopes, owner, and verification dates. Never record credentials.

| Tool / surface | Course-mock need | Real-project need | Minimum permission | Agent action | User approval required |
|---|---|---|---|---|---|
| Local CLI (`git`, package manager, tests) | Create files, run tests, prepare commits | Same | Workspace write only | Allowed within assigned task | No |
| GitHub CLI / MCP | Private repo, branch, PR link | Private repo, PR/release | Selected private repository only | Read status by default | Create repo, push, PR, or changing repo access: yes |
| Vercel CLI / MCP | Preview deployment | Production deployment | One named project | Inspect logs/status | Creating project, deploy, domain/config change: yes |
| Supabase CLI / MCP | Test project, small schema | Named production project | Project-scoped database access | Read schema only by default | Creating project, migrations, RLS/policy changes, or data writes: yes |
| Google OAuth / Google Cloud | Usually demo login only | Real user login | Exact OAuth client and redirect URLs | No secret handling | Creating client, changing redirect URIs, consent screen, or transmitting identifiers: yes |
| LMS in Chrome | Read requirements and submission status | N/A | Existing user session | Read-only lookup | Submitting a URL/file/form: yes |
| Browser / MCP connectors | Read public or user-authorized pages | Same | Least privilege | Read-only by default | Uploads, messages, permission changes, or sensitive-data transmission: yes |

## Secret handling

- Keep live values in untracked `.env.local` or the hosting provider's secret store.
- Commit only `.env.example` with variable names and placeholder values.
- Handoffs may say `SUPABASE_URL required`; they must never contain its live value or any key.
- Revoke and replace a credential that is accidentally committed; deleting the line is not sufficient.

## Permission levels

| Level | Meaning | Examples | Default policy |
|---|---|---|---|
| L0 | Read and analyze | LMS requirements, Git status, deployment logs | Allowed |
| L1 | Local reversible change | Edit assigned files, run tests, create a local branch/commit | Allowed within task scope |
| L2 | Reversible external change | Draft PR, preview deployment, course test-data seed | Record in handoff; confirm target first |
| L3 | Shared-state change | Push branch, regular PR, development DB migration | User approval immediately before action |
| L4 | Public, production, or representational change | LMS submission, production deploy, merge, production DB/OAuth change | User approval immediately before action |

## Required checks before external action

1. Confirm the target account/project and whether it is course-mock or real-project.
2. Confirm the exact operation: e.g. `deploy preview`, `create schema`, or `submit LMS URL`.
3. Confirm that no sensitive data is being transmitted unexpectedly.
4. Add the resulting URL, commit SHA, or change reference to the task handoff.
