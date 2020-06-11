"use strict";

$(document).ready(function () {
  // Carousel settings 
  $(".gallery__carousel").slick({
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