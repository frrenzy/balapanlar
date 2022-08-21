import { Popup } from './Popup';

export class PopupTypePartner extends Popup {
  constructor(selector) {
    super(selector);
  }

  _getPartnerContent(id) {
    const partnerContent = document
      .querySelector(`#partner-id-${id}`)
      .content
      .querySelector('.popup__content')
      .cloneNode(true);
    
    this._element.querySelector('.popup__buttons a').setAttribute('href', document.querySelector(`#partner-id-${id}`).dataset.link);

    return partnerContent;
  }

  open(partnerId) {
    super.open();
    let partnerContent = this._getPartnerContent(partnerId);
    this._element.querySelector('.popup__container').prepend(partnerContent);
  }

  close() {
    super.close();
    setTimeout(() => {
      this._element.querySelector('.popup__content').remove();
      this._element.querySelector('.popup__buttons a').setAttribute('href', '');
    }, 250);
  }
}