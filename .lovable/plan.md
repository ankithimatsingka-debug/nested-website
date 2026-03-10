

# Problem: Google Returns 404 for `/blog`

## Root Cause

The site is hosted on **GitHub Pages** as a single-page application (SPA). When Googlebot requests `https://nested.money/blog`, GitHub Pages has no `blog/index.html` file, so it serves `404.html`. The `404.html` uses a JavaScript redirect trick (sessionStorage + `history.replaceState`) to load the SPA. But **Googlebot does not reliably execute this multi-step JS redirect**, so it sees the 404 status code and reports "Page fetch error: Not found (404)."

This affects **all routes** except `/` — every blog post, `/features`, `/fund-selection`, etc. are all vulnerable to the same issue.

## Solution: Pre-render static HTML for each route

The fix is to generate actual HTML files for each route during the build step, so GitHub Pages serves a 200 status instead of a 404. This is called **pre-rendering**.

### Implementation

1. **Install `vite-plugin-prerender`** (or the equivalent `vite-ssg` / `prerender-spa-plugin`) as a dev dependency.

2. **Update `vite.config.ts`** to pre-render key routes during build:
   - `/`
   - `/blog`
   - `/blog/best-mutual-fund-for-children-india`
   - `/blog/sip-for-child-education-india`
   - `/blog/education-inflation-india`
   - `/blog/child-education-planning-india`
   - `/blog/sip-for-child-education`
   - `/blog/how-much-save-for-child-education-india`
   - `/blog/best-investment-plan-for-child-india`
   - `/blog/mutual-funds-vs-ppf-child-education`
   - `/blog/investment-plan-for-newborn-baby-india`
   - `/features`
   - `/fund-selection`
   - `/educationcalculator`
   - `/superfd`
   - `/taxation`

   This generates e.g. `dist/blog/index.html`, `dist/blog/best-mutual-fund-for-children-india/index.html`, etc.

3. **Keep `404.html`** as a fallback for truly unknown routes.

4. **Update the GitHub Actions workflow** if needed — the build step already runs `npm run build`, so pre-rendered files will be included in `dist/` automatically.

### Alternative: Edge function approach

If pre-rendering proves problematic with the current SPA architecture (dynamic imports, client-side state), an alternative is to create a **backend function** that serves pre-rendered HTML for bot user agents. However, since the site is on GitHub Pages (static hosting), this isn't feasible without moving to a different host or adding a CDN/proxy layer.

### Recommended approach

Pre-rendering is the simplest and most reliable fix for GitHub Pages + SPA + SEO. It requires:

- 1 new dev dependency (`vite-plugin-prerender` or similar)
- Updates to `vite.config.ts` to configure pre-render routes
- A helper to export the route list (can pull slugs from `blogData.ts`)

No changes to components, routing, or content are needed.

