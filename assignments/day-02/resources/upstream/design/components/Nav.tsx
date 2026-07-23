/* S1 · Nav — sticky 워드마크 + 담백한 한글 라벨. */
import { nav } from "../copy";

export function Nav() {
  return (
    <header className="ns-nav">
      <div className="ns-shell ns-nav-inner">
        <span className="ns-wordmark">
          <span className="dot" />NEXT&nbsp;SAVE
        </span>
        <nav className="ns-navlinks">
          {nav.links.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
