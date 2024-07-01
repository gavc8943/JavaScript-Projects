// Creating an Element
const paragraph = document.createElement("p");
paragraph.innerText = "This is my paragraph";

// Append to the body
document.body.appendChild(paragraph);

function myFunction() {
  // Create the class attribute
  const att = document.createAttribute("class");

  // Set a value of the class attribute
  att.value = "democlass";

  // Add the class attribute to the first H1
  document.getElementsByTagName("h1")[0].setAttributeNode(att);
}
