"use strict";

let nodoDivAleatorio = document.getElementById("divAleatorio");

function crearDiv() {

  let posicionDiv = Math.floor((Math.random() * 4 ) + 1 );
  let tamañoDiv = Math.floor((Math.random() * 200 ) + 1);
  let colorDiv = Math.floor((Math.random() * 5 ) + 1);

  //Genera una posicion del div al azar
  switch (posicionDiv) {
    case 1:
        nodoDivAleatorio.style.position = "absolute";
      break;
    case 2:
      nodoDivAleatorio.style.position = "relative";
      break;
    case 3:
      nodoDivAleatorio.style.position = "fixed";
      break;
    case 4:
      nodoDivAleatorio.style.position = "sticky";
      break;
    default:
  }

  //Genera un tamaño aleatorio el cual va a modificar en el div
  nodoDivAleatorio.style.width = tamañoDiv + "px";

  //Modificamos el color del div de manera aleatoria

  switch (colorDiv) {
    case 1:
      nodoDivAleatorio.style.backgroundColor = "red";
      break;
    case 2:
      nodoDivAleatorio.style.backgroundColor = "blue";
      break;
    case 3:
      nodoDivAleatorio.style.backgroundColor = "pink";
      break;
    case 4:
      nodoDivAleatorio.style.backgroundColor = "yellow";
      break;
    case 5:
      nodoDivAleatorio.style.backgroundColor = "green";
      break;
    default:

  }



}
