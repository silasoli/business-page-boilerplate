function hiddenCarousel() {
  const carousel = window.document.getElementById("carousel");
  carousel.style.display = "none";
  const btnHiddenCarousel = window.document.getElementById(
    "btn-hidden-carousel"
  );
  btnHiddenCarousel.style.display = "none";
  const showCarousel = window.document.getElementById("btn-show-carousel");
  showCarousel.style.display = "inline-block";
}

function showCarousel() {
  const carousel = window.document.getElementById("carousel");
  carousel.style.display = "block";
  const showCarousel = window.document.getElementById("btn-show-carousel");
  showCarousel.style.display = "none";
  const btnHiddenCarousel = window.document.getElementById(
    "btn-hidden-carousel"
  );
  btnHiddenCarousel.style.display = "inline-block";
}

// function changeTextByID(id, text) {
//     const element = window.document.getElementById(id);
//     element.textContent = text;
// }

// function
