import createElement from "../../assets/lib/create-element.js";
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
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
      const spanElem = createElement("<span></span>");
      if (i === 0) {
        spanElem.classList.add("slider__step-active");
      }
      stepsElem.appendChild(spanElem);
    }

    let thumb = this.elem.querySelector(".slider__thumb");
    console.log(thumb);
    thumb.ondragstart = () => false;

    this.elem.addEventListener("click", (event) => {
      this.updateRange(event, true);
      this.dispatchEvent();
    });
    thumb.addEventListener("pointerdown", (event) => {
      event.preventDefault();

      const onPointerMove = (event) => {
        this.updateRange(event);
        this.elem.classList.add("slider_dragging");
      };

      const onPointerUp = (event) => {
        document.body.removeEventListener("pointerup", onPointerUp);
        document.body.removeEventListener("pointermove", onPointerMove);
        this.elem.classList.remove("slider_dragging");
        this.updateRange(event, true);
        this.dispatchEvent();
      };

      document.body.addEventListener("pointermove", onPointerMove);
      document.body.addEventListener("pointerup", onPointerUp);
    });
    console.log(thumb);
  }

  updateRange(event, shouldGoToFixed) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let thumb = this.elem.querySelector(".slider__thumb");
    let progress = this.elem.querySelector(".slider__progress");
    if (leftRelative < 0) {
      leftRelative = 0;
    }

    if (leftRelative > 1) {
      leftRelative = 1;
    }

    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    this.value = value;
    this.elem.querySelector(".slider__value").textContent = value;
    this.elem
      .querySelector(".slider__step-active")
      .classList.remove("slider__step-active");
    this.elem
      .querySelectorAll(".slider__steps span")
      [value].classList.add("slider__step-active");

    if (shouldGoToFixed) {
      thumb.style.left = `${(100 / segments) * value}%`;
      progress.style.width = `${(100 / segments) * value}%`;
    } else {
      thumb.style.left = `${leftRelative * 100}%`;
      progress.style.width = `${leftRelative * 100}%`;
    }
  }

  dispatchEvent() {
    let customEvent = new CustomEvent("slider-change", {
      detail: this.value,
      bubbles: true,
    });
    this.elem.dispatchEvent(customEvent);
  }
}
