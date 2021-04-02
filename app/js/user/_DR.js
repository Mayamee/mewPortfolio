$(document).ready(function () {
  $(".preloader").addClass("fadeOut");
  $(".preloader__elem").addClass("scale");
  setTimeout(function () {
    $(".preloader").addClass("_none");
  }, 800);
  //   require ready function
  $("#date").html(`${new Date().getFullYear()}`);
  $(".form__phone").mask("+7(000)-000-00-00");
  $(".slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2,
          adaptiveWidth: true,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          adaptiveWidth: true,
          arrows: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          adaptiveWidth: true,
          arrows: 0,
          infinite: true,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          adaptiveWidth: true,
          arrows: 0,
          infinite: true,
          autoplay: false,
        },
      },
    ],
  });
  //   $("*.slick-slide").;
  $(".slick-current").next().addClass("center-slide");
  $(".slider").on("afterChange", function () {
    $("*.slick-slide").removeClass("center-slide");
    $(".slick-current").next().addClass("center-slide");
  });
  //   //   простой фильтр
  //   let filter = $("[data-filter");
  //   filter.on("click", function (event) {
  //     event.preventDefault();
  //     let cat = $(this).data("filter");
  //     $("[data-cat]").each(function () {
  //       let item = $(this).data("cat");
  //       if (cat == "all") {
  //         $(this).removeClass("hide");
  //       } else {
  //         if (item != cat) {
  //           $(this).addClass("hide");
  //           setTimeout(function () {
  //             $(this).addClass("hide");
  //           }, 1000);
  //         } else {
  //           $(this).removeClass("hide");
  //         }
  //       }
  //     });
  //   });
  //   //   простой фильтр
  const container = document.querySelector(".gallery__columns");
  const gallerySizer = document.querySelector(".gallery__sizer");
  const shuffleGrid = new Shuffle(container, {
    itemSelector: ".gallery__item",
    sizer: gallerySizer,
  });
  $("#all").on("click", function (e) {
    e.preventDefault();
    shuffleGrid.filter();
  });
  $("#landing").on("click", function (e) {
    e.preventDefault();
    shuffleGrid.filter("landing");
  });
  $("#quiz").on("click", function (e) {
    e.preventDefault();
    shuffleGrid.filter("quiz");
  });
  $("#blog").on("click", function (e) {
    e.preventDefault();
    shuffleGrid.filter("blog");
  });
  $("#help").on("click", function (e) {
    e.preventDefault();
    shuffleGrid.filter("help");
  });
});
