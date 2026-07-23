import { DemoExperience } from "@/components/demo-experience";

const steps = [
  ["01", "Steam URL 붙여넣기", "공개 프로필 링크만 있으면 돼요. 이 과제에서는 주소를 전송하지 않아요."],
  ["02", "라이브러리를 지도로", "플레이타임과 장르 신호를 예시 데이터로 읽어 취향 대륙을 그려요."],
  ["03", "지도 보고 다음 땅 고르기", "다음에 켤 게임을, 왜 지금 나한테 맞는지까지 보고 골라요."],
];

export default function Home() {
  return (
    <main>
      <aside className="demo-bar" aria-label="데모 데이터 안내">
        <span aria-hidden="true" />
        <strong>컨셉 데모입니다.</strong> 여기 뜨는 숫자는 전부 예시 프로필이고, 실제 Steam 연동이나 로그인은 없습니다.
      </aside>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="NEXT SAVE 홈"><i />NEXT SAVE</a>
        <nav aria-label="주요 메뉴"><a href="#recommendations">추천</a><a href="#atlas">취향 지도</a><a href="#how">작동법</a></nav>
      </header>

      <div id="top">
        <div id="demo"><DemoExperience /></div>
        <section id="how" className="how-section" aria-labelledby="how-title">
          <div className="section-heading">
            <p className="eyebrow">작동법</p>
            <h2 id="how-title">링크 하나면 돼요.<br />가입도 설치도 없어요.</h2>
          </div>
          <div className="steps">
            {steps.map(([number, title, body]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>
            ))}
          </div>
        </section>
      </div>

      <footer><p>NEXT SAVE <span>COURSE PROTOTYPE · FIXTURE ONLY</span></p><p>실제 Steam 데이터는 조회·저장하지 않습니다.</p></footer>
    </main>
  );
}
