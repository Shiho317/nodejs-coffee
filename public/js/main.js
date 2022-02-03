
const linksArr = document.querySelector('.down-arrow-link');
const targetElement = document.querySelector('#slider-2');

linksArr.addEventListener('click', e => {
  e.preventDefault()
  const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top
  window.scrollTo({
    top: targetOffsetTop,
    behavior: "smooth"
  })
});

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    sliderPerView: 5,
    spaceBetween: 0,
    mousewheel: {
          invert: false,
        },
    // pagination: {
    //     el:'.swiper-pagination',
    // }
})

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   mousewheel: {
//     invert: true,
//   },

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });
