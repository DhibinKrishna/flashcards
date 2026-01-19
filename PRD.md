# PRD: Kids Flash Cards App

## Overview
A web-based flash card application designed for toddlers (ages 2-4) to learn alphabets, numbers, and colors through a vibrant, interactive, and kid-friendly experience.

---

## Target Audience
- **Primary**: Toddlers aged 2-4 years
- **Secondary**: Parents/caregivers who will assist with the app

---

## Tech Stack
- **HTML5** - Structure
- **CSS3** - Styling & animations
- **Vanilla JavaScript** - Interactivity
- No frameworks or external dependencies

---

## Core Features

### 1. Landing Page
- Three large, colorful tiles for topic selection:
  - **Alphabets** (A-Z)
  - **Numbers** (1-10)
  - **Colors** (10 basic colors)
- Each tile has:
  - **Themed background image**:
    - Alphabets tile: Letters "A B C" in multiple colors
    - Numbers tile: Numbers "1 2 3" displayed
    - Colors tile: Three stacked/overlapping color swatches
  - Topic name in big, readable font
  - Fun hover/tap animation
- Simple navigation - tap to enter topic

### 2. Flash Card Pages

#### Common Elements (All Topics)
- Large flash card in center (80% of viewport)
- Big **Next** and **Previous** navigation buttons
- **Home** button to return to landing page
- Progress indicator (dots or simple counter: "3 of 10")
- Sound effects on interactions (clicks, transitions)

#### Alphabets Page
- Cards display: Uppercase letter, lowercase letter, related illustration
- Example: "A a" with an Apple image
- Colorful, cartoon-style illustrations

#### Numbers Page
- Cards display: Number digit, number word, and N balloons
- **Consistent visual**: All cards use colorful balloons as the counting object
- **Layout**: Maximum 5 balloons per row (4 on mobile)
- Example: "3 Three" with 3 balloons displayed
- Balloons in various bright colors for visual appeal

#### Colors Page
- Cards display: Color name only with full card background in that color
- **No object images** - pure color immersion
- Example: Card with "Red" text on a red background
- High contrast text (white or black) for readability against colored backgrounds

### 3. Interaction Style
- **Slideshow navigation** - Simple next/previous buttons
- Large touch targets (minimum 60px) for small fingers
- Visual feedback on all interactions
- **Mobile layout**: Nav buttons move below the card on small screens
- Auto-advancement option (optional toggle)

### 4. Session Progress
- Track cards viewed in current session
- Visual progress bar or dot indicators
- Celebration screen when completing a topic with:
  - **Play Again** button to restart the current topic
  - **Home** button to return to landing page
- Progress resets on page refresh (no persistence)

---

## Design Requirements

### Visual Design
- **Color Palette**: Bright, primary colors (red, blue, yellow, green)
- **Typography**: Large, rounded, kid-friendly fonts (Comic Sans alternative like Fredoka One)
- **Illustrations**: Simple, cartoon-style, friendly characters/objects
- **Background**: Soft gradients or subtle patterns (not distracting)

### UI/UX Guidelines
- Minimal text - rely on visuals
- Large buttons (60px+ touch targets)
- High contrast for readability
- Consistent navigation placement
- No small or hard-to-tap elements
- Rounded corners on all elements
- Subtle animations (bounce, scale) for engagement

### Sound Design
- Soft click sounds on button taps
- Whoosh sound on card transitions
- Cheerful completion sound when finishing a topic
- No background music (to avoid overwhelm)
- Sounds should be pleasant, not startling

---

## Page Structure

```
/
├── index.html          # Landing page with topic tiles
├── alphabets.html      # Alphabet flash cards
├── numbers.html        # Number flash cards
├── colors.html         # Color flash cards
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── main.js         # Shared functionality
│   └── sounds.js       # Sound effects handler
└── assets/
    ├── images/         # Illustrations
    └── sounds/         # Sound effect files
```

---

## Flash Card Content

### Alphabets (26 cards)
A-Apple, B-Ball, C-Cat, D-Dog, E-Elephant, F-Fish, G-Grapes, H-House, I-Ice cream, J-Juice, K-Kite, L-Lion, M-Moon, N-Nose, O-Orange, P-Penguin, Q-Queen, R-Rainbow, S-Sun, T-Turtle, U-Umbrella, V-Violin, W-Whale, X-Xmas Tree, Y-Yo-yo, Z-Zebra

### Numbers (10 cards)
1-10, each card showing that number of colorful balloons:
- 1: One balloon
- 2: Two balloons
- 3: Three balloons
- ... and so on up to 10 balloons

### Colors (10 cards)
Each card displays the color name on a full background of that color:
- Red (#DC143C - Crimson)
- Green (#4CAF50)
- Blue (#2196F3)
- Yellow (#FFEB3B)
- Orange (#ED7014)
- Purple (#9C27B0)
- Pink (#FF69B4 - Hot Pink)
- Brown (#964B00)
- Black (#212121)
- White (#FAFAFA)

---

## Success Metrics
- Child can navigate independently after brief guidance
- Clear visual hierarchy guides attention
- No frustration from missed taps or confusing UI
- Engaging enough to complete at least one full topic

---

## Out of Scope (v1)
- User accounts / login
- Persistent progress across sessions
- Audio pronunciation of letters/numbers
- Quiz/game modes
- Multiple languages
- Parental controls

---

## Next Steps
1. Review and approve this PRD
2. Create project file structure
3. Build landing page with tiles
4. Implement flash card component
5. Create individual topic pages
6. Add sound effects
7. Test on touch devices
