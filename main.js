
// counter
const blackCounterLable = document.querySelector('#blackC p');
const whiteCounterLable = document.querySelector('#whiteC p');
let blackCounter = 2;
let whiteCounter = 2;

function counterUpdater() {
    blackCounterLable.innerHTML = blackCounter;
    whiteCounterLable.innerHTML = whiteCounter;
}
counterUpdater();

const container = document.querySelector('#container');
const blocks = document.querySelectorAll('.block');
const nobat = document.querySelector('#nobat');
let turnblack = false;

if (window.matchMedia("(orientation: portrait)").matches) {
    // you're in PORTRAIT mode
    container.style.height = getComputedStyle(container).width;
} else if (matchMedia("(orientation: landscape)").matches) {
    // you're in LANDSCAPE mode
    container.style.width = getComputedStyle(container).height;
}

blocks.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.length === 1) {
            if (turnblack === true) {
                e.classList.add("black");
                blackCounter++;
                turnblack = false;
            } else {
                e.classList.add("white");
                whiteCounter++;
                turnblack = true;
            }
            nobat.classList.toggle("black");
        } else {
            if (e.classList.contains("black")) {
                e.classList.remove("black");
                blackCounter--;
                e.classList.add("white");
                whiteCounter++;
            } else {
                e.classList.remove("white");
                whiteCounter--;
                e.classList.add("black");
                blackCounter++;
            }
        }
        counterUpdater();
    })
});
