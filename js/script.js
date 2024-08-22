$(document).ready(function(){

function doScroll(){
  var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $("#navbar").addClass("scrolled");
    } else {
        $("#navbar").removeClass("scrolled");
    }
  }
  doScroll();
  $(window).scroll(function() {
    doScroll()
  });

  $(".navbar-toggler").click(function() {
        $(this).toggleClass("x-btn");

        if ($(this).hasClass("x-btn")) {
            $(".navbar-toggler-icon").show();  // Mostrar el icono de hamburguesa
            $(".btn-close").addClass("d-none"); // Ocultar el icono de cerrar
        } else {
            $(".navbar-toggler-icon").hide();  // Ocultar el icono de hamburguesa
            $(".btn-close").removeClass("d-none"); // Mostrar el icono de cerrar
        }
  });

  $('#15min').click(function() {
    $('#calender').show();
    $(this).hide();
  });

  $('#btn-cookies').click(function() {
    $('#cookies').hide();
  });

  $('#next').click(function() {
    $('#form-1').hide();
    $('#form-2').show();
  });

  $('#final').click(function() {
    $('#login').hide();
    $('#seccion-form').hide();
    $('#seccion-01').show();
    $('#seccion-03').show();
  });
  
$('.carousel-profesores').slick({
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.carousel-features').slick({
  slidesToShow: 3,
  autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
});

$('.speaking').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});

});
