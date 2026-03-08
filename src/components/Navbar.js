import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="navWrap">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="World Cup 2026 Hub home">
          <span className="brandMark" aria-hidden="true" />
          <span className="brandText">World Cup 2026 Hub</span>
        </a>

        <nav className="navLinks" aria-label="Primary">
          <a href="#highlights">Highlights</a>
          <a href="#hosts">Host countries</a>
          <a href="#matches">Upcoming</a>
        </nav>

        <div className="navActions">
          <a className="btn btnGhost" href="#matches">
            See matches
          </a>
          <button className="btn btnPrimary" type="button">
            Get updates
          </button>
        </div>

        <button
          className="menuBtn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menuIcon" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div className="mobileMenu" role="dialog" aria-label="Mobile menu">
          <div className="container mobileMenuInner">
            <a href="#highlights" onClick={() => setOpen(false)}>
              Highlights
            </a>
            <a href="#hosts" onClick={() => setOpen(false)}>
              Host countries
            </a>
            <a href="#matches" onClick={() => setOpen(false)}>
              Upcoming
            </a>
            <div className="mobileMenuRow">
              <a className="btn btnGhost" href="#matches" onClick={() => setOpen(false)}>
                See matches
              </a>
              <button className="btn btnPrimary" type="button" onClick={() => setOpen(false)}>
                Get updates
              </button>
            </div>
            <p className="mobileFinePrint">
              Fan-made demo page. No official branding or assets.
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}

