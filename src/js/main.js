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
    //autoplay: true,
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
