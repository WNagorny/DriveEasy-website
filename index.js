
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

const sr = ScrollReveal ({
   distance: '60px',
   duration: 2500,
   delay: 300,
   reset: true
})

sr.reveal('.text', {delay:200, origin: 'top'})
sr.reveal('.form-container form', {delay:300, origin: 'left'})
sr.reveal('.headnig', {delay:300, origin: 'top'})

sr.reveal('.ride-container .box', {delay:200, origin: 'top'})
sr.reveal('.services-container .box', {delay:200, origin: 'top'})
sr.reveal('.about-container .box', {delay:200, origin: 'top'})
sr.reveal('.reviews-container', {delay:400, origin: 'top'})
sr.reveal('.newsletter .box', {delay:400, origin: 'bottom'})
