import unitsById from './data/unitData.js';
import { createStore } from './state/store.js';
import createStudyPage from './pages/studyPage.js';
import { renderGlobalNav } from './components/navigation.js';

function initStudyPage() {
  const body = document.body;
  const container = document.querySelector('[data-role="study-root"]');
  const navMount = document.querySelector('[data-role="global-nav"]');
  if (!body || !container) {
    return;
  }

  const unitId = body.dataset.unitId;
  if (!unitId || !unitsById[unitId]) {
    container.innerHTML =
      '<p class="notice">Unable to load this study workspace. Please return to the home page and choose a chapter or assessment.</p>';
    return;
  }

  renderGlobalNav(navMount, { currentUnitId: unitId });

  const store = createStore(unitId);
  createStudyPage(container, unitsById[unitId], store);
}

document.addEventListener('DOMContentLoaded', initStudyPage);
