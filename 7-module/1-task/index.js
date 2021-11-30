import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    let ribbonMain = createElement(`
    <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">

    </nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`);
    this.elem = ribbonMain;
    this.handleMenu(ribbonMain, categories);
    this.handleEvents(ribbonMain);
  }

  handleMenu(ribbonMain, categories) {
    const ribbonInnerElem = ribbonMain.querySelector('.ribbon__inner');
    categories.forEach((item) => {
      const menuItem = createElement(` <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`);
      ribbonInnerElem.appendChild(menuItem);
    });
  }

  handleEvents(ribbonMain) {
    const ribbonInnerElem = ribbonMain.querySelector('.ribbon__inner');
    ribbonInnerElem.addEventListener('click', function(event) {
      if (event.target.dataset.id) {
        const activeElement = document.querySelector('.ribbon__item_active');
        if (activeElement) {
          activeElement.classList.remove('ribbon__item_active');
        }

        event.target.classList.add('ribbon__item_active');
        let customEvent = new CustomEvent("ribbon-select", {
          detail: event.target.dataset.id, 
          bubbles: true
        });
        ribbonMain.dispatchEvent(customEvent);
      }
    }); 
  


















    let ribbonInner = ribbonMain.querySelector(".ribbon__inner");
    let leftButton = ribbonMain.querySelector(".ribbon__arrow_left");
    let rightButton = ribbonMain.querySelector(".ribbon__arrow_right");
    leftButton.addEventListener("click", function () {
      ribbonInner.scrollBy(-350, 0);
    });
    rightButton.addEventListener("click", function () {
      ribbonInner.scrollBy(350, 0);
    });
    ribbonInner.addEventListener("scroll", function () {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let offsetWidth = ribbonInner.offsetWidth;

      if (scrollLeft == 0) {
        leftButton.classList.remove("ribbon__arrow_visible");
      } else if (scrollLeft > 0) {
        leftButton.classList.add("ribbon__arrow_visible");
      }
      if (scrollWidth === (scrollLeft + offsetWidth)) {
        rightButton.classList.remove("ribbon__arrow_visible");
      } else if (scrollWidth > (scrollLeft + offsetWidth)) {
        rightButton.classList.add("ribbon__arrow_visible");
      }
    });
  }
}
