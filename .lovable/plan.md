

# Fix Google Indexing Issues

## Root Cause Analysis

There are **three issues** causing the indexing errors:

### 1. Hardcoded canonical URL (CRITICAL)
`index.html` line 20 has `<link rel="canonical" href="https://nested.money/" />`. The static page generation script copies this exact file to every route. So when Googlebot fetches `/blog`, `/features`, etc., it sees a canonical pointing to `/` -- telling Google "this page is a duplicate of the homepage, don't index it." This explains **"Discovered - currently not indexed"** and **"Crawled - currently not indexed"**.

**Fix:** Remove the hardcoded canonical from `index.html`. React Helmet already sets the correct per-page canonical client-side.

### 2. Hardcoded title and meta description
Same problem: every pre-rendered page has `<title>Nested - Funding dreams...</title>` and the homepage meta description. Before JS executes, Google may read these wrong values.

**Fix:** Set generic fallback title/description in `index.html` or remove the specific ones and let React Helmet handle them.

### 3. 404.html redirect still active
For any route NOT in the static pages list, the `404.html` fires a JS redirect. Google sees 404 status + redirect = "Page with redirect" and "Redirect error" issues.

**Fix:** Already mostly addressed by the static pages script. Ensure all routes from `App.tsx` are in the script.

## Changes

### 1. `index.html`
- Remove `<link rel="canonical" href="https://nested.money/" />`
- Keep the title and description as generic fallbacks (they get overridden by React Helmet)

### 2. Ensure all pages set canonical via React Helmet
- Check `Index.tsx`, `Features.tsx`, `Blog.tsx`, `Landing.tsx`, and other pages set `<link rel="canonical">` via Helmet
- Add canonical tags to any pages missing them

### 3. `scripts/generate-static-pages.js`
- Add `/nested-dreamers/dashboard` (present in App.tsx but missing from the script)

This is a small, targeted set of changes. The canonical removal is the highest-impact fix.

