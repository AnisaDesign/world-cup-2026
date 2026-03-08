import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerMark" aria-hidden="true" />
            <div>
              <p className="footerName">World Cup 2026 Hub</p>
              <p className="footerTagline">Modern, sporty homepage demo in React.</p>
            </div>
          </div>

          <div className="footerLinks" aria-label="Footer links">
            <a href="#highlights">Highlights</a>
            <a href="#hosts">Hosts</a>
            <a href="#matches">Upcoming</a>
            <a href="#top">Back to top</a>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerFinePrint">
            Fan-made demo UI. No official logos, marks, or assets are used.
          </p>
          <p className="footerCopy">© {new Date().getFullYear()} • Built for learning</p>
        </div>
      </div>
    </footer>
  );
}

