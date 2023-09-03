const hamburger = document.getElementById("hamburger");
const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger2");
const hamburger3 = document.getElementById("hamburger3");
const navbar = document.getElementById("navbar");
const fire1 = () => {
  if (navbar.classList.contains("animation")) {
    navbar.classList.remove("animation");
    navbar.classList.add("animation2");
    hamburger1.classList.remove("cross1");
    hamburger2.classList.remove("cross2");
    hamburger3.classList.remove("none");
  } else {
    navbar.classList.remove("animation2");
    navbar.classList.add("animation");
    hamburger1.classList.add("cross1");
    hamburger2.classList.add("cross2");
    hamburger3.classList.add("none");
  }
};

hamburger.addEventListener("click", fire1);
