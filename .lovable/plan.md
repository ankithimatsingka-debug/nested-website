

# Email Gate for Education Calculator Results

## Overview
Add a lead capture mechanism where calculator results are initially blurred/hidden until the user provides their email address.

## User Flow

```text
┌─────────────────────────────────────────────────────────────────┐
│  1. User fills calculator inputs (age, college, target amount)  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  2. User clicks "Show My Investment Plan"                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  3. Results card appears with BLURRED/GRAYED OUT amounts:       │
│     - "₹X.XL" → "₹XX.XL" (blurred)                              │
│     - Total Investment (blurred)                                 │
│     - Monthly SIP (blurred)                                      │
│                                                                  │
│     + Email input field with "Unlock Your Plan" button           │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  4. User enters valid email and submits                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  5. Amounts are revealed with smooth animation                   │
│     + "Customise Plan In App" CTA becomes visible                │
└─────────────────────────────────────────────────────────────────┘
```

## Implementation Details

### State Management
Add new state variables to track:
- `emailUnlocked` - whether user has submitted email (boolean)
- `email` - the email input value (string)
- `emailError` - validation error message (string)

### Visual Treatment for Blurred State
When results are calculated but email not yet provided:
- Display placeholder text like "₹XX.XL" with blur filter
- Use CSS `filter: blur(8px)` on the amount values
- Show a semi-transparent overlay with email form

### Email Input Section
- Add email input field inside the results card
- Basic email validation (format check)
- "Unlock Your Plan" submit button
- Error message display for invalid emails

### Reveal Animation
- When email submitted, remove blur with smooth transition
- Use CSS transition for the unblur effect

## Technical Approach

### File to Modify
- `src/components/EducationCalculator.tsx`

### New State Variables
```typescript
const [emailUnlocked, setEmailUnlocked] = useState(false);
const [email, setEmail] = useState("");
const [emailError, setEmailError] = useState("");
```

### Email Validation
Simple regex validation for email format before revealing results.

### CSS Blur Effect
Apply conditional classes to amount displays:
- When locked: `blur-md select-none` + show placeholder values
- When unlocked: normal display with transition

### Results Card Structure (Modified)
```text
┌──────────────────────────────────────┐
│  Your Investment Plan                │
├──────────────────────────────────────┤
│  [Blurred: ₹XX.XL]                   │  ← Locked state
│  Estimated cost in X years           │
├──────────────────────────────────────┤
│  [Blurred] Total Investment          │
│  [Blurred] Monthly SIP Required      │
├──────────────────────────────────────┤
│  📧 Enter email to unlock            │
│  [Email Input]                       │
│  [Unlock Your Plan Button]           │
└──────────────────────────────────────┘
```

After email submission:
```text
┌──────────────────────────────────────┐
│  Your Investment Plan                │
├──────────────────────────────────────┤
│  ₹25.0L                              │  ← Revealed
│  Estimated cost in 13 years          │
├──────────────────────────────────────┤
│  ₹8.5L Total Investment              │
│  ₹5,450 Monthly SIP Required         │
├──────────────────────────────────────┤
│  [Customise Plan In App Button]      │
└──────────────────────────────────────┘
```

## Considerations

### Lead Storage
The current implementation only validates the email client-side. If you want to actually capture and store these leads, you would need:
- A backend/database to store the emails
- Either Supabase integration or a third-party service (like the existing Zoho forms)

For now, this plan implements client-side gating only. Let me know if you'd like to add lead storage as well.

### Reset Behavior
If user changes calculator inputs after unlocking, they won't need to re-enter email (stays unlocked for the session).

