export type SchemaField = {
  name: string;
  type: string;
  key?: "PK" | "FK" | "UQ";
  references?: string;
  note?: string;
};

export type SchemaTable = {
  name: string;
  purpose: string;
  fields: SchemaField[];
  constraints: string[];
};

export type DomainSchema = {
  code: "SIG" | "ARC" | "MAP" | "PIC" | "LND" | "GME" | "COM" | "SNP" | "UXS" | "REV";
  label: string;
  status: "core" | "preview" | "deferred";
  summary: string;
  boundary: string;
  tables: SchemaTable[];
};

export type SchemaRelationship = {
  from: string;
  to: string;
  label: string;
  kind: "core" | "reference" | "preview";
};

export const schemaRelationships: SchemaRelationship[] = [
  { from: "signal_runs", to: "core_assessments", label: "1 : 1", kind: "core" },
  { from: "core_assessments", to: "atlas_maps", label: "1 : N", kind: "core" },
  { from: "atlas_maps", to: "recommendations", label: "1 : 3", kind: "core" },
  { from: "games", to: "recommendations", label: "1 : N", kind: "reference" },
  { from: "recommendations", to: "selection_sessions", label: "1 : 0..1", kind: "core" },
  { from: "selection_sessions", to: "atlas_snapshots", label: "1 : 0..N", kind: "preview" },
];

