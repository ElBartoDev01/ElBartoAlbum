const songs = [
  { name: "Barto Trap", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Kanye Mode", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Mi mente", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Yo en su lugar", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Misión en alturas del sur", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Misión Cumplida", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Corrido del Fernando", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Gracias Carnal", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Maria José", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Corrido del Kikis", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "Regresa Cuadrada Bit", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" },
  { name: "La Cumperacha", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4" }
];

const songs_mp3 = [
  { name: "Barto Trap", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Kanye Mode", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Mi mente", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Yo en su lugar", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Misión en alturas del sur", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Misión Cumplida", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Corrido del Fernando", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Gracias Carnal", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Maria José", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Corrido del Kikis", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "Regresa Cuadrada Bit", mp3Url: "Audio/Prepucini Boingnini.mp3" },
  { name: "La Cumperacha", mp3Url: "Audio/Prepucini Boingnini.mp3" }
];

let currentIndex = 0;
const audio = new Audio();

function updateSong() {
  document.getElementById("title").textContent = songs[currentIndex].name;
  document.getElementById("spotify-link").href = songs[currentIndex].spotifyUrl;
}

function playClip() {
  audio.pause();
  audio.src = songs_mp3[currentIndex].mp3Url;
  audio.currentTime = 0;
  audio.play();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  updateSong();
  playClip();
}

function previousSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  updateSong();
  playClip();
}

function closePopup() {
  document.getElementById("wanted-popup").style.display = "none";
}

window.onload = () => {
  updateSong();

  document.getElementById("next-btn").addEventListener("click", nextSong);
  document.getElementById("prev-btn").addEventListener("click", previousSong);
  document.getElementById("play-btn").addEventListener("click", playClip);
};
