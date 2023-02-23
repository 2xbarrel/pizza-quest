const hover = document.getElementById("hover");
let playedOnce = false;

hover.addEventListener("pointerenter", async (event) => {
  if (!playedOnce) {
    new Audio("step.mp3").play();
    document.getElementById("cultist").style.opacity = "0";
    playedOnce = true;
  }
});

