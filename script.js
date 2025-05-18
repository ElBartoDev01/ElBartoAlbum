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
  { name: "Barto Trap", mp3Url: "https://cdn.pixabay.com/download/audio/2022/03/20/audio_8c1c3df295.mp3?filename=funky-funk-6059.mp3" },
  { name: "Kanye Mode", mp3Url: "https://cdn.pixabay.com/download/audio/2021/09/22/audio_254e37d03b.mp3?filename=hip-hop-loop-6361.mp3" },
  { name: "Mi mente", mp3Url: "https://cdn.pixabay.com/download/audio/2023/03/02/audio_9a2494baf0.mp3?filename=relaxing-guitar-13102.mp3" },
  { name: "Yo en su lugar", mp3Url: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_6d5e9a06a3.mp3?filename=lofi-chill-5452.mp3" },
  { name: "Misión en alturas del sur", mp3Url: "https://cdn.pixabay.com/download/audio/2022/02/15/audio_0936b81509.mp3?filename=chill-funk-5557.mp3" },
  { name: "Misión Cumplida", mp3Url: "https://cdn.pixabay.com/download/audio/2022/03/01/audio_9f5ef2dcd1.mp3?filename=happy-funk-6106.mp3" },
  { name: "Corrido del Fernando", mp3Url: "https://cdn.pixabay.com/download/audio/2021/08/25/audio_3e07e6a3f6.mp3?filename=latin-guitar-5611.mp3" },
  { name: "Gracias Carnal", mp3Url: "https://cdn.pixabay.com/download/audio/2020/07/23/audio_c41d4ac0f8.mp3?filename=gracias-carnal-sample.mp3" },
  { name: "Maria José", mp3Url: "https://cdn.pixabay.com/download/audio/2021/06/04/audio_019d8e5c32.mp3?filename=soft-jazz-5124.mp3" },
  { name: "Corrido del Kikis", mp3Url: "https://cdn.pixabay.com/download/audio/2020/06/26/audio_0f7a434f9c.mp3?filename=corrido-kikis-sample.mp3" },
  { name: "Regresa Cuadrada Bit", mp3Url: "https://cdn.pixabay.com/download/audio/2021/04/21/audio_4f86e439ae.mp3?filename=regresa-cuadrada-bit.mp3" },
  { name: "La Cumperacha", mp3Url: "https://cdn.pixabay.com/download/audio/2020/10/10/audio_4b09efc3bb.mp3?filename=la-cumperacha-sample.mp3" }
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

window.onload = () => {
  updateSong();
  playClip();
};

