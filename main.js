$(function () {
  // Инициализация слайдера
  var $slider = $(".testimonial__slider");
  var $current = $(".testimonial__current");
  var $total = $(".testimonial__total");
  var $progressBar = $(".testimonial__progress-bar");
  var totalSlides = $slider.find('.testimonial__slide').length;
  
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
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // Обновление прогресс-бара при смене слайда
  $slider.on('afterChange', function(event, slick, currentSlide) {
    // Обновляем текущий номер
    $current.text((currentSlide + 1).toString().padStart(2));
    
    // Обновляем прогресс-бар
    var progress = ((currentSlide + 1) / slick.slideCount) * 100;
    $progressBar.css('width', progress + '%');
  });
  
  // Обработчики для стрелок
  $('.testimonials__prev').on('click', function(e) {
    e.preventDefault();
    $slider.slick('slickPrev');
  });
  
  $('.testimonials__next').on('click', function(e) {
    e.preventDefault();
    $slider.slick('slickNext');
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
});