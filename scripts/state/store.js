const STORAGE_KEY = 'ls1a-study-companion-v2';

const defaultState = {
  uploads: [],
  flashcards: [],
  reflections: [],
  flashcardProgress: {},
  planner: {
    sessions: [],
    remindersEnabled: true,
    streak: 0,
    lastSessionDate: null,
  },
  mnemonics: [],
  interleavingHistory: [],
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
      flashcardProgress: saved.flashcardProgress ?? {},
      planner: {
        ...clone(defaultState.planner),
        ...(saved.planner ?? {}),
      },
      mnemonics: saved.mnemonics ?? [],
      interleavingHistory: saved.interleavingHistory ?? [],
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
  const newCard = {
    id: `user-${Date.now()}`,
    prompt: card.prompt,
    answer: card.answer,
    hook: card.hook ?? '',
    createdAt: Date.now(),
    nextReview: Date.now() + 24 * 60 * 60 * 1000,
    intervalDays: 1,
  };
  state.flashcards.push(newCard);
  state.flashcardProgress[newCard.id] = {
    ease: 2.5,
    intervalDays: newCard.intervalDays,
    nextReview: newCard.nextReview,
    reviews: 0,
  };
  persistState();
  return getFlashcards();
}

function getFlashcards() {
  return state.flashcards.map((card) => ({ ...card }));
}

function getFlashcardProgress(cardId) {
  return state.flashcardProgress[cardId];
}

function updateFlashcardProgress(cardId, outcome) {
  const progress = state.flashcardProgress[cardId] ?? {
    ease: 2.5,
    intervalDays: 1,
    nextReview: Date.now(),
    reviews: 0,
  };

  const now = Date.now();
  const quality = outcome === 'easy' ? 5 : outcome === 'good' ? 4 : 2;
  const ease = Math.max(1.3, progress.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  let intervalDays;
  if (quality < 3) {
    intervalDays = 1;
  } else if (progress.reviews === 0) {
    intervalDays = 1;
  } else if (progress.reviews === 1) {
    intervalDays = 6;
  } else {
    intervalDays = Math.round(progress.intervalDays * ease);
  }

  state.flashcardProgress[cardId] = {
    ease,
    intervalDays,
    nextReview: now + intervalDays * 24 * 60 * 60 * 1000,
    reviews: progress.reviews + 1,
  };

  if (cardId.startsWith('user-')) {
    state.flashcards = state.flashcards.map((card) =>
      card.id === cardId
        ? { ...card, intervalDays, nextReview: state.flashcardProgress[cardId].nextReview }
        : card
    );
  }

  persistState();
  return state.flashcardProgress[cardId];
}

function addReflection(entry) {
  state.reflections.push({ ...entry });
  persistState();
}

function logStudySession(session) {
  const today = new Date().toISOString().slice(0, 10);
  const lastSessionDate = state.planner.lastSessionDate;
  let streak = state.planner.streak;

  if (lastSessionDate) {
    const diffDays = Math.floor(
      (new Date(today).getTime() - new Date(lastSessionDate).getTime()) / (24 * 60 * 60 * 1000)
    );
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  } else {
    streak = 1;
  }

  state.planner.sessions.unshift({ ...session, loggedAt: Date.now() });
  state.planner.sessions = state.planner.sessions.slice(0, 30);
  state.planner.streak = streak;
  state.planner.lastSessionDate = today;
  persistState();
  return clone(state.planner);
}

function updateReminderPreferences(enabled) {
  state.planner.remindersEnabled = enabled;
  persistState();
  return clone(state.planner);
}

function getPlannerState() {
  return clone(state.planner);
}

function addCustomMnemonic(entry) {
  state.mnemonics.unshift({ ...entry, id: `mnemonic-${Date.now()}` });
  state.mnemonics = state.mnemonics.slice(0, 50);
  persistState();
  return getCustomMnemonics();
}

function getCustomMnemonics() {
  return state.mnemonics.map((mnemonic) => ({ ...mnemonic }));
}

function recordInterleavingSession(session) {
  state.interleavingHistory.unshift({ ...session, id: `mix-${Date.now()}` });
  state.interleavingHistory = state.interleavingHistory.slice(0, 20);
  persistState();
  return getInterleavingHistory();
}

function getInterleavingHistory() {
  return state.interleavingHistory.map((item) => ({ ...item }));
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
  getFlashcardProgress,
  updateFlashcardProgress,
  addReflection,
  logStudySession,
  updateReminderPreferences,
  getPlannerState,
  addCustomMnemonic,
  getCustomMnemonics,
  recordInterleavingSession,
  getInterleavingHistory,
  subscribe,
};
