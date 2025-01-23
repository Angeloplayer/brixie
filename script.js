const video = document.getElementById("my-video");
const playButton = document.getElementById("play-button");
const startText = document.getElementById("start-text");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.style.opacity = "1"; // Rendi visibile il video
    video.loop = true; // Abilita il loop
    video.play(); // Avvia il video
    startText.style.display = "none"; // Nascondi la scritta quando il video parte
  } else {
    video.pause(); // Metti in pausa il video
    video.style.opacity = "0"; // Oscura di nuovo il video
    startText.style.display = "block"; // Mostra la scritta per avviare il video
  }
});
