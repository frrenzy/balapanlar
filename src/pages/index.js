import './index.css';

import logoImgBig from '../images/logo.svg';
import logoImgSmall from '../images/logo-small.svg';

import PopupTypeCourse from '../components/PopupTypeCourse';
import PopupTypePartner from '../components/PopupTypePartner';
import HorizontalScroller from '../components/HorizontalScroller';

import { logo, page, burgerButton, navigation, courseDetailsButtons, partnersButtons } from '../utils/constants';
import { toggleBurger } from '../utils/utils';


const coursePopup = new PopupTypeCourse('.popup_type_course');
const partnerPopup = new PopupTypePartner('.popup_type_partner');

const scroller = new HorizontalScroller({
  containerSelector: '.principles',
  itemsSelector: '.principles__item',
  mediaQuery: '(min-width: 769px)',
});
scroller.init();


window.addEventListener('scroll', () => {
  if (window.matchMedia('(min-width: 1111px)').matches) {
    if (window.scrollY > 0) {
      logo.classList.add('logo__img_scrolled');
      page.classList.add('page_scrolled');
      logo.src = logoImgSmall;
    } else {
      logo.src = logoImgBig;
      page.classList.remove('page_scrolled');
      logo.classList.remove('logo__img_scrolled');
    }
  }
});

burgerButton.addEventListener('click', () => {
  toggleBurger();
});

navigation.addEventListener('click', evt => {
  console.log(evt);
  if (evt.target.classList.contains('header__link')) {
    toggleBurger();
  }
});

courseDetailsButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    coursePopup.open(evt.target.dataset.courseId);
  });
});

partnersButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    partnerPopup.open(evt.currentTarget.dataset.partnerId);
  });
});
