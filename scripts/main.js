import unitData from './data/unitData.js';
import renderOverview from './components/overview.js';
import initResourceVault from './components/resourceVault.js';
import initStudyGuide from './components/studyGuide.js';
import initFlashcards from './components/flashcards.js';
import initPractice from './components/practice.js';
import initTutor from './components/tutor.js';
import initSynthesis from './components/synthesis.js';
import { getUploads, getFlashcards, addFlashcard, addReflection } from './state/store.js';

function init() {
  renderOverview(unitData);
  initResourceVault();
  initStudyGuide(unitData, getUploads);
  initFlashcards(unitData, { getFlashcards, addFlashcard });
  initPractice(unitData);
  initTutor(unitData, { addReflection });
  initSynthesis();
}

document.addEventListener('DOMContentLoaded', init);
