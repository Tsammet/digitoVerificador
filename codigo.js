let digitosVerificadores = ['201012341-3', '12345-5']

let existente = function () {
    
    let numero = document.getElementById("digito").value;
    numero = numero.toString()

    for (let digito of digitosVerificadores) {

        if (numero === digito) {

            document.getElementById("digitoInvertido").innerHTML = "el digito verificador ya está registrado"
            
        }
        else{
            document.getElementById("digitoInvertido").innerHTML = "el digito verificador no está registrado"

        }
    }
}

let digitoVerificador = function () {

    let numeroInvertido = 0;

    let numero = document.getElementById("digito").value


    while (numero > 0) {

        // sacamos el ultimo digito
        let ultimoDigito = numero % 10;

        // agregamos el ultimo digito multiplicandolo por 10 para luego meter el otro digito
        numeroInvertido = numeroInvertido * 10 + ultimoDigito;

        // eliminamos el último digito el número original para continuar con el siguiente
        numero = Math.floor(numero / 10);

    }

    return numeroInvertido
}

const numeroVerificador = function () {

    // Aquí convertí el numero invertido en un string para poder recorrer número por número
    // también llamo la función aquí
    numeroInvertido = digitoVerificador().toString();


    let suma = 0;
    let multiplicador = 2;
    let limite = 7

    // RECORRO núm x num
    for (let i = 0; i < numeroInvertido.length; i++) {

        // AQUÍ CONVIERTO CADA NÚMERO QUE ES UN STRING A UN NUMERO
        let digito = parseInt(numeroInvertido[i]);

        suma += digito * multiplicador;

        multiplicador++;

        if (multiplicador > limite) {
            multiplicador = 2;
        }
    }



    modulo = suma % 11;
    resta = 11 - modulo

    let num = document.getElementById("digito").value

    let numverificador = num + "-" + resta

    document.getElementById("digitoInvertido").innerHTML = "el digito verificador es: " + numverificador

}