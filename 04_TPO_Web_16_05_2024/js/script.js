// Obtenemos el formulario y los elementos input
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const errorSpans = document.querySelectorAll('.error-span');

// Recorremos cada input y sus respectivos errores
inputs.forEach((input, index) => {
    // Agregamos un evento 'input' a cada input por medio de un 'addEventListener' en una función de flecha
    input.addEventListener('input', () => {
        // Validamos el input actual
        const value = input.value;
        // Obtenemos el error span correspondiente
        const errorSpan = errorSpans[index];

        /**
          * Validacion de correo electronico 
          **/
        // Si el input es de tipo 'email' comprobamos que sea una dirección de correo electrónico
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Si el valor no es una dirección de correo electrónico, mostramos un mensaje de error
            if (!emailRegex.test(value)) {
                errorSpan.textContent = 'Correo Electrónico Invalido.';
                errorSpan.classList.add('error-span');
                errorSpan.classList.remove('valid-span');
            } else {
                // Si el valor es una dirección de correo electrónico, ocultamos el mensaje de error
                errorSpan.textContent = '';
                errorSpan.classList.add('valid-span');
                errorSpan.classList.remove('error-span');
                errorSpan.textContent = '✔';
            }

            /**
              * Fin de la validacion de correo electronico 
              **/
        }
        /**
          * Validacion de password
          */
        // Si el input es de tipo 'password'
        else if (input.type === 'password') {
            // Definimos la longitud minima y maxima
            const minLength = 8;
            const maxLength = 16;
            // Obtenemos la longitud de la contraseña
            const passwordLength = value.length;
            // Almacenamos todos los errores, para luego mostrarlos con los condicionales
            const errors = [];
            // Almacenamos todos los validos, para luego mostrarlos con los condicionales
            let isValid = true;
            // creamos un objeto con las validaciones
            const validations = [
                /**
                 * Condiciones  
                 * Agregamos las validaciones, si la condicion se cumple, se agrega el mensaje de error, 
                 * de lo contrario no se agrega y se mueve a la sgte validacion 
                 * */
                { condition: passwordLength <= minLength || passwordLength >= maxLength, message: `➡  La contraseña debe tener entre ${minLength} y ${maxLength} caracteres` },
                { condition: !containsLetter(value), message: '➡ La contraseña debe contener al menos una letra' },
                { condition: !containsSpecialChar(value), message: '➡ La contraseña debe contener al menos un carácter especial (!@#$%^&*)' },
                { condition: !containsNumber(value), message: '➡ La contraseña debe contener al menos un número' }
            ];

            // Recorremos cada validacion
            validations.forEach(validations => {
                // Si la condicion se cumple, se agrega el mensaje de error
                if (validations.condition) {
                    errors.push(validations.message);
                    isValid = false;

                }
            });

            if (isValid) {
                errorSpan.textContent = '';
                errorSpan.classList.remove('error-span');
                errorSpan.classList.add('valid-span');
                errorSpan.textContent = '✔';
            } else {
                // Mostrar todos los mensajes de error juntos en un solo string
                errorSpan.textContent = errors.join(', ');
                errorSpan.classList.remove('valid-span');
                errorSpan.classList.add('error-span');
            }
            // Funciones para comprobar las validaciones
            function containsLetter(password) {
                return /[a-zA-Z]/.test(password);
            }
            function containsSpecialChar(password) {
                return /[!@#$%^&*]/.test(password);
            }
            function containsNumber(password) {
                return /\d/.test(password);
            }
            /**
              *  Fin Validacion de password
              */
        }
        /** Validacion de nombre  */
        else if (input.type === 'text' && input.name === 'firstname') {
            const nameRegex = /^[a-zA-Z]{3,}$/;
            if (!nameRegex.test(value)) {
                errorSpan.textContent = 'El nombre debe contener al menos 3 letras';
                errorSpan.classList.remove('valid-span');
                errorSpan.classList.add('error-span');
            } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                errorSpan.textContent = 'El nombre no puede contener números';
                errorSpan.classList.remove('valid-span');
                errorSpan.classList.add('error-span');
            } else {
                errorSpan.textContent = '';
                errorSpan.classList.add('valid-span');
                errorSpan.classList.remove('error-span');
                errorSpan.textContent = '✔';
            }
            /** 
              * Fin de la validacion de nombre 
              */
        }
        /** 
          * Validacion de apellidos 
          */
        else if (input.type === 'text' && input.name === 'lastname') {
            const nameRegex = /^[a-zA-Z]{3,}$/;
            if (!nameRegex.test(value)) {
                errorSpan.textContent = 'El nombre debe contener al menos 3 letras';
                errorSpan.classList.remove('valid-span');
                errorSpan.classList.add('error-span');
            } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                errorSpan.textContent = 'El nombre no puede contener números';
                errorSpan.classList.remove('valid-span');
                errorSpan.classList.add('error-span');
            } else {
                errorSpan.textContent = '';
                errorSpan.classList.add('valid-span');
                errorSpan.classList.remove('error-span');
                errorSpan.textContent = '✔';
            }

            /**
              * Fin de la validacion de apellidos 
              *
              */
        }
        /**
          * Validacion del mensaje
          */
        else if (input.type === 'text') {
            // Con letterCount contamos el número de palabras
            const letterCount = value.split(' ').length;
            // Con maxLength obtenemos el valor maximo de caracteres
            const maxLength = parseInt(input.getAttribute('maxlength'));
            // con remainingLength restamos el valor maximo de caracteres
            const remainingLength = maxLength - value.length;
            // Ahora si letterCount es mayor que el valor maximo de caracteres
            if (letterCount > 200) {
                // Mostramos un mensaje en el span
                errorSpan.textContent = `Solo puede escribir ${remainingLength} caracteres restantes de ${maxLength} caracteres`;
            } else {
                // Si no, ocultamos el mensaje
                errorSpan.textContent = '';
                errorSpan.classList.add('valid-span');
                errorSpan.classList.remove('error-span');
                errorSpan.textContent = '✔';
            }
            // Actualizamos el contador de caracteres restantes
            const counterSpan = document.querySelector('#counter');
            // Obtenemos el valor actual del contador y actualizamos su contenido
            counterSpan.textContent = `Caracteres restantes: ${remainingLength} de ${maxLength} caracteres`;
        }

        /**
          * Fin de la validacion del mensaje 
          **/
    });
});

