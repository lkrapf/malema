// ── State ──
const STATE_KEY = 'mathe-trainer-state';
const modules = {};
let state;

function defaultState() {
  return {
    stars: 0,
    streak: 0,
    moduleLevels: {},   // { moduleId: number }
    moduleHistory: {},  // { moduleId: [bool, ...] } rolling window of 5
    equipped: {},       // { category: itemId }
    unlocked: [],       // [itemId, ...]
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      state = { ...defaultState(), ...JSON.parse(raw) };
      return;
    }
  } catch {}
  state = defaultState();
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// ── Module Registry ──
function registerModule(mod) {
  modules[mod.id] = mod;
}

function getLevel(moduleId) {
  return state.moduleLevels[moduleId] || 1;
}

function recordAnswer(moduleId, correct) {
  if (!state.moduleHistory[moduleId]) state.moduleHistory[moduleId] = [];
  const hist = state.moduleHistory[moduleId];
  hist.push(correct);
  if (hist.length > 5) hist.shift();

  const correctCount = hist.filter(Boolean).length;
  const level = getLevel(moduleId);

  if (hist.length === 5) {
    if (correctCount >= 4 && level < 20) {
      state.moduleLevels[moduleId] = level + 1;
      state.moduleHistory[moduleId] = [];
    } else if (correctCount <= 1 && level > 1) {
      state.moduleLevels[moduleId] = level - 1;
      state.moduleHistory[moduleId] = [];
    }
  }
}

// ── Screen Management ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ── Header ──
function updateHeader() {
  document.getElementById('star-display').textContent = state.stars;
  const streakEl = document.getElementById('streak-display');
  streakEl.textContent = state.streak > 1 ? state.streak : '';
}

