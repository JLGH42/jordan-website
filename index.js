const stickyNavBar = function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("sticky", window.scrollY > 0);
};

function toggleMobileEvent(menu) {
  menu.classList.toggle("open");
}

const passionSectionColourChange = function () {
  const parallaxSection = document.querySelector(".parallax-section");
  const navItems = document.querySelectorAll(".main-header.sticky nav ul a");
  const logo = document.querySelector(".logo a");

  if (parallaxSection.getBoundingClientRect().top < 155) {
    navItems.forEach((item) => {
      item.classList.add("pink-neon");
    });
    logo.classList.add("pink-neon");
  } else {
    navItems.forEach((item) => {
      item.classList.remove("pink-neon");
    });
    logo.classList.remove("pink-neon");
  }
};

const experienceSectionColourChange = function () {
  const parallaxSection = document.querySelector(
    ".parallax-section~.parallax-section"
  );
  const navItems = document.querySelectorAll(".main-header.sticky nav ul a");
  const logo = document.querySelector(".logo a");

  if (parallaxSection.getBoundingClientRect().top < 155) {
    navItems.forEach((item) => {
      item.classList.remove("pink-neon");
      item.classList.add("golden-orange");
    });
    logo.classList.remove("pink-neon");
    logo.classList.add("golden-orange");
  } else {
    navItems.forEach((item) => {
      item.classList.remove("golden-orange");
    });
    logo.classList.remove("golden-orange");
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", stickyNavBar);
  window.addEventListener("scroll", passionSectionColourChange);
  window.addEventListener("scroll", experienceSectionColourChange);
} else {
  console.log("Go to browser");
}
