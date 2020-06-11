"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Close popup when click on overlay OR press "ESC"
  var closePopup = function closePopup(popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 27) {
        popup.classList.remove("show");
      }
    });
  }; // Carousel Settings


  {
    var foundersCarousel = new Swiper('.about-page__founders-carousel', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 100,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          loop: true,
          spaceBetween: 30,
          pagination: {
            el: null,
            clickable: true
          },
          navigation: {
            nextEl: '.about-page__founders .arrow-right',
            prevEl: '.about-page__founders .arrow-left'
          }
        }
      }
    });
    var aboutGallery = new Swiper('.about-page__gallery', {
      spaceBetween: 20,
      slidesPerView: 1,
      width: 174,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    if (window.innerWidth < 1170) {
      var eventsCarousel = new Swiper('.events__carousel', {
        width: 225,
        centeredSlides: true,
        loop: true,
        spaceBetween: 4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }

    var eventsReportCarousel = new Swiper('.event-report__carousel', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          pagination: {
            el: null
          },
          navigation: {
            nextEl: '.event-report .container .arrow-right',
            prevEl: '.event-report .container .arrow-left'
          }
        }
      }
    });
    var raisingMoneyCarousel = new Swiper('.raising-money__carousel', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          pagination: {
            el: null
          },
          navigation: {
            nextEl: '.raising-money .container .arrow-right',
            prevEl: '.raising-money .container .arrow-left'
          }
        }
      }
    });
    var sponsorsCarousel = new Swiper('.sponsors__carousel', {
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          pagination: {
            el: null
          },
          navigation: {
            nextEl: '.sponsors .container .arrow-right',
            prevEl: '.sponsors .container .arrow-left'
          }
        }
      }
    });
    var reportingCarousel = new Swiper('.reporting__carousel', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 4,
          spaceBetween: 20,
          pagination: {
            el: null
          },
          navigation: {
            nextEl: '.reporting .container .arrow-right',
            prevEl: '.reporting .container .arrow-left'
          }
        }
      }
    });

    var removeAnimation = function removeAnimation(selector) {
      selector.style.animation = "unset";
    };

    var aboutPeopleCarousel = new Swiper('.about__people-carousel', {
      width: 320,
      effect: "fade",
      pagination: {
        el: '.about__people .swiper-pagination',
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      on: {
        slideChange: function slideChange() {
          document.querySelector(".about__people svg .blue").style.animation = "frameAnimate1 1s ease running";
          setTimeout(removeAnimation, 1000, document.querySelector(".about__people svg .blue"));
          document.querySelector(".about__people svg .purple").style.animation = "frameAnimate2 1s ease running";
          setTimeout(removeAnimation, 1000, document.querySelector(".about__people svg .purple"));
        }
      }
    });
    var eventPopupCarousel = new Swiper(".event-photos", {
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
    var galleryCarousel = new Swiper(".gallery__carousel .swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      breakpoints: {
        1170: {
          slidesPerColumn: 2,
          slidesPerView: 3,
          slidesPerColumnFill: "row",
          spaceBetween: 30,
          pagination: {
            el: null
          },
          navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left'
          }
        }
      }
    });
  } // Functional for buttons in contacts-page

  {
    var allButtons = document.querySelectorAll(".contacts-page-content__block-button");
    allButtons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        btn.parentElement.classList.toggle("active");
      });
    });
  } // Gallery settings in report page 

  {
    var tabs = document.querySelectorAll(".gallery__tabs li");
    var galleries = document.querySelectorAll(".gallery__carousel");
    galleries = Array.prototype.slice.call(galleries);
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        tabs.forEach(function (el) {
          return el.classList.remove("current");
        }); // remove class "current" from all tabs

        var target = e.target;
        target.classList.add("current"); // add class "current" to target 

        var gallery = galleries.filter(function (elem) {
          return elem.dataset.gallery === target.outerText;
        });
        gallery = gallery[0]; // get gallery 

        galleries.forEach(function (el) {
          el.classList.remove("active");
        });
        gallery.classList.add("active");
      });
    });
  } // FAQ settings on "Help page"

  {
    var allFaq = document.querySelectorAll(".faq-item");
    allFaq.forEach(function (faq) {
      faq.addEventListener("click", function (e) {
        faq.classList.toggle("active");
      });
    });
  } // Hover on people group icons 

  {
    var allIcons = document.querySelectorAll(".our-projects__elem-people .people-item");
    allIcons.forEach(function (icon) {
      icon.addEventListener("mouseover", function (e) {
        icon.children[0].classList.toggle("show");
      });
      icon.addEventListener("mouseout", function (e) {
        icon.children[0].classList.toggle("show");
      });
    });
  } // Popup with privacy policy settings

  {
    var _allButtons = document.querySelectorAll(".callPrivacy");

    var popup = document.getElementById("privacyPolicy");
    var submit = document.querySelector(".privacy-popup-submit");

    _allButtons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        popup.classList.add("show");
      });
    });

    submit.addEventListener("click", function (e) {
      popup.classList.remove("show");
    });
    closePopup(popup);
  } // Event popup 

  {
    var _popup = document.querySelector(".event-popup");

    closePopup(_popup);
  } // thanks popup 

  {
    var _popup2 = document.querySelector(".thanks-popup");

    closePopup(_popup2);
  } // consult popup 

  {
    var _popup3 = document.querySelector(".consult-popup");

    closePopup(_popup3);
  } // Make header fixed

  {
    var header = document.querySelector(".header");

    if (window.innerWidth > 1170) {
      window.addEventListener("scroll", function (e) {
        console.log(window.pageYOffset);

        if (window.pageYOffset > 200) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      });
    } else {
      header = document.querySelector(".header-mob");
      window.addEventListener("scroll", function (e) {
        console.log(window.pageYOffset);

        if (window.pageYOffset > 200) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      });
    }
  }
  {
    var buttons = document.querySelectorAll(".hamburger, .mob-menu-close");
    var menu = document.querySelector(".mob-menu");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
    });
  }
});