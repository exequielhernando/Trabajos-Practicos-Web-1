"use strict";

let nodoNumeroSemana = document.getElementById("numeroSemana");
let nodoDiaSemana = document.getElementById("diaSemana");

function mostrarDiaSemana() {
  let numeroSemana = nodoNumeroSemana.value;

  switch (numeroSemana) {
    case "1":
      nodoDiaSemana.innerHTML = "Lunes"
      break;
    case "2":
      nodoDiaSemana.innerHTML = "Martes"
      break;
    case "3":
      nodoDiaSemana.innerHTML = "Miercoles"
      break;
    case "4":
      nodoDiaSemana.innerHTML = "Jueves"
      break;
    case "5":
      nodoDiaSemana.innerHTML = "Viernes"
      break;
    case "6":
      nodoDiaSemana.innerHTML = "Sabado"
      break;
    case "7":
      nodoDiaSemana.innerHTML = "Domingo"
      break;
    default:
      nodoDiaSemana.innerHTML = "El numero ingresado es incorrecto"
      break;
  }
}
