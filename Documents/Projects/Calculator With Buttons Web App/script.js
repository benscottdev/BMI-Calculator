let userInput = document.getElementById("number-input");

function display(val) {
  userInput.value += val;
}

function solve() {
  userInput.value = eval(userInput.value);
}

function reset() {
  userInput.value = "";
}

function backspace() {
  userInput.value = userInput.value.slice(0, -1);
}
