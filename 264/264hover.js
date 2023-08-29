let textbox = document.getElementById("textbox");

const texts = {
    door : "This is a door, no going back now.",
    hand : "This is a print of a hand, somebody around here have really big hands.",
    shelf : "This is a shelf, It's empty.",
    chips : "This is a bag of chips, probably still edible but I wouldnt risk it.",
    barrel : "This is a barrel, it looks like somebody or something punched it really hard. It's completely deformed and makes me kind of sad for some reason."
};

for (const id in texts){
    const element = document.getElementById(id);
    console.log(element);
    element.addEventListener("pointerenter" , async (event) => {
        document.getElementById("textbox").innerHTML = texts[id];
    });
    element.addEventListener("pointerleave" , async (event) =>{
        document.getElementById("textbox").innerHTML = `**OBJECTS WITH MAGENTA OUTLINE CAN BE HOVERED OVER** <p><span class="martha">Martha: Oh he's always like that, I appreciate his concern but sometimes he's too overprotective...</span></p>`
    });
};