import './index.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(min-width: 769px)', () => {
  const duration = 10;
  const	sections = gsap.utils.toArray(".principles__item");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".principles",
      pin: '.main',
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: "bottom bottom",
      end: "+=5000"
    }
  });

  tl.to(sections, {
    xPercent: -100 * (sections.length - 1),
    duration: duration,
    ease: "none"
  })
});
