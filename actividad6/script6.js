let nombre = document.getElementById("nombres");
let botonEnviar = document.getElementById("listoLosNombres");
botonEnviar.addEventListener("click", guardarEnElArreglo);
let arrNombres = [];

function guardarEnElArreglo() {
  if (arrNombres.length <= 4) {
    console.log(arrNombres.length);
    arrNombres.push(nombre.value);
    document.getElementById("nombres").value = ""; // Para limpiar el input y que pueda ingresar otro valor
    console.log(arrNombres);
  }
  if (arrNombres.length == 5) {
    crearDiv("Los nombres que ingresaste: " + arrNombres.join(", "), "final");
  }
}

function crearDiv(texto, clase) {
  let div = document.createElement("div");
  div.innerText = texto;
  document.body.appendChild(div);
  div.className = clase;
}
