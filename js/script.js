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
    nav.classList.toggle('active-nav-mobile');
	allNavLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            nav.classList.remove('active-nav-mobile')
        })
    } )
}
// *****
// LISTENERS
// *****
navBtn.addEventListener('click', handleNav)
