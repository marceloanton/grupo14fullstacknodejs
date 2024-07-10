import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombreUsuario = document.getElementById('nombre_usuario').value;
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('contrasena').value;

        // Reinicia los mensajes de error antes de validar
        resetErrorMessages();

        // Realiza las validaciones
        let isValid = true;

        if (!validateNombreUsuario(nombreUsuario)) {
            isValid = false;
            displayErrorMessage('nombreUsuarioError', 'Nombre de usuario inválido');
        }

        if (!validateEmail(email)) {
            isValid = false;
            displayErrorMessage('emailError', 'Correo electrónico inválido');
        }

        if (!validateContrasena(contrasena)) {
            isValid = false;
            displayErrorMessage('contrasenaError', 'Contraseña inválida');
        }

        // Si pasa todas las validaciones, envía el formulario
        if (isValid) {
            try {
                const response = await fetch(`${config.apiUrl}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre_usuario: nombreUsuario,
                        email: email,
                        contrasena: contrasena
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    if (response.status === 400) {
                        if (data.message.includes('nombre de usuario')) {
                            displayErrorMessage('nombreUsuarioError', data.message);
                        } else if (data.message.includes('correo electrónico')) {
                            displayErrorMessage('emailError', data.message);
                        } else {
                            alert(data.message); // Mostrar otros errores en alerta si es necesario
                        }
                    } else {
                        alert('Error en el servidor');
                    }
                    return;
                }

                // Registro exitoso
                alert('Usuario registrado exitosamente');
                window.location.href = '../../pages/login.html'; // Redirigir al usuario al login

            } catch (error) {
                console.error('Error al registrar:', error);
                alert('Error al registrar el usuario');
            }
        }
    });

    // Función para mostrar mensajes de error
    function displayErrorMessage(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }

    // Función para reiniciar los mensajes de error
    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
            error.classList.remove('active');
        });
    }

    // Funciones de validación
    function validateNombreUsuario(nombreUsuario) {
        return nombreUsuario.length >= 6; // Validación básica de longitud mínima
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateContrasena(contrasena) {
        // Validaciones adicionales para la contraseña (ejemplo)
        const minLength = 6;
        return contrasena.length >= minLength;
    }
});
