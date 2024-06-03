// A Global variable wriitten outside of a function
var A = 5;
function addNumbers_1() {
  document.write(10 + A + "<br>");
}
function addNumbers_2() {
  document.write(A + 50);
}

addNumbers_1(); // Calling the functions
addNumbers_2();

document.write("<br>");
// Local Variable
function addNumbers_3() {
  var B = 5; // written inside the function and can not be accesed outside of it
  document.write(10 + B + "<br>");
}
function addNumbers_4() {
  document.write(B + 50); // error, B is not defined is given
}
addNumbers_3(); // Calling the functions
addNumbers_4();

document.write("<br");
// Checking for error in the console
function addNumbers_5() {
  var C = 8; //
  console.log(10 + C + "<br>");
}
function addNumbers_6() {
  console.log(C + 50);
}
addNumbers_5(); // Calling the functions
addNumbers_6();
// reference error C is not defined is given
document.write("<br");

// Method assignment, if statement function
function getDateFunction() {
  if (new Date().getHours() <= 18) {
    // getHours() returns 0-23
    document.getElementById("Greeting").innerHTML =
      " Good day , how are things?";
  } else {
    document.getElementById("Greeting").innerHTML = // anytime after 18 (6.00pm)
      " Good Evening , how are things?";
  }
}

// My if statement that checks if user is old enough to drink alchol (In Europe)
function ageCheckFunction() {
  var age;
  age = document.getElementById("Age").value;
  if (age >= 18) {
    document.getElementById("drink").innerHTML =
      "Bottoms up! You are old enough to drink!";
  } else {
    document.getElementById("drink").innerHTML =
      "Sorry you are too young to drink";
  }
}
// My if else  statement
function checkTempFunction() {
  var temp;
  temp = document.getElementById("Temperature").value;
  if (temp >= 60) {
    document.getElementById("beach").innerHTML =
      "Get your towel we are off to the beach";
  } else {
    document.getElementById("beach").innerHTML = "It's too cold let stay home";
  }
}
// The else if assignment
function TimeFunction() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon";
  } else {
    Reply = "It is Evening time";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
