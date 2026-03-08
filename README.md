# World Cup 2026 (Homepage Demo)

Responsive, modern homepage concept for a 2026 World Cup fan hub.

- React + JavaScript only (no TypeScript)
- Functional components
- Clean, beginner-friendly CSS
- Mock data only (no backend)
- No official tournament assets or copyrighted branding

## Folder structure

```
world-cup-2026/
  index.html
  package.json
  vite.config.js
  public/
  src/
    main.jsx
    App.js
    styles/
      globals.css
      home.css
    components/
      Navbar.js / Navbar.css
      Hero.js / Hero.css
      SectionHeader.js / SectionHeader.css
      HighlightsSection.js / HighlightsSection.css
      HighlightCard.js / HighlightCard.css
      HostCountriesSection.js / HostCountriesSection.css
      CountryCard.js / CountryCard.css
      UpcomingMatchesSection.js / UpcomingMatchesSection.css
      MatchCard.js / MatchCard.css
      Footer.js / Footer.css
    data/
      highlights.js
      hosts.js
      matches.js
```

## Run locally

From the `world-cup-2026` folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```
