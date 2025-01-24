const video = document.getElementById("fullscreen-video");
const message = document.getElementById("message");
const audioToggle = document.getElementById("audio-toggle");

// Avvia l'audio quando la pagina si carica
video
  .play()
  .then(() => {
    // Video avviato correttamente
  })
  .catch((error) => {
    console.error("Errore durante l'avvio del video:", error);
  });

// Dopo 5 secondi, il video scompare e appare la scritta
setTimeout(() => {
  video.style.opacity = "0"; // Nasconde il video
  video.style.pointerEvents = "none"; // Evita interazioni con il video
  message.classList.remove("hidden"); // Mostra la scritta
}, 5000);

// Alterna l'audio con il pulsante
audioToggle.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    audioToggle.textContent = "🔊"; // Cambia l'icona
  } else {
    video.muted = true;
    audioToggle.textContent = "🔇"; // Cambia l'icona
  }
});
