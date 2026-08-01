const box = document.getElementById("themeBox");
const title = document.getElementById("themeTitle");
const line = document.getElementById("themeLine");
const subtitle = document.getElementById("themeSubtitle");

const SHOW_TIME = 30000;
const FADE_TIME = 2000;
const LOOP_TIME = 180000;

function showTheme(){

    box.classList.remove("fadeout");
    box.classList.add("show");

    title.classList.remove("show");
    subtitle.classList.remove("show");
    line.classList.remove("show");

    void title.offsetWidth;

    setTimeout(()=>{

        title.classList.add("show");

    },150);

    setTimeout(()=>{

        subtitle.classList.add("show");

    },450);

    setTimeout(()=>{

        line.classList.add("show");

    },750);

    setTimeout(()=>{

        box.classList.add("fadeout");

    },SHOW_TIME-FADE_TIME);

    setTimeout(()=>{

        box.classList.remove("show");
        box.classList.remove("fadeout");

        title.classList.remove("show");
        subtitle.classList.remove("show");
        line.classList.remove("show");

    },SHOW_TIME);

}

setTimeout(showTheme,2000);

setInterval(showTheme,LOOP_TIME);