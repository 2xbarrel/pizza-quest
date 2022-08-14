const clock = document.querySelector('.display')
const pad = n => String(n).padStart(2, '0');
setInterval(() => {
  let time = new Date();
  let sec = pad(time.getSeconds());
  let min = pad(time.getMinutes());
  let hr = pad(time.getHours());
  clock.textContent = `${hr}:${min}:${sec}`;
}, 1000);
