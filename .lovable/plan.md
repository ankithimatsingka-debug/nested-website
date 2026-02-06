

## Add "Reality Check" Page to Education Calculator

### Overview
Insert a new step between the current Step 4 ("Dream College") and Step 5 ("Email Gate"). This page presents an emotional, data-driven "reality check" about rising education costs, followed by Nested's value proposition and an interactive daily savings calculator.

### New Flow
Current: Step 1 > 2 > 3 > 4 (College) > 5 (Email) > Reveal
Updated: Step 1 > 2 > 3 > 4 (College) > **5 (Reality Check)** > 6 (Email) > Reveal

### What the New Step Contains

**Top Navigation:** Back button (left) + "See [childName]'s Plan" blue button (right) that advances to the email step.

**Section 1 -- "The Reality Check"**
- Red exclamation icon + title
- Headline: "Education costs are rising faster than you think"
- A Recharts LineChart with a red line and light-red gradient fill showing cost from (currentCost / 2.5) at (currentYear - 10) to (currentCost * 2.5) at (currentYear + 10)
- Subtext: "College fees have doubled in the last 10 years"

**Section 2 -- Insight Card**
- People icon on left, "65 out of 100" bold headline, supporting paragraph about financial burden

**Section 3 -- Warning Card**
- Light red background, red border, credit card icon
- Text about education becoming a debt trap

**Section 4 -- "The Nested Way"**
- Sparkle icon + "The Nested Way" title
- "A smarter way to save for [childName]"
- Three feature cards: Smart Tracking, Research-Backed Framework, Power of Small Savings

**Section 5 -- Interactive Calculator Card**
- Dark blue-to-orange gradient background
- "See how small daily savings grow for [childName]"
- Four pill buttons for daily amounts (50, 100, 200, 300)
- Computes future value using the same CAGR rate logic from the hook
- Shows "In X years, this becomes Y" and "From just Z invested"

---

### Technical Details

**File: `src/components/education/EducationJourney.tsx`**

1. Change `Step` type from `1 | 2 | 3 | 4 | 5 | "reveal"` to `1 | 2 | 3 | 4 | 5 | 6 | "reveal"` and update `TOTAL_STEPS` from 5 to 6.

2. Update `goNext`, `goBack`, navigation logic:
   - Step 4 now goes to Step 5 (reality check)
   - Step 5 goes to Step 6 (email gate)
   - "reveal" goes back to Step 6
   - Move the `calc.calculate()` trigger from step 5 to step 6

3. Renumber old Step 5 (email gate) to Step 6.

4. Add new Step 5 with:
   - A `selectedDaily` local state (default 300) for the pill selector
   - Line chart data generated from `selectedCollege.currentFee` using the formula: cost/2.5 ten years ago, cost today, cost*2.5 ten years from now
   - CAGR compound calculation for daily savings: `dailyAmount * 365 * years` invested, future value using `getAnnualRate(years)` compounding monthly
   - All sections laid out vertically in one scrollable step

5. Add new Lucide icon imports: `Users`, `CreditCard`, `Target`, `Brain`, `LineChart` (or reuse existing ones as appropriate).

6. The step will be a longer scrollable card -- this is intentional for the "reality check" narrative flow. The card padding and structure remain consistent with other steps.

**Calculations for the Interactive Calculator:**
- Monthly rate = `getAnnualRate(yearsToGoal) / 12`
- Total months = `yearsToGoal * 12`
- Future value = `(dailyAmount * 365 / 12) * ((1 + monthlyRate)^totalMonths - 1) / monthlyRate`
- Total invested = `dailyAmount * 365 * yearsToGoal`
- Display in Lakhs/Crores format using existing `formatLakhs` utility

