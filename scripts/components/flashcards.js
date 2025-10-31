function initFlashcards(unit, { getFlashcards, addFlashcard }) {
  const deck = document.getElementById('flashcardDeck');
  const form = document.getElementById('flashcardForm');
  const promptField = document.getElementById('flashcardPrompt');
  const answerField = document.getElementById('flashcardAnswer');

  if (!deck || !form || !promptField || !answerField) {
    return;
  }

  function allCards() {
    return [...unit.flashcards, ...getFlashcards()];
  }

  function render() {
    deck.innerHTML = allCards()
      .map(
        (card, index) => `
          <article class="flashcard" data-index="${index}">
            <div class="flashcard__inner">
              <div class="flashcard__front">
                <h4>Prompt</h4>
                <p>${card.prompt}</p>
              </div>
              <div class="flashcard__back">
                <h4>Explanation</h4>
                <p>${card.answer}</p>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  }

  deck.addEventListener('click', (event) => {
    const card = event.target.closest('.flashcard');
    if (!card) return;
    card.classList.toggle('is-flipped');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const prompt = promptField.value.trim();
    const answer = answerField.value.trim();
    if (!prompt || !answer) return;
    addFlashcard({ prompt, answer });
    form.reset();
    render();
  });

  render();
}

export default initFlashcards;
