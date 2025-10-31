const STORAGE_KEY = 'ls1a-study-companion-v1';

const clone = (value) =>
  typeof structuredClone === 'function'
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));

const defaultState = {
  uploads: [],
  flashcards: [],
  reflections: [],
};

const unitData = {
  title: 'The Lac Operon and Gene Regulation',
  description:
    'Integrate metabolic signals with DNA-binding proteins to tune transcription of the lac operon in <em>E. coli</em>. Focus on molecular interactions, quantitative regulation, and experimental evidence.',
  objectives: [
    'Predict lac operon expression states using combinations of glucose, lactose, and regulatory mutations.',
    'Explain how LacI, operator DNA, CAP, and cAMP interact structurally to control transcription initiation.',
    'Interpret electrophoretic mobility shift assays and binding curves to infer dissociation constants (K<sub>D</sub>).',
    'Design experiments to distinguish between positive and negative regulation mechanisms.',
  ],
  conceptFlow: {
    title: 'Mechanistic Flow',
    steps: [
      {
        heading: 'Environmental sensing',
        detail:
          'Glucose scarcity elevates cAMP via adenylate cyclase (CyaA). Lactose presence yields allolactose, which allosterically inactivates the LacI repressor.',
      },
      {
        heading: 'DNA binding decisions',
        detail:
          'High-affinity LacI conformers bind the operator and block RNA polymerase. Inducer binding flips LacI to a low-affinity state; CAP–cAMP complexes bind the promoter upstream to recruit RNA polymerase.',
      },
      {
        heading: 'Transcription outcomes',
        detail:
          'Full transcription requires both relief of repression and activation by CAP–cAMP. Operon behaves as an AND gate integrating lactose (inducer) and absence of glucose.',
      },
      {
        heading: 'Metabolic payoff',
        detail:
          'β-galactosidase (lacZ) cleaves lactose, permease (lacY) imports lactose, and transacetylase (lacA) detoxifies byproducts, allowing cells to exploit lactose as carbon.',
      },
    ],
  },
  molecularPlayers: [
    {
      heading: 'Regulatory Proteins',
      bullets: [
        'LacI repressor forms tetramers with two DNA-binding heads recognizing palindromic operator half-sites (O<sub>1</sub>, O<sub>3</sub>).',
        'CAP (catabolite activator protein) dimerizes with cAMP, bending DNA ~90° to present the promoter to RNA polymerase.',
        'Adenylate cyclase (CyaA) synthesizes cAMP when glucose is low; high glucose inhibits CyaA via phosphotransferase system.',
      ],
    },
    {
      heading: 'DNA & Promoters',
      bullets: [
        'lac promoter (P<sub>lac</sub>) features non-consensus -35/-10 elements; inherently weak binding site for RNA polymerase without CAP assistance.',
        'Operator overlaps the promoter; repressor binding occludes RNA polymerase access to transcription start site.',
        'CAP-binding site is upstream (~ -61.5). Cooperative DNA bending aligns RNA polymerase holoenzyme for initiation.',
      ],
    },
    {
      heading: 'Experimental Evidence',
      bullets: [
        'Electrophoretic mobility shift assays (EMSAs) quantify fraction of operator DNA bound by LacI at varying concentrations (sigmoidal binding curve).',
        'Inducers shift LacI equilibrium from high- to low-affinity conformation, increasing K<sub>S</sub> (dissociation constant) as visualized by EMSA.',
        'CAP–cAMP recruitment of RNA polymerase measured via footprinting and transcription assays; AND gate logic inferred by lactose/glucose matrix experiments.',
      ],
    },
  ],
  anchorNotes: [
    'β-galactosidase cleaves lactose to glucose and galactose, also catalyzes isomerization to allolactose (true inducer).',
    'LacI repression is dominant without inducer; lacI mutants express lac genes constitutively even without lactose.',
    'CAP-mediated activation is necessary for high transcription when glucose is absent because promoter -35/-10 sites deviate from consensus.',
    'Binding curve midpoint corresponds to [R] where 50% of operator is occupied; relates to K<sub>D</sub> = [R][O]/[RO].',
    'Lac operon logic approximates AND between lactose presence and absence of glucose (via cAMP), with additional modulation by mutations.',
  ],
  flashcards: [
    {
      prompt: 'Why is the lac promoter considered “weak” without CAP–cAMP?',
      answer:
        'Its -35 and -10 elements deviate from the consensus recognized by σ⁷⁰ RNA polymerase, so polymerase binds poorly unless CAP–cAMP bends the DNA and stabilizes the closed complex.',
    },
    {
      prompt: 'How does allolactose induce the lac operon?',
      answer:
        'Allolactose binds LacI, shifting it to a low-affinity DNA-binding conformation. The operator is released, enabling RNA polymerase to transcribe lacZYA.',
    },
    {
      prompt: 'Describe the AND gate logic governing lac operon expression.',
      answer:
        'Expression requires both lactose (to inactivate LacI) AND low glucose (to generate cAMP for CAP activation). Without either condition, transcription remains low.',
    },
    {
      prompt: 'What does an EMSA band shift tell you about LacI?',
      answer:
        'The position of DNA bands indicates whether operator DNA is free or bound by LacI. Increasing LacI concentration shifts more DNA into slower-moving complexes, revealing binding affinity and K<sub>D</sub>.',
    },
    {
      prompt: 'How would a lacI null mutation affect the operon?',
      answer:
        'Without LacI, the operator cannot be repressed. Basal transcription occurs even without lactose, but maximal expression still requires CAP–cAMP to recruit RNA polymerase efficiently.',
    },
  ],
  practiceQuestions: [
    {
      id: 'q1',
      type: 'mc',
      prompt:
        'You grow <em>E. coli</em> in media containing lactose but abundant glucose. Predict lac operon transcription.',
      options: [
        'High transcription because lactose induces LacI.',
        'Low transcription because CAP–cAMP is absent despite induction.',
        'Constitutive transcription because LacI is inactive.',
        'No transcription because lactose blocks RNA polymerase.',
      ],
      answer: 1,
      explanation:
        'Glucose represses cAMP production, so CAP cannot activate the weak promoter. LacI is inactive, but without CAP recruitment transcription stays low.',
    },
    {
      id: 'q2',
      type: 'mc',
      prompt:
        'An EMSA shows 50% of operator DNA bound when LacI concentration equals 10<sup>-9</sup> M. What does this tell you?',
      options: [
        'The K<sub>D</sub> is ~10<sup>-9</sup> M for LacI-operator binding under these conditions.',
        'LacI binds cooperatively with CAP.',
        'CAP concentration equals LacI concentration.',
        'The operator must be mutated.',
      ],
      answer: 0,
      explanation:
        'At the midpoint of the binding curve, [R] = K<sub>D</sub>. The equation K<sub>D</sub> = [R][O]/[RO] simplifies to [R] when 50% of DNA is bound.',
    },
    {
      id: 'q3',
      type: 'open',
      prompt:
        'Explain how a cyaA null mutation (no adenylate cyclase) changes lac operon expression in lactose-only media.',
      rubric: [
        'No cAMP produced, so CAP remains inactive.',
        'Without CAP–cAMP, RNA polymerase fails to efficiently initiate at the weak promoter.',
        'Result: only basal transcription despite lactose induction.',
      ],
    },
    {
      id: 'q4',
      type: 'mc',
      prompt:
        'Which scenario would produce constitutive high expression regardless of glucose?',
      options: [
        'Mutation in lacO preventing repressor binding and overexpression of CAP.',
        'Mutation in CAP preventing cAMP binding.',
        'lacI gain-of-function that cannot bind allolactose.',
        'Deleting lacZ.',
      ],
      answer: 0,
      explanation:
        'Without repression and with activated CAP, RNA polymerase is continually recruited independent of glucose.',
    },
    {
      id: 'q5',
      type: 'open',
      prompt:
        'Design a quick experiment to test whether a new sugar acts as an inducer of the lac operon.',
      rubric: [
        'Grow cells in minimal media with the sugar as sole carbon source versus control.',
        'Measure β-galactosidase activity or lacZ transcription levels.',
        'Compare to lactose-positive and -negative controls to conclude induction.',
      ],
    },
  ],
  tutorSteps: [
    {
      title: 'Decode the metabolic signals',
      prompt:
        'Walk through what happens to cAMP levels and allolactose production when glucose is low but lactose is present. Why do those changes matter for protein-DNA binding?',
      checkpoints: ['cAMP rises when glucose is low', 'Allolactose binds LacI', 'Binding states change for CAP and LacI'],
      feedback:
        'Glucose scarcity frees adenylate cyclase to make cAMP. Lactose converts to allolactose, which inactivates LacI. CAP–cAMP now binds the promoter, while LacI falls off the operator.',
    },
    {
      title: 'Operator and promoter occupancy',
      prompt:
        'Detail how LacI tetramers recognize operator DNA and why the promoter needs CAP to achieve high transcription rates.',
      checkpoints: ['Palindromic operator half-sites', 'Repressor steric hindrance', 'CAP bending recruits RNA polymerase'],
      feedback:
        'LacI recognizes two palindromic half-sites, looping DNA to block RNA polymerase. CAP–cAMP bends DNA upstream, compensating for the weak -35/-10 elements.',
    },
    {
      title: 'Quantitative interpretation',
      prompt:
        'You observe 50% bound DNA in an EMSA at 1 nM LacI. Explain how this relates to K<sub>D</sub> and what would happen upon adding inducer.',
      checkpoints: ['Midpoint equals K<sub>D</sub>', 'Inducer raises K<sub>D</sub>', 'Binding curve shifts right'],
      feedback:
        'At 50% occupancy, [R] = K<sub>D</sub>. Inducer stabilizes the low-affinity conformation, so K<sub>D</sub> increases and the binding curve shifts, requiring more LacI for the same occupancy.',
    },
    {
      title: 'Systems logic',
      prompt:
        'Summarize the AND gate behavior in terms of transcriptional output when toggling glucose and lactose inputs. Include one mutation scenario.',
      checkpoints: ['Requires lactose AND low glucose', 'Describe at least one mutant', 'Link to RNA polymerase recruitment'],
      feedback:
        'Transcription is high only when lactose is present and glucose is absent, enabling CAP recruitment. A lacI-null mutant bypasses the lactose requirement but still depends on CAP for maximal transcription.',
    },
  ],
};

