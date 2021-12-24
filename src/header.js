const hamburger = document.querySelector('.hamburger');

function toggleHamburger() {
    if(hamburger.classList.contains('.open')) {
        hamburger.classList.remove('.open');
    } else if (!hamburger.classList.contains('.open')) {
        hamburger.classList.add('.open');
    }
}

hamburger.addEventListener('click', toggleHamburger());