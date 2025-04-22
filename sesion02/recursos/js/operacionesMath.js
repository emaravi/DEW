function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarResultadoNumeroAleatorio(min, max, salida) {
    const numero = numeroAleatorio(parseFloat(min),parseFloat(max));
    salida.innerHTML = "El número aleatorio es: " + numero;
}