const preloader = document.querySelector('.preloader-wrapper');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
  preloader.classList.remove('show-preloader');
});