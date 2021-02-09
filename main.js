var fotoIndex = 1;
slides(fotoIndex);

// Next/previous controls
function siguiente(n) {
  slides(fotoIndex += n);
}

// Thumbnail image controls
function fotoActual(n) {
  slides(fotoIndex = n);
}

function slides(n) {
  var i;
  var slides = document.getElementsByClassName("imagenes");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {fotoIndex = 1} 
  if (n < 1) {fotoIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[fotoIndex-1].style.display = "block"; 
  dots[fotoIndex-1].className += " active";
}