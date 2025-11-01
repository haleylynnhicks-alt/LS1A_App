import { shuffle } from '../utils/formatters.js';

function initInterleaving(unit, root, { recordInterleavingSession, getInterleavingHistory }) {
  if (!root) return;

  const strandContainer = root.querySelector('[data-role="interleaving-strands"]');
  const generateBtn = root.querySelector('[data-role="build-interleaving"]');
  const planOutput = root.querySelector('[data-role="interleaving-plan"]');
  const comboList = root.querySelector('[data-role="combo-suggestions"]');
  const historyList = root.querySelector('[data-role="interleaving-history"]');
  const selectionInfo = root.querySelector('[data-role="interleaving-selection"]');

  if (!strandContainer || !generateBtn || !planOutput || !comboList || !historyList) {
    return;
  }

  const strands = unit.interleaving?.strands ?? [];
  const combos = unit.interleaving?.comboTemplates ?? [];

  function renderStrands() {
    strandContainer.innerHTML = strands
      .map(
        (strand) => `
          <label class="strand-card">
            <input type="checkbox" value="${strand.id}" data-strand />
            <div class="strand-card__content">
              <h3>${strand.title}</h3>
              <p>${strand.description}</p>
              <ul class="strand-card__checks">
                ${strand.quickChecks.map((check) => `<li>${check}</li>`).join('')}
              </ul>
              <p class="hint">Self-explain: ${strand.elaboration}</p>
              <p class="hint">Bridge idea: ${strand.bridgeIdeas.join('; ')}</p>
            </div>
          </label>
        `
      )
      .join('');
  }

  function renderCombos() {
    comboList.innerHTML = combos
      .map(
        (combo) => `
          <article class="combo-card">
            <h3>${combo.title}</h3>
            <p>${combo.rationale}</p>
            <p class="hint">Self-explain after each swap: ${combo.selfExplanation}</p>
          </article>
        `
      )
      .join('');
  }

  function selectedStrands() {
    return Array.from(strandContainer.querySelectorAll('[data-strand]:checked')).map((input) =>
      strands.find((strand) => strand.id === input.value)
    );
  }

  function updateSelectionInfo() {
    if (!selectionInfo) return;
    const chosen = selectedStrands().filter(Boolean);
    const count = chosen.length;
    selectionInfo.textContent = count
      ? `Mixing ${count} strand${count === 1 ? '' : 's'} — aim for at least two.`
      : 'Choose at least two strands to unlock an interleaved circuit.';
  }

  function buildSteps(chosen) {
    const order = shuffle(chosen);
    const steps = [];
    const totalSteps = Math.max(6, chosen.length * 2);
    for (let i = 0; i < totalSteps; i += 1) {
      const strand = order[i % order.length];
      const quick = strand.quickChecks[i % strand.quickChecks.length];
      steps.push({
        strandId: strand.id,
        title: strand.title,
        quick,
        elaboration: strand.elaboration,
      });
    }
    return steps;
  }

  function renderPlan(steps) {
    planOutput.innerHTML = `
      <ol class="interleaving-plan">
        ${steps
          .map(
            (step, index) => `
              <li>
                <header>
                  <span class="badge">Step ${index + 1}</span>
                  <strong>${step.title}</strong>
                </header>
                <p>${step.quick}</p>
                <p class="hint">Now elaborate: ${step.elaboration}</p>
                <p class="hint hint--rest">After this step, take a 2-minute reset before switching.</p>
              </li>
            `
          )
          .join('')}
      </ol>
    `;
    planOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function renderHistory(items) {
    if (!items.length) {
      historyList.innerHTML = '<li class="empty">Your interleaving history will appear here.</li>';
      return;
    }

    historyList.innerHTML = items
      .map((item) => {
        const time = new Date(item.timestamp ?? item.loggedAt ?? Date.now());
        const names = item.strands
          .map((strandId) => strands.find((strand) => strand.id === strandId)?.title || strandId)
          .join(' × ');
        return `<li><strong>${names}</strong><span>${time.toLocaleString()}</span></li>`;
      })
      .join('');
  }

  generateBtn.addEventListener('click', () => {
    const chosen = selectedStrands().filter(Boolean);
    if (chosen.length < 2) {
      planOutput.innerHTML =
        '<p class="empty">Pick at least two strands so your brain practises switching and connecting ideas.</p>';
      return;
    }
    const steps = buildSteps(chosen);
    renderPlan(steps);
    if (typeof recordInterleavingSession === 'function' && typeof getInterleavingHistory === 'function') {
      const history = recordInterleavingSession({
        strands: chosen.map((strand) => strand.id),
        steps: steps.length,
        timestamp: Date.now(),
      });
      renderHistory(history);
    }
  });

  strandContainer.addEventListener('change', updateSelectionInfo);

  renderStrands();
  renderCombos();
  updateSelectionInfo();
  if (typeof getInterleavingHistory === 'function') {
    renderHistory(getInterleavingHistory());
  }
}

export default initInterleaving;
