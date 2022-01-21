window.addEventListener('scroll', function () {
   let header = document.querySelector('header')
   let windowPosition = window.scrollY > 0
   header.classList.toggle('scrolling-active', windowPosition)
})

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active')
   navMenu.classList.toggle('active')
})

function menuToggle() {
   const toggleMenu = document.querySelector('.user-menu')
   toggleMenu.classList.toggle('active')
}
