// Función para buscar un usuario por su nombre o apellido y mostrarlo en la tabla de usuarios
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tablaUsuarios = document.getElementById('tablaUsuarios');
    const filas = tablaUsuarios.getElementsByTagName('tr');

    searchInput.addEventListener('input', function () {
        const busqueda = searchInput.value.trim().toLowerCase();
        // Recorrer las filas de la tabla y mostrar solo las filas que contienen el texto de búsqueda
        for (let fila of filas) {
            // Obtener todas las celdas de la fila
            const celdas = fila.getElementsByTagName('td');
            let encontrado = false;
            // Recorrer las celdas de la fila y mostrar solo las celdas que contienen el texto de búsqueda
            for (let celda of celdas) {
                // Comprobar si la celda contiene el texto de búsqueda
                if (celda.textContent.toLowerCase().includes(busqueda)) {
                    encontrado = true;
                    break;
                }
            }
            // Mostrar solo las filas que contienen el texto de búsqueda
            if (encontrado) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        }
    });
});