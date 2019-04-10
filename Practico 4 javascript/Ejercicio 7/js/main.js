"use strict";
let nImagen = 1;
function cambiarImagen(value) {
  let imagenFondo = document.getElementById("imagenFondo");
  let imagen;
  if ((nImagen >= 1) && (nImagen <=4)) {
    nImagen += value;
    if (!((nImagen >= 1) && (nImagen <=4))) {
      nImagen -= value;
    }
  }
  imagen = "imagenes/imagen" + nImagen + ".jpg";
  imagenFondo.src = imagen;
  console.log(nImagen);

}
