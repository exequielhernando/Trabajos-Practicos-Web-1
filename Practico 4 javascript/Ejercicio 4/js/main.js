"use strict";

function cambiarCartel() {
  let nodoDia = document.getElementById("dia");
  let dia = nodoDia.value;
  dia = dia.toLowerCase();

  let nodoCartel = document.getElementById("cartelDia");

  if((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes") || (dia == "sabado") || (dia == "domingo")){
    if(dia == "viernes"){
      nodoCartel.innerHTML = '<img src="imagenes/viernes.jpg" alt="viernes">';
    }
    else {
      nodoCartel.innerHTML = '<img src="imagenes/noViernes.jpg" alt="No es viernes">'
    }
  }
  else {
    nodoCartel.innerHTML = '<img src="imagenes/diasSemana.jpg" alt="No es viernes">'

  }

}
