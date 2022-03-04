//No sé cómo hacer para que el resultado de lo que pide hacer la usuaria aparezca abajo de los botones correspondientes

let vecesPares = document.getElementById("pares");
let botonPares = document.getElementById("mostrarPares");
botonPares.addEventListener("click", seriePares);

function seriePares() {
    let cantidadPares = vecesPares.value
    let contPares = 0;
    let arrPares = [];
    for(let i=0; i<cantidadPares; i++){ //Tengo que poner let al principio y i= al final, por eso antes no andaba; y necesito un contador porque sino pasa lo mismo que con el while, pero i es lo que tengo que imprimir, entonces necesito un contador de pares para imprimir y dejar que i cuente las vueltas
        arrPares.push(contPares);
        contPares = contPares + 2;
    }
    crearDiv(arrPares.join("-"), "final");
}

let vecesFibonacci = document.getElementById("fibonacci");
let botonFibonacci = document.getElementById("mostrarFibonacci");
botonFibonacci.addEventListener("click", serieFibonacci);

function serieFibonacci() {
    let cantidadFibonacci = vecesFibonacci.value;
    let vueltas = 0;
    let a = 0;
    let b = 1;
    let c = 0;
    let arrAcum = []; //Así creo un array vacío
    while(vueltas!=cantidadFibonacci){ //Necesito un contador porque sino no da las vueltas que tiene que dar y arroja hasta el término más chico que cantidadFibonacci
        arrAcum.push(c);
        c = a + b
        b = a
        a = c
        vueltas = vueltas + 1;
    }
crearDiv(arrAcum.join("-"), "final"); // Además de arrAcum puedo usar array.toString() y muestra los elementos del array separados por una coma
}

function crearDiv(texto, clase){
    let div = document.createElement("div");
    div.innerText = texto; 
    document.body.appendChild(div);
    div.className = clase;
}

let refrescarPag1 = document.getElementById("borrarTodo1");
refrescarPag1.addEventListener("click", borrar);
function borrar(){
        window.location.reload(true)
}

let refrescarPag2 = document.getElementById("borrarTodo2");
refrescarPag2.addEventListener("click", borrar);
function borrar(){
        window.location.reload(true)
}