const state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return clone(defaultState);
    return {
      ...clone(defaultState),
      ...saved,
      uploads: saved.uploads ?? [],
      flashcards: saved.flashcards ?? [],
      reflections: saved.reflections ?? [],
    };
  } catch (error) {
    console.warn('Unable to load saved state', error);
    return clone(defaultState);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderOverview() {
  const objectives = document.getElementById('conceptObjectives');
  const flow = document.getElementById('conceptFlow');
  const players = document.getElementById('molecularPlayers');

  objectives.innerHTML = `
    <h3>Learning Objectives</h3>
    <ul>${unitData.objectives.map((o) => `<li>${o}</li>`).join('')}</ul>
  `;

  flow.innerHTML = `
    <h3>${unitData.conceptFlow.title}</h3>
    <ol class="flow-list">
      ${unitData.conceptFlow.steps
        .map(
          (step) => `
            <li>
              <h4>${step.heading}</h4>
              <p>${step.detail}</p>
            </li>
          `
        )
        .join('')}
    </ol>
    <div class="anchor-notes">
      <h4>Quick Anchor Facts</h4>
      <ul>${unitData.anchorNotes.map((note) => `<li>${note}</li>`).join('')}</ul>
    </div>
  `;

  players.innerHTML = `
    <h3>Molecular Cast</h3>
    ${unitData.molecularPlayers
      .map(
        (group) => `
          <section>
            <h4>${group.heading}</h4>
            <ul>${group.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
          </section>
        `
      )
      .join('')}
  `;
}

function setupUploader() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const list = document.getElementById('uploadedList');

  function addFiles(files) {
    const mapped = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      addedAt: new Date().toISOString(),
    }));
    state.uploads = [...mapped, ...state.uploads];
    persistState();
    renderUploads();
  }

  function renderUploads() {
    if (!state.uploads.length) {
      list.innerHTML = '<li class="uploader__item">No resources yet. Drop files to start curating your study vault.</li>';
      return;
    }

    list.innerHTML = state.uploads
      .map((file) => {
        const sizeKB = Math.round(file.size / 1024);
        const time = new Date(file.addedAt).toLocaleString();
        return `
          <li class="uploader__item">
            <div>
              <strong>${file.name}</strong>
              <div class="meta">${file.type || 'Unknown type'} • ${sizeKB} KB • added ${time}</div>
            </div>
            <button class="btn btn--ghost" data-remove="${file.addedAt}">Remove</button>
          </li>
        `;
      })
      .join('');
  }

  function handleRemove(event) {
    const { target } = event;
    const id = target.dataset.remove;
    if (!id) return;
    state.uploads = state.uploads.filter((item) => item.addedAt !== id);
    persistState();
    renderUploads();
  }

  function setDragState(isActive) {
    dropZone.classList.toggle('dragover', isActive);
  }

  dropZone.addEventListener('dragenter', (event) => {
    event.preventDefault();
    setDragState(true);
  });
  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    setDragState(true);
  });
  dropZone.addEventListener('dragleave', () => setDragState(false));
  dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    setDragState(false);
    if (event.dataTransfer?.files?.length) addFiles(event.dataTransfer.files);
  });
  dropZone.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fileInput.click();
    }
  });

  fileInput.addEventListener('change', (event) => addFiles(event.target.files));
  list.addEventListener('click', handleRemove);

  renderUploads();
}

