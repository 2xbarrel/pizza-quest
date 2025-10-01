const hover = document.getElementById("hover");
let playedOnce = false;
const whisper = new Audio("whisper.mp3");

whisper.play();

hover.addEventListener("pointerenter", async (event) => {
  if (!playedOnce) {
    new Audio("step2.mp3").play();
    document.getElementById("cultist").style.opacity = "0";
    whisper.pause();
    playedOnce = true;
  }
});
