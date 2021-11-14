function initCarousel() {
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carousel = document.querySelector('.carousel');
  let slidesCount = document.querySelectorAll('.carousel__slide').length;
  
  let carouselWidth = carousel.offsetWidth;
  let currentPosition = 0;

  let hideAndShowButtons = function () {
    if (currentPosition == carouselWidth * -1 * (slidesCount - 1)) {
      buttonRight.style.display = 'none';
    } else {
      buttonRight.style.display = '';
    }
    if (currentPosition == 0) {
      buttonLeft.style.display = 'none';
    } else {
      buttonLeft.style.display = '';
    }
  };
  hideAndShowButtons();
  buttonRight.onclick = function() {
    carouselInner.style.transform = `translateX(${currentPosition -= carouselWidth}px)`;
    hideAndShowButtons();
  };
  buttonLeft.onclick = function() {
    carouselInner.style.transform = `translateX(${currentPosition += carouselWidth}px)`;
    hideAndShowButtons();
  };
 
} 