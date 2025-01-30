const openMobMenu = document.querySelector('.header-menu-icon');
const closeMobMenu = document.querySelector('.mob-menu-close-btn');
const mobMenu = document.querySelector('.mob-menu-wrapper');
const mobNavLinks = document.querySelectorAll('.mob-menu-link');

openMobMenu.addEventListener('click', function () {
  mobMenu.classList.add('active');
});
closeMobMenu.addEventListener('click', function () {
  mobMenu.classList.remove('active');
});
mobNavLinks.forEach(link => {
  link.addEventListener('click', function () {
    mobMenu.classList.remove('active');
  });
});
