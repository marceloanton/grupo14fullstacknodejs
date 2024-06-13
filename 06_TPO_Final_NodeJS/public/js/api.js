let paginaActual = 1;
const usuariosPagina = 10; // Número de usuarios por página
let todosUsuarios = []; // Variable para almacenar todos los usuarios
let totalpaginas = 0; // Variable para almacenar el total de paginas

function cargarUsuarios(pagina) {
    const startIndex = (pagina - 1) * usuariosPagina;
    const endIndex = startIndex + usuariosPagina;
    const displayedUsers = todosUsuarios.slice(startIndex, endIndex);

    const userRows = document.getElementById('userRows');
    userRows.innerHTML = '';

    displayedUsers.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.nombre}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.apellido}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.dni}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.email}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.numero_telefono}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap"><img src='${user.imagen}'></td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.fecha_actualizacion}</td>
            <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.tipo_usuario}</td>
        `;
        userRows.appendChild(row);
    });
    document.getElementById('numeroPagina').innerText = `Pag. ${pagina} de ${totalpaginas}`;
}

document.getElementById('antBtn').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        cargarUsuarios(paginaActual);
    }
});

document.getElementById('sigBtn').addEventListener('click', () => {
    if (paginaActual < totalpaginas) {
        paginaActual++;
        cargarUsuarios(paginaActual);
    }
});

// Simular la carga de usuarios desde la API
fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
        todosUsuarios = data;
        totalpaginas = Math.ceil(todosUsuarios.length / usuariosPagina);
        cargarUsuarios(paginaActual);
    })
    .catch(error => console.error('Error al cargar los usuarios:', error));

/*     <td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.numero_celular}</td>
<td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.redes_sociales}</td>
<td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.direccion}</td>
<td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.ciudad}</td>
<td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.provincia}</td>
<td class="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">${user.pais}</td> */