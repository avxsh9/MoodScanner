const moods = [
  {
    emoji: '💖',
    title: 'Missing you but won\'t admit',
    description: 'She\'s thinking about you but too stubborn to say it first. Good luck, soldier.',
    stats: {
      attitude: 87,
      sweetness: 65,
      ignoring: 45,
      roastPower: 72
    }
  },
  {
    emoji: '😤',
    title: 'Roast karne wali hai. Brace yourself.',
    description: 'Danger zone activated. Every word you say can and will be used against you.',
    stats: {
      attitude: 120,
      sweetness: 20,
      ignoring: 85,
      roastPower: 9000
    }
  },
  {
    emoji: '💋',
    title: 'Babu ko call kar de',
    description: 'She wants attention RIGHT NOW. Drop everything and respond immediately.',
    stats: {
      attitude: 40,
      sweetness: 95,
      ignoring: 10,
      roastPower: 25
    }
  },
  {
    emoji: '🤭',
    title: 'Thoda attitude hai, par pyaar bhi utna hi',
    description: 'Perfect balance of sass and sweetness. Handle with care and humor.',
    stats: {
      attitude: 75,
      sweetness: 78,
      ignoring: 35,
      roastPower: 60
    }
  },
  {
    emoji: '😑',
    title: 'Aaj ignore mode ON',
    description: 'You did something. Or didn\'t do something. Either way, you\'re in trouble.',
    stats: {
      attitude: 95,
      sweetness: 15,
      ignoring: 140,
      roastPower: 85
    }
  },
  {
    emoji: '😂',
    title: 'Aaj hassi-mazaak chalu hai',
    description: 'Fun mode activated! Perfect time for memes and stupid jokes.',
    stats: {
      attitude: 30,
      sweetness: 88,
      ignoring: 5,
      roastPower: 40
    }
  },
  {
    emoji: '🥺',
    title: 'Thoda emotional. Treat carefully.',
    description: 'Soft mood detected. Be extra sweet and supportive right now.',
    stats: {
      attitude: 25,
      sweetness: 92,
      ignoring: 20,
      roastPower: 15
    }
  },
  {
    emoji: '🔥',
    title: 'Overthinking about you',
    description: 'Her mind is running wild. Reassurance needed ASAP.',
    stats: {
      attitude: 60,
      sweetness: 70,
      ignoring: 50,
      roastPower: 55
    }
  },
  {
    emoji: '😘',
    title: 'Wants attention from YOU',
    description: 'She\'s in her cute phase. Maximum affection mode engaged.',
    stats: {
      attitude: 35,
      sweetness: 98,
      ignoring: 8,
      roastPower: 20
    }
  },
  {
    emoji: '👑',
    title: 'Queen mode activated',
    description: 'She knows her worth. Compliments and appreciation recommended.',
    stats: {
      attitude: 110,
      sweetness: 55,
      ignoring: 65,
      roastPower: 90
    }
  }
];

const scanningSteps = [
  { text: '> Initializing Mood Scanner 3000...', delay: 800 },
  { text: '> Loading advanced girlfriend AI algorithms...', delay: 600 },
  { text: '> ', delay: 300 },
  { text: '> [STEP 1] Scanning vibe waves...', delay: 700, highlight: true },
  { text: '> Detecting emotional frequency: 528 Hz', delay: 500 },
  { text: '> Vibe status: ✓ LOCKED', delay: 400 },
  { text: '> ', delay: 200 },
  { text: '> [STEP 2] Checking WhatsApp last seen...', delay: 700, highlight: true },
  { text: '> Last seen: Online but ignoring you 🔥', delay: 600 },
  { text: '> Typing status: ...', delay: 500 },
  { text: '> Double blue tick: Seen but not replied 👀', delay: 500 },
  { text: '> ', delay: 200 },
  { text: '> [STEP 3] Decrypting emojis she uses most...', delay: 700, highlight: true },
  { text: '> Most used: 😂 😭 ❤️ 🔥 🥺 😑 😒 😳', delay: 600 },
  { text: '> Emoji pattern: CHAOTIC CUTE', delay: 400 },
  { text: '> ', delay: 200 },
  { text: '> [STEP 4] Analyzing attitude level...', delay: 700, highlight: true },
  { text: '> Calculating sass percentage...', delay: 500 },
  { text: '> Processing roast power...', delay: 500 },
  { text: '> Measuring sweetness index...', delay: 500 },
  { text: '> ', delay: 200 },
  { text: '> [STEP 5] Calculating boyfriend effect...', delay: 700, highlight: true },
  { text: '> You messaged? Mood improving...', delay: 500 },
  { text: '> You said sorry? Predictor confused...', delay: 500 },
  { text: '> Effect multiplier: UNPREDICTABLE', delay: 400 },
  { text: '> ', delay: 200 },
  { text: '> [STEP 6] Universe se confirmation le raha...', delay: 700, highlight: true },
  { text: '> Connecting to cosmic database...', delay: 600 },
  { text: '> Universe says: Good luck bro 😭🔥', delay: 700 },
  { text: '> ', delay: 300 },
  { text: '> ████████████████████ 100%', delay: 500, loading: true },
  { text: '> ', delay: 200 },
  { text: '> MOOD ANALYSIS COMPLETE ✓', delay: 500, highlight: true }
];

