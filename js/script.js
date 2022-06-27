let slidePosition = 1;

showSlides(slidePosition);

function updateSlides(num) {
  showSlides((slidePosition += num));
}

//"num" parameter refers to the position of the slide
function showSlides(num) {
  let slides = document.getElementsByClassName("carousel-img");

  //Checks if "slidePosition" is greater than the length of the slides
  //If truthy - it resets the slides to the first image
  if (num > slides.length) {
    slidePosition = 1;
  }
  //Truthy when first image is shown and user clicks previous button
  else if (num < 1) {
    slidePosition = slides.length;
  }

  //When the slidePosition of the image is shown, the other two images are set to display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition - 1].style.display = "block";
}

