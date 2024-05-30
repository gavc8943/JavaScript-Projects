function myFunction(a, b) {
  // Addition fuction , getElementbyid selects the paragraph element in the DOM
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition; // innerHtml replaces the text in the P element
}

function subtractFunction() {
  // Subtraction Function
  const subtract = 9 - 4;
  document.getElementById("Subtract").innerHTML = "9 - 4 = " + subtract;
}
function multiplyFunction() {
  // Multiply Function
  const multiply = 10 * 4;
  document.getElementById("Multiply").innerHTML = "10 * 4 = " + multiply;
}
function divideFunction() {
  // Divide Function
  const divide = 12 / 3;
  document.getElementById("Divide").innerHTML = "12 / 3 = " + divide;
}
function multipleMathFunction() {
  // multioperator function
  const basic_math = ((5 + 3) * 10) / 8 - 2;
  document.getElementById("multiple_math").innerHTML =
    "5 plus 3, multiplied by 10, divided by 8 and then subtracted by 2 equals " +
    basic_math;
}
function modulusFunction() {
  // Modulus Function
  const modulusMath = 28 % 5;
  document.getElementById("Modulus").innerHTML =
    "When you divide 28 by 5 you have a remainder of " + modulusMath;
}

function negationFunction() {
  // Negation Function
  const a = 5;
  document.getElementById("Negation").innerHTML = -a;
}

let Y = 5; // increment operator increments by 1
Y++;
document.write(Y); // console says to avoid using document.write

document.write("<br>");

let M = 7; // decrement operator decrements by 1
M--;
document.write(M);

window.alert(Math.random() * 50); // random number generated between 0 and 50

document.getElementById("floor").innerHTML = // math.floor method
  Math.floor(5.3) + " Math.floor rounds down to next integer";

document.getElementById("ceil").innerHTML = // math.ceil method
  Math.ceil(5.3) + " Math.ceil rounds up to next integer";

document.getElementById("round").innerHTML = // math.round method
  Math.round(7.3) + " Math.round rounds to nearest integer";

document.getElementById("Pi").innerHTML = Math.PI; // The Math Object