export const domainSchemas: DomainSchema[] = [
  {
    code: "SIG",
    label: "취향 신호",
    status: "core",
    summary: "가상 플레이 관찰값을 재현 가능한 취향 신호로 바꿉니다.",
    boundary: "승인된 fixture 관찰값만 사용하며 원본 개인 기록은 다루지 않습니다.",
    tables: [
      {
        name: "signal_runs",
        purpose: "한 번의 fixture 분석 실행",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "fixture_profile_key", type: "text", key: "UQ" },
          { name: "algorithm_version", type: "text" },
          { name: "generated_at", type: "timestamptz" },
        ],
        constraints: ["source_mode = fixture", "algorithm_version required"],
      },
      {
        name: "signal_metrics",
        purpose: "추천 근거가 참조하는 파생 신호",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "run_id", type: "uuid", key: "FK", references: "signal_runs.id" },
          { name: "signal_code", type: "text" },
          { name: "numeric_value", type: "numeric" },
          { name: "unit", type: "text" },
        ],
        constraints: ["signal_code in S1…S5", "unique(run_id, signal_code)"],
      },
    ],
  },
  {
    code: "ARC",
    label: "소프트 코어",
    status: "core",
    summary: "주 코어·강도·보조 태그를 신호 실행과 연결합니다.",
    boundary: "코어 이름은 작업용 분류이며 과학적 성격 판정으로 주장하지 않습니다.",
    tables: [
      {
        name: "core_definitions",
        purpose: "버전 가능한 작업용 코어 사전",
        fields: [
          { name: "code", type: "text", key: "PK" },
          { name: "label", type: "text" },
          { name: "definition", type: "text" },
          { name: "naming_status", type: "enum" },
        ],
        constraints: ["naming_status in working, approved, retired"],
      },
      {
        name: "core_assessments",
        purpose: "fixture 프로필의 주 코어 결과",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "signal_run_id", type: "uuid", key: "FK", references: "signal_runs.id" },
          { name: "primary_core_code", type: "text", key: "FK", references: "core_definitions.code" },
          { name: "strength_pct", type: "numeric(5,2)" },
        ],
        constraints: ["unique(signal_run_id)", "strength_pct between 0 and 100"],
      },
    ],
  },
  {
    code: "MAP",
    label: "취향 아틀라스",
    status: "core",
    summary: "장르 지역과 탐색 상태를 한 장의 지도 버전으로 묶습니다.",
    boundary: "지도는 fixture 신호의 표현이며 소유 게임 목록을 복제하지 않습니다.",
    tables: [
      {
        name: "atlas_maps",
        purpose: "프로필별 지도 버전",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "assessment_id", type: "uuid", key: "FK", references: "core_assessments.id" },
          { name: "schema_version", type: "smallint" },
          { name: "summary", type: "text" },
        ],
        constraints: ["schema_version > 0", "unique(assessment_id, schema_version)"],
      },
      {
        name: "atlas_regions",
        purpose: "지도 안의 장르 지역",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "atlas_id", type: "uuid", key: "FK", references: "atlas_maps.id" },
          { name: "region_key", type: "text" },
          { name: "state", type: "enum" },
          { name: "signal_value", type: "numeric(4,3)" },
        ],
        constraints: ["state in unexplored, exploring, established", "signal_value between 0 and 1"],
      },
    ],
  },
  {
    code: "PIC",
    label: "다음 게임 추천",
    status: "core",
    summary: "정확히 세 개의 추천과 최종 선택 영수증을 연결합니다.",
    boundary: "추천 이유는 fixture 신호를 가리키며 자유 생성된 개인 주장을 저장하지 않습니다.",
    tables: [
      {
        name: "recommendations",
        purpose: "순위와 근거가 있는 추천 후보",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "atlas_id", type: "uuid", key: "FK", references: "atlas_maps.id" },
          { name: "game_id", type: "uuid", key: "FK", references: "games.id" },
          { name: "rank", type: "smallint" },
          { name: "signal_refs", type: "text[]" },
        ],
        constraints: ["exactly three rows per atlas / 아틀라스마다 3개", "rank between 1 and 3"],
      },
      {
        name: "selection_sessions",
        purpose: "Day 8 최소 저장 경계",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "fixture_profile_key", type: "text" },
          { name: "recommendation_id", type: "uuid", key: "FK", references: "recommendations.id" },
          { name: "selected_game_id", type: "uuid", key: "FK", references: "games.id" },
          { name: "created_at", type: "timestamptz" },
        ],
        constraints: ["fixture keys only", "one chosen game per generated session"],
      },
    ],
  },
  {
    code: "LND",
    label: "랜딩 콘텐츠",
    status: "preview",
    summary: "공개 페이지 구성과 fixture 고지 문구만 버전 관리합니다.",
    boundary: "폼 입력값과 검증 결과는 브라우저 안에서만 처리하고 저장하지 않습니다.",
    tables: [
      {
        name: "landing_pages",
        purpose: "공개 랜딩 페이지 버전",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "slug", type: "text", key: "UQ" },
          { name: "status", type: "enum" },
          { name: "disclosure_version", type: "text" },
        ],
        constraints: ["status in draft, published, archived", "published page requires disclosure"],
      },
      {
        name: "landing_sections",
        purpose: "순서가 있는 페이지 섹션",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "page_id", type: "uuid", key: "FK", references: "landing_pages.id" },
          { name: "section_key", type: "text" },
          { name: "content", type: "jsonb" },
          { name: "position", type: "smallint" },
        ],
        constraints: ["unique(page_id, section_key)", "position >= 0"],
      },
    ],
  },
  {
    code: "GME",
    label: "게임 카탈로그",
    status: "core",
    summary: "게임의 공개 사실과 장르를 개인화 해석에서 분리합니다.",
    boundary: "공개 또는 fixture 게임 사실만 포함하고 플레이어 해석은 PIC에 둡니다.",
    tables: [
      {
        name: "games",
        purpose: "공개·fixture 게임 사실",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "fixture_key", type: "text", key: "UQ" },
          { name: "public_app_id", type: "integer", key: "UQ" },
          { name: "title", type: "text" },
          { name: "metadata_origin", type: "enum" },
        ],
        constraints: ["public_app_id > 0 when present", "origin in fixture, approved_public_catalog"],
      },
      {
        name: "game_genres",
        purpose: "게임과 장르의 다대다 연결",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "game_id", type: "uuid", key: "FK", references: "games.id" },
          { name: "genre_key", type: "text" },
          { name: "weight", type: "numeric(4,3)" },
        ],
        constraints: ["unique(game_id, genre_key)", "weight between 0 and 1"],
      },
    ],
  },
  {
    code: "COM",
    label: "아키타입 커뮤니티",
    status: "deferred",
    summary: "미래 기능의 비활성 상태와 fictional 분류 예시만 설명합니다.",
    boundary: "계정·관계·피드·실시간 활동·사용자 생성 콘텐츠는 설계 대상에서 제외합니다.",
    tables: [
      {
        name: "community_capabilities",
        purpose: "미래 기능의 정직한 상태 원장",
        fields: [
          { name: "key", type: "text", key: "PK" },
          { name: "label", type: "text" },
          { name: "status", type: "enum" },
          { name: "enabled", type: "boolean" },
          { name: "disclosure", type: "text" },
        ],
        constraints: ["status = coming_soon", "enabled = false"],
      },
    ],
  },
  {
    code: "SNP",
    label: "아틀라스 스냅샷",
    status: "preview",
    summary: "지도를 정적인 표현물로 재현하기 위한 immutable mock입니다.",
    boundary: "공유 링크·수신자·내보내기·행동 측정은 별도 승인 전까지 만들지 않습니다.",
    tables: [
      {
        name: "atlas_snapshots",
        purpose: "버전 고정된 정적 지도 표현",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "atlas_id", type: "uuid", key: "FK", references: "atlas_maps.id" },
          { name: "source_session_id", type: "uuid", key: "FK", references: "selection_sessions.id" },
          { name: "visual_payload", type: "jsonb" },
          { name: "status", type: "enum" },
        ],
        constraints: ["status = preview", "visual_payload is immutable fixture"],
      },
    ],
  },
  {
    code: "UXS",
    label: "UX 규칙",
    status: "preview",
    summary: "화면이 지켜야 할 고지·접근성 계약의 버전만 기록합니다.",
    boundary: "사용자 행동 로그나 기기 식별값 없이 콘텐츠 계약만 모델링합니다.",
    tables: [
      {
        name: "experience_contracts",
        purpose: "접근성과 고지 규칙 버전",
        fields: [
          { name: "id", type: "uuid", key: "PK" },
          { name: "version", type: "text", key: "UQ" },
          { name: "fixture_disclosure", type: "text" },
          { name: "accessibility_rules", type: "jsonb" },
          { name: "status", type: "enum" },
        ],
        constraints: ["status in draft, approved, retired", "no behavioral telemetry"],
      },
    ],
  },
  {
    code: "REV",
    label: "수익 모델",
    status: "deferred",
    summary: "가격이나 결제 구조를 발명하지 않고 B1 제품 결정을 기다립니다.",
    boundary: "요금·구독·거래·결제 주체는 제품 결정과 별도 승인이 있기 전까지 없습니다.",
    tables: [],
  },
];
