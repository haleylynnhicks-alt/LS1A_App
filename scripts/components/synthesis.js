<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
function initSynthesis(unit, root) {
  if (!root) return;

  const glucose = root.querySelector('[data-role="glucose-level"]');
  const lactose = root.querySelector('[data-role="lactose-level"]');
  const mutation = root.querySelector('[data-role="mutation-select"]');
  const output = root.querySelector('[data-role="synthesis-output"]');
<<<<<<< HEAD
=======
=======
function initSynthesis() {
  const glucose = document.getElementById('glucoseLevel');
  const lactose = document.getElementById('lactoseLevel');
  const mutation = document.getElementById('mutations');
  const output = document.getElementById('synthesisOutput');
>>>>>>> main
>>>>>>> main

  if (!glucose || !lactose || !mutation || !output) {
    return;
  }

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
<<<<<<< HEAD
      (repression === 'relieved' || repression === 'absent' || repression.startsWith('disabled')) &&
      activation === 'enabled';
=======
<<<<<<< HEAD
      (repression === 'relieved' || repression === 'absent' || repression.startsWith('disabled')) &&
      activation === 'enabled';
=======
      (repression === 'relieved' || repression === 'absent' ||
        repression.startsWith('disabled')) && activation === 'enabled';
>>>>>>> main
>>>>>>> main

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
<<<<<<< HEAD
    const status = computeOutcome(Number(glucose.value), Number(lactose.value), mutation.value);
=======
<<<<<<< HEAD
    const status = computeOutcome(Number(glucose.value), Number(lactose.value), mutation.value);
=======
    const status = computeOutcome(
      Number(glucose.value),
      Number(lactose.value),
      mutation.value
    );
>>>>>>> main
>>>>>>> main

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

export default initSynthesis;
