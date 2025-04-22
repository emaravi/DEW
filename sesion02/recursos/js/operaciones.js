function sumar(sumando1, sumando2, salida) {
    var resultado = parseFloat(sumando1) + parseFloat(sumando2);
    mostrarMensaje(resultado, salida);
}

function restar(diferencia1, diferencia2 , salida) {
    var resultado = parseFloat(diferencia1) - parseFloat(diferencia2);
    mostrarMensaje(resultado, salida);
}

function multiplicar(factor1, factor2 , salida) {
    var resultado = parseFloat(factor1) * parseFloat(factor2);
    mostrarMensaje(resultado, salida);
}

function dividir(dividendo, divisor ,salida) {
    var resultado = parseFloat(dividendo) / parseFloat(divisor);
    mostrarMensaje(resultado, salida);
}

//function mostrarMensaje(resultado) {
   // alert("El rsultado es: " + resultado);
//}

function mostrarMensaje(resultado,salida) {
    salida.value = "El resultado es: " + resultado;
}