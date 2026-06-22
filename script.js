const btsUniverseFortunes = [
  { song: 'Magic Shop', message: '把疲憊暫時交給宇宙，今天也有一扇門為你打開。', lyrics: 'You gave me the best of me', cover: './assets/covers/tear.png', spotify: 'https://open.spotify.com/track/5MTGPkmiUuud9NkA0sl2nI', apple: 'https://music.apple.com/tw/song/magic-shop/1598661252' },
  { song: 'Mikrokosmos', message: '你不是微小的光，你本身就是一整片星河。', lyrics: 'You got me, I dream while looking at you', cover: './assets/covers/persona.png', spotify: 'https://open.spotify.com/track/0jSccBRnhNU4KtACMQPvco', apple: 'https://music.apple.com/tw/song/mikrokosmos/1599172213' },
  { song: 'Spring Day', message: '等待不是停下，而是在心裡替春天留位置。', lyrics: 'You know it all, you are my best friend', cover: './assets/covers/ynwa.png', spotify: 'https://open.spotify.com/track/2j1fFjWHCI9KJSwcuYAOyF', apple: 'https://music.apple.com/tw/song/spring-day/1596529381' },
  { song: 'Life Goes On', message: '就算世界慢了下來，你的日子仍會溫柔往前。', lyrics: 'Like an echo in the forest', cover: './assets/covers/be.png', spotify: 'https://open.spotify.com/track/5FVbvttjEvQ8r2BgUcJgNg', apple: 'https://music.apple.com/tw/song/life-goes-on/1596532189' },
  { song: 'Answer: Love Myself', message: '今天的答案很簡單：先好好站在自己這邊。', lyrics: 'I should love myself', cover: './assets/covers/answer.png', spotify: 'https://open.spotify.com/track/2X3UgVLSA4wYriGIQyYmMA', apple: 'https://music.apple.com/tw/song/answer-love-myself/1598730982' },
  { song: '00:00 (Zero O Clock)', message: '當指針歸零，新的你也能重新開始。', lyrics: 'And you gonna be happy', cover: './assets/covers/7.png', spotify: 'https://open.spotify.com/track/6fqaMyg066xlukvUJWdM2T', apple: 'https://music.apple.com/tw/song/00-00-zero-oclock/1599362879' },
  { song: 'Epiphany', message: '你不需要成為誰的光，先承認自己已經閃亮。', lyrics: 'I am the one I should love', cover: './assets/covers/answer.png', spotify: 'https://open.spotify.com/track/6L88EH68XwlaXwvChlTS41', apple: 'https://music.apple.com/tw/song/epiphany/1598730973' },
  { song: 'Whalien 52', message: '即使此刻孤單，你的頻率仍會被懂的人聽見。', lyrics: 'Lonely lonely lonely whale', cover: './assets/covers/her.png', spotify: 'https://open.spotify.com/track/08E3m98Xw7X0867X7y3w3w', apple: 'https://music.apple.com/tw/song/whalien-52/1598662268' },
  { song: 'Stay Gold', message: '請保留心裡那一點金色，它會帶你穿過霧。', lyrics: 'Stay gold', cover: './assets/covers/mos journey.png', spotify: 'https://open.spotify.com/track/0UwQTbq7ZtBJ7v530mpaxP', apple: 'https://music.apple.com/tw/song/stay-gold/1517969555' },
  { song: 'Yet To Come', message: '別急著判定結局，最好的時刻正在靠近。', lyrics: 'Best moment is yet to come', cover: './assets/covers/proof.png', spotify: 'https://open.spotify.com/track/10SRMwb9EuVS1K9rYsBfHQ', apple: 'https://music.apple.com/tw/song/yet-to-come/1627575774' },
  { song: 'Dynamite', message: '今天適合把心情點亮，哪怕只是小小一步。', lyrics: 'Light it up like dynamite', cover: './assets/covers/be.png', spotify: 'https://open.spotify.com/track/5QDLhrAOJJdNAmCTJ8xMyW', apple: 'https://music.apple.com/tw/song/dynamite/1596532400' },
  { song: 'Butter', message: '用你的節奏滑過難題，漂亮又不費力。', lyrics: 'Smooth like butter', cover: './assets/covers/butter.png', spotify: 'https://open.spotify.com/track/1mWdTewIgB3gtBM3TOSFhB', apple: 'https://music.apple.com/tw/song/butter/1598660389' },
  { song: 'Permission to Dance', message: '宇宙批准你暫停煩惱，先讓身體記得快樂。', lyrics: 'We do not need permission to dance', cover: './assets/covers/ptd.png', spotify: 'https://open.spotify.com/track/43Y0lr2rcWirZysfT26JY5', apple: 'https://music.apple.com/tw/song/permission-to-dance/1598661441' },
  { song: 'ON', message: '壓力越大，越要相信你走到這裡的力量。', lyrics: 'Bring the pain on', cover: './assets/covers/7.png', spotify: 'https://open.spotify.com/track/2QyuXBcV1LJ2rq01KhreMF', apple: 'https://music.apple.com/tw/song/on/1599362877' },
  { song: 'IDOL', message: '別把自己縮小，今天就大方成為你自己。', lyrics: 'You cannot stop me loving myself', cover: './assets/covers/answer.png', spotify: 'https://open.spotify.com/track/1e8J3XClxZbFmvIHLI8CE4', apple: 'https://music.apple.com/tw/song/idol/1598730980' }
];

