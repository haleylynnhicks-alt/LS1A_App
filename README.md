# LS1A Study Companion

Interactive, browser-based study environment tailored for Harvard's Life Sciences 1A course. The first unit focuses on the lac operon and gene regulation, providing structured guidance, flashcards, adaptive practice, and experiment-driven reasoning tools.

## Features
- **Unit overview cards** that surface core objectives, mechanistic flow, and molecular players.
- **Drag & drop resource vault** for uploading lecture slides, practice problems, and notes to integrate with the study guide.
- **Adaptive study guide generator** that weaves textbook anchors, your goals, and uploaded files into a shareable plan.
- **Flashcards + custom card builder** to support spaced retrieval and the Feynman technique.
- **Practice assessments** with instant feedback and rubric checklists for open response questions.
- **Tutor mode** that delivers stepwise prompts and feedback to deepen conceptual understanding.
- **Systems-level synthesis sandbox** for modeling transcription outcomes under different nutrient and mutation scenarios.

## Getting Started
1. Open `index.html` in your browser.
2. Drop PDFs, slides, or notes into the uploader to curate your resource list (stored locally in your browser).
3. Click **Generate Study Guide** to align the curated concept map with your personal goals.
4. Use the flashcards, practice test, tutor mode, and synthesis controls to reinforce mastery.

All progress (uploads, custom flashcards, reflections) is stored in `localStorage`, so you can return to the page and pick up where you left off.

## Extending the App
- Add new units by duplicating the `unitData` structure in `app.js`.
- Incorporate additional practice questions or flashcards by appending to the relevant arrays.
- Style adjustments can be made in `styles.css`.

Contributions welcome—extend features to cover additional LS1A modules throughout the term!
