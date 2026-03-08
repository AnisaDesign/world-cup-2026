import SectionHeader from './SectionHeader';
import CountryCard from './CountryCard';
import { hostCountries } from '../data/hosts';
import './HostCountriesSection.css';

export default function HostCountriesSection() {
  return (
    <section className="section" id="hosts">
      <div className="container">
        <SectionHeader
          kicker="Three hosts, one summer"
          title="Host countries"
          note="Canada, USA, and Mexico share hosting duties. Below are simple, non-official descriptions to set the tone for your UI."
        />

        <div className="hostsGrid">
          {hostCountries.map((c) => (
            <CountryCard key={c.id} country={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

