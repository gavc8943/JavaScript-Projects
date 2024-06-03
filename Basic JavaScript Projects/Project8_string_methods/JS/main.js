//  Using the conat method to concatenate strings
function concatFunction() {
  const part_1 = "This is ";
  const part_2 = "my concatenated ";
  const part_3 = "sentence ";
  const part_4 = "for you.";
  const complete_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = complete_sentence;
}

// Using the slice method to extract a section of a string
function sliceFunction() {
  const myString = "I sometimes like to play chess";
  const myStringSection = myString.slice(20, 24);
  document.getElementById("slice").innerHTML = myStringSection; // targets P element in the DOM
}
// To uppercase() method make a string uppercase
let someString = "hello planet earth";
let result = someString.toLocaleUpperCase();
document.getElementById("uppercase").innerHTML = result;

// The search()method searches a string for a value and returns the position
let text = "John lives in a really big house";
let position = text.search("big");
document.getElementById("search").innerHTML = position;

// To string method, converts a number to a string
function stringFunction() {
  var B = 20;
  document.getElementById("string").innerHTML = B.toString();
}
function string_Method() {
  var X = 182;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

var num = 5;
var newNum = num.toString();
console.log(typeof newNum);
// toPrecision method
function precisionFunction() {
  var bigNum = 46875.3012764543;
  document.getElementById("precise").innerHTML = bigNum.toPrecision(10);
}

// toFixed method converts anumber to a string rounded to a specific number of decimals
let myNum = 7.89546;
let myNewNum = myNum.toFixed(3); // rounded to 3
document.getElementById("fixed").innerHTML = myNewNum;

// valueOf() method returns the primitive value of a string, doe not change the original string, and can be used to convert a string object into a string
let myText = "Hello there";
let myResult = myText.valueOf();
document.getElementById("value").innerHTML = myResult;
