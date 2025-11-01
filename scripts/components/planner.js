<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
function initPlanner(unit, root, { logStudySession, updateReminderPreferences, getPlannerState }) {
  if (!root) return;

  const form = root.querySelector('[data-role="planner-form"]');
  const durationField = root.querySelector('[data-role="planner-duration"]');
  const focusField = root.querySelector('[data-role="planner-focus"]');
  const interleaveField = root.querySelector('[data-role="planner-interleave"]');
  const restField = root.querySelector('[data-role="planner-rest"]');
  const feedback = root.querySelector('[data-role="planner-feedback"]');
  const historyList = root.querySelector('[data-role="planner-history"]');
  const streakBadge = root.querySelector('[data-role="planner-streak"]');
  const reminderToggle = root.querySelector('[data-role="planner-reminders"]');
  const xpBadge = root.querySelector('[data-role="planner-xp"]');
  const pacingList = root.querySelector('[data-role="planner-pacing"]');
  const wellbeingList = root.querySelector('[data-role="planner-wellbeing"]');
  const reminderList = root.querySelector('[data-role="planner-reminder-list"]');
  const badgeList = root.querySelector('[data-role="planner-badges"]');
  const xpRuleList = root.querySelector('[data-role="planner-xp-rules"]');
<<<<<<< HEAD
=======
=======
function initPlanner(unit, { logStudySession, updateReminderPreferences, getPlannerState }) {
  const form = document.getElementById('plannerForm');
  const durationField = document.getElementById('plannerDuration');
  const focusField = document.getElementById('plannerFocus');
  const interleaveField = document.getElementById('plannerInterleave');
  const restField = document.getElementById('plannerRest');
  const feedback = document.getElementById('plannerFeedback');
  const historyList = document.getElementById('plannerHistory');
  const streakBadge = document.getElementById('plannerStreak');
  const reminderToggle = document.getElementById('plannerReminders');
  const xpBadge = document.getElementById('plannerXp');
  const pacingList = document.getElementById('plannerPacing');
  const wellbeingList = document.getElementById('plannerWellbeing');
  const reminderList = document.getElementById('plannerReminderList');
  const badgeList = document.getElementById('plannerBadges');
  const xpRuleList = document.getElementById('plannerXpRules');
>>>>>>> main
>>>>>>> main

  if (
    !form ||
    !durationField ||
    !focusField ||
    !interleaveField ||
    !restField ||
    !feedback ||
    !historyList ||
    !streakBadge ||
    !reminderToggle ||
    !xpBadge ||
    !pacingList ||
    !wellbeingList ||
    !reminderList ||
    !badgeList ||
    !xpRuleList
  ) {
    return;
  }

  const guidance = unit.plannerGuidance ?? {};

  function renderGuidance() {
    pacingList.innerHTML = (guidance.pacing ?? []).map((tip) => `<li>${tip}</li>`).join('');
    wellbeingList.innerHTML = (guidance.wellbeing ?? []).map((tip) => `<li>${tip}</li>`).join('');
    reminderList.innerHTML = (guidance.reminders ?? []).map((tip) => `<li>${tip}</li>`).join('');
    xpRuleList.innerHTML = (guidance.gamification?.xpRules ?? []).map((rule) => `<li>${rule}</li>`).join('');
    badgeList.innerHTML = (guidance.gamification?.badges ?? []).map((badge) => `<li>${badge}</li>`).join('');
  }

  function xpForSession({ duration, interleavingCount, restTaken }) {
    let xp = 5;
    if (duration >= 30) xp += 2;
    if (interleavingCount >= 2) xp += 5;
    if (restTaken) xp += 2;
    return xp;
  }

  function renderState() {
<<<<<<< HEAD
    if (typeof getPlannerState !== 'function') return;
=======
<<<<<<< HEAD
    if (typeof getPlannerState !== 'function') return;
=======
>>>>>>> main
>>>>>>> main
    const planner = getPlannerState();
    streakBadge.textContent = `${planner.streak} day streak`;
    reminderToggle.checked = planner.remindersEnabled;
    historyList.innerHTML = planner.sessions.length
      ? planner.sessions
          .map((session) => {
            const when = new Date(session.loggedAt).toLocaleString();
            return `
              <li>
                <strong>${session.focus}</strong>
                <span>${session.duration} min • ${session.interleavingCount} strands • ${
                  session.restTaken ? 'Rested' : 'No break yet'
                }</span>
                <span>${when}</span>
                <span class="chip">+${session.xp} XP</span>
              </li>
            `;
          })
          .join('')
      : '<li class="empty">Log a burst to start your streak.</li>';
    const totalXp = planner.sessions.reduce((sum, session) => sum + (session.xp ?? 0), 0);
    xpBadge.textContent = `${totalXp} XP earned`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const duration = Number(durationField.value);
    const focus = focusField.value.trim();
    const interleavingCount = Number(interleaveField.value);
    const restTaken = restField.checked;
    if (!focus) {
      feedback.textContent = 'Add a quick description of what you focused on.';
      return;
    }
    const xp = xpForSession({ duration, interleavingCount, restTaken });
    const session = {
      duration,
      focus,
      interleavingCount,
      restTaken,
      xp,
      loggedAt: Date.now(),
    };
<<<<<<< HEAD
    if (typeof logStudySession === 'function') {
      logStudySession(session);
    }
=======
<<<<<<< HEAD
    if (typeof logStudySession === 'function') {
      logStudySession(session);
    }
=======
    logStudySession(session);
>>>>>>> main
>>>>>>> main
    feedback.textContent = `Logged! Keep the streak going — that was worth ${xp} XP.`;
    form.reset();
    renderState();
  });

  reminderToggle.addEventListener('change', () => {
<<<<<<< HEAD
    if (typeof updateReminderPreferences === 'function') {
      updateReminderPreferences(reminderToggle.checked);
    }
=======
<<<<<<< HEAD
    if (typeof updateReminderPreferences === 'function') {
      updateReminderPreferences(reminderToggle.checked);
    }
=======
    updateReminderPreferences(reminderToggle.checked);
>>>>>>> main
>>>>>>> main
  });

  renderGuidance();
  renderState();
}

export default initPlanner;
