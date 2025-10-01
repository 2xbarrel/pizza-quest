let img = document.getElementById("img");
let title = document.getElementById("title");
let text = document.getElementById("text");


let date = new Date();

if (date.getDate() === 13 && date.getMonth() === 3){
  img.src = "homestuck.png";
  title.innerHTML = "PIZZASTUCK";
  document.body.style.backgroundColor = "white";
};

if (date.getDate() === 21 && date.getMonth() === 4){
  img.src = "quaziandiso.png";
  title.innerHTML = "quazi quest";
  text.innerHTML = "This is you-.... This is not you actually, this is Quazi and Iso, what the hell are they doing here?";
};

if (date.getDate() === 28 && date.getMonth() === 1){
  img.src = "quaziandiso.png";
  title.innerHTML = "iso quest";
  text.innerHTML = "This is you-.... This is not you actually, this is Quazi and Iso, what the hell are they doing here?";
};

if (date.getDate() === 1 && date.getMonth() === 10){
  img.src = "ebobo.png";
  title.innerHTML = "NAD QUEST";
   text.innerHTML = "This is you-.... This is not you actually, this is Nad, Kumani and Ambrose, what the hell are they doing in your house";
};