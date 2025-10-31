import unitsById, { orderedUnits } from './data/unitData.js';
import { createStore } from './state/store.js';
import createStudyPage from './pages/studyPage.js';

function initTabs() {
  const tabList = document.querySelector('[data-role="tab-list"]');
  const panelContainer = document.querySelector('[data-role="tab-panels"]');

  if (!tabList || !panelContainer) {
    return;
  }

  const panels = new Map();
  const buttons = new Map();

  orderedUnits.forEach((unit, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tab-button${index === 0 ? ' is-active' : ''}`;
    button.dataset.tab = unit.id;
    button.textContent = unit.label;
    tabList.appendChild(button);
    buttons.set(unit.id, button);

    const panel = document.createElement('section');
    panel.className = `tab-panel${index === 0 ? ' is-active' : ''}`;
    panel.dataset.tabPanel = unit.id;
    panelContainer.appendChild(panel);
    panels.set(unit.id, panel);

    const store = createStore(unit.id);
    createStudyPage(panel, unitsById[unit.id], store);
  });

  function activateTab(id) {
    panels.forEach((panel, panelId) => {
      panel.classList.toggle('is-active', panelId === id);
    });
    buttons.forEach((button, buttonId) => {
      button.classList.toggle('is-active', buttonId === id);
    });
  }

  tabList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const tabId = target.dataset.tab;
    if (!tabId || !panels.has(tabId)) return;
    activateTab(tabId);
  });
}

document.addEventListener('DOMContentLoaded', initTabs);
