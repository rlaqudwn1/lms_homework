/* S10 · Footer — 담백한 정직 표식. */
import { footer } from "../copy";

export function Footer() {
  return (
    <footer className="ns-footer">
      <div className="ns-shell ns-footer-inner">
        <span className="ns-wordmark">
          <span className="dot" />NEXT&nbsp;SAVE
        </span>
        <span>{footer.note}</span>
      </div>
    </footer>
  );
}
