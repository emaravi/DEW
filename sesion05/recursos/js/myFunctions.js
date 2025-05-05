 function agregarCurso() {
        const cursosMatriculados = document.getElementById('cursosMatriculados');
        const cursoSeleccionado = document.getElementById('cursos').value;
        const estado = document.querySelector('input[name="tipoMatricula"]:checked').value;
        
        const filas = cursosMatriculados.getElementsByTagName('tr');
        let cursoExiste = false;
    
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        if (celdas[0].textContent === cursoSeleccionado) {
            cursoExiste = true;
            break;
        }
    }
    
    if (cursoExiste) {
        alert('Este curso ya ha sido agregado.');
        return; // Salir de la función sin agregar el curso
    }

        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${cursoSeleccionado}</td>
            <td>${estado}</td>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarCurso(this)">Eliminar</button></td>
        `;
        
        cursosMatriculados.appendChild(nuevaFila);
    }

    function eliminarCurso(boton) {
        const fila = boton.parentElement.parentElement;
        fila.remove();
    }