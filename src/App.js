import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsSection from './components/HighlightsSection';
import HostCountriesSection from './components/HostCountriesSection';
import UpcomingMatchesSection from './components/UpcomingMatchesSection';
import Footer from './components/Footer';

import './styles/home.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <HighlightsSection />
        <HostCountriesSection />
        <UpcomingMatchesSection />
      </main>
      <Footer />
    </div>
  );
}

