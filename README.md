# LS1A Study Companion

Interactive, browser-based study environment tailored for Harvard's Life Sciences 1A course. The first unit focuses on the lac operon and gene regulation, providing structured guidance, flashcards, adaptive practice, and experiment-driven reasoning tools.

## Features
- **Unit overview cards** that surface core objectives, mechanistic flow, and molecular players.
- **Drag & drop resource vault** for uploading lecture slides, practice problems, and notes to integrate with the study guide.
- **Adaptive study guide generator** that weaves textbook anchors, your goals, and uploaded files into a shareable plan.
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
3. **Load your materials**
   - Drop PDFs, lecture slides, notes, or problem sets into the **Resource Vault** to curate your study library (uploads stay in your browser’s local storage).
   - Click **Generate Study Guide** to tailor the concept map to your goals.
   - Use flashcards, practice tests, tutor mode, and the synthesis sandbox to reinforce mastery.

All progress (uploads, custom flashcards, mnemonics, interleaving history, reflections, planner streaks) lives in `localStorage`, so you can close the tab and return later without losing your work.

## Extending the App
- Add new units by duplicating the `unitData` structure in `scripts/data/unitData.js`, including interleaving strands, elaborative prompts, and mnemonic assets.
- Extend practice questions, flashcards, or planner guidance by appending to the relevant arrays in the same data file.
- Style adjustments for new components can be made in `styles.css`.

Contributions welcome—extend features to cover additional LS1A modules throughout the term!
