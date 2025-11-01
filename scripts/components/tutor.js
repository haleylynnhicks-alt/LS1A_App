<<<<<<< HEAD
function initTutor(unit, root, { addReflection }) {
  if (!root) return;

  const stepList = root.querySelector('[data-role="tutor-steps"]');
  const title = root.querySelector('[data-role="tutor-step-title"]');
  const prompt = root.querySelector('[data-role="tutor-step-prompt"]');
  const response = root.querySelector('[data-role="tutor-response"]');
  const feedback = root.querySelector('[data-role="tutor-feedback"]');
  const submit = root.querySelector('[data-role="tutor-submit"]');
  const startBtn = root.querySelector('[data-role="start-tutor"]');
=======
function initTutor(unit, { addReflection }) {
  const stepList = document.getElementById('tutorSteps');
  const title = document.getElementById('currentStepTitle');
  const prompt = document.getElementById('currentStepPrompt');
  const response = document.getElementById('tutorResponse');
  const feedback = document.getElementById('tutorFeedback');
  const submit = document.getElementById('submitReflection');
  const startBtn = document.getElementById('startTutor');
>>>>>>> main

  if (!stepList || !title || !prompt || !response || !feedback || !submit || !startBtn) {
    return;
  }

  let currentIndex = 0;
  const elaborativePool = unit.elaborativePrompts ?? [];

  function renderList() {
    stepList.innerHTML = unit.tutorSteps
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
    const step = unit.tutorSteps[currentIndex];
    title.innerHTML = step.title;
    prompt.innerHTML = step.prompt;
    response.value = '';
    feedback.innerHTML = '';
    renderList();
  }

  function evaluate() {
    const step = unit.tutorSteps[currentIndex];
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

<<<<<<< HEAD
    if (typeof addReflection === 'function') {
      addReflection({
        step: step.title,
        timestamp: Date.now(),
        response: response.value,
        hits,
      });
    }
=======
    addReflection({
      step: step.title,
      timestamp: Date.now(),
      response: response.value,
      hits,
    });
>>>>>>> main

    const success = hits >= Math.max(1, Math.ceil(step.checkpoints.length * 0.6));
    const elaborativePrompt =
      elaborativePool[Math.floor(Math.random() * elaborativePool.length)] ?? null;
    feedback.innerHTML = `
      <p>${success ? 'Great reasoning! ✅' : 'Nice start — refine further.'}</p>
      <p>${step.feedback}</p>
      ${
        elaborativePrompt
          ? `<div class="tutor__elaboration">
                <h4>Extend it:</h4>
                <p>${elaborativePrompt.question}</p>
                <ul>${elaborativePrompt.followUps.map((item) => `<li>${item}</li>`).join('')}</ul>
             </div>`
          : ''
      }
    `;

    if (currentIndex < unit.tutorSteps.length - 1) {
      setTimeout(() => showStep(currentIndex + 1), 800);
    } else {
      feedback.innerHTML += '<p>You completed the guided sequence. Revisit any step in the list to iterate.</p>';
    }
  }

  submit.addEventListener('click', evaluate);

  startBtn.addEventListener('click', () => {
    showStep(0);
<<<<<<< HEAD
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  stepList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const item = target.closest('li');
=======
    document.querySelector('#tutor-mode')?.scrollIntoView({ behavior: 'smooth' });
  });

  stepList.addEventListener('click', (event) => {
    const item = event.target.closest('li');
>>>>>>> main
    if (!item) return;
    const index = Array.from(stepList.children).indexOf(item);
    if (index >= 0) showStep(index);
  });

  showStep(0);
}

export default initTutor;
