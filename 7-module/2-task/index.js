import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    let modalWindow = createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
  </div>`);
    this.elem = modalWindow;

  }
  open() {
    let child = document.body.appendChild(this.elem);
    let bodyOpen = document.body.classList.add("is-modal-open");
    let modalClose = document.body.querySelector(".modal__close");
    modalClose.addEventListener("click", (params) => {
      this.close();
    });
    document.body.addEventListener("keydown", this.escapeCloseFuntion);
  }
  
  setTitle(title) {
    let modalTitle = this.elem.querySelector(".modal__title");
    modalTitle.textContent = title;
  }
  setBody(node) {
    let modalBody = this.elem.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.appendChild(node);
  }

  escapeCloseFuntion = (event) => {
    if (event.code === 'Escape') {
      this.close();
    }
  }

  close() {
    document.body.classList.remove("is-modal-open");
    document.body.removeEventListener('keydown', this.escapeCloseFuntion);
    let bodyModal = document.body.querySelector(".modal");
    if(bodyModal) bodyModal.remove();
  }
}
