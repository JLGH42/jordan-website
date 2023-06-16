const stickyNavBar = function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("sticky", window.scrollY > 0);
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

window.addEventListener("scroll", stickyNavBar);
window.addEventListener("scroll", passionSectionColourChange);
