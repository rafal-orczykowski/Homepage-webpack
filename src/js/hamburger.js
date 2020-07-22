const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation__content--js');
    nav.classList.toggle('navigation--open');
});
    