/**
  * Funcion para recopilar los datos del formulario
  * y mostrarlos en el modal que se ve como un popup 
  **/

// Obtener el formulario y los elementos input y textarea correspondientes al modal
// Esto deberia ir arriba, de la clase, pero lo dejamos aca para entender mejor el flujo
const dataModal = document.getElementById('dataModal');
const closeButtons = dataModal.querySelectorAll('.btn-close');
// Agrega un evento 'submit' al formulario
form.addEventListener('submit', (event) => {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Función para recopilar los datos del formulario
    function getFormData() {
        const formData = {};
        inputs.forEach((input) => {
            formData[input.name] = input.value;
        });
        return formData;
    }

    // Define el 'input' seleccionado
    const inputs = form.querySelectorAll('input');

    // Obtiene los datos del formulario
    const formData = getFormData(inputs)

    // Muestra los datos en el modal
    const dataContent = dataModal.querySelector('.modal-body');
    dataContent.innerHTML = '';

    // Muestra los datos en el modal
    const fullName = `${formData.lastname}, ${formData.firstname}`;
    const nameLabel = document.createElement('label');
    nameLabel.textContent = fullName;
    dataContent.appendChild(nameLabel);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = `E-Mail: ${formData.email}`;
    dataContent.appendChild(emailLabel);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = `Mensaje: ${formData.message}`;
    dataContent.appendChild(messageLabel);

    // Muestra el modal
    dataModal.classList.add('show');
    dataModal.style.display = 'block';
    document.body.classList.add('modal-open');

    // Crea el modal encima de todos los demás
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(modalOverlay);

    // Agregamos un evento 'click' a cada 'btn-close' para cerrar el modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            dataModal.classList.remove('show');
            dataModal.style.display = 'none';
            document.body.classList.remove('modal-open');
            modalOverlay.remove();
        });
    });
    console.log(formData)
});
