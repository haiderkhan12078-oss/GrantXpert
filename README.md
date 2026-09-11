# GrantXpert React Concept

A multi-page React + Vite concept. Each navigation item opens its own HTML page, while every page is rendered by React.

## Run locally

1. Open the `grantxpert-react` folder in VS Code.
2. Open Terminal in that exact folder.
3. Run:

```bash
npm install
npm run dev
```

Vite is configured to open the browser automatically on:

`http://localhost:3000`

## Production build

```bash
npm run build
```

The compiled multi-page site is generated in `dist/`.

## Pages

- Home — `index.html`
- About — `about.html`
- Services — `services.html`
- Funding Finder — `funding-finder.html`
- Projects — `projects.html`
- Training — `training.html`
- Contact — `contact.html`

## Notes

- No Python is required.
- No React Router is required, so deployment is simpler and direct page URLs work.
- The Funding Finder is deliberately preliminary and does not claim grant eligibility or approval.
- The contact form opens the user's email client instead of pretending a backend submission happened.
