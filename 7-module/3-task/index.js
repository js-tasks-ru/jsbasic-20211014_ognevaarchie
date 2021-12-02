import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    let newSlider = createElement(`
    <div class="slider">
    
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
    
      <!--Полоска слайдера-->
      <div class="slider__progress"></div>
    
      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->

      </div>
    </div>
    `);
    this.elem = newSlider;
    let stepsElem = this.elem.querySelector(".slider__steps");
    for (let i = 0; i < steps; i++) {
      const spanElem = createElement('<span></span>');
      if (i === 0) {
        spanElem.classList.add('slider__step-active');
      }
      stepsElem.appendChild(spanElem);
    }
    this.elem.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      this.value = value;
      let valuePercents = (value / segments) * 100;
      this.elem.querySelector(".slider__value").textContent = value;
      console.log(value);
      this.elem
        .querySelector(".slider__step-active")
        .classList.remove("slider__step-active");
      let spanAll = this.elem
        .querySelectorAll(".slider__steps span")
        [value].classList.add("slider__step-active");
      let thumb = this.elem.querySelector(".slider__thumb");
      let progress = this.elem.querySelector(".slider__progress");
      let leftPercents = (100 / segments) * value;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      let customEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      newSlider.dispatchEvent(customEvent);
     
    });
  }
}
