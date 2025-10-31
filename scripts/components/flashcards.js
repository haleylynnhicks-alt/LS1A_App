import {
  formatDate,
  shuffle,
} from '../utils/formatters.js';

function initFlashcards(
  unit,
  { getFlashcards, addFlashcard, getFlashcardProgress, updateFlashcardProgress }
) {
  const deck = document.getElementById('flashcardDeck');
  const form = document.getElementById('flashcardForm');
  const promptField = document.getElementById('flashcardPrompt');
  const answerField = document.getElementById('flashcardAnswer');
  const hookField = document.getElementById('flashcardHook');
  const sessionInfo = document.getElementById('flashcardSessionInfo');
  const filterButtons = document.querySelectorAll('[data-flashcard-filter]');

  let currentFilter = 'due';

  if (!deck || !form || !promptField || !answerField || !sessionInfo) {
    return;
  }

  function enrichCards() {
    const custom = getFlashcards().map((card) => ({
      ...card,
      source: 'custom',
      elaborationPrompt:
        card.hook ||
        'Write the explanation in your own words and jot why the answer must be true.',
      mnemonic: card.hook || 'Craft a quick image or phrase that links the prompt to the answer.',
    }));

    const canon = unit.flashcards.map((card) => ({
      ...card,
      source: 'unit',
    }));

    return [...canon, ...custom];
  }

  function describeProgress(card) {
    const progress = getFlashcardProgress(card.id) ?? {
      nextReview: Date.now(),
      intervalDays: 1,
      reviews: 0,
      ease: 2.5,
    };

    const dueNow = progress.nextReview <= Date.now();
    return {
      ...progress,
      dueNow,
      nextLabel: dueNow ? 'Due now' : formatDate(new Date(progress.nextReview)),
    };
  }

  function cardTemplate(card, progress) {
    const quickCheck = shuffle([...(card.quickChecks ?? []), card.prompt]).slice(0, 1)[0];
    return `
      <article class="flashcard ${progress.dueNow ? 'flashcard--due' : ''}" data-card-id="${
        card.id
      }">
        <div class="flashcard__inner">
          <div class="flashcard__front">
            <h4>Prompt</h4>
            <p>${card.prompt}</p>
            <p class="flashcard__quick-check">Quick check: ${quickCheck}</p>
            <p class="flashcard__next">Next review: <strong>${progress.nextLabel}</strong></p>
          </div>
          <div class="flashcard__back">
            <h4>Explanation</h4>
            <p>${card.answer}</p>
            <div class="flashcard__extras">
              <p><strong>Elaborate:</strong> ${card.elaborationPrompt}</p>
              <p><strong>Mnemonic idea:</strong> ${card.mnemonic}</p>
            </div>
            <div class="flashcard__actions">
              <button type="button" class="btn btn--ghost" data-review="again">Again</button>
              <button type="button" class="btn btn--secondary" data-review="good">Good</button>
              <button type="button" class="btn btn--primary" data-review="easy">Easy</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function applyFilter(cards) {
    if (currentFilter === 'due') {
      return cards.filter((card) => describeProgress(card).dueNow);
    }
    if (currentFilter === 'new') {
      return cards.filter((card) => !getFlashcardProgress(card.id));
    }
    return cards;
  }

  function render() {
    const cards = enrichCards();
    const filtered = applyFilter(cards);
    const inPlay = filtered.length ? filtered : cards;
    const template = inPlay
      .map((card) => cardTemplate(card, describeProgress(card)))
      .join('');
    deck.innerHTML = template || '<p class="empty">Add cards or adjust the filter to start a session.</p>';

    const dueCount = cards.filter((card) => describeProgress(card).dueNow).length;
    sessionInfo.innerHTML = `
      <p><strong>${dueCount}</strong> card${dueCount === 1 ? '' : 's'} due now.</p>
      <p>Filter: <span class="chip">${currentFilter}</span></p>
      <p class="hint">Flip a card by clicking it, then rate how well you recalled it. Ratings schedule the next session automatically.</p>
    `;
  }

  deck.addEventListener('click', (event) => {
    const card = event.target.closest('.flashcard');
    if (!card) return;

    if (event.target.matches('[data-review]')) {
      const outcome = event.target.getAttribute('data-review');
      const cardId = card.getAttribute('data-card-id');
      updateFlashcardProgress(cardId, outcome);
      render();
      return;
    }

    card.classList.toggle('is-flipped');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = promptField.value.trim();
    const answer = answerField.value.trim();
    const hook = hookField ? hookField.value.trim() : '';
    if (!prompt || !answer) return;
    addFlashcard({ prompt, answer, hook });
    form.reset();
    render();
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.getAttribute('data-flashcard-filter');
      filterButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      render();
    });
  });

  render();
}

export default initFlashcards;
