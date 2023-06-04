// *****
// VARIABLES
// *****
const navBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-mobile')
const allNavLinks = document.querySelectorAll('.nav__link')
const doubleChampBoxOne = document.querySelector('.doublechamp__container--one')
const date = document.querySelector('.footer__year')
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
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    date.innerText = year;
}
handleCurrentYear();
// *****
// LISTENERS
// *****
navBtn.addEventListener('click', handleNav)