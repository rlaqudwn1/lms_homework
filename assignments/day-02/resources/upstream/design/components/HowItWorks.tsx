/* S4 · 작동법 3스텝. */
import { how } from "../copy";

export function HowItWorks() {
  return (
    <section className="ns-section" id="how" style={{ paddingBlock: "72px" }}>
      <div className="ns-shell">
        <p className="ns-eyebrow ns-eyebrow-row">{how.eyebrow}</p>
        <h2 className="ns-display ns-section-head">{how.head}</h2>
        <div className="ns-how">
          {how.steps.map((s) => (
            <div className="ns-how-step" key={s.num}>
              <div className="ns-how-num">{s.num}</div>
              <div className="ns-how-title">{s.title}</div>
              <div className="ns-how-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
