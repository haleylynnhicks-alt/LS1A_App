const studyTemplate = `
  <div class="study-page">
    <header class="hero">
      <div class="hero__content">
        <h2 data-role="unit-title"></h2>
        <p data-role="unit-description"></p>
        <div class="hero__actions">
          <button class="btn btn--primary" data-role="start-tutor">Start Guided Session</button>
          <button class="btn btn--secondary" data-role="generate-guide">Generate Study Guide</button>
        </div>
      </div>
      <div class="hero__meta">
        <div class="chip">Smart Uploads</div>
        <div class="chip">Interleaved Practice</div>
        <div class="chip">Mnemonic &amp; Visual Labs</div>
      </div>
    </header>

    <section class="panel" aria-labelledby="unit-overview">
      <div class="panel__header">
        <h3 id="unit-overview">Unit Overview</h3>
        <p>
          Start with a plain-language roadmap. Meet the goals, then read each step of the story before
          diving into molecular details.
        </p>
      </div>
      <div class="panel__grid">
        <article class="card" data-role="concept-objectives"></article>
        <article class="card" data-role="concept-flow"></article>
        <article class="card" data-role="molecular-players"></article>
      </div>
    </section>

    <section class="panel" aria-labelledby="resource-uploader">
      <div class="panel__header">
        <h3 id="resource-uploader">Drag &amp; Drop Resources</h3>
        <p>
          Drop lecture slides, handwritten notes, practice problems, textbook annotations, or video
          transcripts. We'll index the files and map them to the LS1A framework so you can revisit them
          during quizzes and tutoring.
        </p>
      </div>
      <div class="uploader" data-role="drop-zone" role="button" tabindex="0">
        <span class="uploader__icon">⬆️</span>
        <p>Drag files here or click to upload</p>
        <input type="file" data-role="file-input" multiple aria-label="Upload files" />
      </div>
      <ul class="uploader__list" data-role="uploaded-list" aria-live="polite"></ul>
    </section>

    <section class="panel" aria-labelledby="study-guide">
      <div class="panel__header">
        <h3 id="study-guide">Adaptive Study Guide Builder</h3>
        <p>
          Mix your files with our prompts to build a study guide that explains what happens first, next,
          and last, plus the reasons underneath.
        </p>
      </div>
      <div class="study-guide">
        <div class="study-guide__inputs">
          <label class="form-field">
            <span>Add quick notes or insights:</span>
            <textarea
              data-role="custom-notes"
              placeholder="Paste highlights or jot down questions..."
            ></textarea>
          </label>
          <label class="form-field">
            <span>What do you want to master today?</span>
            <input
              data-role="learning-goal"
              type="text"
              placeholder="e.g. Predict operon activity under various glucose/lactose conditions"
            />
          </label>
        </div>
        <div class="study-guide__output">
          <h4>Generated Study Guide</h4>
          <div data-role="study-guide-output" class="study-guide__content" aria-live="polite"></div>
          <button class="btn btn--ghost" data-role="export-guide">Copy to Clipboard</button>
        </div>
      </div>
    </section>

    <section class="panel" aria-labelledby="interleaving-studio">
      <div class="panel__header">
        <h3 id="interleaving-studio">Interleaving Studio</h3>
        <p>
          Pick at least two strands to weave. Switching forces your brain to connect mechanisms, data, and
          experiments instead of siloing them.
        </p>
      </div>
      <div class="interleaving">
        <div class="interleaving__strands" data-role="interleaving-strands" aria-live="polite"></div>
        <div class="interleaving__controls">
          <p class="hint" data-role="interleaving-selection"></p>
          <button class="btn btn--primary" data-role="build-interleaving">Build Mixed Session</button>
          <div class="interleaving__plan" data-role="interleaving-plan" aria-live="polite"></div>
        </div>
      </div>
      <div class="interleaving__support">
        <section>
          <h4>Ready-made combos</h4>
          <div class="interleaving__combos" data-role="combo-suggestions"></div>
        </section>
        <section>
          <h4>Recent mixes</h4>
          <ul class="interleaving__history" data-role="interleaving-history" aria-live="polite"></ul>
        </section>
      </div>
    </section>

    <section class="panel" aria-labelledby="flashcards">
      <div class="panel__header">
        <h3 id="flashcards">Flashcards &amp; Retrieval Practice</h3>
        <p>
          Review each concept on one side and the full explanation on the other. Add your own cards to
          reteach the story in your own words.
        </p>
      </div>
      <div class="flashcards__header">
        <div class="flashcards__session" data-role="flashcard-session-info"></div>
        <div class="flashcards__filters" role="group" aria-label="Flashcard filter">
          <button type="button" class="btn btn--ghost is-active" data-flashcard-filter="due">
            Due now
          </button>
          <button type="button" class="btn btn--ghost" data-flashcard-filter="new">New cards</button>
          <button type="button" class="btn btn--ghost" data-flashcard-filter="all">All cards</button>
        </div>
      </div>
      <div class="flashcards">
        <article class="flashcard" data-role="flashcard"></article>
        <div class="flashcard__actions">
          <button class="btn btn--ghost" data-role="show-answer">Show Explanation</button>
          <div class="flashcard__grading" role="group" aria-label="How well did you recall?">
            <button class="btn btn--ghost" data-grade="again">Again</button>
            <button class="btn btn--ghost" data-grade="hard">Hard</button>
            <button class="btn btn--ghost" data-grade="good">Good</button>
            <button class="btn btn--ghost" data-grade="easy">Easy</button>
          </div>
        </div>
      </div>
      <form class="flashcards__add" data-role="flashcard-form">
        <h4>Add your own card</h4>
        <label class="form-field">
          <span>Prompt</span>
          <input type="text" data-role="flashcard-prompt" required />
        </label>
        <label class="form-field">
          <span>Explanation</span>
          <textarea data-role="flashcard-answer" required></textarea>
        </label>
        <button class="btn btn--secondary" type="submit">Save Card</button>
      </form>
    </section>

    <section class="panel" aria-labelledby="elaboration-lab">
      <div class="panel__header">
        <h3 id="elaboration-lab">Elaboration Lab</h3>
        <p>
          Practice explaining concepts in full sentences and link them to other topics so you are forced to
          connect facts.
        </p>
      </div>
      <div class="elaboration" data-role="elaboration-prompts"></div>
    </section>

    <section class="panel" aria-labelledby="mnemonic-lab">
      <div class="panel__header">
        <h3 id="mnemonic-lab">Mnemonic &amp; Visual Lab</h3>
        <p>
          Turn mechanisms into images, metaphors, or short memory hooks. Add your own cues and revisit them
          later.
        </p>
      </div>
      <div class="mnemonics">
        <div class="mnemonics__grid" data-role="mnemonic-ideas"></div>
        <form class="mnemonics__form" data-role="mnemonic-form">
          <h4>Create your own cue</h4>
          <label class="form-field">
            <span>Concept</span>
            <input type="text" data-role="mnemonic-concept" required />
          </label>
          <label class="form-field">
            <span>Memory hook</span>
            <textarea data-role="mnemonic-hook" required></textarea>
          </label>
          <button class="btn btn--secondary" type="submit">Save Cue</button>
        </form>
        <section class="mnemonics__saved">
          <h4>Your saved cues</h4>
          <ul data-role="mnemonic-saved"></ul>
        </section>
      </div>
    </section>

    <section class="panel" aria-labelledby="practice-sets">
      <div class="panel__header">
        <h3 id="practice-sets">Continuous Practice Sets</h3>
        <p>
          Attempt questions, check the reasoning, then load a fresh round instantly so you keep testing until
          the story sticks.
        </p>
      </div>
      <div class="practice" data-role="practice-root"></div>
    </section>

    <section class="panel" aria-labelledby="tutor-walkthrough">
      <div class="panel__header">
        <h3 id="tutor-walkthrough">Guided Tutor Walkthrough</h3>
        <p>
          Let the tutor scaffold the problem-solving steps. Add reflections so you capture how the idea fits
          into the bigger picture.
        </p>
      </div>
      <div class="tutor" data-role="tutor-root"></div>
    </section>

    <section class="panel" aria-labelledby="planner">
      <div class="panel__header">
        <h3 id="planner">Study Planner &amp; Reminders</h3>
        <p>
          Log how long you spend, set spacing reminders, and keep track of what you want to revisit.
        </p>
      </div>
      <div class="planner" data-role="planner-root"></div>
    </section>

    <section class="panel" aria-labelledby="synthesis">
      <div class="panel__header">
        <h3 id="synthesis">Synthesis Sandbox</h3>
        <p>
          Combine evidence into new scenarios. Predict, justify, and outline experiments so you can transfer
          the concept to novel contexts.
        </p>
      </div>
      <div class="synthesis" data-role="synthesis-root"></div>
    </section>
  </div>
`;

export default studyTemplate;
