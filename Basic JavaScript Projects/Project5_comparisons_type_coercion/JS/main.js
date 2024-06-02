document.write(typeof 9); // typeof operator assignment
document.write("<br>");

document.write(typeof "fish");
document.write("<br>");
document.write("12" + 6); // coercion
document.write("<br>");

function myFunction() {
  document.getElementById("NaN").innerHTML = 0 / 0; // my not a number assignment
}
function myTrueFunction() {
  document.getElementById("True").innerHTML = isNaN("car"); // prints true in the p element when clicked
}
function myFalseFunction() {
  document.getElementById("False").innerHTML = isNaN(5); // prints false in the p element when clicked
}
function myNegativeInfinityFunction() {
  // Negative Infinity assignment, prints infinity to the page
  document.getElementById("Negative").innerHTML = document.write(-3e310);
}
function myInfinityFunction() {
  // Infinity assignment, as above
  document.getElementById("Infin").innerHTML = document.write(2e310);
}

document.write(100 > 50); // boolean assignment, true or false
document.write("<br>");
document.write(100 < 50);

console.log(5 * 5);
console.log(30 < 5);
document.write("<br>");
document.write(100 == 10 * 10); // equality operator
document.write("<br>");
document.write(50 == 62);
document.write("<br>");
x = 5; // strict equality operator
y = 5;
document.write(x === y);
document.write("<br>");
A = "John";
B = 8;
document.write(A === B);
document.write("<br>");
C = "8";
D = 8;
document.write(C === D);
document.write("<br>");
J = "fish";
K = "Dog";
document.write(J === K);
document.write("<br>");
document.write((5 > 2) & (4 > 2)); // The AND & OR operators
document.write("<br>");
document.write((5 > 2) & (4 < 2));
document.write("<br>");
document.write(9 > 5 || 4 < 2);
document.write("<br>");
document.write(8 < 4 || 3 > 4);

function myNotFunction() {
  // The NOT operator
  document.getElementById("Not").innerHTML = !(10 > 5);
}
function myNotFunction2() {
  document.getElementById("Not2").innerHTML = !(10 > 11);
}