const stickImages = [
  'https://cdn.phototourl.com/free/2026-05-22-0efee3fc-92ff-480d-94f5-fae4e7f04cf3.png',
  'https://cdn.phototourl.com/free/2026-05-22-118b233f-cb41-4c59-9a5b-815b912118ef.png',
  'https://cdn.phototourl.com/free/2026-05-22-0e867a3a-ce36-48e9-bccc-551187c7fccc.png',
  'https://cdn.phototourl.com/free/2026-05-22-60d064d9-4981-4adf-a1a3-389d0e328cda.png',
  'https://cdn.phototourl.com/free/2026-05-22-0d3b7bea-228a-401d-8da7-f7c66d5f932c.png'
];

const FORTUNE_HISTORY_KEY = 'btsUniverseFortuneHistory';
const MAX_HISTORY_ITEMS = 10;
const DEFAULT_VOLUME = 0.5;

let isDrawing = false;
let currentResult = null;

const bgMusic = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');
const bucketWrapper = document.getElementById('fortune-bucket');
const flyingStick = document.getElementById('flying-stick');
const hintText = document.getElementById('hint-text');
const retryBtn = document.querySelector('.retry-btn');
const saveCardBtn = document.getElementById('save-card-btn');
const settingsToggle = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const volumeSlider = document.getElementById('music-volume');
const visitorCountEl = document.getElementById('visitor-count');
const historyToggle = document.getElementById('history-toggle');
const historyPanel = document.getElementById('history-panel');
const historyListEl = document.getElementById('history-list');
const historyCountEl = document.getElementById('history-count');

initNightSky();
initMusicSettings();
initVisitorCount();
initFortuneHistory();
preloadAssets();

if (startBtn) {
  startBtn.addEventListener('click', () => {
    switchPage('page-draw');
    playBgMusic();
  });
}

if (retryBtn) {
  retryBtn.addEventListener('click', () => {
    isDrawing = false;
    if (flyingStick) flyingStick.classList.remove('shoot-up');
    document.getElementById('page-draw')?.classList.remove('mystic-transition');
    if (hintText) hintText.innerText = '▼ 輕觸木質籤筒・抽取宇宙解答 ▼';
    switchPage('page-draw');
  });
}

if (saveCardBtn) {
  saveCardBtn.addEventListener('click', downloadFortuneImage);
}

if (bucketWrapper) {
  bucketWrapper.addEventListener('click', startDrawingAnimation);
  bucketWrapper.querySelector('.bucket-img')?.addEventListener('click', event => {
    event.stopPropagation();
    startDrawingAnimation();
  });
}

function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId)?.classList.add('active');
}

function startDrawingAnimation() {
  if (isDrawing) return;
  isDrawing = true;

  const drawPage = document.getElementById('page-draw');
  const shakeSound = document.getElementById('shake-sound');
  drawPage?.classList.add('mystic-transition');
  if (hintText) hintText.innerText = '宇宙星軌正在排列你的答案...';
  bucketWrapper?.classList.add('shake-animation');

  if (shakeSound) {
    shakeSound.currentTime = 0;
    shakeSound.loop = true;
    shakeSound.play().catch(() => {});
  }

  setTimeout(() => {
    bucketWrapper?.classList.remove('shake-animation');
    if (shakeSound) {
      shakeSound.pause();
      shakeSound.currentTime = 0;
    }

    if (flyingStick) {
      flyingStick.src = randomItem(stickImages);
      flyingStick.classList.remove('shoot-up');
      void flyingStick.offsetWidth;
      flyingStick.classList.add('shoot-up');
    }

    setTimeout(showRandomResult, 1300);
  }, 1200);
}

