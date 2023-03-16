let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
let header = document.querySelector('.header');
iconMenu.addEventListener('click', function(elem) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  header.classList.toggle('_active');
})

let menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      header.classList.remove('_active');
    }
  })
})

