
## Add Quick-Pick College Tiles to Education Calculator

### What changes
In Step 4 ("Is there a dream college?"), add a grid of 8 prominent college category tiles above the search input. Each tile shows an icon, a short label, and today's cost. Tapping a tile selects it as the college input (same as searching and picking from the dropdown).

### Tiles to add

| Label | Cost | Icon |
|-------|------|------|
| IIT | 20.00 L | GraduationCap |
| Tier 1 Private Engineering | 25.00 L | Building2 |
| IIM | 25.00 L | Award |
| Tier 1 MBA College | 28.00 L | Briefcase |
| Masters in US | 50.00 L | Globe |
| Design (NID, NIFT etc) | 18.00 L | Palette |
| ISB, XLRI, FMS and more | 25.00 L | BookOpen |
| MBA in US | 80.00 L | Plane |

### How it works
- Each tile maps to a synthetic `CollegeCourse` object with the specified `currentFee` and reasonable inflation rates (matching similar entries in the existing dataset).
- When a tile is tapped, it calls `calc.setSelectedCollege(...)` with that object -- identical to selecting from search results.
- The "Typical cost today" confirmation line appears as usual.
- The search input remains below the tiles so users can still type a specific college name.

### Technical details

**File: `src/components/education/EducationJourney.tsx`**

1. Define a `QUICK_PICK_COLLEGES` array of objects containing `label`, `icon`, and a `CollegeCourse` (with name, currentFee, and inflation rates).
2. In Step 4, insert a responsive grid (`grid-cols-2 gap-2`) of clickable tiles between the heading and the search input.
3. Each tile is a small card with the icon, label, and cost formatted as "XX L". Tapping it sets `selectedCollege` and clears search state.
4. Style tiles with `border border-border rounded-xl p-3 hover:border-primary/50 transition-colors` and highlight the selected one with `border-primary bg-primary/5`.
5. Add a small "or search below" divider text between the tiles and the search input.
