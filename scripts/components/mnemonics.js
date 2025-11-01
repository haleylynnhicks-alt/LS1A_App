<<<<<<< HEAD
function initMnemonics(unit, root, { addCustomMnemonic, getCustomMnemonics }) {
  if (!root) return;

  const keyTermList = root.querySelector('[data-role="mnemonic-key-terms"]');
  const imageryList = root.querySelector('[data-role="mnemonic-imagery"]');
  const form = root.querySelector('[data-role="mnemonic-form"]');
  const termField = root.querySelector('[data-role="mnemonic-term"]');
  const phraseField = root.querySelector('[data-role="mnemonic-phrase"]');
  const customList = root.querySelector('[data-role="mnemonic-custom-list"]');
  const conceptMapCanvas = root.querySelector('[data-role="concept-map-canvas"]');
  const conceptMapDetails = root.querySelector('[data-role="concept-map-details"]');
=======
function initMnemonics(unit, { addCustomMnemonic, getCustomMnemonics }) {
  const keyTermList = document.getElementById('mnemonicKeyTerms');
  const imageryList = document.getElementById('mnemonicImagery');
  const form = document.getElementById('mnemonicForm');
  const termField = document.getElementById('mnemonicTerm');
  const phraseField = document.getElementById('mnemonicPhrase');
  const customList = document.getElementById('mnemonicCustomList');
  const conceptMapCanvas = document.getElementById('conceptMapCanvas');
  const conceptMapDetails = document.getElementById('conceptMapDetails');
>>>>>>> main

  if (
    !keyTermList ||
    !imageryList ||
    !form ||
    !termField ||
    !phraseField ||
    !customList ||
    !conceptMapCanvas ||
    !conceptMapDetails
  ) {
    return;
  }

  const { keyTerms = [], imagery = [] } = unit.mnemonicDevices ?? {};
  const conceptMap = unit.visualConceptMap ?? { nodes: [], edges: [] };

  function renderKeyTerms() {
    keyTermList.innerHTML = keyTerms
      .map(
        (item) => `
          <article class="mnemonic-card">
            <h3>${item.term}</h3>
            <p>${item.device}</p>
            <p class="hint">Use it like this: ${item.usage}</p>
          </article>
        `
      )
      .join('');
  }

  function renderImagery() {
    imageryList.innerHTML = imagery
      .map(
        (item) => `
          <article class="mnemonic-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join('');
  }

  function renderCustom() {
<<<<<<< HEAD
    if (typeof getCustomMnemonics !== 'function') {
      customList.innerHTML = '<li class="empty">Custom mnemonics will appear here.</li>';
      return;
    }
=======
>>>>>>> main
    const items = getCustomMnemonics();
    customList.innerHTML = items.length
      ? items
          .map(
            (item) => `
              <li>
                <strong>${item.term}:</strong> ${item.phrase}
                <span>${new Date(item.addedAt ?? item.id.split('-')[1]).toLocaleString()}</span>
              </li>
            `
          )
          .join('')
      : '<li class="empty">Add your own memory hooks as you study.</li>';
  }

  function layoutNodes(width, height) {
    const nodes = conceptMap.nodes;
<<<<<<< HEAD
    if (!nodes.length) return [];
=======
>>>>>>> main
    const radius = Math.min(width, height) / 2 - 40;
    return nodes.map((node, index) => {
      const angle = (2 * Math.PI * index) / nodes.length;
      const x = width / 2 + radius * Math.cos(angle);
      const y = height / 2 + radius * Math.sin(angle);
      return { ...node, x, y };
    });
  }

  function drawConceptMap() {
    const width = conceptMapCanvas.clientWidth || 360;
    const height = conceptMapCanvas.clientHeight || 360;
    const nodes = layoutNodes(width, height);

    const svgNS = 'http://www.w3.org/2000/svg';
    conceptMapCanvas.innerHTML = '';
<<<<<<< HEAD

    if (!nodes.length) {
      conceptMapCanvas.innerHTML = '<p class="empty">Add concept map nodes for this chapter.</p>';
      conceptMapDetails.innerHTML =
        '<p>Once nodes are defined, click them to see how they connect and narrate the cause → effect story.</p>';
      return;
    }

=======
>>>>>>> main
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    conceptMap.edges.forEach((edge) => {
      const from = nodes.find((node) => node.id === edge.from);
      const to = nodes.find((node) => node.id === edge.to);
      if (!from || !to) return;
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', from.x);
      line.setAttribute('y1', from.y);
      line.setAttribute('x2', to.x);
      line.setAttribute('y2', to.y);
      line.classList.add('concept-map__edge');
      line.dataset.label = edge.label;
      svg.appendChild(line);
    });

    nodes.forEach((node) => {
      const group = document.createElementNS(svgNS, 'g');
      group.classList.add('concept-map__node');
      group.dataset.nodeId = node.id;

      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', 24);
      circle.classList.add(`concept-map__node--${node.group}`);

      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 4);
      text.setAttribute('text-anchor', 'middle');
      text.textContent = node.label;

      group.appendChild(circle);
      group.appendChild(text);
      svg.appendChild(group);
    });

    svg.addEventListener('click', (event) => {
<<<<<<< HEAD
      const target = event.target;
      if (!(target instanceof Element)) return;
      const nodeGroup = target.closest('.concept-map__node');
=======
      const nodeGroup = event.target.closest('.concept-map__node');
>>>>>>> main
      if (!nodeGroup) return;
      const nodeId = nodeGroup.dataset.nodeId;
      const node = nodes.find((item) => item.id === nodeId);
      if (!node) return;
      const edges = conceptMap.edges.filter((edge) => edge.from === nodeId || edge.to === nodeId);
      const neighbours = edges
        .map((edge) => (edge.from === nodeId ? edge.to : edge.from))
        .map((id) => nodes.find((item) => item.id === id)?.label)
        .filter(Boolean);
      conceptMapDetails.innerHTML = `
        <h3>${node.label}</h3>
        <p>Connects to: ${neighbours.join(', ') || '—'}</p>
        <ul>${edges.map((edge) => `<li>${edge.label}</li>`).join('')}</ul>
        <p class="hint">Sketch this portion of the map and narrate how the arrows show cause → effect.</p>
      `;
    });

    conceptMapCanvas.appendChild(svg);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const term = termField.value.trim();
    const phrase = phraseField.value.trim();
<<<<<<< HEAD
    if (!term || !phrase || typeof addCustomMnemonic !== 'function') return;
=======
    if (!term || !phrase) return;
>>>>>>> main
    addCustomMnemonic({ term, phrase, addedAt: Date.now() });
    form.reset();
    renderCustom();
  });

  renderKeyTerms();
  renderImagery();
  renderCustom();
  drawConceptMap();

  conceptMapDetails.innerHTML =
    '<p>Select a node in the concept map to see how it links to others. Turn that into your own sketch on paper.</p>';
}

export default initMnemonics;