function setupStudyGuide() {
  const generateBtn = document.getElementById('generateGuide');
  const output = document.getElementById('studyGuideOutput');
  const notesField = document.getElementById('customNotes');
  const goalField = document.getElementById('learningGoal');
  const exportBtn = document.getElementById('exportGuide');

  function buildGuide() {
    const goal = goalField.value.trim();
    const notes = notesField.value.trim();

    const resources = state.uploads
      .map((item) => `• ${item.name} (${new Date(item.addedAt).toLocaleDateString()})`)
      .join('<br/>');

    const studyPlan = `
      <section>
        <h4>Focus Goal</h4>
        <p>${goal || 'Solidify qualitative and quantitative control of the lac operon.'}</p>
      </section>
      <section>
        <h4>Concept Backbone</h4>
        <ol>
          ${unitData.conceptFlow.steps
            .map((step) => `<li><strong>${step.heading}:</strong> ${step.detail}</li>`)
            .join('')}
        </ol>
      </section>
      <section>
        <h4>Mechanistic Deep Dive</h4>
        <ul>
          ${unitData.anchorNotes.map((note) => `<li>${note}</li>`).join('')}
        </ul>
      </section>
      <section>
        <h4>Experimental Evidence to Review</h4>
        <ul>
          <li>Revisit EMSA setup and interpret K<sub>D</sub> using binding curves.</li>
          <li>Sketch CAP–cAMP bend and RNA polymerase recruitment geometry.</li>
          <li>Draw AND gate matrix for glucose/lactose combinations plus one mutation.</li>
        </ul>
      </section>
      <section>
        <h4>Your Resources</h4>
        <p>${resources || 'Add lecture slides or notes to contextualize these checkpoints.'}</p>
      </section>
      <section>
        <h4>Reflection Prompts</h4>
        <ul>
          <li>Explain how inducer binding shifts the LacI conformational equilibrium.</li>
          <li>Quantitatively relate EMSA data to binding constants.</li>
          <li>Predict transcription outcomes for lacI-null, lacO<sup>-</sup>, and cyaA-null mutants.</li>
        </ul>
      </section>
      ${notes ? `<section><h4>Your Notes</h4><p>${notes}</p></section>` : ''}
    `;

    output.innerHTML = studyPlan;
  }

  generateBtn.addEventListener('click', () => {
    buildGuide();
    output.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  exportBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.innerText.trim());
      exportBtn.textContent = 'Copied!';
      setTimeout(() => (exportBtn.textContent = 'Copy to Clipboard'), 2000);
    } catch (error) {
      exportBtn.textContent = 'Copy failed';
      console.error('Clipboard error', error);
    }
  });

  buildGuide();
}

