function Ride_Function() {
  // ternary operator used with input from the browser
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voteFunction() {
  // ternary operator assignment
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = Age >= 18 ? "You can vote!" : "You are not old enough to vote";
  document.getElementById("vote").innerHTML = Can_vote;
}

// This keyword
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}
// Keyword Assignment
function petDetails(Type, Breed, Age, Color) {
  // My Constructor function
  this.pet_type = Type;
  this.pet_breed = Breed;
  this.pet_age = Age;
  this.pet_Color = Color;
}
var Bob = new petDetails("Cat", "British Shorthair", 3, "Black and White");
var Lassie = new petDetails("Dog", "Collie", 10, "Sable and White"); // new keyword
var Gerry = new petDetails("Fish", "Goldfish", 2, "Orange");
function mySecondFunction() {
  document.getElementById("New_and_This").innerHTML =
    "Lassie is a " +
    Lassie.pet_type +
    " that is " +
    Lassie.pet_Color +
    " colored. She is a " +
    Lassie.pet_breed +
    " and is " +
    Lassie.pet_age +
    " years old.";
}

// Variable with reserved word
// var true = 5;
// document.write(true); // will not work

// Object constructor function
function Person(first, last, age, weight) {
  // considered good practice to use Uppercase for the first letter
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.weight = weight;
}
// now a person object
const myBrother = new Person("Graham", "Cain", 48, 100);

// Display age
document.getElementById("person").innerHTML =
  "My Brother is " + myBrother.age + " years old";
// Nested Function assignment
function myNested() {
  document.getElementById("Nested_Function").innerHTML = multiply();
  function multiply() {
    let myNumber = 8;
    function timesFive() {
      myNumber *= 5;
    }
    timesFive();
    return myNumber;
  }
}
