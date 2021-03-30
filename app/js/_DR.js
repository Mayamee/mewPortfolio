$(document).ready(function () {
  $(".preloader").addClass("fadeOut");
  $(".preloader__elem").addClass("scale");
  setTimeout(function () {
    $(".preloader").addClass("_none");
  }, 800);
  //   require ready function
  $("#date").html(`${new Date().getFullYear()}`);
  $(".slider").slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
          adaptiveWidth: true,
          arrows: 0,
        },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, adaptiveWidth: true, arrows: 0 },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          adaptiveWidth: true,
          arrows: 0,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          adaptiveWidth: true,
          arrows: 0,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  //   $("*.slick-slide").;
  $(".slick-current").next().addClass("center-slide");
  $(".slider").on("afterChange", function () {
    $("*.slick-slide").removeClass("center-slide");
    $(".slick-current").next().addClass("center-slide");
  });
});
