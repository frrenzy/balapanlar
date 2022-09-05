import Popup from './Popup';


export default class PopupTypePartner extends Popup {
  constructor(selector) {
    super(selector);
  }

  #getPartnerContent(id) {
    const partnerContent = document
      .querySelector(`#partner-id-${id}`)
      .content
      .querySelector('.popup__content')
      .cloneNode(true);

    this._element.querySelector('.popup__link').setAttribute('href', document.querySelector(`#partner-id-${id}`).dataset.link);

    return partnerContent;
  }

  open(partnerId) {
    super.open();
    const partnerContent = this.#getPartnerContent(partnerId);
    const container = this._element.querySelector('.popup__container');
    container.classList.add('popup__container_size_small');
    container.prepend(partnerContent);
  }

  close() {
    super.close();
    setTimeout(() => {
      this._element.querySelector('.popup__content').remove();
      this._element.querySelector('.popup__link').setAttribute('href', '');
    }, 250);
  }
}
