/*scrool*/
window.addEventListener("scroll", progresar);
var main = document.querySelector("main");

function progresar() {
  var progreso = document.documentElement.scrollTop;
  if (progreso >= 300) {
    var header = document.querySelector("header");

    header.style.background = "#431b829b";
  } else {
    var header = document.querySelector("header");
    header.style.background = "transparent";
  }
}
/*swiper*/
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*buttons*/
function showMore() {
  let paragraph = document.querySelector(".aboutHidden");
  let rectangle1 = document.querySelector(".rectangle1");
  paragraph.classList.toggle("hiddenMobile");
  rectangle1.classList.toggle("rotate");
}

function showProfessional() {
  let professional5 = document.querySelector(".professional5");
  let professional6 = document.querySelector(".professional6");
  let professional7 = document.querySelector(".professional7");
  let professional8 = document.querySelector(".professional8");
  let professional9 = document.querySelector(".professional9");
  let professional10 = document.querySelector(".professional10");
  let professional11 = document.querySelector(".professional11");
  let professional12 = document.querySelector(".professional12");
  let professional13 = document.querySelector(".professional13");
  let professional14 = document.querySelector(".professional14");
  let professional15 = document.querySelector(".professional15");

  professional5.classList.toggle("hiddenMobile");
  professional6.classList.toggle("hiddenMobile");
  professional7.classList.toggle("hiddenMobile");
  professional8.classList.toggle("hiddenMobile");
  professional9.classList.toggle("hiddenMobile");
  professional10.classList.toggle("hiddenMobile");
  professional11.classList.toggle("hiddenMobile");
  professional12.classList.toggle("hiddenMobile");
  professional13.classList.toggle("hiddenMobile");
  professional14.classList.toggle("hiddenMobile");
  professional15.classList.toggle("hiddenMobile");
}

function showYouth() {
  let cuartoY = document.querySelector(".cuartoY");
  let youth5 = document.querySelector(".youth5");
  let youth6 = document.querySelector(".youth6");
  let youth7 = document.querySelector(".youth7");
  let youth8 = document.querySelector(".youth8");

  cuartoY.classList.toggle("hiddenTablet");
  youth5.classList.toggle("hidden");
  youth6.classList.toggle("hidden");
  youth7.classList.toggle("hidden");
  youth8.classList.toggle("hidden");
}

//wow Effects
new WOW().init();

$(window).on("load scroll", function () {
  "use strict";
  $(".wow").css("animation-play-state", "paused");
  $(".wow").each(function () {
    if (!$(this).data("wow-duration")) {
      $(this).data("wow-duration", "0.3s");
    }
    if (
      $(this).data("wow-offset") + $(this).offset().top <=
        $(window).scrollTop() + $(window).height() ||
      (!$(this).data("wow-offset") &&
        $(this).offset().top <= $(window).scrollTop() + $(window).height())
    ) {
      $(this).css("animation-play-state", "running ");
      $(this).css({
        animationDuration: $(this).data("wow-duration"),
        animationDelay: $(this).data("wow-delay"),
        animationIterationCount: $(this).data("wow-iteration"),
      });
    }
  });
});

// Scoll reveal
/*
var srDuration = 600;
var srDistance = "20px";
var srDistanceLg = "40px";
var srDelay = 600;
var srInverval = 150;
var srEasing = "ease-out";

setTimeout(function () {
  ScrollReveal().reveal(".reveal-fade", {
    distance: 0,
    reset: true,
    duration: srDuration,
    delay: 80,
    interval: 150,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-fade-delay", {
    distance: 0,
    reset: true,
    duration: srDuration,
    delay: srDelay,
    interval: 150,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-top", {
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: 80,
    interval: 150,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-top-nav", {
    distance: srDistance,
    reset: false,
    duration: srDuration,
    delay: 80,
    interval: 150,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-bottom", {
    origin: "top",
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: 0,
    interval: 150,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-left", {
    origin: "left",
    distance: srDistanceLg,
    reset: true,
    duration: srDuration,
    delay: 80,
    interval: 80,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-right", {
    origin: "right",
    distance: srDistanceLg,
    reset: true,
    duration: srDuration,
    delay: 80,
    interval: 80,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-top-delay", {
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: srDelay,
    interval: srInverval,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-bottom-delay", {
    origin: "top",
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: srDelay,
    interval: srInverval,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-left-delay", {
    origin: "left",
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: srDelay,
    interval: srInverval,
    viewFactor: 0.1,
    easing: srEasing,
  });
  ScrollReveal().reveal(".reveal-right-delay", {
    origin: "right",
    distance: srDistance,
    reset: true,
    duration: srDuration,
    delay: srDelay,
    interval: srInverval,
    viewFactor: 0.1,
    easing: srEasing,
  });
}, 100);
*/
