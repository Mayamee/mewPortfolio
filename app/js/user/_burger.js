$(".burger").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("_active");
  $(".header__nav").toggleClass("_active");
  setTimeout(() => {
    $("body").toggleClass("_lock"); //not important
  }, 500);
});
