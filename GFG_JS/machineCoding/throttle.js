//throttle - function invoke atmost once in time
//continous event triigering is firing send updates for every 500ms
const para = document.querySelector(".para");

function handleScroll() {
  console.log("scrolled");
}

function throttle(cb, delay) {
  let isWaiting = false;
  return function (...args) {
    if (isWaiting) return;
    cb(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
}
let result = throttle(handleScroll, 500);
para.addEventListener("scroll", result);
