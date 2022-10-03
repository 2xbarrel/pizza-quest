function wait(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}


const spook = document.getElementById("spook");

// let checked = false;
// spook.addEventListener("pointerenter", event => {
//   if (!checked) {
//     new Audio("bam.mp3").play();
//   }
// });

// spook.addEventListener("pointerleave", event => {
//   checked = true;
//   window.open("../41/pizaquest41.html", "_self")
// });


spook.addEventListener("mouseenter", async (event) => {
  new Audio("bam.mp3").play();
})

spook.addEventListener("mouseenter", async (event) => {
  await wait(2000);
  window.open("../41/pizaquest41.html", "_self")
})
