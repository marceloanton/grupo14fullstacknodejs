document.addEventListener('DOMContentLoaded', function () {
    const userProfileForm = document.getElementById('userProfileForm');

    // Function to populate form with user data
    async function fetchUserData() {
        try {
            const response = await fetch('http://localhost:3000/api/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener los datos del usuario');
            }

            const userData = await response.json();
            document.getElementById('nombre').value = userData.nombre;
            document.getElementById('apellido').value = userData.apellido;
            document.getElementById('email').value = userData.email;
            document.getElementById('telefono').value = userData.telefono;
        } catch (error) {
            console.error(error.message);
        }
    }

    // Fetch user data on page load
    fetchUserData();

    // Form submission event
    userProfileForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        try {
            const response = await fetch('http://localhost:3000/api/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ nombre, apellido, email, telefono })
            });

            if (!response.ok) {
                throw new Error('Error al actualizar los datos del usuario');
            }

            alert('Datos actualizados correctamente');
        } catch (error) {
            console.error(error.message);
        }
    });
});
