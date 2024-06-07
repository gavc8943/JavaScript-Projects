function countdown() {
  var seconds = document.getElementById("seconds").value;
  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick();
}
// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex); // calls the showSlides function, show the first slide

// Next/Previous controls
function plusSlides(n) {
  // called by onclick
  // This function will skip ahead n slides and show that slide
  showSlides((slideIndex += n));
}

// Thumbnail Image Controls
function currentSlide(n) {
  showSlides((slideIndex = n)); // sets slideindex to n and shows nth slide
}

function showSlides(n) {
  let i; // declare an empty variable
  let slides = document.getElementsByClassName("mySlides"); // find element in the dom
  let dots = document.getElementsByClassName("dot"); // find element in the dom
  if (n > slides.length) {
    // if the number passed into the function is greater than the number of slides, set slideIndex to 1
    slideIndex = 1;
  }
  if (n < 1) {
    // if  the number passed into the function is less than the number of slides, set slideIndex to the number of slides
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // sets display style of all slides to none
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // iterate through dots, remove the classname 'active' for CSS
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; // set the display style of the slide before  to block making it visible
  dots[slideIndex - 1].className += " active"; // set the className of the dot before to 'active'
}
