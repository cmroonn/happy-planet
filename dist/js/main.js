"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Functional for buttons in contacts-page
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
  }
});