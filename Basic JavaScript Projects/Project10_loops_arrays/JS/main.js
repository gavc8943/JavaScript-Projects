function Call_Loop() {
  // function with while Loop
  let num = "";
  x = 1;
  while (x < 11) {
    // Condition
    num += "<br>" + x;
    x++; // increments by 1
  }
  document.getElementById("Loop").innerHTML = num;
}
// length property challenge
let text = "My name is Gavin";
let length = text.length;

document.getElementById("length").innerHTML = length;

// For Loop assignment
var Instruments = [
  "Guitar",
  "Drums",
  "Piano",
  "Bass",
  "Violin",
  "Trumpet",
  "Flute",
];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

// document.getElementById().innerHTML Assignment
function array_Function() {
  var dogs = [];
  dogs[0] = "Labrador";
  dogs[1] = "Collie";
  dogs[2] = "Pitbull";
  dogs[3] = "German Shepherd";
  document.getElementById("Array").innerHTML =
    "My favourite breed of dog is " +
    dogs[1] +
    " but I also like " +
    dogs[3] +
    "s.";
}
// Const Keyword Assignment
function constant_function() {
  const cars = { Make: "Ferrari", Color: "Red", Speed: 249 }; // creating an object
  cars.Color = "blue"; // changing a value
  cars.price = "$430,000"; // creating a new value
  document.getElementById("Constant").innerHTML =
    "My dream car is a " +
    cars.Color +
    " " +
    cars.Make +
    " that costs " +
    cars.price;
}
// let keyword assignment
let x = "Hello Planet Earth";
console.log(x);

// Return Statement Challenge
function myFunction(name) {
  return "Hello " + name;
}
document.getElementById("return").innerHTML = myFunction("Paul");

// Object assignment
let flight = {
  Company: "Ryan Air",
  From: "Ireland",
  To: "England",
  Departure_time: 12.0,
  Arrival_time: 2.0,
  Duration: 2,
  Your_Flight: function () {
    return (
      " Your Flight with " +
      this.Company +
      " departs at " +
      this.Departure_time +
      " and will arrive at " +
      this.Arrival_time +
      ", flying from " +
      this.From +
      " to " +
      this.To +
      ", with a flight time of exactly " +
      this.Duration +
      " hours."
    );
  },
};
document.getElementById("Object").innerHTML = flight.Your_Flight();
