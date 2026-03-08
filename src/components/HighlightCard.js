import './HighlightCard.css';

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  if (name === 'map') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 3v15M15 6v15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === 'check') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === 'people') {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M16.5 21a4.5 4.5 0 00-9 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 13a4 4 0 100-8 4 4 0 000 8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M20 21a3.5 3.5 0 00-4.2-3.45"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M17 11a3 3 0 10-1.2-5.75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <path
        d="M12 3v18M3 12h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function toneClass(tone) {
  if (tone === 'green') return 'toneGreen';
  if (tone === 'blue') return 'toneBlue';
  if (tone === 'pink') return 'tonePink';
  if (tone === 'amber') return 'toneAmber';
  return 'toneBlue';
}

function pickIcon(id) {
  if (id === 'city-guides') return 'map';
  if (id === 'matchday-checklist') return 'check';
  if (id === 'watch-parties') return 'people';
  return 'plus';
}

export default function HighlightCard({ item }) {
  const icon = pickIcon(item.id);
  const tone = toneClass(item.tone);

  return (
    <article className={`highlightCard card ${tone}`}>
      <div className="cardInner highlightInner">
        <div className="highlightTop">
          <div className="highlightIcon" aria-hidden="true">
            <Icon name={icon} />
          </div>
          <h3 className="highlightTitle">{item.title}</h3>
        </div>

        <p className="highlightDesc">{item.description}</p>

        <div className="highlightTags" aria-label="Tags">
          {item.tags.map((t) => (
            <span className="highlightTag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

