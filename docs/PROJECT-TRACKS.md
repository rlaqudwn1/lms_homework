# Course mock and real-project tracks

## Default decision

Start with a **reusable course slice**: a small submission app that expresses one real product idea without becoming the real product. Use a course-only mock only when the idea has no reuse value. Promote work to the real-project track only when the PRD says it is product-critical and the design is stable enough to keep after the course.

| Question | Course mock | Real project |
|---|---|---|
| Primary purpose | Demonstrate one assignment requirement | Serve real users after the course |
| Scope | One core flow; seeded/mock data is allowed when disclosed | Durable flows, real data, security and maintainability |
| UI | Only the supplied design screens needed for the flow | Full product system and future extension points |
| Data | Local fixture, mock API, or a small Supabase schema | Production-ready schema, RLS, migrations and backup plan |
| Delivery | One deploy/PR per assignment checkpoint | Product release cadence |

## Decision rubric

Choose the course-mock track when any of these are true:

- The feature only exists to meet a day assignment.
- The design is exploratory or likely to change.
- Real users, real personal data, payments, or irreversible actions are not needed.
- A fixture or one test account demonstrates the requirement clearly.

Choose the real-project track when all of these are true:

- The feature is on the product's first real user journey.
- The user wants to keep the code after the course.
- The design and data ownership are settled enough to maintain.
- The required credentials, privacy, and deployment decisions are available.

The normal middle option is a **reusable course slice**: it has a real user flow and can retain neutral design tokens or types, but it has separate deployment, data, OAuth, and scope from the real project.

## Reuse without coupling

Keep the product concept and design tokens reusable, but do not force the course mock to become the production codebase.

```text
shared/                 # PRD excerpts, design tokens, sample fixtures only
course-mock/            # small submission app; no production promises
real-project/           # created only after an explicit promotion decision
```

The course mock may link to a real-project design or code reference, but `SUBMISSION.md` must state which implementation is being submitted and whether its data is mocked.

## Promotion gate

Before copying work from `course-mock/` to `real-project/`, review:

1. Does the implementation contain no course-only shortcuts that would affect users?
2. Are secrets, access rules, error states, and data deletion requirements specified?
3. Is the feature still aligned with the latest design?
4. Is the user explicitly asking to promote it?

If any answer is no, keep it as a mock.
