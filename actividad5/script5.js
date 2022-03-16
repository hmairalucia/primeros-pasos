let largoT = document.getElementById("base");
let altoT = document.getElementById("altura");
let precioPorM2 = document.getElementById("preciom2");
let botonCalcular = document.getElementById("soñarEsGratis");
botonCalcular.addEventListener("click", unVuelto);

function unVuelto(){
    let baseRect = largoT.value; // Ya sean inputs number o text, SIEMPRE hay que usar el .value
    let alturaRect = altoT.value;
    let area = baseRect*alturaRect;
    let precioFinal = area*precioPorM2.value;
    crearDiv("El terreno mide " + area + " metros cuadrados, por eso cuesta U$D" + precioFinal, "final");
}

let div1 = document.getElementById("div1");

function crearDiv(texto, clase){
    let div = document.createElement("div");
    div.innerText = texto; 
    div1.appendChild(div); //elemento.appendChild(div) sirve para crear el div al final de los div que existen en el html, siempre les tengo que asignar un id antes de usarlo acá en js
    div.className = clase;
}

let refrescarPag = document.getElementById("borrarTodo");
refrescarPag.addEventListener("click", borrar);
function borrar(){
        window.location.reload(true)
}