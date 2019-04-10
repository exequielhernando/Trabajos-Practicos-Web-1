"use strict";

let nodoContenido = document.getElementById("contenido");

function invertirLetras() {
  let palabraOriginal = nodoContenido.value;
  let palabraInvertida = "";

  for (var i = palabraOriginal.length - 1 ; i >= 0 ; i--) {
    palabraInvertida += palabraOriginal[i];
    console.log(palabraInvertida);
  }
  alert(palabraInvertida);
}
