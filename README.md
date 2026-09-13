# Pangasinan Heritage Digital Showcase

**Project Title:** The Pangasinan Heritage Digital Showcase  
**Student Name:** Jamie S. Ramat  
**Selected Framework:** Next.js 14 (App Router)  
**Static Site Approach:** Next.js Static Site Generation (SSG) / static export  
**Live Website:** `https://<YOUR-GITHUB-USERNAME>.github.io/pangasinan-heritage-showcase/`

## Activity 1.1 + Activity 2

This project transforms the Activity 1.1 Atomic Design prototype into a static, responsive web application prepared for GitHub Pages deployment.

### Activity 1.1 — Atomic Design
- **Atoms:** Button, Typography, Color Tokens, Icon, Image
- **Molecules:** Heritage Card, Search Form, Navigation Item
- **Organisms:** Heritage Grid, Header Navigation, Hero, Footer

### Activity 2 — Static Site Generation
The project uses Next.js static export:
- `output: "export"` generates the website into the `out/` directory.
- `images.unoptimized: true` makes image rendering compatible with static hosting.
- The project keeps the Activity 1.1 component structure.
- Responsive CSS supports mobile, tablet, and desktop layouts.
- Semantic HTML, labels, alt text, keyboard focus states, and reduced-motion support are included.
- SEO metadata is included in `app/layout.js`.

### GitHub Pages deployment
A GitHub Actions workflow is included at:

`.github/workflows/deploy.yml`

It:
1. Installs dependencies.
2. Runs `npm run build`.
3. Uploads the generated `out/` folder.
4. Deploys the static site to GitHub Pages.

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Test the production static build

```bash
npm run build
```

After a successful build, the generated static website is in:

```text
out/
```

### GitHub setup

Create a **public** repository named:

```text
pangasinan-heritage-showcase
```

Then push this project to the `main` branch.

In GitHub:
1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Push to `main` and wait for the **Deploy Next.js static site to GitHub Pages** workflow.
4. Replace the placeholder Live Website above with your actual GitHub Pages URL.

### Activity 2 Lighthouse checklist

After deployment, open the public GitHub Pages URL in Google Chrome and run Lighthouse for:
- Performance — target **≥ 80**
- Accessibility — target **≥ 85**
- Best Practices — target **≥ 85**
- SEO — target **≥ 90**

Save a screenshot or PDF of the results for submission.

## Project structure

```text
Activity-1.1-Ramat-Jamie/
├── app/
│   ├── page.js
│   ├── layout.js
│   └── globals.css
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── documentation/
├── report/
├── package.json
├── next.config.mjs
├── eslint.config.mjs
└── README.md
```

**Important:** Do not commit `node_modules/` or other generated files. The repository should contain the source code and required project files.
