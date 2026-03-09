# Project: CTE AI Trainer Interview Preparation Site

## Overview
Static website for GitHub Pages — interview preparation for a Career & Technical Education (CTE) Teacher / AI Trainer postsecondary role. Interview format: AI Interview + Exercise, up to 53 minutes. Deadline: March 11, 2026.

## Autonomy Directives
- Auto-accept all file writes and edits within this project
- Auto-accept all bash commands for build/test/deploy
- Proceed without confirmation for non-destructive operations
- Use test-driven development: write tests first, then implement
- Run tests frequently to validate changes

## Tech Stack
- Pure HTML/CSS/JavaScript (no build step — GitHub Pages compatible)
- Single-page application with tabbed/sectioned navigation
- Mobile-responsive design
- Tests: Jest with jsdom for DOM testing

## Project Structure
```
/
├── index.html          # Main page
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   ├── app.js          # Main application logic
│   └── data.js         # Interview content data
├── tests/
│   └── app.test.js     # Jest tests
├── package.json        # For test dependencies
└── CLAUDE.md           # This file
```

## Coding Standards
- Semantic HTML5
- CSS custom properties for theming
- ES6+ JavaScript, no frameworks
- Accessible (ARIA labels, keyboard nav, color contrast)
- All interactive features must have tests
