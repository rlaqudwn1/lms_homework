/* 003 · shared line icons + the "준비 중" pill.
   Moved verbatim from page.tsx (Ico) and Koreanized (Soon → "준비 중").
   Stateless server components — no "use client". */

export function Ico({ name }: { name: string }) {
  const s = {
    width: 15,
    height: 15,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "clock":
      return <svg {...s}><circle cx="10" cy="10" r="7" /><path d="M10 6v4l3 2" /></svg>;
    case "flag":
      return <svg {...s}><path d="M5 3v14M5 4h10l-2 3 2 3H5" /></svg>;
    case "trophy":
      return <svg {...s}><path d="M6 4h8v3a4 4 0 01-8 0zM6 5H4v1a3 3 0 003 2.5M14 5h2v1a3 3 0 01-3 2.5M8 13h4M7 16h6M10 11v2" /></svg>;
    case "you":
      return <svg {...s}><circle cx="10" cy="7" r="3" /><path d="M4 16c1.2-3 3.4-4.5 6-4.5S14.8 13 16 16" /></svg>;
    default:
      return null;
  }
}

/* deferred-feature marker — "준비 중" (was "coming soon") */
export const Soon = () => <span className="ns-soon">준비 중</span>;
