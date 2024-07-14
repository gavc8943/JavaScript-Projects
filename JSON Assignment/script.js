var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
// JSON.parse()
// JSON string variable
var cat = '{"name": "Felix","breed":"Siamese","color":"Blue and White"}';
// Convert to JavaScript object
var JSONstring = JSON.parse(cat);
document.getElementById("parse").innerHTML =
  JSONstring.name + " is a " + JSONstring.breed + " cat.";

// localStorage() Method
// set the data as a key value pair to be saved locally in the browser
localStorage.setItem("Name", "Felix");
// then use the key "Name" to return its value "Felix"
document.getElementById("myCat").innerHTML = localStorage.getItem("Name");
