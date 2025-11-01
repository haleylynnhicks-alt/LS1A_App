<<<<<<< HEAD
function renderHighlights(highlights) {
  if (!Array.isArray(highlights) || !highlights.length) {
    return '';
  }

  return `
    <ul class="resource-card__highlights">
      ${highlights.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

function renderActions(resource) {
  if (!resource.actions || !resource.actions.length) {
    return '';
  }

  return `
    <footer class="resource-card__actions">
      ${resource.actions
        .map(
          (action) => `
            <a class="btn btn--ghost" href="${action.href}" target="_blank" rel="noopener">
              ${action.label}
            </a>
          `
        )
        .join('')}
    </footer>
  `;
}

function renderResource(resource) {
  return `
    <article class="resource-card">
      <header class="resource-card__header">
        <div class="resource-card__meta">
          ${resource.type ? `<span class="chip chip--muted">${resource.type}</span>` : ''}
          ${resource.estimatedTime ? `<span class="chip chip--muted">${resource.estimatedTime}</span>` : ''}
        </div>
        <h4>${resource.title}</h4>
        ${resource.subtitle ? `<p class="resource-card__subtitle">${resource.subtitle}</p>` : ''}
      </header>
      <div class="resource-card__body">
        ${resource.summary ? `<p>${resource.summary}</p>` : ''}
        ${renderHighlights(resource.highlights)}
        ${resource.reference ? `<p class="resource-card__reference">${resource.reference}</p>` : ''}
      </div>
      ${renderActions(resource)}
    </article>
  `;
}

function initResourceVault(unit, root) {
  if (!root) return;

  const container = root.querySelector('[data-role="resource-library"]');
  if (!container) {
    return;
  }

  const resources = unit.resources ?? [];
  if (!resources.length) {
    container.innerHTML = `
      <p class="notice">
        Resources for this chapter are coming soon. Review the study guide and flashcards while we finish
        curating the excerpts.
      </p>
    `;
    return;
  }

  container.innerHTML = resources.map((resource) => renderResource(resource)).join('');
=======
import { appendUploads, removeUpload, getUploads } from '../state/store.js';

function initResourceVault() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const list = document.getElementById('uploadedList');

  if (!dropZone || !fileInput || !list) {
    return;
  }

  function renderUploads() {
    const uploads = getUploads();

    if (!uploads.length) {
      list.innerHTML = '<li class="uploader__item">No resources yet. Drop files to start curating your study vault.</li>';
      return;
    }

    list.innerHTML = uploads
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

  function addFiles(files) {
    if (!files || !files.length) return;

    const mapped = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      addedAt: new Date().toISOString(),
    }));

    appendUploads(mapped);
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
    addFiles(event.dataTransfer?.files);
  });

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fileInput.click();
    }
  });

  fileInput.addEventListener('change', (event) => addFiles(event.target.files));

  list.addEventListener('click', (event) => {
    const { target } = event;
    const id = target.dataset?.remove;
    if (!id) return;
    removeUpload(id);
    renderUploads();
  });

  renderUploads();
>>>>>>> main
}

export default initResourceVault;
