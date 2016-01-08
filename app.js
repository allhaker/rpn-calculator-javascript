runApp();
var result = [];

function runApp() {
  setEventListeners();
}

function setEventListeners() {
  document.getElementById("plus").addEventListener("click", stackSum);
  document.getElementById("minus").addEventListener("click", stackMinus);
  document.getElementById("multiply").addEventListener("click", stackMultiply);
  document.getElementById("divide").addEventListener("click", stackDivide);
  document.getElementById("add").addEventListener("click", stackNewNum);
  document.getElementById("equal").addEventListener("click", stackPrint);
}

function stackSum() {
  if (checkStack() === 1) {
    document.getElementById("res").innerHTML = "";
    var res = result.pop() + result.pop();
    result.push(res);
  } else {
    document.getElementById("res").innerHTML = "Cannot perform calculation.";
  }
  console.log(result);
}
function stackMinus() {
  if (checkStack() === 1) {
    document.getElementById("res").innerHTML = "";
    var res = result.pop() - result.pop();
    result.push(res);
  } else {
    document.getElementById("res").innerHTML = "Cannot perform calculation.";
  }
  console.log(result);
}
function stackMultiply() {
  if (checkStack() === 1) {
    document.getElementById("res").innerHTML = "";
    var res = result.pop() * result.pop();
    result.push(res);
  } else {
    document.getElementById("res").innerHTML = "Cannot perform calculation.";
  }
  console.log(result);
}
function stackDivide() {
  if (checkStack() === 1) {
    document.getElementById("res").innerHTML = "";
    var res = Math.round((result.pop() / result.pop()*100))/100;
    result.push(res);
  } else {
    document.getElementById("res").innerHTML = "Cannot perform calculation.";
  }
  console.log(result);
}
function stackNewNum() {
  result.push(parseInt(document.getElementById("data").value));
  console.log(result);
}
function stackPrint() {
  if (checkStack() === 1 || checkStack() === -1) {
    var temp = result.pop();
    document.getElementById("res").innerHTML = temp;
    result.push(temp);
  } else {
    document.getElementById("res").innerHTML = "Stack is empty!";
  }
  console.log(result);
}

function checkStack() {
  if (result.length > 1) return 1;
  if (result.length === 0) return 0;
  else {
    return -1;
  }
}
