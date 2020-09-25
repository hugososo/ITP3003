var slideIndex = 1;
showSlide(slideIndex); //default: show the index 1-0 = index 0 slide

function calSlide(n) { // will send the parametre -1 / 1 to n, so showSlide(slideIndex-1/ slideIndex+1)
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1; //make a circulating slide
  }
  if (n < 1) {
    slideIndex = slides.length; //make a circulating slide
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //hide all slide
  }

  slides[slideIndex - 1].style.display = ""; //show only one slide

}