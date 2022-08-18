const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  // return parseInt(usrInput.value);
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calOperator(operator) {
  const enteredNumber = getUserNumberInput();
  if(operator !== "ADD" && 
     operator!== "SUBTRACT" && 
     operator!== "MULTIPLY" && 
     operator !== "DIVIDE" ||
     !enteredNumber)
  {
    return alert("Please Press the write button");
  }
  // if(operator === 'ADD' || operator === 'SUBTRACT' || operator==='MULTIPLY' || operator==='DIVIDE')
  // { 
    const initialResult = currentResult;
    let mathOperator;
    if (operator === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
  } else if (operator === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (operator === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (operator === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(operator, initialResult, enteredNumber, currentResult);
  // }
}
// function add() {
//   // console.log(usrInput.value===2);
//   calOperator("ADD");
// }

// function subtract() {
//   calOperator("SUBTRACT");
// }

// function multiply() {
//   calOperator("MULTIPLY");
// }

// function divide() {
//   calOperator("DIVIDE");
// }

// addBtn.addEventListener('click', add()); --> it will run immediately when script will run
// addBtn.addEventListener('click', add); --> it will run only when button will click
// addBtn.addEventListener('click', add); --> it will run only when button will click
addBtn.addEventListener("click", calOperator.bind(this,'ADD'));
subtractBtn.addEventListener("click", calOperator.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener("click", calOperator.bind(this,'MULTIPLY'));
divideBtn.addEventListener("click", calOperator.bind(this,'DIVIDE'));
