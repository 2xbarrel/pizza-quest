let textbox = document.getElementById("textbox");

const texts = {
    can : "это твоя мусорка, интересно пиздец.",
    bed : "это твоя кровать, нет времени спать, тебе теперь 21, мистер бизнесс.",
    window : "это окно, сука почему так ярко.",
    shelf : "это ящик с одеждой и другой поеботнёй.",
    pc : "это твой мега геймер сетап который убил твой переходник, тебе нужен новый...",
    clothes : "это твоя одежда, прости но придётся её выкинуть, тебе 21 так что тебе позволяется носить только бизнес костюмы."
};

for (const id in texts){
    const element = document.getElementById(id);
    console.log(element);
    element.addEventListener("pointerenter" , async (event) => {
        document.getElementById("textbox").innerHTML = texts[id];
    });
    element.addEventListener("pointerleave" , async (event) =>{
        document.getElementById("textbox").innerHTML = `**ууууууу теперь есть розовыее вещи теперь это ряльно как игра типа поинт и клик**`
    });
};