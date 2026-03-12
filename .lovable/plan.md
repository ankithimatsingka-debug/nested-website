

# Add Blog: Rising Education Cost in India (with Embedded Calculator)

## Overview

New blog post about rising education costs in India, with the **EducationCalculator** component embedded directly in the blog page. Since blog content uses `dangerouslySetInnerHTML` (can't render React components), the calculator will be rendered as a separate React component **after** the HTML content, triggered by slug detection in `BlogPost.tsx`.

## Slug & SEO

- **Slug:** `rising-cost-of-education-in-india`
- **Meta Title:** Rising Cost of Education in India: What Parents Must Know (2026)
- **Meta Description:** Understand how education costs are rising in India, what college will cost in 10-15 years, and how parents can plan ahead with smart investing strategies.
- **Date:** 2026-03-12

## Changes

### 1. `src/data/blogData.ts`
Add new blog entry with HTML content covering:
- Education inflation stats (8-10% annually)
- Current vs future cost tables (IIT, IIM, MBBS, overseas)
- Why costs are rising (infrastructure, faculty, global competition)
- Impact on middle-class families
- How to plan (SIP, goal-based investing)
- Internal links to related articles
- FAQ section
- CTA to try the education calculator (`/educationcalculator`)
- All "Nested Money" references linked to Play Store

### 2. `src/pages/BlogPost.tsx`
- Import `EducationCalculator` component
- After the `dangerouslySetInnerHTML` div, conditionally render `<EducationCalculator />` when `post.slug === "rising-cost-of-education-in-india"`
- Add JSON-LD Article + FAQPage schema for this slug

### 3. `public/sitemap.xml`
Add `https://nested.money/blog/rising-cost-of-education-in-india`

### 4. `scripts/generate-static-pages.js`
Add `/blog/rising-cost-of-education-in-india` to routes array

## Calculator Integration

The blog HTML content will include a heading like "Try Our Education Cost Calculator" followed by a brief intro paragraph. Immediately after the `dangerouslySetInnerHTML` block, `BlogPost.tsx` will render the actual `<EducationCalculator />` React component for this specific slug. This gives readers an interactive tool inline with the article.

