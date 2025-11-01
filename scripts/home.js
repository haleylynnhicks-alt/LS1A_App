import { orderedUnits } from './data/unitData.js';
<<<<<<< HEAD
import { renderGlobalNav } from './components/navigation.js';
=======
<<<<<<< HEAD
import { renderGlobalNav } from './components/navigation.js';
=======
>>>>>>> main
>>>>>>> main

function buildLinkForUnit(unit) {
  return unit.pagePath ?? `pages/${unit.id}.html`;
}

function createUnitCard(unit) {
  const article = document.createElement('article');
  article.className = 'unit-card';

  const link = document.createElement('a');
  link.className = 'unit-card__link';
  link.href = buildLinkForUnit(unit);

  const label = document.createElement('h3');
  label.className = 'unit-card__title';
  label.textContent = unit.label;

  const blurb = document.createElement('p');
  blurb.className = 'unit-card__blurb';
  blurb.innerHTML = unit.homeBlurb ?? unit.hero?.description ?? unit.description ?? '';

  const meta = document.createElement('span');
  meta.className = 'unit-card__meta';
  meta.textContent =
    unit.type === 'chapter'
      ? 'Chapter workspace'
      : unit.type === 'assessment'
      ? 'Assessment review hub'
      : 'Learning lab';

  link.appendChild(label);
  link.appendChild(blurb);
  link.appendChild(meta);

  article.appendChild(link);
  return article;
}

function renderLanding() {
  const chapterContainer = document.querySelector('[data-role="chapter-list"]');
  const assessmentContainer = document.querySelector('[data-role="assessment-list"]');
<<<<<<< HEAD
  const navMount = document.querySelector('[data-role="global-nav"]');
=======
<<<<<<< HEAD
  const navMount = document.querySelector('[data-role="global-nav"]');
=======
>>>>>>> main
>>>>>>> main
  if (!chapterContainer || !assessmentContainer) {
    return;
  }

<<<<<<< HEAD
  renderGlobalNav(navMount, { currentUnitId: null });

=======
<<<<<<< HEAD
  renderGlobalNav(navMount, { currentUnitId: null });

=======
>>>>>>> main
>>>>>>> main
  orderedUnits.forEach((unit) => {
    const card = createUnitCard(unit);
    if (unit.type === 'chapter') {
      chapterContainer.appendChild(card);
    } else if (unit.type === 'assessment') {
      assessmentContainer.appendChild(card);
    } else {
      chapterContainer.appendChild(card);
    }
  });
}

document.addEventListener('DOMContentLoaded', renderLanding);
