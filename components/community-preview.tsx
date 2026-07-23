import { communityPreview, demoProfiles, recommendations } from "@/lib/demo";

type CommunityPreviewProps = {
  profileId: (typeof demoProfiles)[number]["id"];
};

export function CommunityPreview({ profileId }: CommunityPreviewProps) {
  const game = recommendations.find((item) => item.id === communityPreview.gameId)!;

  return (
    <section className="community-preview" aria-labelledby="community-title">
      <header className="panel-heading community-heading">
        <div><p className="eyebrow">PRODUCT HORIZON</p><h2 id="community-title">커뮤니티 미리보기</h2></div>
        <span className="future-badge">향후 기능 · 미작동</span>
      </header>
      <p className="community-intro">오늘 밤 결정이 먼저예요. 아래는 방향성 미리보기일 뿐, 지금은 아무 동작도 없고 실제 사용자·집계·공유는 없습니다.</p>

      <article className="game-profile-preview">
        <header className="game-profile-title">
          <span className={`game-cover small-cover ${game.coverClass}`} aria-hidden="true">예시 커버</span>
          <div><h3>{game.title} <small>(예시 게임)</small></h3><p>추천 카드에서 이어진 게임 프로필 미리보기</p></div>
        </header>
        <div className="profile-layers">
          <section className="fixture-facts" aria-labelledby="fixture-facts-title">
            <header><h4 id="fixture-facts-title">게임 정보 · 예시</h4><span>FIXTURE</span></header>
            <dl>{communityPreview.fixtureFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
          </section>
          <section className="personal-interpretation" aria-labelledby="interpretation-title">
            <header><h4 id="interpretation-title">내 취향 기준 해석</h4><span>예시 프로필</span></header>
            <p>{communityPreview.interpretations[profileId]}</p>
            <ul aria-label="해석 근거"><li>{demoProfiles.find((profile) => profile.id === profileId)?.core}</li><li>전략 biome 인접</li><li>세션 45분</li></ul>
          </section>
        </div>
        <p className="separation-note">게임 정보(사실)와 취향 해석(플레이어 관점)은 별개 영역입니다. 모두 예시입니다.</p>
      </article>

      <div className="coming-soon-list" aria-label="준비 중인 기능">
        {communityPreview.capabilities.map((capability) => (
          <div className="coming-soon-row" aria-disabled="true" key={capability.label}>
            <span aria-hidden="true">♙</span><strong>{capability.label}</strong><em>{capability.status}</em>
          </div>
        ))}
      </div>
      <div className="future-review" aria-disabled="true"><span aria-hidden="true">▸</span><strong>예시 의견 레이어</strong><em>향후 기능</em></div>
    </section>
  );
}
