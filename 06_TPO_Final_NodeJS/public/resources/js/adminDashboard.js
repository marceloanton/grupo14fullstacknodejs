document.addEventListener('DOMContentLoaded', function () {
    const usersTableBody = document.getElementById('usersTable').querySelector('tbody');

    // Function to fetch users data
    async function fetchUsersData() {
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener los datos de los usuarios');
            }

            const usersData = await response.json();
            populateUsersTable(usersData);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Function to populate users table
    function populateUsersTable(users) {
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id_usuario}</td>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.email}</td>
                <td>${user.telefono}</td>
                <td>
                    <button class="edit-btn" data-id="${user.id_usuario}">Editar</button>
                    <button class="delete-btn" data-id="${user.id_usuario}">Eliminar</button>
                </td>
            `;
            usersTableBody.appendChild(row);
        });

        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', handleEdit);
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    }

    // Handle edit user
    function handleEdit(event) {
        const userId = event.target.getAttribute('data-id');
        // Fetch user data and show in form to edit
        // (Similar to fetchUserData function in userDashboard.js)
    }

    // Handle delete user
    async function handleDelete(event) {
        const userId = event.target.getAttribute('data-id');
        const confirmDelete = confirm('¿Está seguro de que desea eliminar este usuario?');

        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Error al eliminar el usuario');
                }

                alert('Usuario eliminado correctamente');
                location.reload(); // Reload page to reflect changes
            } catch (error) {
                console.error(error.message);
            }
        }
    }

    // Fetch users data on page load
    fetchUsersData();
});
