const STORAGE_KEY = 'ls1a-study-companion-v1';

const defaultState = {
  uploads: [],
  flashcards: [],
  reflections: [],
};

const clone = (value) =>
  typeof structuredClone === 'function'
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));

const listeners = new Set();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return clone(defaultState);
    return {
      ...clone(defaultState),
      ...saved,
      uploads: saved.uploads ?? [],
      flashcards: saved.flashcards ?? [],
      reflections: saved.reflections ?? [],
    };
  } catch (error) {
    console.warn('Unable to load saved state', error);
    return clone(defaultState);
  }
}

const state = loadState();

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  listeners.forEach((listener) => {
    try {
      listener(clone(state));
    } catch (error) {
      console.error('State listener error', error);
    }
  });
}

function appendUploads(uploadList) {
  state.uploads = [...uploadList, ...state.uploads];
  persistState();
  return getUploads();
}

function removeUpload(addedAt) {
  state.uploads = state.uploads.filter((item) => item.addedAt !== addedAt);
  persistState();
  return getUploads();
}

function getUploads() {
  return state.uploads.map((item) => ({ ...item }));
}

function addFlashcard(card) {
  state.flashcards.push({ ...card });
  persistState();
  return getFlashcards();
}

function getFlashcards() {
  return state.flashcards.map((card) => ({ ...card }));
}

function addReflection(entry) {
  state.reflections.push({ ...entry });
  persistState();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export {
  STORAGE_KEY,
  defaultState,
  appendUploads,
  removeUpload,
  getUploads,
  addFlashcard,
  getFlashcards,
  addReflection,
  subscribe,
};
