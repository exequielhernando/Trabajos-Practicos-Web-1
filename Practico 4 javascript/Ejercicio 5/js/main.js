"use strict";

function controlarCasilleros() {
  let nodoNombre = document.getElementById("nombre");
  let nombre = nodoNombre.value;
  let largoNombre = nombre.length;
  let mailValido = /\w+@+\w+\.+[a-z]+\.+[a-z]/;
  console.log(largoNombre);

  let nodoApellido = document.getElementById("apellido");
  let apellido = nodoApellido.value;
  let largoApellido = apellido.length;
  console.log(largoApellido);

  let nodoEmail = document.getElementById("email");
  let email = nodoEmail.value;
  let largoEmail = email.length;
  console.log(largoEmail);

  let nodoConsulta = document.getElementById("consulta");
  let consulta = nodoConsulta.value;
  let largoConsulta = consulta.length;
  console.log(largoConsulta);

  if ((largoNombre == 0 ) || (largoApellido == 0) || (largoEmail == 0) || (largoConsulta == 0)) {
    alert("No debe quedar ningun casillero vacio, por favor ingrese los datos correctos");
  }
  else {
    if ((largoNombre < 3) || (largoNombre > 20)) {
      alert("Por favor ingrese un nombre que contenga entre 3 y 20 caracteres");
    }
    if ((largoApellido < 3) || (largoApellido > 20)) {
      alert("Por favor ingrese un apellido que contenga entre 3 y 20 caracteres");
    }
    if (!mailValido.test(email)) {
      alert("Por favor ingrese un mail Valido");
    }

  }
}
