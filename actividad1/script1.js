let input1 = document.getElementById("primer_valor");
let input2 = document.getElementById("segundo_valor");
let botoncito = document.getElementById("boton");
botoncito.addEventListener("click", suma);
function suma() {
        let valor1 = parseInt(input1.value);
        let valor2 = parseInt(input2.value);
        let resultado = valor1 + valor2;
        let div = document.createElement("div");
        div.innerText = "El resultado de tu suma es: " + resultado;
        document.body.appendChild(div);
        div.className="final"
}

let refrescarPag = document.getElementById("nueva_suma");
refrescarPag.addEventListener("click", borrar)
function borrar(){
        window.location.reload(true)
}
