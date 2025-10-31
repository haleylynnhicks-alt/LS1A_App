import unitData from './data/unitData.js';
import renderOverview from './components/overview.js';
import initResourceVault from './components/resourceVault.js';
import initStudyGuide from './components/studyGuide.js';
import initFlashcards from './components/flashcards.js';
import initPractice from './components/practice.js';
import initTutor from './components/tutor.js';
import initSynthesis from './components/synthesis.js';
import initInterleaving from './components/interleaving.js';
import initElaboration from './components/elaboration.js';
import initMnemonics from './components/mnemonics.js';
import initPlanner from './components/planner.js';
import {
  getUploads,
  getFlashcards,
  addFlashcard,
  addReflection,
  getFlashcardProgress,
  updateFlashcardProgress,
  recordInterleavingSession,
  getInterleavingHistory,
  addCustomMnemonic,
  getCustomMnemonics,
  logStudySession,
  updateReminderPreferences,
  getPlannerState,
} from './state/store.js';

function init() {
  renderOverview(unitData);
  initResourceVault();
  initStudyGuide(unitData, getUploads);
  initFlashcards(unitData, {
    getFlashcards,
    addFlashcard,
    getFlashcardProgress,
    updateFlashcardProgress,
  });
  initInterleaving(unitData, { recordInterleavingSession, getInterleavingHistory });
  initElaboration(unitData);
  initPractice(unitData);
  initMnemonics(unitData, { addCustomMnemonic, getCustomMnemonics });
  initTutor(unitData, { addReflection });
  initPlanner(unitData, {
    logStudySession,
    updateReminderPreferences,
    getPlannerState,
  });
  initSynthesis();
}

document.addEventListener('DOMContentLoaded', init);