// ── Home Screen ──
function renderHome() {
  updateHeader();
  const grid = document.getElementById('module-grid');
  grid.innerHTML = '';

  for (const mod of Object.values(modules)) {
    const level = getLevel(mod.id);
    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-icon">${mod.icon}</div>
      <div class="module-name">${mod.name}</div>
      <div class="module-level">Stufe ${level}</div>
      <div class="module-level-bar"><div class="module-level-fill" style="width:${level * 5}%"></div></div>
    `;
    card.onclick = () => startQuiz(mod.id);
    grid.appendChild(card);
  }

  renderAvatarPreview(document.getElementById('avatar-preview-home'), 100);
  showScreen('home');
}

// ── Quiz ──
const QUESTIONS_PER_ROUND = 10;
let quiz = { moduleId: null, questions: [], current: 0, score: 0 };

function startQuiz(moduleId) {
  const mod = modules[moduleId];
  const level = getLevel(moduleId);
  quiz = { moduleId, questions: [], current: 0, score: 0 };

  for (let i = 0; i < QUESTIONS_PER_ROUND; i++) {
    quiz.questions.push(mod.generate(level));
  }

  document.getElementById('quiz-module-name').textContent = mod.name;
  document.getElementById('quiz-level').textContent = 'Stufe ' + level;
  showScreen('quiz');
  showQuestion();
}

function showQuestion() {
  const q = quiz.questions[quiz.current];
  document.getElementById('progress-fill').style.width = ((quiz.current / QUESTIONS_PER_ROUND) * 100) + '%';
  if (q.html) {
    document.getElementById('quiz-problem').innerHTML = q.html;
  } else {
    document.getElementById('quiz-problem').textContent = q.text;
  }
  document.getElementById('quiz-feedback').textContent = '';

  const container = document.getElementById('quiz-choices');
  container.innerHTML = '';

  const choices = q.choices || generateChoices(q.answer);
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = c;
    btn.onclick = () => handleAnswer(btn, c, q.answer, container);
    container.appendChild(btn);
  });
}

function generateChoices(answer) {
  const choices = new Set([answer]);
  while (choices.size < 4) {
    const offset = Math.floor(Math.random() * Math.max(10, Math.abs(answer) * 0.3)) + 1;
    const candidate = answer + (Math.random() < 0.5 ? offset : -offset);
    if (candidate >= 0) choices.add(candidate);
  }
  return shuffle([...choices]);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function handleAnswer(btn, chosen, correct, container) {
  const buttons = container.querySelectorAll('.choice-btn');
  buttons.forEach(b => b.classList.add('disabled'));

  const isCorrect = chosen === correct;

  if (isCorrect) {
    btn.classList.add('correct');
    document.getElementById('quiz-feedback').textContent = 'Richtig!';
    quiz.score++;
    state.streak++;
  } else {
    btn.classList.add('wrong');
    btn.classList.add('shake');
    buttons.forEach(b => { if (parseInt(b.textContent) === correct) b.classList.add('correct'); });
    document.getElementById('quiz-feedback').textContent = `${correct} war richtig`;
    state.streak = 0;
  }

  recordAnswer(quiz.moduleId, isCorrect);
  saveState();
  updateHeader();

  // Check for streak reward (every 10)
  const showCat = isCorrect && state.streak > 0 && state.streak % 10 === 0;

  setTimeout(() => {
    if (showCat) {
      showCatReward(state.streak, () => {
        advanceQuiz();
      });
    } else {
      advanceQuiz();
    }
  }, 1000);
}

function advanceQuiz() {
  quiz.current++;
  if (quiz.current < QUESTIONS_PER_ROUND) {
    showQuestion();
  } else {
    showResult();
  }
}

// ── Cat Reward ──
function showCatReward(streak, callback) {
  const overlay = document.getElementById('cat-overlay');
  const img = document.getElementById('cat-img');
  const title = document.getElementById('cat-title');
  const closeBtn = document.getElementById('cat-close');

  title.textContent = `${streak}er Streak! Hier ist deine Katze:`;
  img.src = '';
  overlay.classList.remove('hidden');

  fetch('https://api.thecatapi.com/v1/images/search')
    .then(r => r.json())
    .then(data => {
      if (data && data[0] && data[0].url) {
        img.src = data[0].url;
      }
    })
    .catch(() => {
      title.textContent = `${streak}er Streak! (Katze nicht erreichbar)`;
    });

  closeBtn.onclick = () => {
    overlay.classList.add('hidden');
    img.src = '';
    callback();
  };
}

// ── Result ──
function showResult() {
  const score = quiz.score;
  let stars = 0;
  if (score >= 8) stars = 3;
  else if (score >= 6) stars = 2;
  else if (score >= 4) stars = 1;

  state.stars += stars;
  saveState();
  updateHeader();

  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('result-title').textContent =
    stars >= 3 ? 'Super!' : stars >= 2 ? 'Gut gemacht!' : stars >= 1 ? 'Weiter so!' : 'Uebe weiter!';
  document.getElementById('result-stars').textContent =
    (stars > 0 ? '\u2B50'.repeat(stars) : '\u2014');
  document.getElementById('result-score').textContent = `${score} von ${QUESTIONS_PER_ROUND} richtig`;

  document.getElementById('btn-retry').onclick = () => startQuiz(quiz.moduleId);
  document.getElementById('btn-home').onclick = () => renderHome();

  showScreen('result');

  if (stars >= 2) launchConfetti();
}

// ── Confetti ──
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#6c5ce7', '#00b894', '#fdcb6e', '#e17055', '#74b9ff', '#fd79a8'];

  for (let i = 0; i < 80; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 6 + Math.random() * 6,
      h: 10 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 2 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 3,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.2,
    });
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.vy += 0.05;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    frame++;
    if (alive && frame < 180) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderHome();

  document.getElementById('header-home-btn').onclick = () => renderHome();
  document.getElementById('btn-wardrobe').onclick = () => renderWardrobe();
  document.getElementById('btn-wardrobe-back').onclick = () => renderHome();
  document.getElementById('btn-reset').onclick = () => {
    if (confirm('Wirklich alles zuruecksetzen? Alle Sterne, Stufen und Kleidung gehen verloren!')) {
      localStorage.removeItem(STATE_KEY);
      state = defaultState();
      renderHome();
    }
  };
});
