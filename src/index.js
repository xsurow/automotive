import "./styles/index.scss";

let carousel = document.querySelector('.section-three__carousel');
let imgs = document.querySelectorAll('.section-three__carousel > img');

let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let count = 6;
const width = 100;

carousel.style.transform = 'translateX(' + (-width * 6) + '%)';

//left button listener
prevBtn.addEventListener('click', () => {
    if (count <= 1) return;
    carousel.style.transition = 'transform 0.5s linear';
    count--;
    carousel.style.transform = 'translateX(' + (-width * count) + '%)';
});

//right button listeer
nextBtn.addEventListener('click', () => {
    if (count >= imgs.length - 2) return;
    carousel.style.transition = 'transform 0.5s linear';
    count++;
    carousel.style.transform = 'translateX(' + (-width * count) + '%)';
});

carousel.addEventListener('transitionend', () => {
    if (imgs[count].id === "first") {
        carousel.style.transition = 'none';
        count = 6;
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
    } else if (imgs[count].id === "last") {
        carousel.style.transition = 'none';
        count = 6;
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
    }
});
