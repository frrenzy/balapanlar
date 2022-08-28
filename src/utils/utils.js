import { navigation, burgerButton } from "./constants";

export const toggleBurger = () => {
  navigation.classList.toggle('header__nav_opened');
  burgerButton.classList.toggle('header__burger_opened');
}

