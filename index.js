const container = document.querySelector(".container");
const btn = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span")
const posY = document.querySelector(".posY span")
var newColor
var c2;

// ______________-Color Change-_________________
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
function rndColor() {

    newColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    container.style.backgroundColor = newColor;
}



container.addEventListener('mouseenter', rndColor);
container.addEventListener('mouseleave', () => {
    container.style.backgroundColor = "rgb(183, 180, 201)";
});

const mouseposition = (event) => {
    posX.innerText = event.pageX;
    posY.innerText = event.pageY;
};
window.addEventListener("mousemove", mouseposition);


// container.addEventListener('mouseleave', () => {


//     document.body.style.backgroundColor = newColor;
// });

// document.body.addEventListener('mouseleave', () => {

//     container.style.backgroundColor = newColor;
//     document.body.style.backgroundColor = "rgb(183, 180, 201)";
// });




// _________________________Click Me___________________________

btn.addEventListener('click', () => {
    document.querySelector("body").style.backgroundColor = newColor;
});
