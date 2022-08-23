import './index.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-small.svg';

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

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(min-width: 770px)', () => {
  const duration = 10;
  const sections = gsap.utils.toArray('.principles__item');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.principles',
      pin: '.main',
      scrub: 0.5,
      snap: 1 / (sections.length - 1),
      start: 'bottom bottom',
      end: '+=5000',
    },
  });

  tl.to(sections, {
    xPercent: -100 * (sections.length - 1),
    duration: duration,
    ease: 'none',
  });
});
