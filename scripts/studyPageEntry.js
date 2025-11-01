import unitsById from './data/unitData.js';
import { createStore } from './state/store.js';
import createStudyPage from './pages/studyPage.js';
<<<<<<< HEAD
import { renderGlobalNav } from './components/navigation.js';
=======
<<<<<<< HEAD
import { renderGlobalNav } from './components/navigation.js';
=======
>>>>>>> main
>>>>>>> main

function initStudyPage() {
  const body = document.body;
  const container = document.querySelector('[data-role="study-root"]');
<<<<<<< HEAD
  const navMount = document.querySelector('[data-role="global-nav"]');
=======
<<<<<<< HEAD
  const navMount = document.querySelector('[data-role="global-nav"]');
=======
>>>>>>> main
>>>>>>> main
  if (!body || !container) {
    return;
  }

  const unitId = body.dataset.unitId;
  if (!unitId || !unitsById[unitId]) {
    container.innerHTML =
      '<p class="notice">Unable to load this study workspace. Please return to the home page and choose a chapter or assessment.</p>';
    return;
  }

<<<<<<< HEAD
  renderGlobalNav(navMount, { currentUnitId: unitId });

=======
<<<<<<< HEAD
  renderGlobalNav(navMount, { currentUnitId: unitId });

=======
>>>>>>> main
>>>>>>> main
  const store = createStore(unitId);
  createStudyPage(container, unitsById[unitId], store);
}

document.addEventListener('DOMContentLoaded', initStudyPage);
