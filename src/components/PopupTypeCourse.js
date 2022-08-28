import { Popup } from './Popup';

export class PopupTypeCourse extends Popup {
  constructor(selector) {
    super(selector);
  }

  _getCourseContent(id) {
    const courseContent = document
      .querySelector(`#course-id-${id}`)
      .content
      .querySelector('.popup__content')
      .cloneNode(true);
    
    this._element.querySelector('.popup__link').setAttribute('href', document.querySelector(`#course-id-${id}`).dataset.link);

    return courseContent;
  }

  open(courseId) {
    super.open();
    const courseContent = this._getCourseContent(courseId);
    this._element.querySelector('.popup__container').prepend(courseContent);
  }

  close() {
    super.close();
    setTimeout(() => {
      this._element.querySelector('.popup__content').remove();
      this._element.querySelector('.popup__link').setAttribute('href', '');
    }, 250);
  }
}