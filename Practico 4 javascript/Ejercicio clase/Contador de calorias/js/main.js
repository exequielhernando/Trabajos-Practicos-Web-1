"use strict";

let calorias = 0;
sumarCantidad(0); //Fuerzo actualizacion inicial sumando 0 calorias

function sumarCantidad(parametro) {
  calorias += parametro;
  let caloriasTotales = document.getElementById("txtTotal");
  caloriasTotales.innerHTML = calorias;
}

function sumarInput() {
  //Lee el nombre
  let nodoInput = document.getElementById("calorias");
  let nuevascalorias = parseInt(nodoInput.value);

  sumarCantidad(nuevascalorias);

}
