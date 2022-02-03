
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

console.log(targetElement.getBoundingClientRect().top);


// const mouseWheelScroll = () => {

//   const sliders = document.querySelectorAll('.swiper-slide');
//   console.log(sliders);

//   sliders.forEach(slider => {
//   const targetTop = slider.getBoundingClientRect().top;
//   console.log(targetTop)

//   for(let i = 0; i < sliders.length; i++){
//     const mouseTop = sliders[i].getBoundingClientRect().top;
//     console.log(mouseTop)
//     scrollTop = sliders[i+1].getBoundingClientRect().top;
//   }

//   window.scrollTo({
//     top: scrollTop,
//     behavior: 'smooth'
//   })
// }
// }

  let topArr = [];

  const sliders = document.querySelectorAll('.swiper-slide');
  // console.log(sliders);

  const sliderWrap = document.querySelector('.swiper-wrapper');

  

    sliders.forEach((slider, index, array) => {
      slider.addEventListener('wheel', (e) => {
        e.preventDefault();

        console.log(index)

        console.log(index + 1)

        const scrollTop = window.pageYOffset + array[index + 1].getBoundingClientRect().top;

        console.log(scrollTop);

      window.scrollTo({
        top: scrollTop,
        behavior: "smooth"
      })
      } )
    })


    

//     sliders.forEach(slider => {
//   const targetTop = slider.getBoundingClientRect().top;

  

//   console.log(targetTop)
  

  
  
// });

// const mouseWheelScroll = () => {


// for(let i = 0; i < sliders.length; i++){
//     const mouseTop = sliders[i].getBoundingClientRect().top;
//     console.log(mouseTop)
//     topArr.push(mouseTop);
//     console.log(topArr);

//     switch(window.pageYOffset){
//       case mouseTop[0]:
//         window.scrollTo({
//               top: mouseTop[1],
//               behavior: 'smooth'
//             })
//     }
//   }

//   }

//   window.addEventListener('wheel', mouseWheelScroll)