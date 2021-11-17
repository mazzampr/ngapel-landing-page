const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const body = document.querySelectorAll('header');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
