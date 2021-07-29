var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    567: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 8,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 8,
    },
  }

});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const burger = document.querySelector('.burger');
const navbarPanel = document.querySelector('.navbar-panel');

burger.addEventListener('click', () => {
  navbarPanel.classList.toggle('open');
  burger.classList.toggle('active');
})