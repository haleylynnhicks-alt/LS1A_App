# LS1A Study Companion

Interactive, browser-based study environment tailored for Harvard's Life Sciences 1A course. Each workspace focuses on a single chapter (or assessment lab) and provides structured guidance, flashcards, adaptive practice, and experiment-driven reasoning tools.

## Features
- **Multi-page site** with a persistent navigation bar linking all nine chapters plus midterm and final workspaces.
- **Unit overview cards** that surface core objectives, mechanistic flow, and molecular players.
- **Curated resource library** with embedded textbook excerpts, diagrams, and practice drills for each chapter—no uploads required.
- **Adaptive study guide generator** that weaves textbook anchors, your goals, and the curated resources into a shareable plan.
- **Flashcards + spaced scheduler** to support retrieval practice, elaborative follow-ups, and your own mnemonic hooks.
- **Interleaving studio** that mixes mechanistic, quantitative, and experimental strands into ready-made study loops.
- **Elaboration lab** with rolling prompts for self-explanation and transfer questions.
- **Mnemonic & visual lab** combining curated memory aids, an interactive concept map, and your own devices.
- **Practice assessments** with instant feedback, rubric checklists, and elaborative extensions after each attempt.
- **Tutor mode** that delivers stepwise prompts, logs reflections, and suggests deeper elaboration cues.
- **Study rhythm planner** for spacing bursts, logging rest, and tracking XP-style motivation.
- **Systems-level synthesis sandbox** for modeling transcription outcomes under different nutrient and mutation scenarios.

## Getting Started

### Prerequisites
- A modern desktop browser (Chrome, Edge, Firefox, or Safari).
- Optional: a lightweight static file server if you prefer not to open HTML files directly from disk.

### Run the app locally
1. **Download the project**
   ```bash
   git clone https://github.com/<your-account>/LS1A_App.git
   cd LS1A_App
   ```
2. **Serve the files** (pick one of the following options):
   - **Quick preview:** double-click `index.html` to open it in your browser.
   - **Python server:**
     ```bash
     python -m http.server 8000
     ```
     Then visit http://localhost:8000 in your browser.
   - **Node serve:**
     ```bash
     npx serve .
     ```
     Then visit the URL shown in the terminal (usually http://localhost:3000).
3. **Explore a chapter workspace**
   - From the home page or the global navigation bar, choose a workspace card (e.g. Chapter 1, Midterm Lab) to open its dedicated page.
   - Review the **Resource Library** cards baked into each chapter to see annotated textbook segments, figures, and practice prompts.
   - Click **Generate Study Guide** to tailor the concept map to your goals, then use flashcards, practice tests, tutor mode, and the synthesis sandbox to reinforce mastery for that specific chapter or assessment.

### Working through chapters
- **One chapter at a time.** Start with the chapter-level navigation bar to hop between units. Each workspace keeps its own flashcards, mnemonics, planner streak, and interleaving history.
- **Follow the built-in resources.** The preloaded resource cards summarize textbook readings, figure walkthroughs, and workbook drills so you always know what to review next.
- **Duplicate features per page.** Every workspace clones the same toolkit—resource library, study guide builder, flashcards, practice quizzes, interleaving lab, mnemonics, tutor mode, planner, and synthesis sandbox—so you can run the same workflow without leaving the page.

All progress (custom flashcards, mnemonics, interleaving history, reflections, planner streaks) lives in `localStorage`, so you can close the tab and return later without losing your work.

## Extending the App
- Add new units by duplicating the `unitData` structure in `scripts/data/unitData.js`, including interleaving strands, elaborative prompts, and mnemonic assets. Pair the new entry with a matching HTML shell in `pages/` (e.g. `pages/<unit-id>.html`) so it appears alongside the existing workspaces.
- Extend practice questions, flashcards, or planner guidance by appending to the relevant arrays in the same data file.
- Style adjustments for new components can be made in `styles.css`.

Contributions welcome—extend features to cover additional LS1A modules throughout the term!
