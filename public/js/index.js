const stickyNavBar = function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("sticky", window.scrollY > 0);
};

const hamburgerClick = function () {
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  hamburgerIcon.classList.toggle("open");
};

const passionSectionColourChange = function () {
  const parallaxSection = document.querySelector(".parallax-section");
  const nav = document.querySelectorAll(".main-header.sticky .navigation a");
  const logo = document.querySelector(".logo a");

  if (parallaxSection.getBoundingClientRect().top < 155) {
    nav.forEach((item) => {
      item.classList.add("pink-neon");
    });
    logo.classList.add("pink-neon");
  } else {
    nav.forEach((item) => {
      item.classList.remove("pink-neon");
    });
    logo.classList.remove("pink-neon");
  }
};

const experienceSectionColourChange = function () {
  const parallaxSection = document.querySelector(
    ".parallax-section~.parallax-section"
  );
  const nav = document.querySelectorAll(".main-header.sticky .navigation a");
  const logo = document.querySelector(".logo a");

  if (parallaxSection.getBoundingClientRect().top < 155) {
    nav.forEach((item) => {
      item.classList.remove("pink-neon");
      item.classList.add("golden-orange");
    });
    logo.classList.remove("pink-neon");
    logo.classList.add("golden-orange");
  } else {
    nav.forEach((item) => {
      item.classList.remove("golden-orange");
    });
    logo.classList.remove("golden-orange");
  }
};

window.addEventListener("scroll", stickyNavBar);
window.addEventListener("click", hamburgerClick);
window.addEventListener("scroll", passionSectionColourChange);
window.addEventListener("scroll", experienceSectionColourChange);
