import { domainSchemas, schemaRelationships } from "@/lib/domain-schema";

const statusLabels = {
  core: "CORE · 현재 핵심",
  preview: "PREVIEW · 설계 예시",
  deferred: "DEFERRED · 보류",
} as const;

const erdNodes = [
  { name: "signal_runs", code: "SIG", x: 36, y: 38, width: 180 },
  { name: "core_assessments", code: "ARC", x: 284, y: 38, width: 190 },
  { name: "atlas_maps", code: "MAP", x: 542, y: 38, width: 170 },
  { name: "recommendations", code: "PIC", x: 780, y: 38, width: 190 },
  { name: "games", code: "GME", x: 542, y: 190, width: 170 },
  { name: "selection_sessions", code: "WRITE", x: 780, y: 190, width: 190 },
  { name: "atlas_snapshots", code: "SNP", x: 780, y: 342, width: 190 },
] as const;

const erdEdges = [
  { path: "M216 81 H284", label: "1 : 1", x: 250, y: 70, kind: "core" },
  { path: "M474 81 H542", label: "1 : N", x: 508, y: 70, kind: "core" },
  { path: "M712 81 H780", label: "1 : 3", x: 746, y: 70, kind: "core" },
  { path: "M712 233 H746 V81 H780", label: "참조", x: 731, y: 221, kind: "reference" },
  { path: "M875 124 V190", label: "0..1", x: 900, y: 159, kind: "core" },
  { path: "M875 276 V342", label: "preview", x: 912, y: 313, kind: "preview" },
] as const;

export function DomainSchemaCatalog() {
  const tableCount = domainSchemas.reduce((count, domain) => count + domain.tables.length, 0);

  return (
    <section className="schema-catalog" id="database-design" aria-labelledby="schema-title">
      <header className="schema-catalog-heading">
        <div>
          <p className="eyebrow">DAY 08 · DATABASE BLUEPRINT</p>
          <h2 id="schema-title">서비스 전부를 먼저 그리되,<br />저장은 작게 시작합니다.</h2>
        </div>
        <div className="schema-scope-note">
          <strong>설계 전용 · MOCK SCHEMA</strong>
          <p>실제 Supabase나 외부 DB에는 연결되지 않았습니다. 모든 프로필 값은 fixture이며 실제 Steam 개인 데이터는 저장하지 않습니다.</p>
        </div>
      </header>

      <div className="schema-summary" aria-label="스키마 설계 요약">
        <span><b>{domainSchemas.length}</b> domains</span>
        <span><b>{tableCount}</b> mock tables</span>
        <span><b>1</b> minimal write slice</span>
      </div>

      <div className="schema-flow" aria-label="핵심 데이터 흐름">
        <span>SIG 신호</span><i>→</i><span>ARC 코어</span><i>→</i><span>MAP 지도</span><i>→</i>
        <span>PIC 추천</span><i>→</i><strong>selection_sessions</strong>
      </div>

      <figure className="schema-erd" aria-labelledby="schema-erd-title">
        <figcaption>
          <div>
            <p className="eyebrow">RELATIONSHIP EXAMPLE</p>
            <h3 id="schema-erd-title">핵심 선택 흐름 ERD</h3>
          </div>
          <p>실선은 핵심 관계, 점선은 참조·미래 preview입니다. 실제 생성 대상으로 승인된 테이블은 <strong>selection_sessions</strong> 하나뿐입니다.</p>
        </figcaption>
        <div className="schema-erd-scroll">
          <svg viewBox="0 0 1010 470" role="img" aria-labelledby="schema-erd-svg-title schema-erd-svg-desc">
            <title id="schema-erd-svg-title">NEXT SAVE 핵심 선택 흐름 ERD 예시</title>
            <desc id="schema-erd-svg-desc">
              signal runs에서 core assessments, atlas maps, recommendations, selection sessions로 이어지고
              games가 recommendations를 참조하며 atlas snapshots는 미래 preview로 연결됩니다.
            </desc>
            <defs>
              <marker id="erd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <path d="M0 0 L8 4 L0 8 Z" />
              </marker>
            </defs>
            {erdEdges.map((edge) => (
              <g className={`erd-edge erd-${edge.kind}`} key={`${edge.path}-${edge.label}`}>
                <path d={edge.path} markerEnd="url(#erd-arrow)" />
                <text x={edge.x} y={edge.y} textAnchor="middle">{edge.label}</text>
              </g>
            ))}
            {erdNodes.map((node) => (
              <g className={`erd-node${node.name === "selection_sessions" ? " erd-write" : ""}`} key={node.name}>
                <rect x={node.x} y={node.y} width={node.width} height="86" rx="8" />
                <text className="erd-code" x={node.x + 14} y={node.y + 24}>{node.code}</text>
                <text className="erd-name" x={node.x + 14} y={node.y + 49}>{node.name}</text>
                <text className="erd-key" x={node.x + 14} y={node.y + 69}>PK · FK contract</text>
              </g>
            ))}
          </svg>
        </div>
        <ul className="schema-erd-legend" aria-label="ERD 관계 목록">
          {schemaRelationships.map((relationship) => (
            <li key={`${relationship.from}-${relationship.to}`}>
              <code>{relationship.from}</code>
              <span>→</span>
              <code>{relationship.to}</code>
              <b>{relationship.label}</b>
            </li>
          ))}
        </ul>
      </figure>

      <div className="schema-domain-grid">
        {domainSchemas.map((domain) => (
          <article className={`schema-domain schema-${domain.status}`} key={domain.code}>
            <header>
              <span className="schema-code">{domain.code}</span>
              <div><h3>{domain.label}</h3><small>{statusLabels[domain.status]}</small></div>
            </header>
            <p>{domain.summary}</p>
            <div className="schema-tables">
              {domain.tables.length === 0 && (
                <div className="schema-none">
                  <strong>PERSISTENCE: NONE</strong>
                  <span>제품 결정과 별도 승인 전까지 테이블을 만들지 않습니다.</span>
                </div>
              )}
              {domain.tables.map((table) => (
                <details key={table.name} open={domain.code === "PIC" && table.name === "selection_sessions"}>
                  <summary><code>{table.name}</code><span>{table.fields.length} fields</span></summary>
                  <p>{table.purpose}</p>
                  <dl>
                    {table.fields.map((field) => (
                      <div key={field.name}>
                        <dt><code>{field.name}</code>{field.key && <b>{field.key}</b>}</dt>
                        <dd>{field.type}{field.references && <small> → {field.references}</small>}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul>{table.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}</ul>
                </details>
              ))}
            </div>
            <footer><strong>DATA BOUNDARY</strong><p>{domain.boundary}</p></footer>
          </article>
        ))}
      </div>
    </section>
  );
}
