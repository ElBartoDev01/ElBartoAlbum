// script.js

const songs = [
  {
    title: "Boing",
    cover: "texture/bart.jpg",
    audio: "audio/Boing.mp3",
    spotify: "https://open.spotify.com/track/xyz1"
  },
  {
    title: "Regresa Cuadrada Bit...",
    cover: "texture/regresa_cuadrada_bit.jpeg",
    audio: "audio/Regresa Cuadrada Bit.mpeg",
    spotify: "https://open.spotify.com/track/xyz2"
  },
  {
    title: "Papeador Nocturno",
    cover: "texture/papeador_nocturno.jpeg",
    audio: "audio/Papeador Nocturno.mp3",
    spotify: "https://open.spotify.com/track/xyz3"
  }
];

let currentSongIndex = 0;

const cover = document.getElementById("cover");
const songTitle = document.getElementById("song-title");
const audio = new Audio();
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const spotifyLink = document.getElementById("spotify-link");
const volumeSlider = document.getElementById("volume");

function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;

  // Animar texto nombre canción (reinicia animación)
  songTitle.style.animation = "none";
  songTitle.offsetHeight; // trigger reflow para resetear animación
  songTitle.style.animation = null;

  // Animación portada entrada + giro continuo
  cover.classList.remove("spin");
  cover.classList.add("entering");
  cover.src = song.cover;

  // Cuando termine animación de entrada, empezar giro continuo
  cover.addEventListener("animationend", function handler() {
    cover.classList.remove("entering");
    cover.classList.add("spin");
    cover.removeEventListener("animationend", handler);
  });

  audio.src = song.audio;
  spotifyLink.href = song.spotify;
  playBtn.innerHTML = "&#9658;";
  audio.pause();
  progress.style.width = "0%";
}

function playSong() {
  audio.play();
  playBtn.innerHTML = "&#10074;&#10074;"; // pausa
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = "&#9658;"; // play
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

document.getElementById("popup-ok").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popup-overlay");

  popup.classList.add("fade-out");

  popup.addEventListener("animationend", () => {
    overlay.style.display = "none";
  }, { once: true });
});


// Carga inicial
loadSong(currentSongIndex);