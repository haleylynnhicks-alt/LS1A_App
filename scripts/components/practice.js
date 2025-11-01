import { shuffle } from '../utils/formatters.js';

<<<<<<< HEAD
function initPractice(unit, root) {
  if (!root) return;

  const form = root.querySelector('[data-role="practice-form"]');
  const results = root.querySelector('[data-role="practice-results"]');
  const elaboration = root.querySelector('[data-role="practice-elaboration"]');
=======
function initPractice(unit) {
  const form = document.getElementById('practiceForm');
  const results = document.getElementById('practiceResults');
  const elaboration = document.getElementById('practiceElaboration');
>>>>>>> main

  if (!form || !results) {
    return;
  }

<<<<<<< HEAD
  const questions = unit.practiceQuestions ?? [];
  const QUESTIONS_PER_ROUND = Math.min(4, questions.length || 0) || questions.length || 0;
  let pendingQuestions = shuffle([...questions]);
  let activeQuestions = [];

  function drawNextSet() {
    if (!questions.length) {
      activeQuestions = [];
      return;
    }
    if (pendingQuestions.length < QUESTIONS_PER_ROUND) {
      pendingQuestions = shuffle([...questions]);
    }
    activeQuestions = pendingQuestions.splice(0, QUESTIONS_PER_ROUND || questions.length);
=======
  const QUESTIONS_PER_ROUND = Math.min(4, unit.practiceQuestions.length);
  let pendingQuestions = shuffle([...unit.practiceQuestions]);
  let activeQuestions = [];

  function drawNextSet() {
    if (pendingQuestions.length < QUESTIONS_PER_ROUND) {
      pendingQuestions = shuffle([...unit.practiceQuestions]);
    }
    activeQuestions = pendingQuestions.splice(0, QUESTIONS_PER_ROUND);
>>>>>>> main
  }

  function renderQuiz() {
    drawNextSet();

<<<<<<< HEAD
    if (!activeQuestions.length) {
      form.innerHTML = '<p class="empty">Add practice questions to this chapter to generate quizzes.</p>';
      return;
    }

=======
>>>>>>> main
    form.innerHTML =
      activeQuestions
        .map((question, index) => {
          if (question.type === 'mc') {
            return `
              <fieldset class="practice__question">
                <legend><h3>Q${index + 1}. ${question.prompt}</h3></legend>
                <div class="practice__options">
                  ${question.options
                    .map(
                      (option, optIndex) => `
                        <label>
                          <input type="radio" name="${question.id}" value="${optIndex}" required />
                          <span>${option}</span>
                        </label>
                      `
                    )
                    .join('')}
                </div>
              </fieldset>
            `;
          }

          return `
            <fieldset class="practice__question">
              <legend><h3>Q${index + 1}. ${question.prompt}</h3></legend>
              <textarea name="${question.id}" placeholder="Explain your reasoning..." required></textarea>
            </fieldset>
          `;
        })
        .join('') +
      '<button class="btn btn--primary" type="submit">Check Answers</button>';
  }

  renderQuiz();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
<<<<<<< HEAD
    if (!activeQuestions.length) return;

=======
>>>>>>> main
    const formData = new FormData(form);
    let correct = 0;
    let total = 0;
    const feedback = [];

    activeQuestions.forEach((question) => {
      const response = formData.get(question.id);
      if (question.type === 'mc') {
        total += 1;
        const isCorrect = Number(response) === question.answer;
        if (isCorrect) correct += 1;
        feedback.push(
<<<<<<< HEAD
          `<p><strong>${question.prompt}</strong><br>${
            isCorrect ? '✅ Correct.' : '❌ Not quite.'
          } ${question.explanation}</p>`
        );
      } else {
        const rubricHits = question.rubric
          ? question.rubric.filter((point) =>
              (response || '')
                .toLowerCase()
                .includes(point.split(' ')[0].toLowerCase())
            ).length
          : 0;
        feedback.push(
          `<p><strong>${question.prompt}</strong><br>Look for: ${(question.rubric ?? [])
            .map((point) => `<span class="chip">${point}</span>`)
            .join(' ')}<br>You addressed <strong>${rubricHits}</strong> of ${
            question.rubric?.length ?? 0
          } key ideas.</p>`
=======
      `<p><strong>${question.prompt}</strong><br>${
        isCorrect ? '✅ Correct.' : '❌ Not quite.'
      } ${question.explanation}</p>`
      );
    } else {
        const rubricHits = question.rubric.filter((point) =>
          (response || '')
            .toLowerCase()
            .includes(point.split(' ')[0].toLowerCase())
        ).length;
        feedback.push(
          `<p><strong>${question.prompt}</strong><br>Look for: ${question.rubric
            .map((point) => `<span class="chip">${point}</span>`)
            .join(' ')}<br>You addressed <strong>${rubricHits}</strong> of ${question.rubric.length} key ideas.</p>`
>>>>>>> main
        );
      }
    });

    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    results.classList.toggle('practice__results--success', accuracy >= 75);
    results.classList.toggle('practice__results--danger', accuracy < 50);
    const prompt = unit.elaborativePrompts
      ? unit.elaborativePrompts[Math.floor(Math.random() * unit.elaborativePrompts.length)]
      : null;
    results.innerHTML = `
      <p>You nailed ${correct} / ${total} quantitative questions (${accuracy}%).</p>
      <div class="practice__feedback">${feedback.join('')}</div>
      <p class="hint">A fresh quiz has been loaded above so you can keep practicing right away.</p>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (elaboration && prompt) {
      elaboration.innerHTML = `
        <h3>Elaborative follow-up</h3>
        <p>${prompt.question}</p>
        <ul>${prompt.followUps.map((item) => `<li>${item}</li>`).join('')}</ul>
        <p class="hint">Pause for a short break, then write a 2-minute response before your next quiz.</p>
      `;
    }

    renderQuiz();
  });
}

export default initPractice;
