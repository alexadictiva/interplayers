var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
function showMore() {
  let paragraph = document.querySelector(".aboutHidden");
  paragraph.classList.toggle("hidden");
}

function showProfessional() {
  let professional = document.querySelector(".professionalHidden");
  professional.classList.toggle("hidden2");
}

function showYouth() {
  let youth = document.querySelector(".youthHidden");
  youth.classList.toggle("hidden2");
}
