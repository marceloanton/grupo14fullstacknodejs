let paginaActual = 1;
const usuariosPagina = 10; // Número de usuarios por página
let todosUsuarios = []; // Variable para almacenar todos los usuarios
let totalpaginas = 0; // Variable para almacenar el total de paginas

// Funcion para cargar los usuarios
function cargaUsuarios(pagina) {
    const startIndex = (pagina - 1) * usuariosPagina;
    const endIndex = startIndex + usuariosPagina;
    const mostrarUsuarios = todosUsuarios.slice(startIndex, endIndex);
    // Limpiamos la tabla de usuarios antes de mostrar los nuevos
    const filasUsuarios = document.getElementById('filasUsuarios');
    filasUsuarios.innerHTML = '';
    // Cargamos los usuarios
    mostrarUsuarios.forEach((user, index) => {
        // Creamos una nueva fila
        const fila = document.createElement('tr');
        // Cargamos los datos de los usuarios
        const fechaId = `fecha_actualizacion_${index}`;
        fila.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.dni}</td>
            <td>${user.email}</td>
            <td>${user.numero_telefono}</td>
            <td><img class="avatar-img" id="avatar-img" src="${user.imagen ? user.imagen : '/img/user/default.gif'}"></td>
            <td id="${fechaId}">${user.fecha_actualizacion}</td>
            <td class="tipo_usuario">${user.tipo_usuario}</td>
            <td class="acciones"><button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button><button class="btn-edit"><i class="fa-solid fa-square-pen"></i></button></td>
        `;
        // Agregamos la fila a la tabla
        filasUsuarios.appendChild(fila);
        fila.cells[fila.cells.length - 2].setAttribute('data-type', user.tipo_usuario);



        // Convertimos la fecha en formato ISO a un objeto Date
        const fecha_actualizacion = new Date(user.fecha_actualizacion);

        // Formateamos la fecha
        const opcionesFecha = { anio: 'numeric', mes: 'long', dia: 'numeric' };
        const fechaFormateada = fecha_actualizacion.toLocaleDateString('es-ES', opcionesFecha);

        // Mostramos la fecha de actualizacion
        document.getElementById(fechaId).textContent = fechaFormateada;

        // Mostramos el numero de pagina actual
        document.getElementById('numeroPagina').innerText = ` Pag. ${pagina}/${totalpaginas} `;
    });
}

// Evento del botón anterior
document.getElementById('antBtn').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        cargaUsuarios(paginaActual);
    }
});
// Evento del botón siguiente
document.getElementById('sigBtn').addEventListener('click', () => {
    if (paginaActual < totalpaginas) {
        paginaActual++;
        cargaUsuarios(paginaActual);
    }
});

// Simulamos la carga de usuarios desde la API
fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
        // Almacenamos los usuarios
        todosUsuarios = data;
        // Calculamos el total de paginas
        totalpaginas = Math.ceil(todosUsuarios.length / usuariosPagina);
        // Cargamos los usuarios
        cargaUsuarios(paginaActual);
    })
    // En caso de error
    .catch(error => console.error('Error al cargar los usuarios:', error));


/**
 * Otros datos de los usuarios que se encuentran en la base de datos
 * <td>${user.numero_celular}</td>
 * <td>${user.redes_sociales}</td>
 * <td>${user.direccion}</td>
 * <td>${user.ciudad}</td>
 * <td>${user.provincia}</td>
 * <td>${user.pais}</td>
 * */