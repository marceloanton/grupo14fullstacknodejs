function validateForm() {
    const form = document.getElementById('contactForm');
    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const destino = form.destino.value;
    const mensaje = form.mensaje.value;

    if (!nombre || !email || !telefono || !destino || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }
    return true;
}
