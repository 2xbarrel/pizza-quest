$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});


let screen = document.getElementById("screen");

let [button1, button2] = document.getElementsByTagName("area");

let counter = 1;

let max_img = 4;

function wait(milliseconds){
    return new Promise(resolve => {
        new Audio("white-noise.mp3").play();
        setTimeout(resolve, milliseconds);
    });
}

button1.addEventListener("click", async () => {
    counter -= 1;
    if (counter < 1) {
        counter = 1;
    }
    screen.setAttribute("src", "white-noise.gif");
    await wait(500);
    screen.setAttribute("src", `jb${counter}.gif`); 
});

button2.addEventListener("click", async () => {
    counter += 1;
    if (counter > max_img) {
        counter = max_img;
    }
    screen.setAttribute("src", "white-noise.gif");
    await wait(500);
    screen.setAttribute("src", `jb${counter}.gif`); 
});