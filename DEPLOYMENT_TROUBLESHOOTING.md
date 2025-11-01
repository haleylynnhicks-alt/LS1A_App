# Deployment Troubleshooting Notes

## Potential Reasons a Deployed Static Site Might Not Update
- Pending changes live on a non-deployed branch, so the publish branch keeps serving an older snapshot.
- The build or publish workflow failed (for example, GitHub Pages build errors or CI pipeline failures) and the previous artifact remains active.
- Browser or CDN caching is serving an older bundle because filenames did not change and cache busting headers are absent.
- The deployment target expects assets in a specific directory (e.g., `/docs` for GitHub Pages), but the repository restructure moved files elsewhere without updating the deploy configuration.
- Required static assets (scripts, styles, or pages) were renamed or relocated, causing 404s that make the new UI appear missing even after deployment.

## Confirmed Root Cause in This Repository
<<<<<<< HEAD
The latest site work lives on the `work` branch, but the live site was still pulling from the default `main` branch. As a result, the deployment continued to serve the older build.

## Fix Applied
- Added `.github/workflows/deploy.yml`, which publishes the static site directly from the `work` branch to GitHub Pages.
- Documented the workflow in `README.md` so future updates land on the deployed site as soon as they are pushed to `work`.
=======
The latest site work is committed only on the `work` branch, while the repository’s bootstrap instructions still target the default `main` branch for pushes. The live deployment will keep pulling from `main` until these changes are merged or otherwise published to that branch.
>>>>>>> main
