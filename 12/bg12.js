let time = new Date();
let night = document.getElementById("night");
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const box = document.querySelector('.box');
const body = document.body;
if(time.getHours() >= 5 && time.getHours() < 12){
  body.style.backgroundColor = 'white';
}

else if(time.getHours() >= 12 && time.getHours() < 17){
  body.style.backgroundColor = '#fffbb0';
}

else if(time.getHours() >= 17 && time.getHours() < 21){
  body.style.backgroundColor = '#e37a30';
}

else {
  body.style.backgroundColor = '#2a294a';
  h1.style.color = 'white';
  h3.style.color = 'white';
  box.style.borderColor = 'white';
  night.setAttribute("src", "12.1.png");
  h2.style.textShadow = '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000';
}