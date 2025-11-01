function renderOverview(unit) {
  const objectives = document.getElementById('conceptObjectives');
  const flow = document.getElementById('conceptFlow');
  const players = document.getElementById('molecularPlayers');

  if (!objectives || !flow || !players) {
    return;
  }

  objectives.innerHTML = `
    <h3>Learning Objectives</h3>
    <ul>${unit.objectives.map((objective) => `<li>${objective}</li>`).join('')}</ul>
  `;

  flow.innerHTML = `
    <h3>${unit.conceptFlow.title}</h3>
    <ol class="flow-list">
      ${unit.conceptFlow.steps
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
      <ul>${unit.anchorNotes.map((note) => `<li>${note}</li>`).join('')}</ul>
    </div>
  `;

  players.innerHTML = `
    <h3>Molecular Cast</h3>
    ${unit.molecularPlayers
      .map(
        (group) => `
          <section>
            <h4>${group.heading}</h4>
            <ul>${group.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
          </section>
        `
      )
      .join('')}
  `;
}

export default renderOverview;
