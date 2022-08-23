import './index.css';

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

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

/*gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".principles__item");

gsap.to(sections, {
  scrollTrigger: {
    x: 3000,
    scroller: '.principles__list',
    trigger: '.principles__list',
    pin: '.principles__heading',
    start: 'bottom bottom',
    onToggle: self => console.log('puk'),
  }
});*/
gsap.registerPlugin(ScrollTrigger);

let duration = 10,
		sections = gsap.utils.toArray(".principles__item"),
		sectionIncrement = duration / (sections.length - 1),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".principles__list",
        pin: true,
				scrub: 1,
        snap: 1 / (sections.length - 1),
				start: "bottom bottom",
				end: "+=5000"
			}
		});

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none"
});
