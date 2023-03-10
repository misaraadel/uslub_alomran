$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.nav-contain').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".swiper-product", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-blog", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-about", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".prodcutDetailsThumbsSlider", {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0:{
        slidesPerView: 3,
      },
      700:{
        slidesPerView: 3,
      },
      1050:{
        slidesPerView: 4,
      }
    }
  });
  var swiper2 = new Swiper(".prodcutDetailsSwiper", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });
});

$(document).ready(function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').addClass('active');
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
        $('#uploadShape').addClass('active')
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imageUpload").change(function() {
    readURL(this);
  });
});