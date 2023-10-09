const aboutMe = document.getElementById("about-me");
const myWork = document.getElementById("my-work");
const getInTouch = document.getElementById("get-in-touch");
const frontEndDeveloper = document.getElementById("fed");
const hiddenLang = document.getElementById("hidden-languages");
const body = document.getElementById("body");

function showLanguages() {
  hiddenLang.style.display = "block";
  frontEndDeveloper.style.display = "none";
}

function hideLanguages() {
  hiddenLang.style.display = "none";
  frontEndDeveloper.style.display = "block";
}

frontEndDeveloper.addEventListener("mouseenter", showLanguages);
frontEndDeveloper.addEventListener("mouseleave", hideLanguages);
