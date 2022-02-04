
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

  const sliders = document.querySelectorAll('.swiper-slide');
  // console.log(sliders);

  const sliderWrap = document.querySelector('.swiper-wrapper');

  

    sliders.forEach((slider, index, array) => {
      slider.addEventListener('wheel', (e) => {
        e.preventDefault();

        console.log(index)

        console.log(index + 1)

        if(e.deltaY > 0){
          const scrollUp = window.pageYOffset + array[index + 1].getBoundingClientRect().top;

          window.scrollTo({
          top: scrollUp,
          behavior: "smooth"
          })
        }else if(e.deltaY < 0){

          const scrollDown = window.pageYOffset + array[index - 1].getBoundingClientRect().top;
          window.scrollTo({
          top: scrollDown,
          behavior: "smooth"

        })
        }

        console.log(scrollTop);

      
      } )
    })
