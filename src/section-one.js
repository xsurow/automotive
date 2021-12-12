export function sectionOneText() {

const h1 = document.querySelector('.section-one__h1');
const p = document.querySelector('.section-one__p');

    setTimeout(() => {
        h1.classList.add('section-one__active');
        h1.style.opacity = '1';
    }, 500);
    setTimeout(() => {
        p.classList.add('section-one__active');
        p.style.opacity = '1';
    }, 800);
}