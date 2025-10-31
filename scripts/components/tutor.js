function initTutor(unit, { addReflection }) {
  const stepList = document.getElementById('tutorSteps');
  const title = document.getElementById('currentStepTitle');
  const prompt = document.getElementById('currentStepPrompt');
  const response = document.getElementById('tutorResponse');
  const feedback = document.getElementById('tutorFeedback');
  const submit = document.getElementById('submitReflection');
  const startBtn = document.getElementById('startTutor');

  if (!stepList || !title || !prompt || !response || !feedback || !submit || !startBtn) {
    return;
  }

  let currentIndex = 0;

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

    addReflection({
      step: step.title,
      timestamp: Date.now(),
      response: response.value,
      hits,
    });

    const success = hits >= Math.max(1, Math.ceil(step.checkpoints.length * 0.6));
    feedback.innerHTML = `
      <p>${success ? 'Great reasoning! ✅' : 'Nice start — refine further.'}</p>
      <p>${step.feedback}</p>
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
    document.querySelector('#tutor-mode')?.scrollIntoView({ behavior: 'smooth' });
  });

  stepList.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (!item) return;
    const index = Array.from(stepList.children).indexOf(item);
    if (index >= 0) showStep(index);
  });

  showStep(0);
}

export default initTutor;
