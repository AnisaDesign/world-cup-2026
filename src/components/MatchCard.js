import './MatchCard.css';

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');
}

export default function MatchCard({ match }) {
  return (
    <article className="matchCard card">
      <div className="cardInner matchInner">
        <div className="matchTop">
          <span className="matchStage">{match.stage}</span>
          <span className="matchMeta">
            {match.date} • {match.time}
          </span>
        </div>

        <div className="teams">
          <div className="team">
            <span className="teamBadge" aria-hidden="true">
              {initials(match.homeTeam)}
            </span>
            <span className="teamName">{match.homeTeam}</span>
          </div>

          <span className="vs" aria-hidden="true">
            vs
          </span>

          <div className="team">
            <span className="teamBadge" aria-hidden="true">
              {initials(match.awayTeam)}
            </span>
            <span className="teamName">{match.awayTeam}</span>
          </div>
        </div>

        <div className="matchBottom">
          <p className="matchPlace">
            <span className="matchPlaceStrong">{match.city}</span>
            <span className="matchPlaceSep" aria-hidden="true">
              •
            </span>
            <span className="matchPlaceMuted">{match.venue}</span>
          </p>

          <div className="matchActions">
            <button className="btn btnGhost" type="button" disabled title="Demo UI only">
              Details
            </button>
            <button className="btn btnPrimary" type="button" disabled title="Demo UI only">
              Save
            </button>
          </div>
        </div>

        <p className="matchNote">{match.note}</p>
      </div>
    </article>
  );
}

