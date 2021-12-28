export function sectionTwo() {
    const h1 = document.querySelector('.section-two__h1');
    const p1 = document.querySelector('.section-two__p1');
    const area = document.querySelector('.section-two__area');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled > 200) {
            h1.classList.add('section-two__h1--active');
            p1.style.opacity = '1';
            setTimeout(() => {
                h1.classList.add('section-two__h1--moving');
            }, 1500)
        }
        if (scrolled > 600 && scrolled < 1200) {
            area.classList.add('section-two__area--active');
        }
    })
}
