
# Plan: Replace Education Calculator Data with New Excel Data

## Overview
Replace the existing education cost data in `src/data/educationCostData.ts` with the 354 entries from the uploaded `nesteddropdown.xlsx` file.

## Data Transformation Required
The Excel data needs to be converted to match the existing TypeScript interface:

| Excel Column | TypeScript Field | Transformation |
|--------------|-----------------|----------------|
| Name | name | Direct copy |
| Last Year Fee (INR) | currentFee | Direct copy |
| Expected % Increase (<10 Yr) | increaseRateLessThan10 | Divide by 100 (e.g., 10 becomes 0.10) |
| Expected % Increase (>10 Yr) | increaseRateMoreThan10 | Divide by 100 (e.g., 8 becomes 0.08) |

Note: The "Type" column (INSTITUTION/COURSE) will not be included in the current interface structure.

---

## Implementation Steps

### Step 1: Update the educationCostData.ts file
Replace the entire `educationCostData` array with 354 new entries from the Excel file.

**File to modify:** `src/data/educationCostData.ts`

**Sample of converted data:**
```typescript
export const educationCostData: CollegeCourse[] = [
  { name: "Academy of Carver Aviation Pvt. Ltd.", currentFee: 5160000, increaseRateLessThan10: 0.06, increaseRateMoreThan10: 0.05 },
  { name: "Al Falah School of Medical Sciences, Faridabad", currentFee: 5750000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.08 },
  { name: "Amity University – School of Design, Noida", currentFee: 2000000, increaseRateLessThan10: 0.10, increaseRateMoreThan10: 0.08 },
  // ... 351 more entries
];
```

### Step 2: Preserve existing helper functions
The file contains a `calculateFutureCost` function that will remain unchanged:
```typescript
export function calculateFutureCost(college: CollegeCourse, currentAge: number): number {
  const yearsUntilCollege = 18 - currentAge;
  if (yearsUntilCollege <= 0) return college.currentFee;
  
  const rate = yearsUntilCollege < 10 
    ? college.increaseRateLessThan10 
    : college.increaseRateMoreThan10;
    
  return college.currentFee * Math.pow(1 + rate, yearsUntilCollege);
}
```

---

## Data Summary

The new dataset includes:
- **Engineering (India):** IITs, NITs, BITS, VIT, SRM, Manipal, etc.
- **Engineering (International):** MIT, Stanford, Caltech, Carnegie Mellon, etc.
- **Medical (India):** Private medical colleges across India
- **Medical (International):** Foreign MBBS programs in Georgia, Russia, Philippines, etc.
- **MBA (India):** All IIMs, XLRI, ISB, SPJIMR, MDI, etc.
- **MBA (International):** Harvard, Wharton, Stanford GSB, INSEAD, etc.
- **Design:** NID, NIFT, Pearl Academy, Srishti, etc.
- **Aviation:** Pilot training programs
- **International Undergraduate:** US Ivy League, UK universities, Canadian universities, Australian universities

---

## Technical Notes

- The interface `CollegeCourse` and `calculateFutureCost` function remain unchanged
- The `EducationCalculator` component will automatically use the new data
- No changes required to the calculator logic - it already handles the data correctly
