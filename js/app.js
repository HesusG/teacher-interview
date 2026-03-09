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

  // Scroll to top of content
  try {
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } catch (e) { /* jsdom doesn't implement scrollTo */ }
}

function filterContent(query) {
  const cards = document.querySelectorAll('.searchable-card');
  const results = [];
  const q = query.toLowerCase().trim();

  if (q !== '') {
    // When searching, show ALL sections so results across sections are visible
    document.querySelectorAll('.section').forEach(sec => {
      sec.style.display = q ? 'block' : '';
    });
    // Hide nav active styling during search
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  } else {
    // When search cleared, restore normal section display
    document.querySelectorAll('.section').forEach(sec => {
      sec.style.display = '';
    });
    // Re-activate the current section
    const activeSection = document.querySelector('.section.active');
    if (!activeSection) {
      const firstBtn = document.querySelector('.nav-btn');
      if (firstBtn) {
        firstBtn.classList.add('active');
        const sectionId = firstBtn.getAttribute('data-section');
        const sec = document.getElementById(`section-${sectionId}`);
        if (sec) sec.classList.add('active');
      }
    }
  }

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

  // Show result count when searching
  const resultsDisplay = document.getElementById('search-results');
  if (resultsDisplay) {
    resultsDisplay.textContent = q ? `${results.length} result${results.length !== 1 ? 's' : ''} found` : '';
  }

  return results;
}

function initTimer() {
  timerSeconds = 53 * 60;
  const display = document.getElementById('timer-display');
  if (display) {
    display.textContent = formatTime(timerSeconds);
    display.setAttribute('aria-live', 'off');
    display.setAttribute('role', 'timer');
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  const display = document.getElementById('timer-display');
  if (display) display.setAttribute('aria-live', 'polite');

  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      if (display) {
        display.textContent = '0:00';
        display.style.color = '#e53e3e';
        display.setAttribute('aria-live', 'assertive');
      }
      // Flash the timer to alert user
      const widget = document.querySelector('.timer-widget');
      if (widget) widget.style.background = 'rgba(229, 62, 62, 0.3)';
      return;
    }
    timerSeconds--;
    if (display) display.textContent = formatTime(timerSeconds);

    // Warning at 5 minutes
    if (timerSeconds === 300 && display) {
      display.style.color = '#fbd38d';
    }
    // Critical at 1 minute
    if (timerSeconds === 60 && display) {
      display.style.color = '#fc8181';
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
  if (display) {
    display.textContent = formatTime(timerSeconds);
    display.style.color = '';
    display.setAttribute('aria-live', 'off');
  }
  const widget = document.querySelector('.timer-widget');
  if (widget) widget.style.background = '';
}

function formatTime(totalSeconds) {
  if (totalSeconds < 0) totalSeconds = 0;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    const content = header.nextElementSibling;
    const isOpen = header.parentElement.classList.contains('open');
    header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (content) content.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
      const nowOpen = item.classList.contains('open');
      header.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
      if (content) content.setAttribute('aria-hidden', nowOpen ? 'false' : 'true');
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

  if (bar) {
    bar.style.width = `${percentage.toFixed(2)}%`;
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-valuenow', checked);
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', total);
    bar.setAttribute('aria-label', `Study progress: ${checked} of ${total} sections completed`);
  }
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
