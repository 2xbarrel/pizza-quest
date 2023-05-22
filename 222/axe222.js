$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

function toggleBALLS() {
    let img = document.getElementById("walter");
    let area = document.getElementById("button");
    img.style.opacity = 1;
    area.coords = "5,392,3,587,439,594,512,230,519,74,601,6,303,1,190,71,180,356,105,369";
}
