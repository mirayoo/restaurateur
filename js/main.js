$(document).ready(function() {
  var slider = $("#autoWidth").lightSlider({
    controls: false,
     autoWidth: true,
     loop: true
  });
  $('.slideControls .slidePrev').click(function() {
      slider.goToPrevSlide();
  });

  $('.slideControls .slideNext').click(function() {
      slider.goToNextSlide();
  });
});

$(document).ready(function() {
  var slider = $("#autoWidth_1").lightSlider({
    controls: false,
     autoWidth: true,
     loop: true
  });

  $('.slideControls-1 .slidePrev-1').click(function() {
      slider.goToPrevSlide();
  });

  $('.slideControls-1 .slideNext-1').click(function() {
      slider.goToNextSlide();
  });
});
$(document).ready(function() {
  var slider = $('#autoWidth_2').lightSlider({
      item:5,
      controls: false,
      loop: true,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      responsive : [
          {
              breakpoint:800,
              settings: {
                  item:3,
                  slideMove:1,
                  slideMargin:6,
                }
          },
          {
              breakpoint:480,
              settings: {
                  item:2,
                  slideMove:1
                }
          }
      ]
  });
  
  $('.slideControls-2 .slidePrev-2').click(function() {
    slider.goToPrevSlide();
  });

  $('.slideControls-2 .slideNext-2').click(function() {
    slider.goToNextSlide();
  }); 
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 200 && window.screen.width > 1000 ) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
 
/*Scroll To Top*/

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Swiper Slider - товаров */

  // Собственно, сам хак
  $(document).on('mouseenter', '.swiper-wrapper .swiper-slide', function() {
    $(this).closest('.swiper-overflow').addClass("swiper-overflow--hovered");
  });
  
  $(document).on('mouseleave', '.swiper-wrapper .swiper-slide', function() {
    $(this).closest('.swiper-overflow').removeClass("swiper-overflow--hovered");
  });
  
  
  // Инициализация слайдера
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is <= 320px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      863: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1149: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Слайдер лого

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      // when window width is <= 320px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      863: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1149: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination-l',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-l",
      prevEl: ".swiper-button-prev-l",
    },
  });