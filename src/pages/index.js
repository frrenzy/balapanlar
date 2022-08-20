import './index.css';

import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-small.svg';

const logo = document.querySelector('.logo__img');
const page = document.querySelector('.page');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    logo.style.margin = '12px 0';
    page.style.background = '#eaf0ff';
    logo.src = logoScroll;
  } else {
    logo.src = logoBig;
    page.style.background = 'linear-gradient(180deg,#fff 180px,#eaf0ff 0)';
    logo.style.margin = '0';
  }
});
