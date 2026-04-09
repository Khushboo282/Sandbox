// ============================================================
//  BTS BANGTAN MUSIC PLAYER — APP LOGIC
// ============================================================

// ── State ─────────────────────────────────────────────────
let isSolo = false;
let currentAlbum = null;
let currentSongIndex = -1;
let isPlaying = false;
let progressInterval = null;
let fakeProgress = 0;
let audioCtx = null;

// ── DOM refs ──────────────────────────────────────────────
const albumToggle   = document.getElementById('albumToggle');
const groupSection  = document.getElementById('groupSection');
const soloSection   = document.getElementById('soloSection');
const groupGrid     = document.getElementById('groupGrid');
const soloGrid      = document.getElementById('soloGrid');
const labelGroup    = document.getElementById('label-group');
const labelSolo     = document.getElementById('label-solo');

const modalOverlay  = document.getElementById('modalOverlay');
const modal         = document.getElementById('modal');
const modalClose    = document.getElementById('modalClose');
const modalCover    = document.getElementById('modalCover');
const modalType     = document.getElementById('modalType');
const modalTitle    = document.getElementById('modalTitle');
const modalYear     = document.getElementById('modalYear');
const modalArtistEl = document.getElementById('modalArtistName');
const songList      = document.getElementById('songList');

const npSong        = document.getElementById('npSong');
const npArtist      = document.getElementById('npArtist');
const playBtn       = document.getElementById('playBtn');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const npVinyl       = document.getElementById('npVinyl');
const progressFill  = document.getElementById('progressFill');
const volSlider     = document.getElementById('volSlider');

// ── Init ─────────────────────────────────────────────────
function init() {
  renderAlbums(GROUP_ALBUMS, groupGrid, false);
  renderAlbums(SOLO_ALBUMS, soloGrid, true);
  bindEvents();
}

// ── Render Albums ─────────────────────────────────────────
function renderAlbums(albums, container, isSoloType) {
  container.innerHTML = '';
  albums.forEach((album, i) => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="album-cover" style="${album.cover}">
        <div class="album-cover-inner">
          <div class="album-emoji">${album.emoji}</div>
        </div>
        <div class="album-shine"></div>
        <div class="album-play-overlay"><span>▶</span></div>
      </div>
      <div class="album-info">
        ${isSoloType
          ? `<div class="album-artist-badge">${album.artist}</div>`
          : `<div class="album-type-badge">${album.type}</div>`
        }
        <div class="album-title">${album.title}</div>
        <div class="album-year">${album.year}</div>
        <div class="album-song-count">🎵 ${album.songs.length} track${album.songs.length !== 1 ? 's' : ''}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(album, isSoloType));
    container.appendChild(card);
  });
}

// ── Toggle ────────────────────────────────────────────────
albumToggle.addEventListener('click', () => {
  isSolo = !isSolo;
  albumToggle.classList.toggle('active', isSolo);

  if (isSolo) {
    groupSection.classList.add('hidden');
    soloSection.classList.remove('hidden');
    labelGroup.style.color = 'var(--muted)';
    labelSolo.style.color = 'var(--pink)';
  } else {
    soloSection.classList.add('hidden');
    groupSection.classList.remove('hidden');
    labelGroup.style.color = 'var(--purple)';
    labelSolo.style.color = 'var(--muted)';
  }
});

