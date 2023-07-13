let result = document.getElementById("result");
let operators = ["/", "*", "-", "+"];
let lastChar = "";

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (operators.includes(lastChar)) {
    result.value = result.value.slice(0, -1) + operator;
  } else {
    result.value += operator;
  }
  lastChar = operator;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
  lastChar = result.value.slice(-1);
}

function calculate() {
  if (result.value === "") {
    return;
  }
  try {
    let evalResult = eval(result.value);
    if (isNaN(evalResult)) {
      result.value = "Error";
    } else {
      result.value = evalResult;
    }
  } catch (error) {
    result.value = "Error";
  }
  lastChar = result.value.slice(-1);
}
