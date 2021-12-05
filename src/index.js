import "./styles/index.scss";

let carousel = document.querySelector('.section-three__carousel');
let imgs = document.querySelectorAll('.section-three__carousel > img');

let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let count = 2;
let start = 1;
let end = imgs.length - 2;
let imgsArray = [...imgs];

const width = imgs[0].clientWidth;

carousel.style.transform = 'translateX(' + (-width * 2) + 'px)';

//left button listener
prevBtn.addEventListener('click', () => {
    addNewImgPrev();
    //carousel.style.transform = 'translateX(' + (-width * count) + 'px)';
});

//right button listeer
nextBtn.addEventListener('click', () => {
    count++;
    addNewImgNext();
    carousel.style.transform = 'translateX(' + (-width * count) + 'px)';
});

//problem zdjecie wstawia sie do lewej krawędzi strony czyli left:0, zmienić na left: -100%;
function addNewImgPrev() {
    let newImg = document.createElement('img');
    newImg.style.position = 'relative';
    newImg.setAttribute('src', './images/carouselpic' + end + '.jpg');
    carousel.prepend(newImg);
    if (end == 1) {
        end = imgs.length - 1;
    } else {
        end--;
    }
    // if (imgsArray.length - 1 > imgsLength) {
    //     carousel[imgsArray.length-1].remove();
    // }
    console.log(imgsArray)
}

function addNewImgNext() {
    if (count + 2 > imgsArray.length) {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', './images/carouselpic' + start + '.jpg');
        carousel.append(newImg);
        imgsArray.push(newImg);
        if (start == imgs.length - 1) {
            start = 1;
        } else {
            start++;
        }
        // if (imgsArray.length - 1 > imgsLength) {
        //     carousel[0].remove();
        // }
        console.log(imgsArray)
    }
}




