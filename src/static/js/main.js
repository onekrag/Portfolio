// $('.reviews__card').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: false,
//   nextArrow: '<div class="reviews__card-button_next"><img src="img/icon_arrow_right.svg" alt="Next reviews"></div>',
//   prevArrow: false,
//   infinite: true,
// });
$(document).ready(() => {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header').toggleClass('active');
    $('body').toggleClass('lock');
  });

  //   $('.header').click(function (event) {
  //     $('.header__burger,.header').toggleClass('active');
  //     $('body').toggleClass('lock');
  //   });
});
