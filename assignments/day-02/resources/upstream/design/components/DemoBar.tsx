/* S0 · 전역 데모 배너 — 여기 무엇도 실제 사용자 데이터가 아님 (FR-002).
   존대(합니다체) 정직 메타-보이스. */
import { demobar } from "../copy";

export function DemoBar() {
  return (
    <div className="ns-demobar">
      <span className="ns-demobar-dot" aria-hidden="true" />
      <span>
        <b>{demobar.bold}</b>
        {demobar.rest}
      </span>
    </div>
  );
}
