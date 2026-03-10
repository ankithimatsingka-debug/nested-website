

# Fix: Blog post date display timezone issue

The blog post **"How to Build ₹1 Crore for Your Child's Education"** IS present in the data and IS rendering on the `/blog` page (confirmed via screenshot). However, all posts with `publishedAt: "2026-03-10"` display as **"9 March 2026"** due to a timezone parsing bug.

## Root Cause

`new Date("2026-03-10")` is parsed as **midnight UTC**. In timezones west of UTC (like the preview server or some user browsers), this rolls back to March 9. The `toLocaleDateString("en-IN")` then shows the wrong date.

## Fix

In both `BlogCard.tsx` and `BlogPost.tsx`, append `T00:00:00` to force local timezone parsing:

```ts
// Before
new Date(post.publishedAt)

// After  
new Date(post.publishedAt + "T00:00:00")
```

This ensures "2026-03-10" always displays as "10 March 2026" regardless of timezone.

### Files to change
1. `src/components/blog/BlogCard.tsx` — line 12
2. `src/pages/BlogPost.tsx` — line 21

If the user confirms the post truly isn't visible (not just a date issue), the problem may be a stale preview cache — a hard refresh should resolve it.

