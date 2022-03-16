let input1 = document.getElementById("primer_valor");
        let input2 = document.getElementById("segundo_valor");
        let input3 = document.getElementById("que_hacer");
        let botoncito = document.getElementById("boton");
        botoncito.addEventListener("click", operacion);
        function operacion(){
            let valor1 = parseInt(input1.value);
            let valor2 = parseInt(input2.value);
            let calculo = parseInt(input3.value);
            let resultado
            if (calculo == 1) {
                resultado = valor1 + valor2
                let div = document.createElement("div");
                div.innerText = "El resultado de tu suma es: " + resultado;
                document.body.appendChild(div);
                div.className = "final"
            } else if (calculo == 2) {
                resultado = valor1 - valor2
                let div = document.createElement("div");
                div.innerText = "El resultado de tu resta es: " + resultado;
                document.body.appendChild(div);
                div.className = "final"
            } else if (calculo == 3) {
                resultado = valor1 * valor2
                let div = document.createElement("div");
                div.innerText = "El resultado de tu multiplicación es: " + resultado;
                document.body.appendChild(div);
                div.className = "final"
            } else if (calculo == 4) {
                resultado = valor1 / valor2
                let div = document.createElement("div");
                div.innerText = "El resultado de tu división es: " + resultado;
                document.body.appendChild(div);
                div.className = "final"
            } else {
                let div = document.createElement("div");
                div.innerText = "La orden ingresada es incorrecta. Por favor ingrese 1, 2, 3 o 4 para realizar un cálculo válido.";
                document.body.appendChild(div);
                div.className = "final"
            }
        }

        let refrescarPag = document.getElementById("nueva_operacion");
        refrescarPag.addEventListener("click", borrar)
        function borrar(){
            window.location.reload(true)
        }
