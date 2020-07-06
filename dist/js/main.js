"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body"); // Close popup when click on overlay OR press "ESC"

  var closePopup = function closePopup(popups) {
    popups.forEach(function (popup) {
      popup.addEventListener("click", function (e) {
        if (e.target === popup) {
          popup.classList.remove("show");
          body.classList.remove("disabled");
          body.style.paddingRight = 0;
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
          popup.classList.remove("show");
          body.classList.remove("disabled");
          body.style.paddingRight = 0;
        }
      });
    });
    var closeButtons = document.querySelectorAll(".popup .popup-close");
    closeButtons.forEach(function (el) {
      el.addEventListener("click", function () {
        el.closest(".popup-wrapper").classList.remove("show");
        body.classList.remove("disabled");
        body.style.paddingRight = 0;
      });
    });
  }; // hide scroll bar


  function calcScrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth),
        windowWidth = parseInt(window.innerWidth),
        scrollbarWidth = windowWidth - documentWidth;
    return scrollbarWidth;
  } // Carousel Settings


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
      updateOnWindowResize: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
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
      spaceBetween: 30,
      slidesPerView: 2,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      breakpoints: {
        1170: {
          slidesPerView: 3,
          pagination: {
            el: null,
            clickable: true
          },
          navigation: {
            nextEl: '.about-page__gallery-wrap .arrow-right',
            prevEl: '.about-page__gallery-wrap .arrow-left'
          }
        }
      }
    });

    if (window.innerWidth < 1170) {
      var eventsCarousel = new Swiper('.events__carousel', {
        spaceBetween: 4,
        slidesPerView: 2,
        watchOverflow: true,
        width: 450,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        breakpoints: {
          450: {
            slidesPerView: 3,
            width: 675,
            centeredSlides: true
          },
          900: {
            width: 900,
            slidesPerView: 4,
            centeredSlides: true
          }
        }
      });
    }

    var eventsReportCarousel = new Swiper('.event-report__carousel', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
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
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
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
      keyboard: {
        enabled: true,
        onlyInViewport: false
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
        el: '.carousel-dots',
        clickable: true
      },
      spaceBetween: 20,
      keyboard: {
        enabled: true
      },
      breakpoints: {
        1170: {
          slidesPerView: 4,
          watchOverflow: true,
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
    var reportingImages = new Swiper('.reporting-images .swiper-container', {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      allowTouchMove: false
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

    if (window.innerWidth < 1170) {
      var eventPopupCarousel = new Swiper(".event-photos", {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }

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
  } // Hover on category square

  {
    var _allIcons = document.querySelectorAll(".category-square");

    _allIcons.forEach(function (icon) {
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
        body.classList.add("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    });

    submit.addEventListener("click", function (e) {
      popup.classList.remove("show");
      body.classList.remove("disabled");
    });
  } // Popup with feedback settings

  {
    var _allButtons2 = document.querySelectorAll(".callFeedback");

    var _popup = document.querySelector(".popup-feedback");

    _allButtons2.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        _popup.classList.add("show");

        body.classList.add("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    });
  } // Popup with privacy policy settings

  {
    var _allButtons3 = document.querySelectorAll(".callFeedback");

    var _popup2 = document.querySelector(".popup-feedback");

    _allButtons3.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        _popup2.classList.add("show");

        body.classList.add("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    });
  } // Close popup

  {
    var _popup3 = document.querySelectorAll(".popup-wrapper");

    closePopup(_popup3);
  } // Make header fixed

  {
    var header = document.querySelector(".header");

    if (window.innerWidth > 1170) {
      window.addEventListener("scroll", function (e) {
        if (window.pageYOffset > 200) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
      });
    } else {
      header = document.querySelector(".header-mob");
      window.addEventListener("scroll", function (e) {
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
        body.classList.toggle("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    });
  } // Map on heroes page settings 

  {
    var points = document.querySelectorAll(".heroes-map_point");
    points.forEach(function (point) {
      point.addEventListener("mouseover", function () {
        point.children[0].classList.add("show"); // show text
      });
      point.addEventListener("mouseout", function () {
        point.children[0].classList.remove("show"); // hide text 
      });
    });
  } // opening event popup settings 

  {
    var allEventCards = document.querySelectorAll(".openEvent");
    var allEventModals = document.querySelectorAll(".event-popup");
    allEventCards.forEach(function (card) {
      card.addEventListener("click", function () {
        var eventNum = card.getAttribute("data-event");
        allEventModals.forEach(function (modal) {
          var modalNum = modal.id;

          if (eventNum === modalNum) {
            modal.classList.add("show");
            body.classList.add("disabled");
            var scrollbarWidth = calcScrollbarWidth();
            body.style.paddingRight = scrollbarWidth + 'px';
          }
        });
      });
    });
  } // opening raising money popup settings 

  {
    var _allEventCards = document.querySelectorAll(".raising-money__item");

    var _allEventModals = document.querySelectorAll(".raising-popup");

    _allEventCards.forEach(function (card) {
      var button = card.querySelectorAll(".btn, .openRisingMoney");
      button.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var eventNum = card.getAttribute("data-raising");

          _allEventModals.forEach(function (modal) {
            var modalNum = modal.id;

            if (eventNum === modalNum) {
              modal.classList.add("show");
              body.classList.add("disabled");
              var scrollbarWidth = calcScrollbarWidth();
              body.style.paddingRight = scrollbarWidth + 'px';
            }
          });
        });
      });
    });
  } // opening report popup settings 

  {
    var _allEventCards2 = document.querySelectorAll(".event-report__item");

    var _allEventModals2 = document.querySelectorAll(".report-popup");

    _allEventCards2.forEach(function (card) {
      card.addEventListener("click", function (e) {
        var eventNum = card.getAttribute("data-report");

        if (!e.target.classList.contains("category-square")) {
          _allEventModals2.forEach(function (modal) {
            var modalNum = modal.id;

            if (eventNum === modalNum) {
              modal.classList.add("show");
              body.classList.add("disabled");
              var scrollbarWidth = calcScrollbarWidth();
              body.style.paddingRight = scrollbarWidth + 'px';
            }
          });
        }
      });
    });
  } // write to founder modal window 

  {
    var btn = document.querySelector(".about__link");
    var modal = document.getElementById("writeToFounder");

    if (btn) {
      btn.addEventListener("click", function (e) {
        modal.classList.add("show");
        body.classList.add("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    }
  } // get consult modal window 

  {
    var _btn = document.getElementById("getConsult");

    var _modal = document.getElementById("consultPopup");

    if (_btn) {
      _btn.addEventListener("click", function () {
        _modal.classList.add("show");

        body.classList.add("disabled");
        var scrollbarWidth = calcScrollbarWidth();
        body.style.paddingRight = scrollbarWidth + 'px';
      });
    }
  } // fix socials buttons 

  {
    if (window.innerWidth >= 1350) {
      var socials = document.querySelector(".main-screen-socials");
      var socialsTopPos = socials.clientHeight;
      window.addEventListener("scroll", function (e) {
        if (socialsTopPos <= window.pageYOffset) {
          socials.classList.add("fixed");
        } else {
          socials.classList.remove("fixed");
        }
      });
    }
  }
  {
    var allGallery = document.querySelectorAll(".lightGallery");
    console.log(allGallery);
    allGallery.forEach(function (gallery) {
      lightGallery(gallery);
    });
  }
});