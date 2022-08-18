let time = new Date();
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const box = document.querySelector('.box');
const cock = document.querySelector('.display');
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
  h2.style.color = 'white';
  h3.style.color = 'white';
  box.style.borderColor = 'white';
  clock.style.color = 'white';
};
