function initStudyGuide(unit, getUploads) {
  const generateBtn = document.getElementById('generateGuide');
  const output = document.getElementById('studyGuideOutput');
  const notesField = document.getElementById('customNotes');
  const goalField = document.getElementById('learningGoal');
  const exportBtn = document.getElementById('exportGuide');

  if (!generateBtn || !output || !notesField || !goalField || !exportBtn) {
    return;
  }

  function buildGuide() {
    const goal = goalField.value.trim();
    const notes = notesField.value.trim();

    const resources = getUploads()
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
          ${unit.conceptFlow.steps
            .map((step) => `<li><strong>${step.heading}:</strong> ${step.detail}</li>`)
            .join('')}
        </ol>
      </section>
      <section>
        <h4>Mechanistic Deep Dive</h4>
        <ul>
          ${unit.anchorNotes.map((note) => `<li>${note}</li>`).join('')}
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

export default initStudyGuide;
