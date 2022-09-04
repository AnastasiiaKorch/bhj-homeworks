const slider = Array.from(document.querySelectorAll(".slider__item"));
const arrowLeft = document.querySelector(".slider__arrow_prev");
const arrowRight = document.querySelector(".slider__arrow_next");

arrowRight.onclick = () => {
  const sliderIndex = slider.findIndex (item => item.className === "slider__item slider__item_active");
  slider[sliderIndex].classList.remove("slider__item_active");
  slider[sliderIndex == slider.length -1 ? 0 : sliderIndex +1].classList.add("slider__item_active");
}

arrowLeft.onclick = () => {
  sliderIndex = slider.findIndex (item => item.className === "slider__item slider__item_active");
  slider[sliderIndex].classList.remove("slider__item_active");
  slider[sliderIndex == slider.length -1 ? 0 : sliderIndex +1].classList.add("slider__item_active");
}