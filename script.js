const songs = [
  { name: "Barto Trap", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Kanye Mode", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Mi mente", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Yo en su lugar", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Misión en alturas del sur", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Misión Cumplida", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Corrido del Fernando", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Gracias Carnal", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Maria José", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Corrido del Kikis", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "Regresa Cuadrada Bit", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
  { name: "La Cumperacha", spotifyUrl: "https://open.spotify.com/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" }
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

function playClip() {
  audio.pause();
  audio.src = songs_mp3[currentIndex].mp3Url;
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    if (!audio.paused) {
      audio.currentTime = 0;
      audio.play();
    }
  }, 10000);
}

function updateSong() {
  const title = document.getElementById("title");
  const spotifyLink = document.getElementById("spotify-link");
  
  title.textContent = songs[currentIndex].name;
  spotifyLink.href = songs[currentIndex].spotifyUrl;
  spotifyLink.textContent = "Escuchar en Spotify";
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

document.getElementById("next-btn").addEventListener("click", nextSong);
document.getElementById("prev-btn").addEventListener("click", previousSong);

function closeWanted() {
  const overlay = document.getElementById("wanted-overlay");
  overlay.style.display = "none";
}


window.onload = () => {
  updateSong();
  playClip();
};

