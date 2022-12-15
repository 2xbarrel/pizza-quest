function update(e){
    let walter = document.getElementById("walter").getBoundingClientRect();
    let x = e.clientX || e.touches[0].clientX
    let y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x-walter.x + 'px')
    document.documentElement.style.setProperty('--cursorY', y-walter.y + 'px')
}
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

