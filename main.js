$(function () {
  // Инициализация слайдера
  var $slider = $(".testimonial__slider");
  var $current = $(".testimonial__current");
  var $total = $(".testimonial__total");
  var $progressBar = $(".testimonial__progress-bar");
  var totalSlides = $slider.find(".testimonial__slide").length;

  // Устанавливаем общее количество
  $total.text(totalSlides.toString().padStart(2));

  $slider.slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: true,
    waitForAnimate: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Обновление прогресс-бара при смене слайда
  $slider.on("afterChange", function (event, slick, currentSlide) {
    // Обновляем текущий номер
    $current.text((currentSlide + 1).toString().padStart(2));

    // Обновляем прогресс-бар
    var progress = ((currentSlide + 1) / slick.slideCount) * 100;
    $progressBar.css("width", progress + "%");
  });

  // Обработчики для стрелок
  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $slider.slick("slickPrev");
  });

  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $slider.slick("slickNext");
  });

  // Инициализируем рейтинг
  $(".rateYo").rateYo({
    rating: 5,
    starWidth: "20px",
    spacing: "4px",
    ratedFill: "#c99e71",
    normalFill: "#E5E5E5",
    readOnly: true,
    halfStar: true,
  });

  $(".burger, .overlay, .nav__main a").on("click", function (e) {
    if ($(this).attr("href") && $(this).attr("href").startsWith("#")) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        if ($(window).width() <= 900) {
          $(".nav__main").removeClass("nav__main--open");
          $(".overlay").removeClass("overlay--show");
        }
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          800,
        );
        return false;
      }
    }
    if (
      $(this).hasClass("burger") ||
      $(this).hasClass("overlay") ||
      !$(this).attr("href") ||
      !$(this).attr("href").startsWith("#")
    ) {
      e.preventDefault();
      $(".nav__main").toggleClass("nav__main--open");
      $(".overlay").toggleClass("overlay--show");
    }
  });
});
