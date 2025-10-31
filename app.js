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
    'Step through how <em>E. coli</em> decides to make the lac enzymes. We start with the sugars outside the cell, follow the signals to the proteins, and end with the RNA polymerase decision.',
  objectives: [
    'Identify what glucose and lactose each do to the cell before any genes change.',
    'Track, in order, how LacI, the operator DNA, CAP, and cAMP change shape or position after the sugar signals.',
    'Use a binding curve or EMSA image to read off a K<sub>D</sub> and say what that tells us in words.',
    'Propose one simple test (with controls) that separates negative control by LacI from positive control by CAP.',
  ],
  conceptFlow: {
    title: 'Mechanistic Flow',
    steps: [
      {
        heading: 'Environmental sensing',
        detail:
          'Step 1: If glucose is low, adenylate cyclase (CyaA) finally turns on and makes cAMP. Step 2: If lactose enters, the side reaction makes allolactose, which can slip onto LacI.',
      },
      {
        heading: 'DNA binding decisions',
        detail:
          'Start with LacI gripping the operator so RNA polymerase cannot sit down. When allolactose is present, LacI loosens its grip. At the same time CAP only sticks to DNA when cAMP is there, so the promoter gets a CAP helper.',
      },
      {
        heading: 'Transcription outcomes',
        detail:
          'Put the two earlier steps together. RNA polymerase makes a lot of RNA only when LacI has let go (needs lactose) AND CAP–cAMP is helping (needs low glucose). Missing either input keeps transcription low.',
      },
      {
        heading: 'Metabolic payoff',
        detail:
          'Once the RNA is made, the lacZYA proteins appear. LacZ splits lactose and also makes allolactose, LacY lets more lactose in, and LacA clears toxic leftovers. The loop feeds back so the cell keeps using lactose well.',
      },
    ],
  },
  molecularPlayers: [
    {
      heading: 'Regulatory Proteins',
      bullets: [
        'LacI is a tetramer. Picture two DNA hands holding the operator DNA; two other hands link to other operators to loop DNA.',
        'CAP lives as a dimer. It only locks into its active shape after cAMP slides into each pocket, then it bends DNA so RNA polymerase can sit correctly.',
        'Adenylate cyclase (CyaA) is the enzyme that makes cAMP, but the glucose transport system keeps it quiet whenever glucose is plentiful.',
      ],
    },
    {
      heading: 'DNA & Promoters',
      bullets: [
        'The lac promoter (P<sub>lac</sub>) has -35 and -10 boxes that are imperfect, so RNA polymerase alone binds weakly.',
        'The operator sits on top of the promoter. When LacI is in place, the polymerase literally has no room to start.',
        'The CAP site is just upstream (around -61.5). CAP grabs that site, bends the DNA toward the promoter, and makes a landing pad.',
      ],
    },
    {
      heading: 'Experimental Evidence',
      bullets: [
        'Electrophoretic mobility shift assays (EMSAs) show two bands: free DNA and DNA bound to LacI. As you add more LacI, more DNA moves slowly, letting you read the binding curve.',
        'Adding allolactose or IPTG makes the bound band fade at the same LacI level. That shift means LacI lets go more easily, so the measured K<sub>D</sub> gets larger.',
        'CAP–cAMP footprints protect DNA upstream of the promoter and boost RNA counts in transcription assays. A grid of glucose versus lactose conditions traces out the AND logic.',
      ],
    },
  ],
  anchorNotes: [
    'LacZ has two jobs: cut lactose into sugars we can burn and rearrange a little bit of it into allolactose, the signal molecule.',
    'Without any inducer, LacI sits on the DNA almost all the time. A lacI<sup>-</sup> mutant loses this brake and the genes stay on.',
    'Because the promoter is weak, even lactose alone cannot give high expression. CAP–cAMP is the push that raises transcription when glucose is scarce.',
    'In an EMSA, the point where half the DNA is shifted equals the K<sub>D</sub>. Use K<sub>D</sub> = [R][O]/[RO] and plug in the concentrations you set.',
    'Think of the operon as an AND gate: lactose (induces) AND low glucose (activates CAP). Mutations tweak the gate by removing or bypassing an input.',
  ],
  flashcards: [
    {
      prompt: 'Why is the lac promoter considered “weak” without CAP–cAMP?',
      answer:
        'The -35 and -10 regions do not match the ideal σ⁷⁰ sequence, so RNA polymerase lets go quickly. CAP–cAMP bends the DNA and holds the polymerase in place long enough to start.',
    },
    {
      prompt: 'How does allolactose induce the lac operon?',
      answer:
        'Allolactose fits into LacI and changes its shape. The DNA-binding hands no longer match the operator, so LacI slides off and RNA polymerase can sit down.',
    },
    {
      prompt: 'Describe the AND gate logic governing lac operon expression.',
      answer:
        'Picture two switches. Switch one is lactose turning LacI off. Switch two is low glucose making CAP–cAMP. Only when both switches are on do we see high mRNA.',
    },
    {
      prompt: 'What does an EMSA band shift tell you about LacI?',
      answer:
        'On the gel, free DNA runs fast and bound DNA runs slow. Watching the slow band grow as you add LacI tells you how tightly LacI sticks and lets you read the K<sub>D</sub>.',
    },
    {
      prompt: 'How would a lacI null mutation affect the operon?',
      answer:
        'If LacI is gone, nothing blocks the operator. The genes make RNA all the time, but you still need CAP–cAMP to reach the very highest levels when glucose is missing.',
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
        'Plenty of glucose keeps cAMP low, so CAP never helps the weak promoter. Lactose does turn LacI off, but without CAP the polymerase still slips off and transcription stays low.',
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
        'Half of the DNA being shifted means [RO] = [O]. Plug those into K<sub>D</sub> = [R][O]/[RO] and you get K<sub>D</sub> = [R]. The [R] we used was 10<sup>-9</sup> M, so that is the K<sub>D</sub>.',
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
        'Breaking the operator removes the LacI brake and extra CAP keeps the helper switch on. Even with glucose around, polymerase always finds the promoter and keeps transcribing.',
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
        'Tell the story in order: low glucose changes cAMP, lactose changes allolactose. Explain why each change matters for the proteins touching DNA.',
      checkpoints: ['cAMP rises when glucose is low', 'Allolactose binds LacI', 'Binding states change for CAP and LacI'],
      feedback:
        'When glucose is low, CyaA makes cAMP and CAP grabs it so the CAP dimer can sit on DNA. Lactose turns into allolactose, which loosens LacI so it slips off the operator. Those shifts open the promoter for polymerase.',
    },
    {
      title: 'Operator and promoter occupancy',
      prompt:
        'Describe what LacI is doing on the operator and what happens to the promoter once CAP arrives. Keep the focus on the order of events.',
      checkpoints: ['Palindromic operator half-sites', 'Repressor steric hindrance', 'CAP bending recruits RNA polymerase'],
      feedback:
        'LacI uses its paired heads to hold the palindromic operator and can even loop the DNA, leaving no space for polymerase. When CAP–cAMP binds upstream, it bends the DNA toward the promoter so the weak -35/-10 boxes finally line up for polymerase.',
    },
    {
      title: 'Quantitative interpretation',
      prompt:
        'You see half the DNA shifted in an EMSA at 1 nM LacI. Explain how that number ties to K<sub>D</sub>, then say how adding inducer would change the curve.',
      checkpoints: ['Midpoint equals K<sub>D</sub>', 'Inducer raises K<sub>D</sub>', 'Binding curve shifts right'],
      feedback:
        'Fifty percent bound means [RO] = [O], so K<sub>D</sub> equals the free LacI concentration, here 1 nM. Adding inducer pushes LacI into the weak-binding shape, so the K<sub>D</sub> grows and the whole curve slides rightward.',
    },
    {
      title: 'Systems logic',
      prompt:
        'Lay out a small table: with or without lactose, with or without glucose. State when RNA is high or low and add one mutation example.',
      checkpoints: ['Requires lactose AND low glucose', 'Describe at least one mutant', 'Link to RNA polymerase recruitment'],
      feedback:
        'Only the box with lactose present and glucose absent gives high RNA because both LacI is off and CAP is on. A lacI-null mutant keeps RNA medium even with glucose present, but high output still needs CAP in low glucose.',
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
