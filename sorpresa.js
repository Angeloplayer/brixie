const video = document.getElementById("fullscreen-video");
const audioToggle = document.getElementById("audio-toggle");

// Avvia l'audio e mostra il video quando la pagina si carica
video
  .play()
  .then(() => {
    // Video avviato e audio inizia a suonare
    video.style.opacity = "1"; // Assicurati che il video sia visibile immediatamente
  })
  .catch((error) => {
    console.log("Errore durante l'avvio del video:", error);
  });

// Dopo 5 secondi, rendi il video invisibile mantenendo l'audio attivo
setTimeout(() => {
  video.style.opacity = "0"; // Nasconde il video
  video.style.pointerEvents = "none"; // Evita interazioni con il video
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
