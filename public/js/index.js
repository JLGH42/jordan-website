window.addEventListener("scroll", function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const parallaxSection = document.querySelector(".parallax-section");
  const nav = document.querySelectorAll(".main-header.sticky .navigation a");
  const logo = document.querySelector(".logo a");

  if (parallaxSection.getBoundingClientRect().top < 155) {
    nav.forEach((item) => {
      item.classList.add("purple-neon");
    });
    logo.classList.add("purple-neon");
  } else {
    nav.forEach((item) => {
      item.classList.remove("purple-neon");
    });
    logo.classList.remove("purple-neon");
  }
});
