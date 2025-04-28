function validarDatosDelFormulario() {
    
    //llamando a la funcion validarNombre
    if (!validarNombre()) {
        return false; // Si la validación del nombre falla, detener el envío del formulario 
    }

    // llamando a la funcion validarEmail
    if (!validarEmail()) {
        return false; // Si la validación del email falla, detener el envío del formulario 
    }
    

    // Validar el campo teléfono
    var telefono = document.getElementById("telefono").value;
    var telefonoRegex = /^\d{9}$/;
    if (telefono === "") {
        alert("El campo teléfono no puede estar vacío.");
        return false;
    } else if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener exactamente 9 dígitos.");
        return false;
    }

    // Validar el campo fecha de nacimiento
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (fechaNacimiento === "") {
        alert("El campo fecha de nacimiento no puede estar vacío.");
        return false;
    } else if (!fechaRegex.test(fechaNacimiento)) {
        alert("La fecha de nacimiento debe estar en el formato YYYY-MM-DD.");
        return false;
    }
    //validar que la fecha no sea mayor a la actual
    var fechaActual = new Date();
    var fechaNacimientoDate = new Date(fechaNacimiento);
    if (fechaNacimientoDate > fechaActual) {
        alert("La fecha de nacimiento no puede ser mayor a la fecha actual.");
        return false;
    }

    return true;
}

function validarNombre(){
    // Validar el campo nombre
    var nombre = document.getElementById("nombre").value;
    var regex = /^[a-zA-Z\s]+$/;

    if (nombre === "") {
        alert("El campo nombre no puede estar vacío.");
        return false;
    } else if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }
}

function validarEmail() {
    // Validar el campo email
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("El campo email no puede estar vacío.");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return false;
    }
    return true;
}

function validarAsunto() {
    // Validar el campo asunto
    var asunto = document.getElementById("asunto").value;
    //mostrar asunto elegido en asuntoMensaje
    var asuntoMensaje = document.getElementById("asuntoMensaje");
    asuntoMensaje.innerHTML = "Asunto elegido: " + asunto;
    //validar que el asunto no sea vacio
    if (asunto === "") {
        alert("El campo asunto no puede estar vacío.");
        return false;
    }
    return true;
}

function efectoEnfoque(caja) {
    // Cambiar el color de fondo al enfocar el campo
    caja.style.backgroundColor = "#f0f8ff"; // Color claro al enfocar
}
function efectoDesenfoque(caja) {
    // Restaurar el color de fondo al desenfocar el campo
    caja.style.backgroundColor = "#ffffff"; // Color original al desenfocar
}