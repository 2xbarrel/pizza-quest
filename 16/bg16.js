let time = new Date();
let night = document.getElementById("night");
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const box = document.querySelector('.box');
const body = document.body;
if(time.getHours() >= 5 && time.getHours() < 12){
  night.setAttribute("src", "16.4.png");
}

else if(time.getHours() >= 12 && time.getHours() < 17){
  night.setAttribute("src", "16.3.png");
}

else if(time.getHours() >= 17 && time.getHours() < 21){
  night.setAttribute("src", "16.2.png");
}

else {
  night.setAttribute("src", "16.1.png");
}