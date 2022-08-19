import './index.css';

import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-scroll.svg';

const logo = document.querySelector(".logo__img");

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    logo.style.margin = '12px 0';
    logo.src = logoScroll;
  } else {
    logo.src = logoBig;
    logo.style.margin = '0';
  }
});
