const container = document.querySelector('.container');
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
    e.addEventListener("click", () => {
        if (e.classList.length === 1) {
            if (turnblack === true) {
                e.classList.add("black");
                turnblack = false;
            } else {
                e.classList.add("white");
                turnblack = true;
            }
            nobat.classList.toggle("black");
        } else {
            e.classList.toggle("black");
            e.classList.toggle("white");
        }
    })
});