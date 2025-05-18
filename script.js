const title = document.getElementById("title");
const spotifyLink = document.getElementById("spotify-link");

const songs = [
      { name: "Barto Trap", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Kanye Mode", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Mi mente", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Yo en su lugar", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Misión en alturas del sur", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Misión Cumplida", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Corrido del Fernando", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Gracias Carnal", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Maria José", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Corrido del Kikis", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "Regresa Cuadrada Bit", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" },
      { name: "La Cumperacha", url: "https://open.spotify.com/intl-es/track/5GTBdEjZe7zEDp1N0eCZE4?si=4acd3d3482a54a99" }
];

let currentIndex = 0;

function updateSong() {
  title.classList.remove("fade-in-down");
  title.classList.add("fade-out-up");

  setTimeout(() => {
    title.textContent = songs[currentIndex].name;
    spotifyLink.href = songs[currentIndex].url;
    title.classList.remove("fade-out-up");
    title.classList.add("fade-in-down");
  }, 300);
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  updateSong();
}

function previousSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  updateSong();
}

function closePopup() {
  const popup = document.getElementById("wanted-popup");
  popup.style.display = "none";
}



updateSong();
