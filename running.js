const box = document.getElementById("themeBox");
const title = document.getElementById("themeTitle");
const line = document.getElementById("themeLine");
const subtitle = document.getElementById("themeSubtitle");

// panjang garis mengikuti panjang judul
function setLineWidth(){
    line.style.width = title.offsetWidth + "px";
}

setLineWidth();
window.addEventListener("resize", setLineWidth);

function resetAnimation(){

    title.style.transition = "none";
    subtitle.style.transition = "none";
    line.style.transition = "none";

    title.style.opacity = "0";
    subtitle.style.opacity = "0";

    title.style.transform = "translateX(-70px)";
    subtitle.style.transform = "translateX(-70px)";

    line.style.width = "0px";

    void title.offsetWidth;

    // Tema
    title.style.transition = "all .45s ease";

    // Sub tema
    subtitle.style.transition = "all .45s ease";

    // Garis
    line.style.transition = "width .35s ease";
}

function playAnimation(){

    resetAnimation();

    const fullWidth = title.offsetWidth;

    // Tema muncul
    setTimeout(()=>{
        title.style.opacity="1";
        title.style.transform="translateX(0)";
    },0);

    // Subtema muncul sedikit sesudah tema
    setTimeout(()=>{
        subtitle.style.opacity="1";
        subtitle.style.transform="translateX(0)";
    },180);

    // Garis muncul terakhir
    setTimeout(()=>{
        line.style.width = fullWidth + "px";
    },360);

    // tampil 30 detik
    setTimeout(()=>{

        box.style.transition="opacity .8s ease";
        box.style.opacity="0";

    },30000);

    // reset agar siap tampil lagi
    setTimeout(()=>{
        box.style.transition="none";
        box.style.opacity="1";
    },30850);
}

// tunda awal 2 detik
setTimeout(()=>{
    playAnimation();

    // ulang setiap 3 menit
    setInterval(playAnimation,180000);

},2000);