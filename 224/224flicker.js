const animation = [
    { backgroundColor: 'rgb(0, 116, 210)' },
    { backgroundColor: 'rgb(0, 0, 0)' },
];

const timing = {
    duration: 800,
    iterations: 1,
};

function flicker(){
    let random_number = Math.floor(Math.random() * 7 + 1);
    let body = document.getElementsByTagName('body')[0];

    if (random_number == 1){
        // body.style.setProperty('background-color', 'rgb(255, 0, 0)')
        body.animate(animation, timing);
        new Audio("../215/pop.mp3").play();
    }
    else {
        body.style.setProperty('background-color', 'rgb(0, 0, 0)')
    }
};

setInterval(flicker, 100) 