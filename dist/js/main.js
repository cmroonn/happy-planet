"use strict";

$(document).ready(function () {
  // Carousel settings 
  $(".events__carousel").slick({
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "carousel-dots"
  });
  $(".event-report__carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "carousel-dots"
  });
  $(".raising-money__carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "carousel-dots"
  });
  $(".sponsors__carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "carousel-dots"
  });
  $(".reporting__carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    dotsClass: "carousel-dots"
  }); // Hamburger settings

  $(".hamburger, .mob-menu-close").click(function () {
    $(".mob-menu").toggleClass("active");
  });
});