$(document).ready(function () {
  $(".preloader").addClass("fadeOut");
  $(".preloader__elem").addClass("scale");
  setTimeout(() => {
    $(".preloader").remove();
  }, 800);
  //   require ready function
  $("#date").html(`${new Date().getFullYear()}`);
});
