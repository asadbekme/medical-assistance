const menuIcon = document.querySelector(".header__mobile-menu");
const menuCloseIcon = document.querySelector(".header__mobile-menubar-close");
const menuBar = document.querySelector(".header__mobile-menubar");
const menuLinks = document.querySelectorAll(".header__mobile-menubar-link");

menuIcon.addEventListener("click", () => {
  menuBar.style.display = "flex";
});

menuCloseIcon.addEventListener("click", () => {
  menuBar.style.display = "none";
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBar.style.display = "none";
  });
});
