"use strict";
let operadorA;
let operadorB;
let operacion;

function iniciarValores() {
  let resultadoParcial = document.getElementById("resultadoParcial");
  let resultadoFinal = document.getElementById("resultadoFinal");
  let reset = document.getElementById("borrarTodo");
  let resetParcial = document.getElementById("borrarNumero");
  let division = document.getElementById("division");
  let multiplicacion = document.getElementById("multiplicacion");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let igual = document.getElementById("igual");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");

  uno.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "1";
    resultadoFinal.textContent = resultadoFinal.textContent + "1";

  }
  dos.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "2";
    resultadoFinal.textContent = resultadoFinal.textContent + "2";

  }
  tres.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "3";

  }
  cuatro.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "4";
  }
  cinco.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "5";
  }
  seis.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "6";
  }
  siete.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "7";
  }
  ocho.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "8";
  }
  nueve.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "9";
  }
  cero.onclick = function(e) {
    resultadoParcial.textContent = resultadoParcial.textContent + "0";
  }

  reset.onclick = function(e){
    resetear();
  }
  resetParcial.onclick = function(e){
    resetear();
  }
  suma.onclick = function(e) {
    operadorA = resultadoParcial.textContent;
    operacion = "+";
    limpiar();
  }
  resta.onclick = function(e) {
    operadorA = resultadoParcial.textContent;
    operacion = "-";
    limpiar();
  }
  division.onclick = function(e) {
    operadorA = resultadoParcial.textContent;
    operacion = "/";
    limpiar();
  }
  multiplicacion.onclick = function(e) {
    operadorA = resultadoParcial.textContent;
    operacion = "*";
    limpiar();
  }
  igual.onclick = function(e) {
    operadorB = resultadoParcial.textContent;
    resolver();
  }

function limpiar() {
  resultadoParcial.textContent = "";
  resultadoFinal.textContent = "";
}
function resetear(){
  resultadoParcial.textContent = "";
  resultadoFinal.textContent = "";
  operadorA = 0;
  operadorB = 0;
  operacion = "";
}
function resolver() {
  let resultado = 0;
  switch (operacion) {
    case "+":
      resultado = parseFloat(operadorA) + parseFloat(operadorB);
      break;
    case "-":
      resultado = parseFloat(operadorA) - parseFloat(operadorB);
      break;
    case "/":
      resultado = parseFloat(operadorA) / parseFloat(operadorB);
      break;
    case "*":
      resultado = parseFloat(operadorA) * parseFloat(operadorB);
      break;
    }
    resetear();
    resultadoParcial.textContent = resultado;
    resultadoFinal.textContent = resultado;
}
}