let currentMood = null;

function typeText(element, text, index = 0, callback) {
    const terminalEl = element.closest('.terminal'); // find terminal container
    if (index < text.length) {
      element.textContent += text[index];
      // auto-scroll to bottom of terminal while typing
      if (terminalEl) {
        terminalEl.scrollTop = terminalEl.scrollHeight;
      }
      setTimeout(() => typeText(element, text, index + 1, callback), 20);
    } else if (callback) {
      // ensure final scroll after typing finished
      if (terminalEl) terminalEl.scrollTop = terminalEl.scrollHeight;
      callback();
    }
  }
  

async function runScanningSequence() {
  const terminalText = document.getElementById('terminalText');
  terminalText.innerHTML = '';

  for (let step of scanningSteps) {
    await new Promise(resolve => {
      const line = document.createElement('div');

      if (step.highlight) {
        line.className = 'highlight';
      } else if (step.loading) {
        line.className = 'loading';
      }

      terminalText.appendChild(line);
      typeText(line, step.text, 0, () => {
        setTimeout(resolve, step.delay);
      });
    });
  }
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 150;
  const colors = ['#ff006e', '#8338ec', '#3a86ff', '#fb5607', '#ffbe0b'];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = -10;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 3 + 2;
      this.speedX = Math.random() * 2 - 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 10 - 5;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > canvas.height) {
        this.y = -10;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrames = 0;
  const maxFrames = 180;

  function animate() {
    if (animationFrames >= maxFrames) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    animationFrames++;
    requestAnimationFrame(animate);
  }

  animate();
}

function showResult(mood) {
  const moodResult = document.getElementById('moodResult');
  const moodDescription = document.getElementById('moodDescription');
  const statsGrid = document.getElementById('statsGrid');

  moodResult.textContent = `${mood.emoji} ${mood.title}`;
  moodDescription.textContent = mood.description;

  statsGrid.innerHTML = `
    <div class="stat-item">
      <div class="stat-label">Attitude Level</div>
      <div class="stat-value">${mood.stats.attitude}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Sweetness</div>
      <div class="stat-value">${mood.stats.sweetness}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Ignoring Energy</div>
      <div class="stat-value">${mood.stats.ignoring}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Roast Power</div>
      <div class="stat-value">${mood.stats.roastPower}${mood.stats.roastPower > 1000 ? '+' : '%'}</div>
    </div>
  `;

  document.getElementById('loadingScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');

  setTimeout(() => {
    launchConfetti();
  }, 300);
}

async function predictMood() {
  const mainScreen = document.getElementById('mainScreen');
  const loadingScreen = document.getElementById('loadingScreen');

  mainScreen.classList.add('hidden');
  loadingScreen.classList.remove('hidden');

  await runScanningSequence();

  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  currentMood = randomMood;

  setTimeout(() => {
    showResult(randomMood);
  }, 500);
}

function resetApp() {
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('mainScreen').classList.remove('hidden');
  document.getElementById('moodInput').value = '';
}

document.getElementById('predictBtn').addEventListener('click', predictMood);
document.getElementById('predictAgain').addEventListener('click', resetApp);

document.getElementById('moodInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    predictMood();
  }
});

const title = document.querySelector('.title');
let clickCount = 0;
let clickTimer = null;

title.addEventListener('click', () => {
  clickCount++;

  if (clickTimer) {
    clearTimeout(clickTimer);
  }

  if (clickCount === 2) {
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 500);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
      }
    `;
    document.head.appendChild(style);

    clickCount = 0;
    launchConfetti();
  }

  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 500);
});
