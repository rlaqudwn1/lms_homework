import { atlasTeaserRows } from "@/lib/demo";

const labels = [
  { className: "label-rpg", text: "RPG" },
  { className: "label-adventure", text: "어드벤처" },
  { className: "label-strategy", text: "전략" },
  { className: "label-action", text: "액션" },
];

export function AtlasTeaser() {
  return (
    <div className="teaser-wrap">
      <div className="teaser-map" role="img" aria-label="예시 라이브러리 취향 지도. 하나로 이어진 픽셀 대륙에 RPG, 어드벤처, 전략, 액션 네 장르 지역이 있습니다.">
        <div className="compass"><b>N</b><i /><span /></div>
        <div className="pixel-continent">
          {atlasTeaserRows.flatMap((row, y) =>
            [...row].map((cell, x) => (
              <span
                className={cell === "." ? "pixel empty" : `pixel biome-${cell.toLowerCase()}`}
                key={`${x}-${y}`}
              />
            )),
          )}
        </div>
        {labels.map((label) => <span className={`map-label ${label.className}`} key={label.text}>{label.text}</span>)}
      </div>
      <div className="atlas-legend" aria-hidden="true"><span>◆ RPG</span><span>● 어드벤처</span><span>■ 전략</span><span>■ 액션</span></div>
      <p className="teaser-caption">지형 높이 = 플레이 시간, 색과 모양 = 장르 biome. 여기 대륙은 예시 라이브러리입니다.</p>
      <p className="sr-only">RPG, 어드벤처, 전략, 액션 취향이 하나의 연결된 픽셀 대륙으로 이어진 예시 지도입니다.</p>
    </div>
  );
}
