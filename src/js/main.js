//preloader
import '../js/preloader'

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

// Features list
$(document).ready(function() {
    $(".list-btn").click(function() {
      // Змінюємо текст кнопки
      $(this).text(function(i, oldText) {
        return oldText === "Всі ресурси" ? "Приховати" : "Всі ресурси";
      });
  
      // Перемикаємо клас "d-none" на "feature-ext"
      $(".feature-ext").toggleClass("d-none");
    });
});

// Modal
const loginModal = new bootstrap.Modal(document.querySelector('.login-modal'), {
    keyboard: false
  })