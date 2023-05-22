let container = document.getElementById("container");
let img = document.getElementById("img");

container.addEventListener("mousemove", (e) => {
    let size = container.getBoundingClientRect();
    img.style.transform = "translate(" + Math.round(Math.max(size.width - img.width, Math.min(0, (size.left - e.clientX) / size.width * img.width + size.width / 2))) + "px, " + Math.round(Math.max(size.height - img.height, Math.min(0, (size.top - e.clientY) / size.height * img.height + size.height / 2))) + "px)";  
});

container.addEventListener("mouseleave", (e) => {
    img.style.transform = "";
});

// code taken from MSPFA check them out theyre really cool