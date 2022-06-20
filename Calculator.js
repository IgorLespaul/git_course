let arrCurrentString = [];
let currentNumber = 0;
let result = 0;
let decimalCounter = 0;
let typeOperation = "+";
const $display = document.getElementById("displ")

displayArrString([0]);

function toDisplay(value) {
  $display.innerHTML = prepareToDisplay(value)
}

function prepareToDisplay(value) {
  return value.toFixed(15)
      .split("")
      .splice(0, 16)
      .join("")
}

function backSpace() {
  if (arrCurrentString.length) {
    if (arrCurrentString.pop() === ".") {
      arrCurrentString.pop();
      decimalCounter = 0;
    }
    displayArrString(arrCurrentString);
    if (!arrCurrentString.length) displayArrString([0]);
    currentNumber = Number(arrCurrentString.join(""));
  }
}
function clearCurrent() {
  currentNumber = 0;
  toDisplay("0");
  arrCurrentString.splice(0);
}

function clearAll() {
  result = 0;
  currentNumber = 0;
  typeOperation = "+";
  toDisplay("0");
  arrCurrentString.splice(0);
  decimalCounter = 0;
}

function displayPercent() {
  switch (typeOperation) {
    case "+": {
      result = result + (result * currentNumber) / 100;
      toDisplay(result);
      break;
    }
    case "-": {
      result = result + (result * currentNumber) / 100;
      toDisplay(result);
      break;
    }
    case "/": {
      if (currentNumber === 0) break;
      result = (result / currentNumber) * 100;
      toDisplay(result);
      break;
    }
    case "*": {
      result = (result * currentNumber) / 100;
      toDisplay(result);
      break;
    }
    case "=": {
      break;
    }
  }
  typeOperation = "=";
  arrCurrentString.splice(0);
  currentNumber = 0;
}

function inputNumbers(value) {
  if (typeOperation === "-") {
    arrCurrentString[0] = "-";
  }

  if (value === ".") {
    decimalCounter++;

    if (arrCurrentString.length === 0) {
      arrCurrentString.push("0");
    }

    if (arrCurrentString[0] === "-" && arrCurrentString.length === 1) {
      arrCurrentString.push("0");
    }
  }
  if (arrCurrentString.length < 16) {
    arrCurrentString.push(value);
    //  alert(decimalCounter);

    if (decimalCounter > 1) {
      arrCurrentString.pop();
      decimalCounter = 1;
    }
    currentNumber = Number(arrCurrentString.join(""));

    if (typeOperation === "=") {
      result = currentNumber;
    }
  }

  displayArrString(arrCurrentString);
}

function displayArrString(arrCurrentString) {
  let n = arrCurrentString.join("");
  toDisplay(n);
}

function displayResult(result) {
  toDisplay(result);
}

function plus() {
  decimalCounter = 0;

  switch (typeOperation) {
    case "+": {
      result = result + currentNumber;
      break;
    }
    case "-": {
      result = result + currentNumber;
      break;
    }
    case "/": {
      if (currentNumber === 0) {
        toDisplay("error");
        result = 0;
        currentNumber = 0;
        arrCurrentString.splice(0);
        typeOperation = "+";
        return;
      }
      result = result / currentNumber;
      break;
    }
    case "*": {
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "+";
  arrCurrentString.splice(0);
  currentNumber = 0;
}

function minus() {
  decimalCounter = 0;

  switch (typeOperation) {
    case "+": {
      result = result + currentNumber;
      break;
    }
    case "-": {
      result = result + currentNumber;
      break;
    }
    case "/": {
      if (currentNumber === 0) {
        toDisplay("error");
        result = 0;
        currentNumber = 0;
        arrCurrentString.splice(0);
        typeOperation = "-";
        return;
      }
      result = result / currentNumber;
      break;
    }
    case "*": {
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "-";
  arrCurrentString.splice(0);
  currentNumber = 0;
}

function multiply() {
  decimalCounter = 0;

  switch (typeOperation) {
    case "+": {
      result = result + currentNumber;
      break;
    }
    case "-": {
      result = result + currentNumber;
      break;
    }
    case "/": {
      if (currentNumber === 0) {
        toDisplay("error");
        result = 0;
        currentNumber = 0;
        arrCurrentString.splice(0);
        typeOperation = "*";
        return;
      }
      result = result / currentNumber;
      break;
    }
    case "*": {
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "*";
  console.log("result=", result, "Currentnumber=", currentNumber);
  arrCurrentString.splice(0);
  currentNumber = 0;
}

function divide() {
  decimalCounter = 0;

  switch (typeOperation) {
    case "+": {
      result = result + currentNumber;
      break;
    }
    case "-": {
      result = result + currentNumber;
      break;
    }
    case "/": {
      if (currentNumber === 0) {
        toDisplay("error");
        result = 0;
        currentNumber = 0;
        arrCurrentString.splice(0);
        typeOperation = "/";
        return;
      }
      result = result / currentNumber;
      break;
    }
    case "*": {
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "/";
  arrCurrentString.splice(0);
  currentNumber = 0;
}

function equals() {
  decimalCounter = 0;

  switch (typeOperation) {
    case "+": {
      result = result + currentNumber;
      break;
    }

    case "-": {
      result = result + currentNumber;
      break;
    }

    case "/": {
      if (currentNumber === 0) {
        toDisplay("error");
        result = 0;
        currentNumber = 0;
        arrCurrentString.splice(0);
        typeOperation = "=";
        return;
      }
      result = result / currentNumber;
      break;
    }

    case "*": {
      result = result * currentNumber;
      break;
    }
  }

  displayResult(result);
  typeOperation = "=";
  arrCurrentString.splice(0);
}
