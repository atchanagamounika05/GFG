const modalContainer = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  modalContainer.classList.remove("hide");
});

modalContainer.addEventListener("click", (e) => {
  let button = e.target.name;
  if (button === "close") {
    modalContainer.classList.add("hide");
  }
});
