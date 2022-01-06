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
  paragraph.classList.toggle("hidden");
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
  let cuartoP = document.querySelector(".cuartoP");
  professional5.classList.toggle("hidden");
  professional6.classList.toggle("hidden");
  professional7.classList.toggle("hidden");
  professional8.classList.toggle("hidden");
  professional9.classList.toggle("hidden");
  professional10.classList.toggle("hidden");
  professional11.classList.toggle("hidden");
  professional12.classList.toggle("hidden");
  professional13.classList.toggle("hidden");
  professional14.classList.toggle("hidden");
  professional15.classList.toggle("hidden");
  cuartoP.classList.toggle("hiddenTablet");
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
      $(this).data("wow-duration", "1s");
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
