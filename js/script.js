// *****
// VARIABLES
// *****
const navBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-mobile')
const allNavLinks = document.querySelectorAll('.nav__link')
// *****
// FUNCTIONS
// *****
const handleNav = () => {
    nav.classList.toggle('nav-mobile--active');
    allNavLinks.forEach(btn => btn.addEventListener(`click`, () => {
        nav.classList.remove('nav-mobile--active');
        navBtn.classList.remove('is-active');
    }));
    navBtn.classList.toggle('is-active');
}
// *****
// LISTENERS
// *****
navBtn.addEventListener('click', handleNav)
