/**
 * @jest-environment jsdom
 */

// TDD Tests for CTE AI Trainer Interview Prep Site

describe('Interview Prep Site', () => {

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
  });

  describe('Data Module', () => {
    let data;

    beforeAll(() => {
      data = require('../js/data.js');
    });

    test('exports interviewData object', () => {
      expect(data.interviewData).toBeDefined();
      expect(typeof data.interviewData).toBe('object');
    });

    test('has all required sections', () => {
      const requiredSections = [
        'roleOverview',
        'cteBestPractices',
        'aiIntegration',
        'virtualClassroom',
        'assessmentStrategies',
        'interviewQuestions',
        'exercisePrep',
        'industryTrends',
        'quickReference'
      ];
      requiredSections.forEach(section => {
        expect(data.interviewData[section]).toBeDefined();
      });
    });

    test('roleOverview has title and key details', () => {
      const overview = data.interviewData.roleOverview;
      expect(overview.title).toBeDefined();
      expect(overview.keyPoints).toBeDefined();
      expect(Array.isArray(overview.keyPoints)).toBe(true);
      expect(overview.keyPoints.length).toBeGreaterThan(0);
    });

    test('interviewQuestions contains categorized questions', () => {
      const questions = data.interviewData.interviewQuestions;
      expect(Array.isArray(questions)).toBe(true);
      expect(questions.length).toBeGreaterThan(0);
      questions.forEach(q => {
        expect(q.question).toBeDefined();
        expect(q.category).toBeDefined();
        expect(q.guidance).toBeDefined();
      });
    });

    test('cteBestPractices has items with title and description', () => {
      const practices = data.interviewData.cteBestPractices;
      expect(Array.isArray(practices)).toBe(true);
      practices.forEach(p => {
        expect(p.title).toBeDefined();
        expect(p.description).toBeDefined();
      });
    });

    test('aiIntegration has items with practical examples', () => {
      const ai = data.interviewData.aiIntegration;
      expect(Array.isArray(ai)).toBe(true);
      ai.forEach(item => {
        expect(item.title).toBeDefined();
        expect(item.description).toBeDefined();
      });
    });

    test('exercisePrep has exercise types with preparation tips', () => {
      const exercises = data.interviewData.exercisePrep;
      expect(Array.isArray(exercises)).toBe(true);
      exercises.forEach(ex => {
        expect(ex.type).toBeDefined();
        expect(ex.description).toBeDefined();
        expect(ex.tips).toBeDefined();
        expect(Array.isArray(ex.tips)).toBe(true);
      });
    });
  });

  describe('App Module - Navigation', () => {
    let app;

    beforeEach(() => {
      document.body.innerHTML = `
        <nav id="main-nav">
          <button class="nav-btn active" data-section="overview">Overview</button>
          <button class="nav-btn" data-section="cte">CTE Practices</button>
          <button class="nav-btn" data-section="ai">AI Integration</button>
        </nav>
        <main id="content">
          <section id="section-overview" class="section active">Overview</section>
          <section id="section-cte" class="section">CTE</section>
          <section id="section-ai" class="section">AI</section>
        </main>
      `;
      // Re-require to reinitialize
      jest.resetModules();
      app = require('../js/app.js');
    });

    test('initNavigation sets up click handlers', () => {
      app.initNavigation();
      const cteBtn = document.querySelector('[data-section="cte"]');
      cteBtn.click();

      expect(cteBtn.classList.contains('active')).toBe(true);
      expect(document.querySelector('#section-cte').classList.contains('active')).toBe(true);
      expect(document.querySelector('#section-overview').classList.contains('active')).toBe(false);
    });

    test('switchSection activates correct section', () => {
      app.initNavigation();
      app.switchSection('ai');

      expect(document.querySelector('#section-ai').classList.contains('active')).toBe(true);
      expect(document.querySelector('[data-section="ai"]').classList.contains('active')).toBe(true);
    });

    test('switchSection deactivates previous section', () => {
      app.initNavigation();
      app.switchSection('cte');

      expect(document.querySelector('#section-overview').classList.contains('active')).toBe(false);
      expect(document.querySelector('[data-section="overview"]').classList.contains('active')).toBe(false);
    });
  });

  describe('App Module - Search/Filter', () => {
    let app;

    beforeEach(() => {
      document.body.innerHTML = `
        <input id="search-input" type="text" />
        <div id="search-results"></div>
        <div class="searchable-card" data-keywords="andragogy adult learning">
          <h3>Andragogy Principles</h3>
          <p>Adult learning theory by Malcolm Knowles</p>
        </div>
        <div class="searchable-card" data-keywords="AI integration curriculum">
          <h3>AI in CTE</h3>
          <p>Integrating artificial intelligence</p>
        </div>
      `;
      jest.resetModules();
      app = require('../js/app.js');
    });

    test('filterContent returns matching cards', () => {
      const results = app.filterContent('andragogy');
      expect(results.length).toBe(1);
    });

    test('filterContent is case-insensitive', () => {
      const results = app.filterContent('ADULT');
      expect(results.length).toBe(1);
    });

    test('filterContent returns all cards for empty query', () => {
      const results = app.filterContent('');
      expect(results.length).toBe(2);
    });

    test('filterContent shows result count in search-results div', () => {
      app.filterContent('andragogy');
      const resultsDiv = document.getElementById('search-results');
      expect(resultsDiv.textContent).toContain('1 result');
    });
  });

  describe('App Module - Timer', () => {
    let app;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="timer-display">53:00</div>
        <button id="timer-start">Start</button>
        <button id="timer-reset">Reset</button>
      `;
      jest.resetModules();
      jest.useFakeTimers();
      app = require('../js/app.js');
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('initTimer sets up 53-minute countdown', () => {
      app.initTimer();
      expect(document.getElementById('timer-display').textContent).toBe('53:00');
    });

    test('startTimer counts down', () => {
      app.initTimer();
      app.startTimer();
      jest.advanceTimersByTime(1000);
      expect(document.getElementById('timer-display').textContent).toBe('52:59');
    });

    test('resetTimer resets to 53:00', () => {
      app.initTimer();
      app.startTimer();
      jest.advanceTimersByTime(5000);
      app.resetTimer();
      expect(document.getElementById('timer-display').textContent).toBe('53:00');
    });

    test('timer does not go negative', () => {
      app.initTimer();
      app.startTimer();
      // Advance past zero (53 min + 10 extra seconds)
      jest.advanceTimersByTime((53 * 60 + 10) * 1000);
      expect(document.getElementById('timer-display').textContent).toBe('0:00');
    });
  });

  describe('App Module - Accordion', () => {
    let app;

    beforeEach(() => {
      document.body.innerHTML = `
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-header">Question 1</button>
            <div class="accordion-content">Answer 1</div>
          </div>
          <div class="accordion-item">
            <button class="accordion-header">Question 2</button>
            <div class="accordion-content">Answer 2</div>
          </div>
        </div>
      `;
      jest.resetModules();
      app = require('../js/app.js');
    });

    test('initAccordion sets up click handlers', () => {
      app.initAccordion();
      const header = document.querySelector('.accordion-header');
      header.click();
      expect(header.parentElement.classList.contains('open')).toBe(true);
    });

    test('clicking open accordion item closes it', () => {
      app.initAccordion();
      const header = document.querySelector('.accordion-header');
      header.click(); // open
      header.click(); // close
      expect(header.parentElement.classList.contains('open')).toBe(false);
    });

    test('accordion sets aria-expanded attributes', () => {
      app.initAccordion();
      const header = document.querySelector('.accordion-header');
      expect(header.getAttribute('aria-expanded')).toBe('false');
      header.click();
      expect(header.getAttribute('aria-expanded')).toBe('true');
      header.click();
      expect(header.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('App Module - Progress Tracker', () => {
    let app;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="progress-bar" style="width: 0%"></div>
        <span id="progress-text">0/9</span>
        <input type="checkbox" class="section-check" data-section="overview" />
        <input type="checkbox" class="section-check" data-section="cte" />
        <input type="checkbox" class="section-check" data-section="ai" />
      `;
      jest.resetModules();
      app = require('../js/app.js');
    });

    test('initProgress sets up checkbox handlers', () => {
      app.initProgress();
      const checkbox = document.querySelector('[data-section="overview"]');
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
      expect(document.getElementById('progress-text').textContent).toContain('1');
    });

    test('updateProgress calculates correct percentage', () => {
      app.initProgress();
      const checks = document.querySelectorAll('.section-check');
      checks[0].checked = true;
      checks[0].dispatchEvent(new Event('change'));
      checks[1].checked = true;
      checks[1].dispatchEvent(new Event('change'));
      // 2 of 3 checked
      const bar = document.getElementById('progress-bar');
      const width = parseFloat(bar.style.width);
      expect(width).toBeCloseTo(66.67, 0);
    });
  });
});
