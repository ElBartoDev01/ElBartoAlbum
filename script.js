const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const spotifyLink = document.getElementById('spotify-link');
const disc = document.querySelector('.logo-container');

let isPlaying = false;

const songs = [
  {
    title: 'Canción 1',
    file: 'Audio/Cancion1.mp3',
    spotifyUrl: 'https://open.spotify.com/track/1', // Cambia con link real
  },
  {
    title: 'Canción 2',
    file: 'Audio/Cancion2.mp3',
    spotifyUrl: 'https://open.spotify.com/track/2',
  },
  {
    title: 'Canción 3',
    file: 'Audio/Cancion3.mp3',
    spotifyUrl: 'https://open.spotify.com/track/3',
  },
];

let currentSongIndex = 0;
let audio = new Audio();
audio.src = songs[currentSongIndex].file;

function updateSpotifyLink() {
  spotifyLink.href = songs[currentSongIndex].spotifyUrl;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';
  disc.style.animationPlayState = 'running';
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = '▶️';
  disc.style.animationPlayState = 'paused';
}

function loadSong(index) {
  currentSongIndex = index;
  audio.src = songs[currentSongIndex].file;
  updateSpotifyLink();
  if (isPlaying) {
    audio.play();
  }
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
  loadSong(currentSongIndex);
});

nextBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
});

// Cuando termina una canción, pasar a la siguiente automáticamente
audio.addEventListener('ended', () => {
  nextBtn.click();
});

// Inicialización
updateSpotifyLink();
disc.style.animationPlayState = 'paused';


