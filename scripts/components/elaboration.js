function initElaboration(unit) {
  const promptSelect = document.getElementById('elaborationSelect');
  const rollBtn = document.getElementById('elaborationRoll');
  const promptDetails = document.getElementById('elaborationDetails');
  const followUpList = document.getElementById('elaborationFollowUps');
  const reflectionBox = document.getElementById('elaborationReflection');

  if (!promptSelect || !rollBtn || !promptDetails || !followUpList || !reflectionBox) {
    return;
  }

  const prompts = unit.elaborativePrompts ?? [];

  function renderSelect() {
    promptSelect.innerHTML = prompts
      .map((prompt) => `<option value="${prompt.id}">${prompt.question}</option>`)
      .join('');
  }

  function displayPrompt(prompt) {
    promptDetails.textContent = prompt.question;
    followUpList.innerHTML = prompt.followUps
      .map((item) => `<li>${item}</li>`)
      .join('');
    reflectionBox.placeholder = 'Write your explanation here. Aim for 3-4 sentences linking concepts together.';
  }

  function currentPrompt() {
    const id = promptSelect.value;
    return prompts.find((prompt) => prompt.id === id) ?? prompts[0];
  }

  promptSelect.addEventListener('change', () => {
    const prompt = currentPrompt();
    if (prompt) displayPrompt(prompt);
  });

  rollBtn.addEventListener('click', () => {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    promptSelect.value = random.id;
    displayPrompt(random);
  });

  if (prompts.length) {
    renderSelect();
    displayPrompt(prompts[0]);
  }
}

export default initElaboration;
