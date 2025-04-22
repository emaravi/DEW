function longitudCadena(cadena) {
    return cadena.length;
}

function convertirMayusculas(cadena) {
    return cadena.toUpperCase();
}

function convertirMinusculas(cadena) {
    return cadena.toLowerCase();
}

function operarCadena(cadena, operacion) {
    switch (operacion) {
        case 'longitud':
            return longitudCadena(cadena);
        case 'mayusculas':
            return convertirMayusculas(cadena);
        case 'minusculas':
            return convertirMinusculas(cadena);
        default:
            return 'Operación no válida';
    }
}

function mostrarResultado(cadena, operacion, salida) {
    salida.innerHTML = "El resultado es: " + operarCadena(cadena, operacion);
}