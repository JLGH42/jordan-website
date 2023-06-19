const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  root: null,
  threshold: 0.6,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScrollCb = function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    appearOnScroll.unobservse(entry.target);
  });
};

const appearOnScroll = new IntersectionObserver(
  appearOnScrollCb,
  appearOptions
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
