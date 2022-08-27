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
const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__nav');
const courseDetailsButtons = Array.from(document.querySelectorAll('.courses__view-details'));
const partnersButtons = Array.from(document.querySelectorAll('.partners__button'));

const toggleBurger = () => {
  navigation.classList.toggle('header__nav_opened');
  burgerButton.classList.toggle('header__burger_opened');
}

burgerButton.addEventListener('click', () => {
  toggleBurger();
});

window.addEventListener('scroll', () => {
  if (window.matchMedia('(min-width: 769px)').matches) {
    if (window.scrollY > 0) {
      logo.classList.add('logo__img_scrolled');
      page.classList.add('page_scrolled');
      logo.src = logoScroll;
    } else {
      logo.src = logoBig;
      page.classList.remove('page_scrolled');
      logo.classList.remove('logo__img_scrolled');
    }
  }
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
