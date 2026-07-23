/* S3 · 데모 프로필 strip — 조작된 실시간 유저 티커 대신 예시 프로필 사실만. */
import { strip } from "../copy";

export function ProfileStrip() {
  return (
    <div className="ns-strip">
      <div className="ns-shell ns-strip-inner">
        <span className="ns-strip-lead">{strip.lead}</span>
        {strip.items.map(([label, val]) => (
          <span className="ns-strip-item" key={label}>
            {label} <b>{val}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
