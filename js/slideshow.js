//SlideShow:
let slideIndex = 1;
	// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // <body onload="showSlides(1)"> - settzt n=1
}
	// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Haupt Funktion
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

  // Bilder auch mit der Tastatur wechseln
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        slideIndex--; // reduziert Slide Index auf 1
        showSlides(slideIndex);
    }
    if (event.key === "ArrowRight") {
        slideIndex++; // erhöcht Slide Index auf 1
        showSlides(slideIndex);
    }
});