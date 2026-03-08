import SectionHeader from './SectionHeader';
import MatchCard from './MatchCard';
import { upcomingMatches } from '../data/matches';
import './UpcomingMatchesSection.css';

export default function UpcomingMatchesSection() {
  return (
    <section className="section" id="matches">
      <div className="container">
        <SectionHeader
          kicker="Preview schedule"
          title="Upcoming matches"
          note="All matchups, venues, and times below are mock data for building the UI (not an official schedule)."
          right={
            <button className="btn btnGhost" type="button" disabled title="Demo UI only">
              All matches
            </button>
          }
        />

        <div className="matchesGrid">
          {upcomingMatches.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

