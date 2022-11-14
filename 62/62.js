function wait(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}


const spook = document.getElementById("spook");

let checked = false;
spook.addEventListener("pointerenter", async (event) => {
  if (!checked) {
    new Audio("bam.mp3").play();
    await wait(3000);
    window.open("../63/pizaquest63.html", "_self")
  }
});

spook.addEventListener("pointerleave", event => {
  checked = true;
});


// spook.addEventListener("pointerenter", async (event) => {
//   new Audio("bam.mp3").play();
// })

// spook.addEventListener("pointerenter", async (event) => {
//   await wait(2000);
//   window.open("../41/pizaquest41.html", "_self")
// })
