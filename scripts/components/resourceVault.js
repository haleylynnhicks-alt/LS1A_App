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
}

export default initResourceVault;
