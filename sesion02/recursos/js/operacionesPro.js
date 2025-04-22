function operar(valor1, valor2, salida, operacion) {
    var resultado;
    switch (operacion) {
        case 'sumar':
            resultado = parseFloat(valor1) + parseFloat(valor2);
            break;
        case 'restar':
            resultado = parseFloat(valor1) - parseFloat(valor2);
            break;
        case 'multiplicar':
            resultado = parseFloat(valor1) * parseFloat(valor2);
            break;
        case 'dividir':
            if (parseFloat(valor2) !== 0) {
                resultado = parseFloat(valor1) / parseFloat(valor2);
            } else {
                resultado = "Error: División por cero no permitida.";
            }
            break;
        default:
            resultado = "Error: Operación no válida.";
    }
    mostrarMensaje(resultado, salida);
}
function mostrarMensaje(resultado,salida) {
    salida.value = "El resultado es: " + resultado;
}