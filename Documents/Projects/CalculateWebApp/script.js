const result = document.getElementById("result");

function calculate(method) {
  let n1 = parseFloat(document.getElementById("first-number").value);
  let n2 = parseFloat(document.getElementById("second-number").value);
  if (method === "add") {
    let sum = n1 + n2;
    result.innerHTML = `Result: ${sum}`;
  } else if (method === "subtract") {
    let sum = n1 - n2;
    result.innerHTML = `Result: ${sum}`;
  } else if (method === "multiply") {
    let sum = n1 * n2;
    result.innerHTML = `Result: ${sum}`;
  } else if (method === "divide") {
    let sum = n1 / n2;
    result.innerHTML = `Result: ${sum}`;
  }
}

function calculateOptions() {
  if (document.getElementById("add-radio").checked) {
    calculate("add");
  } else if (document.getElementById("subract-radio").checked) {
    calculate("subtract");
  } else if (document.getElementById("multiply-radio").checked) {
    calculate("multiply");
  } else if (document.getElementById("divide-radio").checked) {
    calculate("divide");
  } else {
    result.innerHTML = "Please Select a Calculation Method Above";
  }
}

function reset() {
  location.reload();
}
