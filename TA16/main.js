function button() {
  const parrafo = document.querySelector("p");

  if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
  } else {
      parrafo.style.display = "none";
  }
}
