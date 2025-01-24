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

// Modal

document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".photo");
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const closeModal = document.getElementById("close-modal");

  // Mostra la modale quando un'immagine viene cliccata
  photos.forEach((photo) => {
    photo.addEventListener("click", () => {
      modalImage.src = photo.src;
      modalCaption.textContent = photo.alt; // Usa il testo 'alt' come descrizione
      modal.classList.add("visible");
    });
  });

  // Chiudi la modale quando si clicca sulla X
  closeModal.addEventListener("click", () => {
    modal.classList.remove("visible");
  });

  // Chiudi la modale quando si clicca fuori dall'immagine
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("visible");
    }
  });
});