function setupFlashcards() {
  const deck = document.getElementById('flashcardDeck');
  const form = document.getElementById('flashcardForm');
  const promptField = document.getElementById('flashcardPrompt');
  const answerField = document.getElementById('flashcardAnswer');

  function allCards() {
    return [...unitData.flashcards, ...state.flashcards];
  }

  function render() {
    deck.innerHTML = allCards()
      .map(
        (card, index) => `
          <article class="flashcard" data-index="${index}">
            <div class="flashcard__inner">
              <div class="flashcard__front">
                <h4>Prompt</h4>
                <p>${card.prompt}</p>
              </div>
              <div class="flashcard__back">
                <h4>Explanation</h4>
                <p>${card.answer}</p>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  }

  deck.addEventListener('click', (event) => {
    const card = event.target.closest('.flashcard');
    if (!card) return;
    card.classList.toggle('is-flipped');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = promptField.value.trim();
    const answer = answerField.value.trim();
    if (!prompt || !answer) return;
    state.flashcards.push({ prompt, answer });
    persistState();
    form.reset();
    render();
  });

  render();
}

function setupPractice() {
  const form = document.getElementById('practiceForm');
  const results = document.getElementById('practiceResults');

  form.innerHTML = unitData.practiceQuestions
    .map((question, index) => {
      if (question.type === 'mc') {
        return `
          <fieldset class="practice__question">
            <legend><h3>Q${index + 1}. ${question.prompt}</h3></legend>
            <div class="practice__options">
              ${question.options
                .map(
                  (option, optIndex) => `
                    <label>
                      <input type="radio" name="${question.id}" value="${optIndex}" required />
                      <span>${option}</span>
                    </label>
                  `
                )
                .join('')}
            </div>
          </fieldset>
        `;
      }

      return `
        <fieldset class="practice__question">
          <legend><h3>Q${index + 1}. ${question.prompt}</h3></legend>
          <textarea name="${question.id}" placeholder="Explain your reasoning..." required></textarea>
        </fieldset>
      `;
    })
    .join('') +
    '<button class="btn btn--primary" type="submit">Check Answers</button>';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let correct = 0;
    let total = 0;
    const feedback = [];

    unitData.practiceQuestions.forEach((question) => {
      const response = formData.get(question.id);
      if (question.type === 'mc') {
        total += 1;
        const isCorrect = Number(response) === question.answer;
        if (isCorrect) correct += 1;
        feedback.push(
          `<p><strong>${question.prompt}</strong><br>${
            isCorrect ? '✅ Correct.' : '❌ Not quite.'
          } ${question.explanation}</p>`
        );
      } else {
        const rubricHits = question.rubric.filter((point) =>
          (response || '').toLowerCase().includes(point.split(' ')[0].toLowerCase())
        ).length;
        feedback.push(
          `<p><strong>${question.prompt}</strong><br>Look for: ${question.rubric
            .map((point) => `<span class="chip">${point}</span>`)
            .join(' ')}<br>You addressed <strong>${rubricHits}</strong> of ${question.rubric.length} key ideas.</p>`
        );
      }
    });

    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    results.classList.toggle('practice__results--success', accuracy >= 75);
    results.classList.toggle('practice__results--danger', accuracy < 50);
    results.innerHTML = `
      <p>You nailed ${correct} / ${total} quantitative questions (${accuracy}%).</p>
      <div class="practice__feedback">${feedback.join('')}</div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function setupTutor() {
  const stepList = document.getElementById('tutorSteps');
  const title = document.getElementById('currentStepTitle');
  const prompt = document.getElementById('currentStepPrompt');
  const response = document.getElementById('tutorResponse');
  const feedback = document.getElementById('tutorFeedback');
  const submit = document.getElementById('submitReflection');
  const startBtn = document.getElementById('startTutor');

  let currentIndex = 0;

  function renderList() {
    stepList.innerHTML = unitData.tutorSteps
      .map(
        (step, index) => `
          <li class="${index === currentIndex ? 'is-active' : ''}">
            <strong>${step.title}</strong>
            <span>${step.checkpoints.length} checkpoints</span>
          </li>
        `
      )
      .join('');
  }

  function showStep(index) {
    currentIndex = index;
    const step = unitData.tutorSteps[currentIndex];
    title.innerHTML = step.title;
    prompt.innerHTML = step.prompt;
    response.value = '';
    feedback.innerHTML = '';
    renderList();
  }

  function evaluate() {
    const step = unitData.tutorSteps[currentIndex];
    const userText = response.value.trim().toLowerCase();
    if (!userText) {
      feedback.innerHTML = '<p>Please articulate your reasoning before moving on.</p>';
      return;
    }

    const hits = step.checkpoints.filter((checkpoint) =>
      checkpoint
        .toLowerCase()
        .split(/\s+/)
        .some((word) => userText.includes(word))
    ).length;

    state.reflections.push({
      step: step.title,
      timestamp: Date.now(),
      response: response.value,
      hits,
    });
    persistState();

    const success = hits >= Math.max(1, Math.ceil(step.checkpoints.length * 0.6));
    feedback.innerHTML = `
      <p>${success ? 'Great reasoning! ✅' : 'Nice start — refine further.'}</p>
      <p>${step.feedback}</p>
    `;

    if (currentIndex < unitData.tutorSteps.length - 1) {
      setTimeout(() => showStep(currentIndex + 1), 800);
    } else {
      feedback.innerHTML += '<p>You completed the guided sequence. Revisit any step in the list to iterate.</p>';
    }
  }

  submit.addEventListener('click', evaluate);
  startBtn.addEventListener('click', () => {
    showStep(0);
    document.querySelector('#tutor-mode').scrollIntoView({ behavior: 'smooth' });
  });

  stepList.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (!item) return;
    const index = Array.from(stepList.children).indexOf(item);
    if (index >= 0) showStep(index);
  });

  showStep(0);
}

function setupSynthesis() {
  const glucose = document.getElementById('glucoseLevel');
  const lactose = document.getElementById('lactoseLevel');
  const mutation = document.getElementById('mutations');
  const output = document.getElementById('synthesisOutput');

  function computeOutcome(glucoseValue, lactoseValue, mutationValue) {
    const glucoseLow = glucoseValue < 40;
    const lactosePresent = lactoseValue > 30;

    let repression = lactosePresent ? 'relieved' : 'active';
    let activation = glucoseLow ? 'enabled' : 'off';

    switch (mutationValue) {
      case 'lacI-null':
        repression = 'absent';
        break;
      case 'lacO-operator':
        repression = 'disabled (operator cannot bind)';
        break;
      case 'lacP-weak':
        activation = 'limited even with CAP';
        break;
      case 'cyaA-null':
        activation = 'off (no cAMP)';
        break;
      default:
        break;
    }

    const highExpression =
      (repression === 'relieved' || repression === 'absent' ||
        repression.startsWith('disabled')) && activation === 'enabled';

    return {
      repression,
      activation,
      predicted:
        mutationValue === 'lacP-weak'
          ? 'Basal to moderate transcription; promoter mutation limits output.'
          : mutationValue === 'cyaA-null'
          ? 'Only basal transcription despite lactose because CAP cannot activate.'
          : mutationValue === 'lacI-null' || mutationValue === 'lacO-operator'
          ? activation === 'enabled'
            ? 'High transcription regardless of lactose input.'
            : 'Medium transcription because repression is gone but CAP is inactive.'
          : highExpression
          ? 'High transcription — both signals favor expression.'
          : lactosePresent
          ? 'Basal transcription (induced but no CAP recruitment).'
          : 'Very low transcription (repressed and no activation).',
    };
  }

  function render() {
    const status = computeOutcome(
      Number(glucose.value),
      Number(lactose.value),
      mutation.value
    );

    output.innerHTML = `
      <p><strong>Repressor state:</strong> ${status.repression}</p>
      <p><strong>Activator state:</strong> ${status.activation}</p>
      <p><strong>Predicted transcription:</strong> ${status.predicted}</p>
      <p class="hint">Tip: Try setting glucose to 0 and lactose to 100 to mimic diauxic shift experiments.</p>
    `;
  }

  glucose.addEventListener('input', render);
  lactose.addEventListener('input', render);
  mutation.addEventListener('change', render);

  render();
}

function init() {
  renderOverview();
  setupUploader();
  setupStudyGuide();
  setupFlashcards();
  setupPractice();
  setupTutor();
  setupSynthesis();
}

document.addEventListener('DOMContentLoaded', init);
