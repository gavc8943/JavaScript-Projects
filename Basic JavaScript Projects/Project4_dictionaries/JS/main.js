function myDictionary() {
  // function that outputs a key value pair into an html element
  var pet = {
    Speices: "Cat",
    Color: "Black",
    Breed: "Siamese",
    Age: 12,
    Sound: "Meow",
  };
  document.getElementById("Dictionary").innerHTML = pet.Breed; // targeting the id "dictionary" in the p element
}

function secondDictionary() {
  // Dictionary can not have two identical key value pairs
  var Band = {
    Guitarist: "Jimmy Page",
    Drummer: "John Bonham",
    Bassist: "John Paul Jones",
    Singer: "Robert Plant",
    Guitarist: "Jimmy Page",
  };
  delete Band.Guitarist; // deleting key value pairs
  document.getElementById("Second").innerHTML = Band.Guitarist;
}
