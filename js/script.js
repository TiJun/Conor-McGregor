// *****
// VARIABLES
// *****
const navBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-mobile')
const allNavLinks = document.querySelectorAll('.nav__link')
const doubleChampBoxOne = document.querySelector('.doublechamp__container--one')
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
// const fadeRight = () => {
//     if (window.pageYOffset = 949) {
//         doubleChampBoxOne.classList.add('fade-right')
//     }else if (window.scrollY = 2143) {
//         doubleChampBoxOne.classList.remove('fade-right')
//     }
// }
// *****
// LISTENERS
// *****
navBtn.addEventListener('click', handleNav)