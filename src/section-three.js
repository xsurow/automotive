export function slider() {
    let carousel = document.querySelector('.section-three__carousel');
    let imgs = document.querySelectorAll('.section-three__carousel > img');

    let prevBtn = document.querySelector('.prevBtn');
    let nextBtn = document.querySelector('.nextBtn');

    let inputBtns = document.querySelectorAll('.inputBtns');
    let btnsCounter = 1;

    let count = 6;
    const width = 100;
    let timeoutClear;

    document.querySelector('#radio1').checked = true;
    carousel.style.transform = 'translateX(' + (-width * 6) + '%)';

    function nextSlide() {
        if (count >= imgs.length - 2) return;
        carousel.style.transition = 'transform 0.5s linear';
        count++;
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
        btnsCounter++;
    }

    //left button listener
    prevBtn.addEventListener('click', () => {
        clearTimeout(timeoutClear);
        clearInterval(slideImgs);
        timeoutClear = setTimeout(slideImgs = setInterval(nextSlide, 4000), 4000); //change position in cause of error
        if (count <= 1) return;
        carousel.style.transition = 'transform 0.5s linear';
        count--;
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
        if (btnsCounter == 1) {
            btnsCounter = 5;
        } else {
            btnsCounter--;
        }
    });

    //right button listeer
    nextBtn.addEventListener('click', () => {
        clearTimeout(timeoutClear);
        clearInterval(slideImgs);
        timeoutClear = setTimeout(slideImgs = setInterval(nextSlide, 4000), 4000); //change position in cause of error
        if (count >= imgs.length - 2) return;
        carousel.style.transition = 'transform 0.5s linear';
        count++;
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
        if (btnsCounter == 5) {
            btnsCounter = 1;
        } else {
            btnsCounter++;
        }
    });

    //event checks borders
    carousel.addEventListener('transitionend', () => {
        if (imgs[count].id === "first") {
            carousel.style.transition = 'none';
            count = 6;
            carousel.style.transform = 'translateX(' + (-width * count) + '%)';
            btnsCounter = 5;
        } else if (imgs[count].id === "last") {
            carousel.style.transition = 'none';
            count = 6;
            carousel.style.transform = 'translateX(' + (-width * count) + '%)';
            btnsCounter = 1;
        }
        document.querySelector('#radio' + btnsCounter).checked = true;
    });

    //interval sliding images
    let slideImgs = setInterval(nextSlide, 4000);
    
    //function changes slides on button click
    function toggleBtns() {
        switch(this.id) {
            case 'radio1': {
                count = 6;
                btnsCounter = 1;
                break;
            }
            case 'radio2': {
                count = 7;
                btnsCounter = 2;
                break;
            }
            case 'radio3': {
                count = 8;
                btnsCounter = 3;
                break;
            }
            case 'radio4': {
                count = 9;
                btnsCounter = 4;
                break;
            }
            case 'radio5': {
                count = 10;
                btnsCounter = 5;
                break;
            }
        }
        carousel.style.transform = 'translateX(' + (-width * count) + '%)';
        document.querySelector('#radio' + btnsCounter).checked = true;
        clearTimeout(timeoutClear);
        clearInterval(slideImgs);
        timeoutClear = setTimeout(slideImgs = setInterval(nextSlide, 4000), 4000);
    }

    //add listener on buttons
    inputBtns.forEach(element => {
        element.addEventListener('change', toggleBtns);
    });
}

