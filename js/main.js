$(function(){
$('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    autoplay: 2000,
    dotsClass: 'header-dots',
});
$('.menu__btn').on('click', function(){
$('.menu__list').slideToggle();
});
});