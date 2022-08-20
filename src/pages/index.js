import './index.css';

import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-small.svg';

const logo = document.querySelector('.logo__img');
const page = document.querySelector('.page');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    logo.classList.add('logo__img_scrolled');
    page.classList.add('page_scrolled');
    logo.src = logoScroll;
  } else {
    logo.src = logoBig;
    page.classList.remove('page_scrolled');
    logo.classList.remove('logo__img_scrolled');
  }
});
