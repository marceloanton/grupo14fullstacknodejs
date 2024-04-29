// Validación del formulario con JavaScript
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const topic = document.getElementById('topic').value.trim();

    if (name === '' || email === '' || message === '' || topic === '') {
        event.preventDefault();
        alert('Completa todos los campos requeridos.');
    }
});
