import './SectionHeader.css';

export default function SectionHeader({ kicker, title, note, right }) {
  return (
    <div className="wcSectionHeader">
      <div>
        {kicker ? <p className="wcSectionKicker">{kicker}</p> : null}
        <h2 className="wcSectionTitle">{title}</h2>
        {note ? <p className="wcSectionNote">{note}</p> : null}
      </div>
      {right ? <div className="wcSectionRight">{right}</div> : null}
    </div>
  );
}

