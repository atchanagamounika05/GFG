const sliders = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxSlide = sliders.length - 1;

sliders.forEach(
  (img, index) => (img.style.transform = `translateX(${index * 100}%)`)
);

console.log(currentSlide);
function handleNext() {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  sliders.forEach(
    (img, index) =>
      (img.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
}

function handlePrev() {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  sliders.forEach(
    (img, index) =>
      (img.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
}

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
