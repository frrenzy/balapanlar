import './index.css';


import { PopupTypeCourse } from '../components/PopupTypeCourse';
import { PopupTypePartner } from '../components/PopupTypePartner';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import logoBig from '../images/logo.svg';
import logoScroll from '../images/logo-small.svg';

const coursePopup = new PopupTypeCourse('.popup_type_course');
const partnerPopup = new PopupTypePartner('.popup_type_partner');
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