// ── Modal ─────────────────────────────────────────────────
function openModal(album, isSoloType) {
  currentAlbum = album;

  modalCover.style.background = album.cover;
  modalCover.textContent = album.emoji;
  modalType.textContent   = isSoloType ? `SOLO · ${album.type}` : `GROUP · ${album.type}`;
  modalTitle.textContent  = album.title;
  modalYear.textContent   = `📅 ${album.year}`;

  if (isSoloType) {
    modalArtistEl.textContent = `👤 ${album.artist}`;
    modalArtistEl.style.display = 'block';
  } else {
    modalArtistEl.style.display = 'none';
  }

  renderSongList(album);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Song List ─────────────────────────────────────────────
function renderSongList(album) {
  songList.innerHTML = '';
  album.songs.forEach((song, i) => {
    const li = document.createElement('li');
    li.className = 'song-item';
    if (currentAlbum === album && currentSongIndex === i) {
      li.classList.add('active');
    }

    const isActive = currentAlbum === album && currentSongIndex === i;
    li.innerHTML = `
      <span class="song-num">${String(i + 1).padStart(2,'0')}</span>
      <span class="song-name">${song}</span>
      ${isActive
        ? `<div class="eq-icon"><div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div></div>`
        : `<span class="song-play-icon">▶</span>`
      }
    `;
    li.addEventListener('click', () => playSong(album, i));
    songList.appendChild(li);
  });
}

// ── Player Logic ───────────────────────────────────────────
function playSong(album, index) {
  currentAlbum = album;
  currentSongIndex = index;
  isPlaying = true;

  const song = album.songs[index];
  const artist = album.artist || 'BTS';

  npSong.textContent   = song;
  npArtist.textContent = artist;
  playBtn.textContent  = '⏸';
  npVinyl.classList.add('spinning');

  fakeProgress = 0;
  startProgress();
  renderSongList(album);
  showToast(`▶ Now playing: ${song}`);

  // Subtle audio feedback (no src, just visual)
  playClickSound();
}

function togglePlay() {
  if (currentSongIndex === -1) {
    // Play first song of first album in current section
    const albums = isSolo ? SOLO_ALBUMS : GROUP_ALBUMS;
    playSong(albums[0], 0);
    return;
  }
  isPlaying = !isPlaying;
  if (isPlaying) {
    playBtn.textContent = '⏸';
    npVinyl.classList.add('spinning');
    startProgress();
  } else {
    playBtn.textContent = '▶';
    npVinyl.classList.remove('spinning');
    stopProgress();
  }
}

function startProgress() {
  stopProgress();
  progressInterval = setInterval(() => {
    if (!isPlaying) return;
    fakeProgress += 0.04;
    if (fakeProgress >= 100) {
      fakeProgress = 0;
      playNext();
      return;
    }
    progressFill.style.width = fakeProgress + '%';
  }, 100);
}

function stopProgress() {
  if (progressInterval) clearInterval(progressInterval);
}

function playNext() {
  if (!currentAlbum) return;
  let next = currentSongIndex + 1;
  if (next >= currentAlbum.songs.length) {
    // Move to next album
    const albums = isSolo ? SOLO_ALBUMS : GROUP_ALBUMS;
    const albumIdx = albums.findIndex(a => a.id === currentAlbum.id);
    const nextAlbum = albums[(albumIdx + 1) % albums.length];
    playSong(nextAlbum, 0);
  } else {
    playSong(currentAlbum, next);
  }
}

function playPrev() {
  if (!currentAlbum) return;
  if (fakeProgress > 5) {
    // Restart current song
    fakeProgress = 0;
    progressFill.style.width = '0%';
    return;
  }
  let prev = currentSongIndex - 1;
  if (prev < 0) {
    const albums = isSolo ? SOLO_ALBUMS : GROUP_ALBUMS;
    const albumIdx = albums.findIndex(a => a.id === currentAlbum.id);
    const prevAlbum = albums[(albumIdx - 1 + albums.length) % albums.length];
    playSong(prevAlbum, prevAlbum.songs.length - 1);
  } else {
    playSong(currentAlbum, prev);
  }
}

// ── Audio Click Feedback ──────────────────────────────────
function playClickSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch(e) {}
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── Event Bindings ────────────────────────────────────────
function bindEvents() {
  playBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', playNext);
  prevBtn.addEventListener('click', playPrev);
  volSlider.addEventListener('input', e => {
    const v = e.target.value;
    // Volume feedback (no actual audio)
    volSlider.style.background = `linear-gradient(90deg, var(--purple) ${v}%, var(--surface2) ${v}%)`;
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') playNext();
    if (e.code === 'ArrowLeft') playPrev();
  });
}

// ── Start ─────────────────────────────────────────────────
init();