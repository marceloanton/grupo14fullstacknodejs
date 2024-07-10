import config from './config.js';

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const nombreUsuarioOEmail = document.getElementById('nombreUsuarioOEmail').value;
            const contrasena = document.getElementById('contrasena').value;

            try {
                const response = await fetch(`${config.apiUrl}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombreUsuarioOEmail: nombreUsuarioOEmail,
                        contrasena: contrasena
                    }),
                });

                if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.message || 'Error al iniciar sesión');
                }

                const data = await response.json();
                console.log(data.token); // Token recibido del backend

                // Guardar el token en localStorage o sessionStorage
                localStorage.setItem('token', data.token);

                // Redirigir al usuario a la página correspondiente después del login
                window.location.href = '../../dashboard.html';
            } catch (error) {
                console.error('Error:', error.message);
                errorMessage.textContent = error.message; // Mostrar mensaje de error en el formulario
            }
        });
    }
});
