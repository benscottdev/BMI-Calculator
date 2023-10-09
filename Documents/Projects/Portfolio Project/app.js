// Toggle function which changes page UI from dark to light
let active = false;
let count = 0;

function toggleModeHome() {
  active = !active;
  if (!active) {
    // Home Page Dark Mode
    document.getElementById("switch").classList.add("active");
    document.getElementById("switch").innerHTML = "Dark";
    document.getElementById("switch").style.color = "red";
    document.getElementById("background-color").style.backgroundColor = "black";
    document.getElementById("heading").style.color = "white";
    document.getElementById("subheading").style.color = "red";
    document.getElementById("about-span").style.backgroundColor = "red";
    document.getElementById("projects-span").style.backgroundColor = "red";
    document.getElementById("talk-span").style.backgroundColor = "red";
    count += 1;
  } else {
    // Home Page Light Mode
    document.getElementById("switch").classList.remove("active");
    document.getElementById("switch").innerHTML = "Light";
    document.getElementById("switch").style.color = "#95cefc";
    document.getElementById("background-color").style.backgroundColor = "white";
    document.getElementById("heading").style.color = "black";
    document.getElementById("subheading").style.color = "#95cefc";
    document.getElementById("about-span").style.backgroundColor = "#95cefc";
    document.getElementById("projects-span").style.backgroundColor = "#95cefc";
    document.getElementById("talk-span").style.backgroundColor = "#95cefc";
    count += 1;
  }
  if (count >= 10) {
    document.getElementById("switch").classList.remove("active");
    document.getElementById("switch").innerHTML = "Party!";
    document.getElementById("switch").style.color = "#95cefc";
    document.getElementById("background-color").style.backgroundColor =
      "rgb(248, 43, 207)";
    document.getElementById("heading").style.color = "rgb(153, 255, 130)";
    document.getElementById("subheading").style.color = "rgb(240, 136, 235)";
    document.getElementById("about-span").style.backgroundColor =
      "rgb(118, 60, 218)";
    document.getElementById("projects-span").style.backgroundColor =
      "rgb(238, 129, 117)";
    document.getElementById("talk-span").style.backgroundColor =
      "#rgb(117, 161, 238)";
  }
}
