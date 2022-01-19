let usuaria = document.getElementById("nombre");
let numeroDeVeces = document.getElementById("veces");
let botoncito = document.getElementById("boton");
botoncito.addEventListener("click", impresion);

function impresion(){
    let cantidadDeRepeticiones = parseInt(numeroDeVeces.value);
    
    for(i=1; i<=cantidadDeRepeticiones; i++){
        crearDiv(i + ". " + usuaria.value,"final")
    }
}

function crearDiv(texto, clase){
    let div = document.createElement("div")
        div.innerText = texto
        document.body.appendChild(div)
        div.className= clase
}

let refrescarPag = document.getElementById("otro_numero");
refrescarPag.addEventListener("click", borrar);

function borrar(){
    window.location.reload(true)
}