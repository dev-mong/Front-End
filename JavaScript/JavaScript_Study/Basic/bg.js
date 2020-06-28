const body = document.querySelector("body");

//이미지 개수
const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("load");
}
function pointImage(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("backImg");
    body.appendChild(img);
    // img.addEventListener("loadend",handleImgLoad);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    pointImage(randomNumber);
}

init();