import './index.css';

import { PopupTypeCourse } from '../components/PopupTypeCourse';
import { PopupTypePartner } from '../components/PopupTypePartner';

import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-small.svg';

const coursePopup = new PopupTypeCourse('.popup_type_course');
const partnerPopup = new PopupTypePartner('.popup_type_partner');
const logo = document.querySelector('.logo__img');
const page = document.querySelector('.page');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    logo.style.margin = '12px 0';
    page.style.background = 'linear-gradient(180deg, #ffffff 140px, #eaf0ff 0)';
    logo.src = logoScroll;
  } else {
    logo.src = logoBig;
    page.style.background = 'linear-gradient(180deg, #ffffff 180px, #eaf0ff 0)';
    logo.style.margin = '0';
  }
});

window.addEventListener('click', (evt) => {
  if (!evt.target.hasAttribute('data-course-id')) return;
  coursePopup.open(evt.target.dataset.courseId);
});

document.querySelectorAll('.partners__button').forEach(button => {
  button.addEventListener('click', (evt) => {
    if (!evt.currentTarget.hasAttribute('data-partner-id')) return;
    partnerPopup.open(evt.currentTarget.dataset.partnerId);
  });
});

