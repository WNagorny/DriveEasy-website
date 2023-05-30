let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

const toggleMenu = () => {
   menu.classList.toggle('bx-x')
   navbar.classList.toggle('active')
}
const removeclasses = () => {
   menu.classList.remove('bx-x')
   navbar.classList.remove('active')
}

window.addEventListener('scroll', removeclasses)
menu.addEventListener('click', toggleMenu)