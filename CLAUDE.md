# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A toddler-friendly flash card learning app (ages 2-4) with three topics: Alphabets (A-Z), Numbers (1-10), and Colors (10 basic colors). Built with vanilla HTML/CSS/JavaScript with zero external dependencies.

## Development Commands

```bash
# Serve locally (choose one)
python -m http.server 8000
npx http-server
# Or use VS Code Live Server extension

# No build, lint, or test commands - vanilla static files
```

## Architecture

**Multi-page static app with hub-and-spoke navigation:**
- `index.html` - Landing page with 3 topic tiles
- `alphabets.html`, `numbers.html`, `colors.html` - Self-contained topic pages

**Each topic page embeds its own data and logic inline** - no shared JavaScript modules. State is session-only (resets on navigation).

**Data structures:**
```javascript
// Alphabets
{ letter: 'A', word: 'Apple', emoji: '🍎' }

// Numbers
{ number: 1, word: 'One' }  // Balloons generated dynamically based on count

// Colors
{ name: 'Red', hex: '#FF6B6B', textDark: false }  // textDark controls text contrast
```

## Sound System

All sounds synthesized via Web Audio API (`js/sounds.js`) - no audio files:
- `playClickSound()` - 800Hz sine wave, 0.1s
- `playWhooshSound()` - 400Hz→200Hz sweep, 0.15s
- `playSuccessSound()` - Ascending C5→E5→G5→C6 notes

Audio context initializes on first user interaction (browser autoplay policy).

## Styling Conventions

- CSS Variables in `:root` for colors and reusable values
- Three responsive breakpoints: desktop (900px+), tablet (768px), mobile (480px)
- Card transitions use `cardSlideIn` keyframe (0.4s)
- Touch targets minimum 60px for toddler accessibility

## Adding New Content

To add a new flash card, edit the data array at the top of the topic's HTML file. To add a new topic:
1. Create new `[topic].html` following existing page structure
2. Add tile in `index.html`
3. Add tile styles in `css/styles.css`

## Design Requirements (from PRD)

- Bright, vibrant colors with high contrast
- Large buttons, rounded corners (24px cards, 16px buttons)
- Fredoka font for kid-friendly appearance
- Celebration overlay on completion with success sound

## Claude Instructions

- When making any changes, update this CLAUDE.md file if the changes affect documented patterns, architecture, commands, or conventions
