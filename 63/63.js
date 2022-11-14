function flicker(){
    let walter = document.getElementById("walter");
    let random_number = Math.floor(Math.random() * 60 + 1)

    if (random_number == 1){
        walter.style.opacity = 0
        new Audio("pop.mp3").play();
    }
    else {
        walter.style.opacity = 1
    }
    
}

setInterval(flicker, 100)