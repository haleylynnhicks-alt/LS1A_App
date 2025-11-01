import { orderedUnits } from '../data/unitData.js';

function buildNavLink(unit, currentId, homeUrl) {
  const li = document.createElement('li');
  li.className = 'global-nav__item';
  li.dataset.type = unit.type ?? 'chapter';

  const link = document.createElement('a');
  link.className = 'global-nav__link';
  link.href = unit.pagePath ?? `${homeUrl.replace(/index\.html$/, '')}pages/${unit.id}.html`;
  link.textContent = unit.label;

  if (currentId && currentId === unit.id) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }

  li.appendChild(link);
  return li;
}

function renderGlobalNav(container, { currentUnitId = null } = {}) {
  if (!container) {
    return;
  }

  const homeUrl = container.dataset.homeUrl || 'index.html';

  const nav = document.createElement('nav');
  nav.className = 'global-nav';
  nav.setAttribute('aria-label', 'Primary');

  const list = document.createElement('ul');
  list.className = 'global-nav__list';

  const homeItem = document.createElement('li');
  homeItem.className = 'global-nav__item global-nav__item--home';
  const homeLink = document.createElement('a');
  homeLink.className = 'global-nav__link';
  homeLink.href = homeUrl;
  homeLink.textContent = 'Home';
  if (!currentUnitId) {
    homeLink.classList.add('is-active');
    homeLink.setAttribute('aria-current', 'page');
  }
  homeItem.appendChild(homeLink);
  list.appendChild(homeItem);

  orderedUnits.forEach((unit) => {
    if (unit.type === 'assessment') {
      return;
    }
    list.appendChild(buildNavLink(unit, currentUnitId, homeUrl));
  });

  const assessmentUnits = orderedUnits.filter((unit) => unit.type === 'assessment');
  if (assessmentUnits.length) {
    const divider = document.createElement('li');
    divider.className = 'global-nav__divider';
    divider.setAttribute('role', 'presentation');
    divider.textContent = 'Assessments';
    list.appendChild(divider);

    assessmentUnits.forEach((unit) => {
      list.appendChild(buildNavLink(unit, currentUnitId, homeUrl));
    });
  }

  nav.appendChild(list);
  container.innerHTML = '';
  container.appendChild(nav);
}

export { renderGlobalNav };
