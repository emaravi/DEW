function fechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

function fechaPasada(dias) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - dias);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

function fechaFutura(dias) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + dias);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

function operarFecha(operacion, dias) {
    switch (operacion) {
        case 'actual':
            return fechaActual();
        case 'pasada':
            return fechaPasada(dias);
        case 'futura':
            return fechaFutura(dias);
        default:
            return 'Operación no válida';
    }
}
function mostrarResultadoFecha(operacion, dias, salida) {
    salida.innerHTML = "El resultado es: " + operarFecha(operacion, dias);
}