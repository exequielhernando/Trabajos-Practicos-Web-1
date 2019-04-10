"use strict";
console.log("Paso 1: Declarando funciones");
let contador=0;

function clickear() {
  console.log("Valor anterior de contador" + contador);
  contador++;
  console.log("Valor actual de contador" + contador);
  let mensaje = "Hiciste " + contador + " clicks"
  alert(mensaje);
}
console.log("Paso 2: Continua la ejecucion");
