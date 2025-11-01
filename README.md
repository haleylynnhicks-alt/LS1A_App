# LS1A Study Companion

Interactive, browser-based study environment tailored for Harvard's Life Sciences 1A course. The first unit focuses on the lac operon and gene regulation, providing structured guidance, flashcards, adaptive practice, and experiment-driven reasoning tools.

## Features
- **Tabbed workspace** with dedicated environments for each chapter plus midterm/final integration labs.
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
   - Pick a tab (e.g. Chapter 1, Midterm Lab) and drop PDFs, lecture slides, notes, or problem sets into that page’s **Resource Vault**—each tab keeps its own uploads, flashcards, mnemonics, planner streak, and interleaving history.
   - Click **Generate Study Guide** inside the active tab to tailor the concept map to your goals.
   - Use flashcards, practice tests, tutor mode, and the synthesis sandbox to reinforce mastery for that specific chapter or assessment.

### Managing chapters & textbook uploads
- **Upload per chapter for clarity.** Dropping a chapter’s slides or textbook pages into the matching tab keeps the study guide, flashcards, and planner scoped to just that content. It also avoids bloated resource lists when you only want to focus on one topic.
- **Whole-textbook uploads are possible.** If you prefer one mega reference, use the Midterm or Final review tabs to hold cross-unit resources, then interleave chapters using the built-in mixes.
- **Duplicate features per tab.** Every tab clones the same toolkit—resource vault, study guide builder, flashcards, practice quizzes, interleaving lab, mnemonics, tutor mode, planner, and synthesis sandbox—so you can run the same workflow without leaving the page.

All progress (uploads, custom flashcards, mnemonics, interleaving history, reflections, planner streaks) lives in `localStorage`, so you can close the tab and return later without losing your work.

## Extending the App
- Add new units by duplicating the `unitData` structure in `scripts/data/unitData.js`, including interleaving strands, elaborative prompts, and mnemonic assets. Each entry automatically becomes a new tab.
- Extend practice questions, flashcards, or planner guidance by appending to the relevant arrays in the same data file.
- Style adjustments for new components can be made in `styles.css`.

Contributions welcome—extend features to cover additional LS1A modules throughout the term!
