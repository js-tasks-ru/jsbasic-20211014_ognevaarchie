import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let carouselMain = createElement(`
    <!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">
        
      </div>
    </div>
  `);
    const innerElem = carouselMain.querySelector('.carousel__inner');
    slides.forEach((slideData) => {
      const slide = createElement(`
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${slideData.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slideData.price}</span>
          <div class="carousel__title">${slideData.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`);
      slide.querySelector('.carousel__button').addEventListener('click', function() {
        let event = new CustomEvent("product-add", {
          detail: slideData.id, 
          bubbles: true
        });
        carouselMain.dispatchEvent(event);
      }); 
      innerElem.appendChild(slide);
    });

    let buttonRight = carouselMain.querySelector('.carousel__arrow_right');
    let buttonLeft = carouselMain.querySelector('.carousel__arrow_left');
    let carouselInner = carouselMain.querySelector('.carousel__inner');
    let slidesElems = carouselMain.querySelectorAll('.carousel__slide');
    let slidesCount = slidesElems.length;
    let currentPosition = 0;
  
    let hideAndShowButtons = function () {
      let carouselWidth = slidesElems[0].offsetWidth;
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

    buttonLeft.style.display = 'none';

    buttonRight.onclick = function() {
      let carouselWidth = slidesElems[0].offsetWidth;
      carouselInner.style.transform = `translateX(${currentPosition -= carouselWidth}px)`;
      hideAndShowButtons();
    };
    buttonLeft.onclick = function() {
      let carouselWidth = slidesElems[0].offsetWidth;
      carouselInner.style.transform = `translateX(${currentPosition += carouselWidth}px)`;
      hideAndShowButtons();
    };
    this.elem = carouselMain;
  }
}
