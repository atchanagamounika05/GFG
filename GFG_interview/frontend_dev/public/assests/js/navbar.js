document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".navbar-menu");
  const navToggle = document.querySelector(".navbar-toggle");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // close the menu if we click outside of the menu
  document.addEventListener("click", (e) => {
    console.log(e.target);
    const isClickedMenu = navMenu.contains(e.target);
    const isClickedtoggle = navToggle.contains(e.target);
    if (
      !isClickedMenu &&
      !isClickedtoggle &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
    }
  });

  // close the menu when window is resized
  window.addEventListener("resize", () => {
    if (window.length > 768 && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});
