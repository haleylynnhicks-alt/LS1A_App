function initPractice(unit) {
  const form = document.getElementById('practiceForm');
  const results = document.getElementById('practiceResults');

  if (!form || !results) {
    return;
  }

  form.innerHTML =
    unit.practiceQuestions
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

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let correct = 0;
    let total = 0;
    const feedback = [];

    unit.practiceQuestions.forEach((question) => {
      const response = formData.get(question.id);
      if (question.type === 'mc') {
        total += 1;
        const isCorrect = Number(response) === question.answer;
        if (isCorrect) correct += 1;
        feedback.push(
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
        );
      }
    });

    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    results.classList.toggle('practice__results--success', accuracy >= 75);
    results.classList.toggle('practice__results--danger', accuracy < 50);
    results.innerHTML = `
      <p>You nailed ${correct} / ${total} quantitative questions (${accuracy}%).</p>
      <div class="practice__feedback">${feedback.join('')}</div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

export default initPractice;
