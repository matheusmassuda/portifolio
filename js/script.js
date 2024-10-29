var swiper = new Swiper("#swiper1", {
  slidesPerWiew: 2,
  spaceBetween: 150,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper('#swiper2', {
    
  loop: true,
  grabCursor: true,
  
  //If need pagination
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next-2',
      nextEl: '.swiper-button-prev-2',
  },

  //Responsive breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      620: {
          slidesPerView: 2
      },
      1190: {
          slidesPerView: 3
      }
  }
});





