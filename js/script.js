const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header__logo-img");
const menuIcon = document.querySelector(".header__mobile-menu");
const menuCloseIcon = document.querySelector(".header__mobile-menubar-close");
const menuBar = document.querySelector(".header__mobile-menubar");
const menuLinks = document.querySelectorAll(".header__mobile-menubar-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
    headerLogo.src = "./images/logo-white.svg";
  } else {
    header.classList.remove("active");
    headerLogo.src = "./images/logo.svg";
  }
});

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
