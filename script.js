const video = document.getElementById("my-video");
const playButton = document.getElementById("play-button");
const startText = document.getElementById("start-text");

// Funzione per avviare o fermare il video
function toggleVideo() {
  if (video.paused) {
    video.style.opacity = "1"; // Rendi visibile il video
    video.loop = true; // Abilita il loop
    video.play(); // Avvia il video
    startText.style.display = "none"; // Nascondi la scritta
  } else {
    video.pause(); // Metti in pausa il video
    video.style.opacity = "0"; // Oscura di nuovo il video
    startText.style.display = "block"; // Mostra la scritta per avviare
  }
}

// Aggiungi l'evento di clic a entrambi
playButton.addEventListener("click", toggleVideo);
startText.addEventListener("click", toggleVideo);
