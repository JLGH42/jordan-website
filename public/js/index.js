window.addEventListener("scroll", function() {
    let header = document.querySelector(".main-header");
    header.classList.toggle("sticky", window.scrollY > 0)
})