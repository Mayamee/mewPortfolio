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
    slidesToShow: 3,
    centerMode: false,
  });
});
