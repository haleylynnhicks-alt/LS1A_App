const STORAGE_KEY = 'ls1a-study-companion-v3';

const defaultContextState = {
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

function loadGlobalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { contexts: {} };
    }
    const parsed = JSON.parse(raw);
    if (!parsed.contexts || typeof parsed.contexts !== 'object') {
      return { contexts: {} };
    }
    return { contexts: parsed.contexts };
  } catch (error) {
    console.warn('Unable to load saved state', error);
    return { contexts: {} };
  }
}

const globalState = loadGlobalState();

function ensureContext(namespace) {
  if (!namespace) {
    throw new Error('A namespace is required to create a study store.');
  }
  if (!globalState.contexts[namespace]) {
    globalState.contexts[namespace] = clone(defaultContextState);
  } else {
    const ctx = globalState.contexts[namespace];
    globalState.contexts[namespace] = {
      ...clone(defaultContextState),
      ...ctx,
      flashcards: ctx.flashcards ?? [],
      reflections: ctx.reflections ?? [],
      flashcardProgress: ctx.flashcardProgress ?? {},
      planner: {
        ...clone(defaultContextState.planner),
        ...(ctx.planner ?? {}),
      },
      mnemonics: ctx.mnemonics ?? [],
      interleavingHistory: ctx.interleavingHistory ?? [],
    };
  }
  return globalState.contexts[namespace];
}

function saveGlobalState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(globalState));
}

function createStore(namespace) {
  const context = ensureContext(namespace);
  const listeners = new Set();

  const notify = () => {
    saveGlobalState();
    const snapshot = clone(context);
    listeners.forEach((listener) => {
      try {
        listener(snapshot);
      } catch (error) {
        console.error('State listener error', error);
      }
    });
  };

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
    context.flashcards.push(newCard);
    context.flashcardProgress[newCard.id] = {
      ease: 2.5,
      intervalDays: newCard.intervalDays,
      nextReview: newCard.nextReview,
      reviews: 0,
    };
    notify();
    return getFlashcards();
  }

  function getFlashcards() {
    return context.flashcards.map((card) => ({ ...card }));
  }

  function getFlashcardProgress(cardId) {
    return context.flashcardProgress[cardId];
  }

  function updateFlashcardProgress(cardId, outcome) {
    const progress = context.flashcardProgress[cardId] ?? {
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

    context.flashcardProgress[cardId] = {
      ease,
      intervalDays,
      nextReview: now + intervalDays * 24 * 60 * 60 * 1000,
      reviews: progress.reviews + 1,
    };

    if (cardId.startsWith('user-')) {
      context.flashcards = context.flashcards.map((card) =>
        card.id === cardId
          ? { ...card, intervalDays, nextReview: context.flashcardProgress[cardId].nextReview }
          : card
      );
    }

    notify();
    return context.flashcardProgress[cardId];
  }

  function addReflection(entry) {
    context.reflections.push({ ...entry });
    notify();
  }

  function logStudySession(session) {
    const today = new Date().toISOString().slice(0, 10);
    const lastSessionDate = context.planner.lastSessionDate;
    let streak = context.planner.streak;

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

    context.planner.sessions.unshift({ ...session, loggedAt: Date.now() });
    context.planner.sessions = context.planner.sessions.slice(0, 30);
    context.planner.streak = streak;
    context.planner.lastSessionDate = today;
    notify();
    return clone(context.planner);
  }

  function updateReminderPreferences(enabled) {
    context.planner.remindersEnabled = enabled;
    notify();
    return clone(context.planner);
  }

  function getPlannerState() {
    return clone(context.planner);
  }

  function addCustomMnemonic(entry) {
    context.mnemonics.unshift({ ...entry, id: `mnemonic-${Date.now()}` });
    context.mnemonics = context.mnemonics.slice(0, 50);
    notify();
    return getCustomMnemonics();
  }

  function getCustomMnemonics() {
    return context.mnemonics.map((mnemonic) => ({ ...mnemonic }));
  }

  function recordInterleavingSession(session) {
    context.interleavingHistory.unshift({ ...session, id: `mix-${Date.now()}` });
    context.interleavingHistory = context.interleavingHistory.slice(0, 20);
    notify();
    return getInterleavingHistory();
  }

  function getInterleavingHistory() {
    return context.interleavingHistory.map((item) => ({ ...item }));
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
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
}

export { createStore, defaultContextState };
