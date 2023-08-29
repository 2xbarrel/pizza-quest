const canvas = document.getElementById('can');
const rect = canvas.getBoundingClientRect();

const x = rect.left + canvas.clientLeft;
const y = rect.top + canvas.clientTop;

const ctx = canvas.getContext('2d');


ctx.canvas.width = 700;
ctx.canvas.height = 500;

let canvasPressed = false;

canvas.addEventListener('pointerdown', function (evt) {
  canvasPressed = true;
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.moveTo(evt.clientX-x, evt.clientY-y);
});

canvas.addEventListener('pointerup', function (evt) {
  canvasPressed = false;
});

canvas.addEventListener('pointermove', function (evt) {
  if (canvasPressed) {
    ctx.lineTo(evt.clientX-x, evt.clientY-y);
    ctx.moveTo(evt.clientX-x, evt.clientY-y);
    ctx.stroke();
  }
});