function showRandomResult() {
  const result = randomItem(btsUniverseFortunes);
  currentResult = result;

  setText('res-message', result.message);
  setText('res-song-name', result.song);
  setText('res-lyrics', `「${result.lyrics}」`);
  const cover = document.getElementById('res-cover');
  if (cover) cover.src = result.cover;
  const spotify = document.getElementById('link-spotify');
  const apple = document.getElementById('link-apple');
  if (spotify) spotify.href = result.spotify;
  if (apple) apple.href = result.apple;

  addFortuneToHistory(result);
  document.getElementById('page-draw')?.classList.remove('mystic-transition');
  switchPage('page-result');
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.innerText = text;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function preloadAssets() {
  [...stickImages, ...btsUniverseFortunes.map(item => item.cover), './assets/bts.jpg'].forEach(src => {
    const image = new Image();
    image.src = src;
  });
  if (bgMusic) bgMusic.preload = 'auto';
  const shakeSound = document.getElementById('shake-sound');
  if (shakeSound) shakeSound.preload = 'auto';
}

function initFortuneHistory() {
  renderFortuneHistory();
  if (!historyToggle || !historyPanel) return;

  historyToggle.addEventListener('click', () => {
    const isOpen = !historyPanel.classList.contains('is-collapsed');
    historyPanel.classList.toggle('is-collapsed', isOpen);
    historyToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

function addFortuneToHistory(result) {
  const history = readFortuneHistory();
  history.unshift({ song: result.song, message: result.message, cover: result.cover, createdAt: Date.now() });
  saveFortuneHistory(history.slice(0, MAX_HISTORY_ITEMS));
  renderFortuneHistory();
}

function readFortuneHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FORTUNE_HISTORY_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY_ITEMS) : [];
  } catch {
    return [];
  }
}

function saveFortuneHistory(history) {
  try {
    localStorage.setItem(FORTUNE_HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

function renderFortuneHistory() {
  const history = readFortuneHistory();
  if (historyCountEl) historyCountEl.innerText = String(history.length);
  if (!historyListEl) return;

  if (!history.length) {
    historyListEl.innerHTML = '<p class="history-empty">還沒有抽籤紀錄</p>';
    return;
  }

  historyListEl.innerHTML = history.map(item => `
    <article class="history-item">
      <img src="${escapeAttribute(item.cover)}" alt="" loading="lazy">
      <div>
        <h3>${escapeHtml(item.song)}</h3>
        <p>${escapeHtml(item.message)}</p>
      </div>
    </article>
  `).join('');
}

function initMusicSettings() {
  if (bgMusic) bgMusic.volume = Number(localStorage.getItem('btsUniverseVolume') || DEFAULT_VOLUME);
  if (volumeSlider && bgMusic) {
    volumeSlider.value = String(bgMusic.volume);
    volumeSlider.addEventListener('input', () => {
      bgMusic.volume = Number(volumeSlider.value);
      bgMusic.muted = bgMusic.volume === 0;
      localStorage.setItem('btsUniverseVolume', String(bgMusic.volume));
      updateMutedState();
    });
  }

  settingsToggle?.addEventListener('click', () => {
    if (!bgMusic) return;
    bgMusic.muted = !bgMusic.muted;
    updateMutedState();
    playBgMusic();
  });

  updateMutedState();
}

function updateMutedState() {
  const isMuted = !bgMusic || bgMusic.muted || bgMusic.volume === 0;
  settingsToggle?.classList.toggle('is-muted', isMuted);
}

function playBgMusic() {
  if (!bgMusic || bgMusic.muted) return;
  bgMusic.play().catch(() => {});
}

function initVisitorCount() {
  if (!visitorCountEl) return;
  const key = 'btsUniverseVisitorCount';
  const count = Number(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(count));
  visitorCountEl.innerHTML = `<span class="visitor-count-label">瀏覽人數</span><span>${count}</span>`;
}

function initNightSky() {
  const canvas = document.getElementById('night-sky');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let stars = [];
  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    stars = Array.from({ length: Math.min(120, Math.floor(window.innerWidth / 4)) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 1.8 + 0.5) * window.devicePixelRatio,
      a: Math.random() * 0.7 + 0.25,
      s: Math.random() * 0.015 + 0.004
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.a += star.s;
      if (star.a > 1 || star.a < 0.25) star.s *= -1;
      ctx.globalAlpha = star.a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener('resize', resize);
  draw();
}

async function downloadFortuneImage() {
  const card = document.querySelector('.universe-card-bg');
  if (!card) return;

  const blob = new Blob([card.outerHTML], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `BTS宇宙籤詩-${safeFilename(currentResult?.song || 'fortune')}.html`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function safeFilename(value) {
  return String(value).replace(/[\\/:*?"<>|]/g, '-').slice(0, 40);
}
