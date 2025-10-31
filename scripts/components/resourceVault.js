function initResourceVault(root, store) {
  if (!root) return;

  const dropZone = root.querySelector('[data-role="drop-zone"]');
  const fileInput = root.querySelector('[data-role="file-input"]');
  const list = root.querySelector('[data-role="uploaded-list"]');

  if (!dropZone || !fileInput || !list) {
    return;
  }

  function renderUploads() {
    const uploads = store.getUploads();

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

    store.appendUploads(mapped);
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
    store.removeUpload(id);
    renderUploads();
  });

  renderUploads();
}

export default initResourceVault;
