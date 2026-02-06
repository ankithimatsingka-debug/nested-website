

# Reimagine the Education Calculator -- More Interactive and Engaging

## Overview
Transform the current static form-based calculator into a multi-step, animated experience that feels like a guided journey rather than a form. Both `EducationCalculator.tsx` (standalone section) and `HeroEducationCalculator.tsx` (landing page hero) will be updated.

## What Changes

### 1. Multi-Step Wizard Flow
Replace the single-form layout with a 3-step guided flow using smooth transitions between steps:
- **Step 1**: Child's age input with a visual age slider (large, tappable number buttons or a styled slider alongside the number input)
- **Step 2**: College/course selection with the existing searchable dropdown
- **Step 3**: Auto-populated target amount with the calculate button

Each step has a progress indicator (3 dots or a thin progress bar) showing where the user is. Steps animate in/out using framer-motion (already installed).

### 2. Visual Progress Bar
A horizontal progress bar at the top of the card that fills as the user completes each field (33% per step). Animated with a smooth width transition.

### 3. Animated Number Counter for Results
When results appear, the Monthly SIP, Total Investment, and Estimated Value numbers will count up from 0 to their final value (animated counter effect over ~1 second) instead of just appearing. This replaces the current static reveal.

### 4. Confetti/Sparkle Micro-Animation on Unlock
When the user submits their email and unlocks the plan, a brief sparkle/celebration animation plays (CSS-only particles or a simple scale-bounce effect on the result card) to reward the action.

### 5. Interactive Age Selection Enhancement
Add visual age "chips" (quick-select buttons for common ages like 0, 2, 5, 8, 10, 14) above or alongside the number input, so users can tap to quickly select.

### 6. Live Cost Preview
As soon as college is selected and age is entered (before clicking calculate), show a subtle "peek" line like "Estimated future cost: ~Rs XX,XX,XXX" below the college dropdown to build anticipation and encourage the user to proceed.

## Technical Details

### Files to Modify
- `src/components/EducationCalculator.tsx` -- standalone calculator section
- `src/components/HeroEducationCalculator.tsx` -- hero variant for landing page

### New State
- `currentStep` (1 | 2 | 3) for wizard flow
- `animatedValues` for the counting number animation (using `useEffect` + `requestAnimationFrame`)

### Animation Approach
- Use `framer-motion` (already installed) for step transitions with `AnimatePresence` and slide/fade effects
- Animated number counter via a small custom hook (`useCountUp`) using `requestAnimationFrame`
- Progress bar uses Tailwind `transition-all duration-500` on width
- Sparkle effect on unlock uses CSS keyframes (scale + opacity burst)

### Step Navigation Logic
- Step auto-advances when the field is completed (age entered -> moves to step 2 after a brief delay; college selected -> moves to step 3)
- Users can click the progress dots to go back to any completed step
- The "Show My Investment Plan" button only appears on step 3

### Both Components Updated Consistently
The Hero variant will have a more compact version of the same interactions (smaller chips, tighter spacing) to fit within the hero card constraints.

