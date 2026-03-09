// CTE AI Trainer Interview Prep — Application Logic

let timerInterval = null;
let timerSeconds = 53 * 60; // 53 minutes

function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.getAttribute('data-section');
      switchSection(sectionId);
    });
  });
}

function switchSection(sectionId) {
  // Deactivate all
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

  // Activate target
  const targetBtn = document.querySelector(`[data-section="${sectionId}"]`);
  const targetSection = document.getElementById(`section-${sectionId}`);
  if (targetBtn) targetBtn.classList.add('active');
  if (targetSection) targetSection.classList.add('active');
}

function filterContent(query) {
  const cards = document.querySelectorAll('.searchable-card');
  const results = [];
  const q = query.toLowerCase().trim();

  cards.forEach(card => {
    const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
    const text = card.textContent.toLowerCase();
    const match = q === '' || keywords.includes(q) || text.includes(q);

    if (match) {
      card.style.display = '';
      results.push(card);
    } else {
      card.style.display = 'none';
    }
  });

  return results;
}

function initTimer() {
  timerSeconds = 53 * 60;
  const display = document.getElementById('timer-display');
  if (display) display.textContent = formatTime(timerSeconds);
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSeconds--;
    const display = document.getElementById('timer-display');
    if (display) display.textContent = formatTime(timerSeconds);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerSeconds = 53 * 60;
  const display = document.getElementById('timer-display');
  if (display) display.textContent = formatTime(timerSeconds);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });
}

function initProgress() {
  const checkboxes = document.querySelectorAll('.section-check');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateProgress);
  });
  updateProgress();
}

function updateProgress() {
  const checkboxes = document.querySelectorAll('.section-check');
  const total = checkboxes.length;
  const checked = document.querySelectorAll('.section-check:checked').length;
  const percentage = total > 0 ? (checked / total) * 100 : 0;

  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');

  if (bar) bar.style.width = `${percentage.toFixed(2)}%`;
  if (text) text.textContent = `${checked}/${total}`;
}

function initSearch() {
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', (e) => {
      filterContent(e.target.value);
    });
  }
}

function initApp() {
  initNavigation();
  initAccordion();
  initProgress();
  initSearch();
  initTimer();

  // Timer button handlers
  const startBtn = document.getElementById('timer-start');
  const resetBtn = document.getElementById('timer-reset');
  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);
}

// Export for testing (Node.js) or init for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initNavigation,
    switchSection,
    filterContent,
    initTimer,
    startTimer,
    resetTimer,
    initAccordion,
    initProgress,
    updateProgress,
    initSearch,
    initApp
  };
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}
