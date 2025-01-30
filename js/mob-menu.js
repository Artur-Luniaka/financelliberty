const openMobMenu = document.querySelector('.header-menu-icon');
const closeMobMenu = document.querySelector('.mob-menu-close-btn');
const mobMenu = document.querySelector('.mob-menu-wrapper');

openMobMenu.addEventListener('click', function () {
  mobMenu.classList.add('active');
});
closeMobMenu.addEventListener('click', function () {
  mobMenu.classList.remove('active');
});
