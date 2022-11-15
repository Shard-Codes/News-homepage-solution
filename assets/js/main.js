const navMenu = document.querySelector(".nav__menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("Open-menu");
});

window.addEventListener("scroll", () => {
  navMenu.classList.remove("Open-menu");
});
