function update(e){
    let walter = document.getElementById("walter").getBoundingClientRect();
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x-walter.x + 'px')
    document.documentElement.style.setProperty('--cursorY', y-walter.y + 'px')
}
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

function flicker(){
    let walter = document.getElementById("walter");
    let random_number = Math.floor(Math.random() * 80 + 1)

    if (random_number == 1){
        walter.style.opacity = 0
        new Audio("pop.mp3").play();
    }
    else {
        walter.style.opacity = 1
    }
    
}

setInterval(flicker, 100)