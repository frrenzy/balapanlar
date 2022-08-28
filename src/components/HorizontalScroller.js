import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


export default class HorizontalScroller {
  #containerSelector
  #items
  #mediaQuery

  constructor({
    containerSelector,
    itemsSelector,
    mediaQuery
  }) {
    this.#containerSelector = containerSelector;
    this.#items = gsap.utils.toArray(itemsSelector);
    this.#mediaQuery = mediaQuery;
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(this.#mediaQuery, () => {
      const duration = 10;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.#containerSelector,
          pin: '.main',
          scrub: 0.5,
          snap: 1 / (this.#items.length - 1),
          start: "bottom bottom",
          end: "+=5000"
        }
      });

      tl.to(this.#items, {
        xPercent: -100 * (this.#items.length - 1),
        duration: duration,
        ease: "none"
      })
    });
  }
}
