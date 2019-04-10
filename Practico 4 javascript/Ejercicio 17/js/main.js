"use strict";

let categorias = document.getElementById("categorias");
let deportes = document.getElementById("deportes");
let contacto =  document.getElementById("contacto");

let botones = document.getElementsByClassName("boton-contenido");
let contenido = document.getElementsByClassName("contenido");

/* Cargamos la funcion para que se oculte el contenido ni bien
se inicia la pagina*/
ocultarContenido();
/* Cargamos la funcion para que detecte el click en algun boton*/
setBotonesClick();
/* Setea los botones para que al hacer click si NO tiene clase
contenido-oculto le agrege esa misma clase y se ocultarContenido
y si TIENE contenido-oculto entonces le agrega la clase a todas y
despues remueve la clase contenido oculto de si mismo */
function setBotonesClick() {
  for (var i = 0; i < botones.length; i++) {

    botones[i].onclick = function(e){
      if (!this.classList.contains('contenido-oculto')) {
        this.classList.add('contenido-oculto');
      }
      else {
        ocultarContenido();
        this.classList.remove('contenido-oculto');
      }
    }
  }
}
function ocultarContenido(){
  for (var i = 0; i < botones.length; i++) {
    if (!botones[i].classList.contains('contenido-oculto')) {
      botones[i].classList.add('contenido-oculto');
    }
  }
}
