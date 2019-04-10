"use strict";
let btn1 =  document.getElementById("btn1");
let btn2 =  document.getElementById("btn2");
let btn3 =  document.getElementById("btn3");
btn1.addEventListener("click", function(e){
  mostrarBoton(1);
});
btn2.addEventListener("click", function(e){
  mostrarBoton(2);
});
btn3.addEventListener("click", function(e){
  mostrarBoton(3);
});
function mostrarBoton(valor) {
  let nodoBotonAMostrar = document.getElementById("oculto" + valor);
  nodoBotonAMostrar.style.display = "block";
}
