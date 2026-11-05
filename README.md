# Myanmar World Website

Single-page React website for Myanmar World, built with Vite.

## Requirements

- Node.js 18 or newer
- npm

## Start the project

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173` or
`http://127.0.0.1:5173`. Do not open only `http://localhost`, which uses
port 80 and is not the Vite development server.

If the browser is blank, stop any old server, run `npm run dev` again, and
open the exact `Local` URL printed in the terminal.

## Configure enquiries

Copy the example environment file:

```bash
cp .env.example .env
```

Set `VITE_ENQUIRY_ENDPOINT` in `.env` to the approved company mailbox, CRM, form service, or ticketing endpoint:

```env
VITE_ENQUIRY_ENDPOINT=https://your-approved-endpoint.example/enquiries
```

The form only displays a successful acknowledgement after that endpoint accepts the submission. If no endpoint is configured, it preserves the form state and shows an alternative-contact error message.

## Available commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
```

## Project structure

- `src/main.jsx` — page content, language/theme controls, and enquiry form
- `src/styles.css` — responsive layout and light/dark theme styles
- `.env.example` — enquiry endpoint configuration template
- `static/index.html` — standalone HTML/CSS/JavaScript version with no React dependency

Before publication, replace the factual placeholders with approved company details, contact information, authorized imagery, partner logos, customer references, legal links, and the confirmed enquiry endpoint.

## Open the standalone version

Open `static/index.html` directly in a browser, or serve the project folder with any static web server. The standalone form is intentionally a safe placeholder until the approved mailbox, CRM, or ticketing endpoint is connected.

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push the project to a GitHub repository.
2. Make sure the default branch is named `main`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` or run **Deploy to GitHub Pages** from the repository’s **Actions** tab.

The workflow builds the React/Vite version and publishes `dist/`. The site URL will usually be:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

The Vite configuration uses relative asset paths, so the project works from that repository subpath without changing source files. For the enquiry form, configure `VITE_ENQUIRY_ENDPOINT` through the deployment workflow only after the approved endpoint is available; do not commit secrets or private credentials.
