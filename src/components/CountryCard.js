import './CountryCard.css';

function colorClass(color) {
  if (color === 'blue') return 'countryBlue';
  if (color === 'green') return 'countryGreen';
  if (color === 'pink') return 'countryPink';
  return 'countryBlue';
}

export default function CountryCard({ country }) {
  const cls = colorClass(country.color);

  return (
    <article className={`countryCard card ${cls}`}>
      <div className="cardInner countryInner">
        <div className="countryTop">
          <div className="countryMark" aria-hidden="true">
            <span className="countryShort">{country.short}</span>
          </div>
          <div>
            <h3 className="countryName">{country.name}</h3>
            <p className="countryDesc">{country.description}</p>
          </div>
        </div>

        <ul className="countryList">
          {country.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

