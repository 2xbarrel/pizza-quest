let img = document.getElementById("img");
let title = document.getElementById("title");

let date = new Date();

if (date.getDate() === 13 && date.getMonth() === 3){
  img.src = "homestuck.png";
  title.innerHTML = "PIZZASTUCK";
  document.body.style.backgroundColor = "white";
};