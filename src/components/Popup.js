export default class Popup {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  #handleCloseByEscape = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  #handleClosePopupClick = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
    if (evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  #setEventListeners() {
    document.addEventListener('keydown', this.#handleCloseByEscape);
    this._element.addEventListener('mousedown', this.#handleClosePopupClick);
  }

  #removeEventListeners() {
    document.removeEventListener('keydown', this.#handleCloseByEscape);
    this._element.removeEventListener('mousedown', this.#handleClosePopupClick);
  }

  open() {
    this._element.classList.add('popup_opened');
    this._element.setAttribute('aria-hidden', false);
    this.#setEventListeners();
  }

  close() {
    this._element.classList.remove('popup_opened');
    this._element.setAttribute('aria-hidden', true);
    this.#removeEventListeners();
  }
}
