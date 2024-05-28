function myFunction() {
  // Defining and name a fuction
  var str1 = "This is the "; // Defining two variables and giving them string values
  var str2 = "button text";
  document.getElementById("Button_Text").innerHTML = str1 + str2; // concatenating the strings and putting the value into the HTML element with the Button_Text id
}

function myOtherFunction() {
  // similar to above but using the += operator to concatenate the strings,this time in the p element
  var sentence = "Hello my name is ";
  sentence += "Gavin";
  document.getElementById("Concatenate").innerHTML = sentence;
}

function changeColor() {
  // changes background color of the button when clicked on
  const button = document.getElementById("myButton");
  button.style.backgroundColor = "red";
}

function newFunction() {
  // define and name the function
  var newString = "Do you like to "; // define a variable with a string value
  newString += "play football?"; // concatenate with the += operator
  document.getElementById("Button_Text2").innerHTML = newString; // placing the concatenated string in the html element with the Button_Text2 id
}
