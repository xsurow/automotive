export function navbar() {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerBtn = document.querySelector('.hamburger__btn');
    const backgroundNav = document.querySelector('.nav');
    const listNav = document.querySelector('.nav__list');
    const elementNav = document.querySelectorAll('.nav__element');

    function toggleNav() {
        if (window.innerWidth <= 820) {
            if (hamburgerBtn.classList.contains('open')) {
                hamburgerBtn.classList.remove('open');
                backgroundNav.classList.remove('openNav');
                listNav.classList.remove('openList');
            } else if (!hamburgerBtn.classList.contains('open')) {
                hamburgerBtn.classList.add('open');
                backgroundNav.classList.add('openNav');
                listNav.classList.add('openList');
            }
        }
    }

    elementNav.forEach(element => {
        element.addEventListener('click', toggleNav);
    })

    hamburger.addEventListener('click', toggleNav);
}
