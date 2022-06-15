let arrCurrentString = [];
let currentNumber = 0;
let result = 0;
let decimalCounter = 0;
let typeOperation = "+";
// let keyFirstTypeOperation = 0;

displayArrString([0]);

// *******************************************************************
function backSpace() {
  if (arrCurrentString.length) {
    if (arrCurrentString.pop() == ".") {
      arrCurrentString.pop();
      decimalCounter = 0;
    }
    displayArrString(arrCurrentString);
    if (!arrCurrentString.length) displayArrString([0]);
    currentNumber = Number(arrCurrentString.join(""));
    console.log("currentNumber =", currentNumber);
  }
}
function clearCurrent() {
  currentNumber = 0;
  document.getElementById("displ").innerHTML = "0";
  arrCurrentString.splice(0);
}
function clearAll() {
  result = 0;
  currentNumber = 0;
  typeOperation = "+";
  document.getElementById("displ").innerHTML = "0";
  console.log("currentNumber=", currentNumber, "     Result=", result);
  arrCurrentString.splice(0);
  decimalCounter = 0;
}
function displayPercent() {
  switch (typeOperation) {
    case "+": {
      result = result + (result * currentNumber) / 100;
      let k = result.toFixed(15).split("").splice(0, 16).join("");
      document.getElementById("displ").innerHTML = parseFloat(k);
      console.log("percentSummValue=", result);
      break;
    }
    case "-": {
      result = result + (result * currentNumber) / 100;
      let k = result.toFixed(15).split("").splice(0, 16).join("");
      document.getElementById("displ").innerHTML = parseFloat(k);
      console.log("percentMinusValue=", result);
      break;
    }
    case "/": {
      if (currentNumber === 0) break;
      result = (result / currentNumber) * 100;
      let k = result.toFixed(15).split("").splice(0, 16).join("");
      document.getElementById("displ").innerHTML = parseFloat(k);
      console.log("percentDivideValue=", result);
      break;
    }
    case "*": {
      // if (currentNumber === 0) break;
      result = (result * currentNumber) / 100;
      let k = result.toFixed(15).split("").splice(0, 16).join("");
      document.getElementById("displ").innerHTML = parseFloat(k);
      console.log("percentMultiplyValue=", result);
      break;
    }
    case "=": {
      break;
    }
  }
  typeOperation = "=";
  console.log("result=", result);
  arrCurrentString.splice(0);
  currentNumber = 0;
}
// ********************************************************************

function inputNumbers(value) {
  if (typeOperation == "-") {
    arrCurrentString[0] = "-";
  }

  if (value == ".") {
    decimalCounter++;

    if (arrCurrentString.length == 0) {
      arrCurrentString.push("0");
    }

    if (arrCurrentString[0] == "-" && arrCurrentString.length == 1) {
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
    console.log("currentNumber =", currentNumber);

    if (typeOperation == "=") {
      result = currentNumber;
    }
  }

  displayArrString(arrCurrentString);
}

// ********************************************************************
function displayArrString(arrCurrentString) {
  let n = arrCurrentString.join("");
  document.getElementById("displ").innerHTML = n;
}
// ********************************************************************

function displayResult(result) {
  let m = result.toFixed(15).split("").splice(0, 16).join("");
  document.getElementById("displ").innerHTML = parseFloat(m);
}
// ********************************************************************

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
      if (currentNumber == 0) {
        document.getElementById("displ").innerHTML = "error";
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
      // if (currentNumber === 0) break;
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "+";
  console.log("result=", result, "Currentnumber=", currentNumber);
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
      if (currentNumber == 0) {
        document.getElementById("displ").innerHTML = "error";
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
      // if (currentNumber === 0) break;
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "-";
  console.log("result=", result, "Currentnumber=", currentNumber);
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
      if (currentNumber == 0) {
        document.getElementById("displ").innerHTML = "error";
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
      // if (currentNumber === 0) break;
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
      if (currentNumber == 0) {
        document.getElementById("displ").innerHTML = "error";
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
      // if (currentNumber === 0) break;
      result = result * currentNumber;
      break;
    }
    case "=": {
      break;
    }
  }
  displayResult(result);
  typeOperation = "/";
  console.log("result=", result, "Currentnumber=", currentNumber);
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
      if (currentNumber == 0) {
        document.getElementById("displ").innerHTML = "error";
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
      // if (currentNumber === 0) break;
      result = result * currentNumber;
      break;
    }
  }

  displayResult(result);
  typeOperation = "=";
  arrCurrentString.splice(0);
  // currentNumber = 0;
  // currentNumber = result;
  // result = 0;
  console.log("result=", result, "Currentnumber=", currentNumber);
}
