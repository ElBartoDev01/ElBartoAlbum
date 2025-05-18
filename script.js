const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const spotifyLink = document.getElementById('spotify-link');
const disc = document.querySelector('.logo-container');

let isPlaying = false;

const songs = [
  {
    title: 'Canción 1',
    spotifyUrl: 'https://open.spotify.com/track/1', // Cambia con link real
  },
  {
    title: 'Canción 2',
    spotifyUrl: 'https://open.spotify.com/track/2',
  },
  {
    title: 'Canción 3',
    spotifyUrl: 'https://open.spotify.com/track/3',
  },
];

let currentSongIndex = 0;

function updateSpotifyLink() {
  spotifyLink.href = songs[currentSongIndex].spotifyUrl;
}

function playSong() {
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';
  disc.style.animationPlayState = 'running';
  // Aquí puedes agregar reproducción real si quieres
}

function pauseSong() {
  isPlaying = false;
  playPauseBtn.textContent = '▶️';
  disc.style.animationPlayState = 'paused';
  // Aquí puedes pausar audio real
}

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSpotifyLink();
  if (isPlaying) playSong();
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSpotifyLink();
  if (isPlaying) playSong();
});

// Inicializar link
updateSpotifyLink();
// Pausar disco al inicio
disc.style.animationPlayState = 'paused';

