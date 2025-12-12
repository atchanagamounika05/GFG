//debounce - deplay the function invocation

const input = document.querySelector(".input");

function handleClick(e) {
  console.log(e.target.value);
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
let result = debounce(handleClick, 500);
input.addEventListener("keyup", result);
