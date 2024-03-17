const burgerBtn = document.querySelector('.burger-menu')
const burgerMenu = document.querySelector('.responsive-nav')

// let myInterval=null;
// let activeIndex = 0;

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    burgerMenu.classList.toggle('active')
  });