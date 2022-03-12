const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const buttonMake = document.querySelectorAll(".button--make");
const responseForm = document.querySelector(".response__form");
const popupForm = document.querySelector(".popup__form");
const buttonClose = document.querySelector(".button-close");
const buttonCloseTooltip = document.querySelector(".button-close--tooltip");
const popupCard = document.querySelector(".popup");
const tooltipCard = document.querySelector(".tooltip");
const cardLinks = document.querySelectorAll(".card__link")
const sliderTabs = document.querySelectorAll(".slider__link");
const descriptionCards = document.querySelectorAll(".description-item");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

buttonMake.forEach((button) => {
  button.addEventListener("click", () => {
    popupCard.classList.add("popup--show");
  });
  buttonClose.addEventListener("click", () => {
    if (popupCard.classList.contains("popup--show")) {
      popupCard.classList.remove("popup--show");
    }
  });
});

responseForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  tooltipCard.classList.add("tooltip--show");
  responseForm.reset();
});

popupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  tooltipCard.classList.add("tooltip--show");
  responseForm.reset();
});

buttonCloseTooltip.addEventListener("click", () => {
  if (tooltipCard.classList.contains("tooltip--show")) {
    tooltipCard.classList.remove("tooltip--show");
  }
});

descriptionCards.forEach((card) => {
  card.classList.add("description-item--hidden");
});

sliderTabs[0].classList.add("slider__link--current");
descriptionCards[0].classList.remove("description-item--hidden");

const showCards = (index) => {
  sliderTabs.forEach((tab) => {
    tab.classList.remove("slider__link--current");
  });
  descriptionCards.forEach((card) => {
    card.classList.add("description-item--hidden");
  });

  sliderTabs[index].classList.add("slider__link--current");
  descriptionCards[index].classList.remove("description-item--hidden");
};

sliderTabs.forEach((button, index) => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    showCards(index);
  });
});

cardLinks.forEach((card, index) => {
  card.addEventListener("click", () => {
    showCards(index);
  });
});
