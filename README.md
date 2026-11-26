# Dulaj Portfolio — Folio design + original React page structure

This project uses the uploaded Folio template as the visual design reference while keeping the original portfolio's React Router pages:

- Home `/`
- About `/about`
- Education `/education`
- Experience `/experience`
- Projects `/projects`
- Skills `/skills`
- Articles `/articles`
- Contact `/contact`

## Run locally

```bash
npm install
npm run dev
```

## Update your information

Edit `src/data.js` to update your profile details, education, experience, projects, skills, article links, email, GitHub and LinkedIn.

## Design implementation

The project uses the Folio template's Tailwind utility classes, PT Sans headings, DM Sans body font, orange accent (`#FF6B2B`), light/dark surfaces, rounded cards, subtle borders, hover motion and responsive layout. Tailwind is loaded from its CDN in `index.html` to preserve the original template styling approach.
