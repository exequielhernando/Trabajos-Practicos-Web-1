"use strict";
function mostrarBoton(value) {
  let boton = document.getElementById("b");
  let divBoton;
  console.log(value);
  if (value == 1) {
    divBoton = document.getElementById("boton2");
    divBoton.style.display = "block";
    console.log(value);

  }
  else if (value == 2) {
    divBoton = document.getElementById("boton3");
    divBoton.style.display = "block";
  }
  else if (value == 3) {
    divBoton = document.getElementById("boton4");
    divBoton.style.display = "block";
  }
  else if(value == 4){
    alert("Ganaste! Encontraste el tesoro!");
  }
}
