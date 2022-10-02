function wait(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}


const spook = document.getElementById("spook");

spook.addEventListener("mouseenter", async (event) => {
  new Audio("bam.mp3").play();
})

spook.addEventListener("mouseenter", async (event) => {
  await wait(4200);
  window.open("../41/pizaquest41.html", "_self")
})
