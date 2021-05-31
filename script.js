'use strict';

let links = document.querySelectorAll(".header-menu__link");
let checkbox = document.getElementById('checkbox');

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    checkbox.checked = false;
  })
}

ScrollReveal().reveal('.reveal-section', {
  duration: 1000,
  viewFactor: 0.2,
  origin: 'bottom',
  distance: '50px'
});