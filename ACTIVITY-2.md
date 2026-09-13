# Activity 2 — Implementation Notes

## Deliverable 2.1: Static Site Generation

The Activity 1.1 Next.js project has been converted to static export using:

```js
output: "export"
```

Running:

```bash
npm run build
```

generates the static website in the `out/` folder.

The existing Atomic Design components from Activity 1.1 are retained and reused.

## Deliverable 2.2: GitHub Repository and GitHub Pages

The repository is prepared for a public GitHub repository named:

`pangasinan-heritage-showcase`

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys the `out/` folder to GitHub Pages.

The final repository URL and final GitHub Pages URL must be added after the student creates the repository and completes deployment.

## Deliverable 2.3: Performance and Quality Audit

Lighthouse must be run on the actual deployed GitHub Pages URL. The assignment requires these target scores:

| Category | Target |
|---|---:|
| Performance | ≥ 80 |
| Accessibility | ≥ 85 |
| Best Practices | ≥ 85 |
| SEO | ≥ 90 |

The actual scores must come from the student's Lighthouse test and should not be invented in advance.
