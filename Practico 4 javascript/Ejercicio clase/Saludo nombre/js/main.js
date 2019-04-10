"use strict";

function actualizarSaludo() {
  //lee el nombre
  let nodoinput = document.getElementById("txtNombre");
  let nombre = nodoinput.value;

  console.log(nombre);

  let nodoSaludo = document.getElementById("txtSaludo");
  nodoSaludo.innerHTML = "Hola " + nombre;

}
