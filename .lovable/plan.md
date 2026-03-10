

# Fix: Blog listing not sorted by date

The `Blog.tsx` page renders `blogPosts` in **array order** (line 36) without any sorting. The `getRecentPosts` function in `blogData.ts` does sort by date, but it's not used on the blog listing page.

The March 10 post (`mutual-funds-vs-ppf-child-education`) was appended at the end of the array, so it appears last instead of first.

## Fix

In `src/pages/Blog.tsx`, replace the direct use of `blogPosts` with a sorted copy:

```tsx
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
```

Then iterate over `sortedPosts` instead of `blogPosts` in the grid. This ensures newest posts always appear first regardless of their position in the data array.

**One file changed:** `src/pages/Blog.tsx`

