//Musick in der Galerie anschalten:
const music = document.getElementById("music");
const tonButton = document.getElementById("tonButton");

function musicTurnOn() {
	if (music.paused) {
                music.volume = 0.3;
                music.play();
                tonButton.textContent = "TON AN";
                tonButton.classList.add("an");
    } else {
                music.pause();
                tonButton.textContent = "TON AUS";
                tonButton.classList.remove("an");
    }
}