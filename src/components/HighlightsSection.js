import SectionHeader from './SectionHeader';
import HighlightCard from './HighlightCard';
import { highlights } from '../data/highlights';
import './HighlightsSection.css';

export default function HighlightsSection() {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <SectionHeader
          kicker="Build your tournament plan"
          title="Highlights"
          note="These are mock features to help you visualize a modern fan hub—clean layout, easy scanning, and a sporty vibe."
          right={
            <a className="btn btnGhost" href="#matches">
              Jump to matches
            </a>
          }
        />

        <div className="highlightsGrid">
          {highlights.map((item) => (
            <HighlightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

