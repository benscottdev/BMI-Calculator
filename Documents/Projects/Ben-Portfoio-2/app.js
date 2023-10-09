// GSAP animations

// gsap.from(".container-home", {
//   opacity: 0,
//   delay: 2,
//   duration: 0.1,
// });
// gsap.from(".nav-links li", {
//   opacity: 0,
//   delay: 3.5,
//   duration: 0.1,
//   stagger: 0.4,
//   ease: "power2.out",
// });

// Variables and Functions for hiddenLanguages method //

const hiddenLang = document.getElementById("hidden-langs");
const subheading = document.getElementById("subheading");

function showLangs() {
  hiddenLang.style.display = "block";
}

function hideLangs() {
  hiddenLang.style.display = "none";
}

subheading.addEventListener("mouseenter", showLangs);
subheading.addEventListener("mouseleave", hideLangs);
