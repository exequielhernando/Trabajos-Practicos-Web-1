"use strict";

function saludar() {
  let nodoNumero1 = document.getElementById("nPositivo");
  let numeroPositivo = nodoNumero1.value;
  let nodoNumero2 = document.getElementById("nNegativo");
  let numeroNegativo = nodoNumero2.value;

  if((numeroNegativo && numeroPositivo) != 0){
    if((numeroPositivo > 0) && (numeroNegativo < 0)){
      alert("Hola, Felicitaciones! Colocaste los valores requeridos");
    }
    else {
      alert("Los numeros ingresados no son los correctos, vuelva a ingresarlos")
    }
  }
  else {
    alert("Los numeros ingresados no son los correctos, vuelva a ingresarlos")
  }
}
