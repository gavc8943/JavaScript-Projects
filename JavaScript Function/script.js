const myElement = document.getElementById("Change");
myElement.style.color = "blue";

function myFunction(a, b) {
  return a * b;
}
let result = myFunction(4, 5);
document.getElementById("total").innerHTML = result;

function stringFunction(c, d) {
  return c + d;
}
let concatenated = stringFunction("Hello ", "World");
document.getElementById("myString").innerHTML = concatenated;

const myElement2 = document.getElementById("Red");
myElement2.style.color = "red";
