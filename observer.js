const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  root: null,
  threshold: 0.6,
  rootMargin: "50px 0px -100px 0px",
};

const appearOnScrollCb = function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
};

const appearOnScroll = new IntersectionObserver(
  appearOnScrollCb,
  appearOptions
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
