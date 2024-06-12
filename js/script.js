const menuIcon = document.querySelector(".header__mobile-menu");
const menuCloseIcon = document.querySelector(".header__mobile-menubar-close");
const menuBar = document.querySelector(".header__mobile-menubar");

menuIcon.addEventListener("click", () => {
  menuBar.style.display = "flex";
});

menuCloseIcon.addEventListener("click", () => {
  menuBar.style.display = "none";
});
