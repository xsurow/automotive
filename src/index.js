import "./styles/index.scss";
import { sectionOneText } from "./section-one.js";
import { sectionTwo } from "./section-two.js";
import { slider } from "./section-three.js";

document.addEventListener('DOMContentLoaded', () => {
    sectionOneText();
    sectionTwo();
    
    //slider();
});

const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger__btn');
const backgroundNav = document.querySelector('.nav');
const textNav = document.querySelectorAll('.nav__item');

let x = 0;

function toggleNav() {
    if (hamburgerBtn.classList.contains('open')) {
        hamburgerBtn.classList.remove('open');
        backgroundNav.style.height = '0vh';
        textNav.forEach(element => {
            element.style.transitionDelay = x + 's'
            x -= 0.05;
            element.classList.remove('textNav');
        })
    } else if (!hamburgerBtn.classList.contains('open')) {
        hamburgerBtn.classList.add('open');
        backgroundNav.style.height = '100vh';
        textNav.forEach(element => {
            element.style.transitionDelay = x + 's';
            x += 0.05;
            element.classList.add('textNav');
        })
    }
}

hamburger.addEventListener('click', toggleNav);
