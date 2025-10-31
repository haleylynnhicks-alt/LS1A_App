function initStudyGuide(unit, root, { getUploads }) {
  if (!root) return;

  const generateBtn = root.querySelector('[data-role="generate-guide"]');
  const output = root.querySelector('[data-role="study-guide-output"]');
  const notesField = root.querySelector('[data-role="custom-notes"]');
  const goalField = root.querySelector('[data-role="learning-goal"]');
  const exportBtn = root.querySelector('[data-role="export-guide"]');

  if (!generateBtn || !output || !notesField || !goalField || !exportBtn) {
    return;
  }

  function buildGuide() {
    const goal = goalField.value.trim();
    const notes = notesField.value.trim();

    const uploads = typeof getUploads === 'function' ? getUploads() : [];
    const resources = uploads
      .map((item) => `• ${item.name} (${new Date(item.addedAt).toLocaleDateString()})`)
      .join('<br/>');

    const combos = unit.interleaving?.comboTemplates ?? [];
    const prompts = unit.elaborativePrompts ?? [];
    const mnemonic = unit.mnemonicDevices?.keyTerms?.[0];

    const studyPlan = `
      <section>
        <h4>Focus Goal</h4>
        <p>${goal || unit.defaultGoal || 'Solidify the key story arc for this chapter.'}</p>
      </section>
      <section>
        <h4>Concept Backbone</h4>
        <ol>
          ${(unit.conceptFlow?.steps ?? [])
            .map((step) => `<li><strong>${step.heading}:</strong> ${step.detail}</li>`)
            .join('')}
        </ol>
      </section>
      <section>
        <h4>Mechanistic Deep Dive</h4>
        <ul>
          ${(unit.anchorNotes ?? []).map((note) => `<li>${note}</li>`).join('')}
        </ul>
      </section>
      ${(unit.studyEvidence ?? [])
        .map(
          (item) => `
            <section>
              <h4>${item.heading}</h4>
              <p>${item.detail}</p>
            </section>
          `
        )
        .join('')}
      ${
        combos.length
          ? `<section>
              <h4>Interleaving Circuit</h4>
              <p>Alternate between these strands in 20-minute bursts:</p>
              <ul>
                ${combos
                  .map(
                    (combo) => `
                      <li>
                        <strong>${combo.title}:</strong> ${combo.rationale}
                        <br/><em>Self-explain:</em> ${combo.selfExplanation}
                      </li>
                    `
                  )
                  .join('')}
              </ul>
            </section>`
          : ''
      }
      ${
        prompts.length
          ? `<section>
              <h4>Elaborative Questions</h4>
              <ol>
                ${prompts
                  .map(
                    (prompt) => `
                      <li>
                        <p>${prompt.question}</p>
                        <ul>${prompt.followUps.map((item) => `<li>${item}</li>`).join('')}</ul>
                      </li>
                    `
                  )
                  .join('')}
              </ol>
            </section>`
          : ''
      }
      ${
        mnemonic
          ? `<section>
              <h4>Mnemonic to Rehearse</h4>
              <p><strong>${mnemonic.term}</strong> — ${mnemonic.device}</p>
              <p class="hint">${mnemonic.usage}</p>
            </section>`
          : ''
      }
      <section>
        <h4>Your Resources</h4>
        <p>${resources || 'Add lecture slides or notes to contextualize these checkpoints.'}</p>
      </section>
      <section>
        <h4>Reflection Prompts</h4>
        <ul>
          ${(unit.reflectionPrompts ?? []).map((prompt) => `<li>${prompt}</li>`).join('')}
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
