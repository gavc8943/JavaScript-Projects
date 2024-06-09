let text = "";
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

let text2 = "";
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  text2 += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text2;
