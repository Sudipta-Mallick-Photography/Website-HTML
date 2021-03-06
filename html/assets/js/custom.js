// custom js page


// headroom sticky top bar
// grab an element
var myElement = document.querySelector("section.o-brand");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement, {
    "offset": 10,
    "tolerance": 10
});
// initialise
headroom.init();



(function($){
  $(function(){

    //$('.button-collapse').sideNav();
    //$('.parallax').parallax();
    $(".c-slider--banner").slick({
        dots: true,
        dotsClass: 'slick-dots',
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        mobileFirst: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1
        //adaptiveHeight: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space



// click to scroll down
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});


// menu overlay
(function($) {
    $(function() {
    $('.mainnav-overlay').click(function() {
        $('.o-mainnav-list').toggleClass('open');
        });
    });
})(jQuery);

// search box overlay
(function($) {
    $(function() {
    $('.search-overlay').click(function() {
        $('.o-search-box').toggleClass('open');
        });
    });
})(jQuery);


// scroll to top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


// swipe box modal
$( document ).ready(function() {

  /* Basic Gallery */
  $( '.swipebox' ).swipebox();


});


// swiper slider

// Init Swiper

var swiper1 = new Swiper('.c-slider--seriesprojects', {
    zoom: true,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //pagination: '.swiper-pagination1',
    //extButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 2,
    spaceBetween: 1,
    //Enable Scrollbar
    scrollbar: '.swiper-scrollbar',
    hide: false,
    draggable: true,
    snapOnRelease: true,
    mousewheel: true,
    breakpoints: {
    768: {
            slidesPerView: 2,
            spaceBetween: 1,
        },
    640: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
    320: {
            slidesPerView: 1,
            spaceBetween: 1,
        }
    }
});






