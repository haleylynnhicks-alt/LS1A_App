import renderOverview from '../components/overview.js';
import initResourceVault from '../components/resourceVault.js';
import initStudyGuide from '../components/studyGuide.js';
import initFlashcards from '../components/flashcards.js';
import initPractice from '../components/practice.js';
import initTutor from '../components/tutor.js';
import initSynthesis from '../components/synthesis.js';
import initInterleaving from '../components/interleaving.js';
import initElaboration from '../components/elaboration.js';
import initMnemonics from '../components/mnemonics.js';
import initPlanner from '../components/planner.js';
import studyTemplate from './studyTemplate.js';

function populateHero(root, unit) {
  const title = root.querySelector('[data-role="unit-title"]');
  const description = root.querySelector('[data-role="unit-description"]');
  if (title) {
    title.textContent = unit.hero?.title ?? unit.title;
  }
  if (description) {
    description.innerHTML = unit.hero?.description ?? unit.description ?? '';
  }
}

function createStudyPage(container, unit, store) {
  if (!container || !unit) return;

  container.innerHTML = studyTemplate;
  const root = container.querySelector('.study-page');
  if (!root) {
    return;
  }

  populateHero(root, unit);
  renderOverview(unit, root);
  initResourceVault(root, store);
  initStudyGuide(unit, root, { getUploads: store.getUploads });
  initFlashcards(unit, root, {
    getFlashcards: store.getFlashcards,
    addFlashcard: store.addFlashcard,
    getFlashcardProgress: store.getFlashcardProgress,
    updateFlashcardProgress: store.updateFlashcardProgress,
  });
  initInterleaving(unit, root, {
    recordInterleavingSession: store.recordInterleavingSession,
    getInterleavingHistory: store.getInterleavingHistory,
  });
  initElaboration(unit, root);
  initPractice(unit, root);
  initMnemonics(unit, root, {
    addCustomMnemonic: store.addCustomMnemonic,
    getCustomMnemonics: store.getCustomMnemonics,
  });
  initTutor(unit, root, { addReflection: store.addReflection });
  initPlanner(unit, root, {
    logStudySession: store.logStudySession,
    updateReminderPreferences: store.updateReminderPreferences,
    getPlannerState: store.getPlannerState,
  });
  initSynthesis(unit, root);
}

export default createStudyPage;
