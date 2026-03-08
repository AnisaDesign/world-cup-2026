import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container heroInner">
        <div className="heroLeft">
          <div className="pillRow">
            <span className="pill">
              <span className="pillDot" aria-hidden="true" />
              Fan-made demo • 2026 edition
            </span>
            <span className="pill">Canada • USA • Mexico</span>
          </div>

          <h1 className="heroTitle">
            Your modern hub for
            <span className="heroTitleAccent"> World Cup 2026</span>
          </h1>

          <p className="heroSubtitle">
            A sporty, polished homepage concept: highlights, host countries, and
            upcoming matches—built with beginner-friendly React (JavaScript only).
          </p>

          <div className="heroCtas">
            <a className="btn btnPrimary" href="#matches">
              View upcoming matches
            </a>
            <a className="btn" href="#highlights">
              Explore highlights
            </a>
          </div>

          <p className="heroDisclaimer">
            This is a fan-made UI demo. It does not use official tournament logos,
            marks, or copyrighted branding.
          </p>
        </div>

        <div className="heroRight">
          <div className="heroCard card">
            <div className="cardInner heroCardInner">
              <h3 className="heroCardTitle">Quick snapshot</h3>
              <div className="heroStats">
                <div className="heroStat">
                  <p className="heroStatValue">48</p>
                  <p className="heroStatLabel">teams</p>
                </div>
                <div className="heroStat">
                  <p className="heroStatValue">104</p>
                  <p className="heroStatLabel">matches</p>
                </div>
                <div className="heroStat">
                  <p className="heroStatValue">16</p>
                  <p className="heroStatLabel">host cities</p>
                </div>
              </div>

              <div className="heroMini">
                <div className="heroMiniRow">
                  <span className="heroMiniLabel">What’s inside</span>
                  <span className="heroMiniValue">Highlights • Hosts • Preview</span>
                </div>
                <div className="heroMiniRow">
                  <span className="heroMiniLabel">Data</span>
                  <span className="heroMiniValue">Mock schedule for UI</span>
                </div>
                <div className="heroMiniRow">
                  <span className="heroMiniLabel">Tech</span>
                  <span className="heroMiniValue">React + CSS (no heavy libs)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

