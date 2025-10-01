function toggleV() {
    let img = document.getElementById("walter");
    console.log(img.style.opacity);
    img.style.opacity = ((Number(img.style.opacity) + 1) % 2);
}