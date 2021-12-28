import "./styles/index.scss";
import { navbar } from "./header.js";
import { sectionOneText } from "./section-one.js";
import { sectionTwo } from "./section-two.js";
import { slider } from "./section-three.js";

document.addEventListener('DOMContentLoaded', () => {
    navbar();
    sectionOneText();
    sectionTwo();
    slider();
});