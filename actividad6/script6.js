let nombre = document.getElementById("nombres");
let botonEnviar = document.getElementById("listoLosNombres");
botonEnviar.addEventListener("click", guardarEnElArreglo);

function guardarEnElArreglo (){
    let arrNombres = [];
    for (let i = 0; i < 5; i++){
        arrNombres.push(nombre.value);
        //¿Cómo hago para que acá espere a que la usuaria ingrese otro nombre para volver a cargar la página?
        window.location.reload(true);
    }
    crearDiv("Los nombres que ingresaste: " + arrPares.join(", "), "final");
}

function crearDiv(texto, clase){
    let div = document.createElement("div");
    div.innerText = texto; 
    document.body.appendChild(div);
    div.className = clase;
}