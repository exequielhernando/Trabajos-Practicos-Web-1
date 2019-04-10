"use strict";

function mostrarOcultarTexto() {
  let divTexto = document.getElementById("texto");

  if ( divTexto.style.display == "none") {
    divTexto.style.display = "block";
  }
  else {
    divTexto.style.display = "none";
  }
}
