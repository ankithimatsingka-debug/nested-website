/**
 * Post-build script: copies dist/index.html into subdirectories
 * for every SPA route so GitHub Pages returns 200 (not 404).
 *
 * Usage: node scripts/generate-static-pages.js
 */

import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

const DIST = 'dist';
const SOURCE = join(DIST, 'index.html');

// All routes the SPA serves (add new ones here)
const routes = [
  '/blog',
  '/blog/best-mutual-fund-for-children-india',
  '/blog/sip-for-child-education-india',
  '/blog/education-inflation-india',
  '/blog/child-education-planning-india',
  '/blog/sip-for-child-education',
  '/blog/how-much-save-for-child-education-india',
  '/blog/best-investment-plan-for-child-india',
  '/blog/mutual-funds-vs-ppf-child-education',
  '/blog/investment-plan-for-newborn-baby-india',
  '/blog/build-1-crore-child-education',
  '/blog/best-sip-plans-child-education-india',
  '/blog/how-to-plan-child-education-india',
  '/blog/rising-cost-of-education-in-india',
  '/blog/child-education-cost-india',
  '/blog/sip-calculator-child-education',
  '/blog/sdl-debt-funds-explained',
  '/blog/understanding-money-market-funds',
  '/blog/why-fixed-deposits-might-not-be-best-for-growth',
  '/blog/understanding-mutual-fund-taxation-2026',
  '/blog/start-investing-for-childs-education',
  '/blog/sip-vs-lumpsum-investment',
  '/features',
  '/fund-selection',
  '/educationcalculator',
  '/superfd',
  '/taxation',
  '/landing',
  '/terms-and-conditions',
  '/privacy-policy',
  '/cancellation-refund-policy',
  '/information-security-policy',
  '/account-data-deletion-policy',
  '/kyc-modification',
  '/nested-dreamers',
  '/nested-dreamers/dashboard',
  '/blog/child-pursuing-music-ai-era',
  '/blog/50000-invested-child-college',
  '/blog/future-ready-skills-courses-child-india',
  '/blog/teach-kids-about-money',
  '/blog/growth-mindset-in-children',
  '/blog/future-skills-for-children',
  '/blog/leadership-skills-in-children',
  '/blog/how-much-save-for-child-future',
  '/blog/build-good-habits-in-children',
  '/blog/cost-of-raising-child-india',
  '/blog/mistakes-child-education-planning',
  '/blog/5000-per-month-child-education-plan',
  '/blog/best-investment-options-child-education-india',
];

if (!existsSync(SOURCE)) {
  console.error('dist/index.html not found. Run build first.');
  process.exit(1);
}

let count = 0;
for (const route of routes) {
  const target = join(DIST, route, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(SOURCE, target);
  count++;
}

console.log(`✅ Generated ${count} static index.html files for SPA routes.`);
