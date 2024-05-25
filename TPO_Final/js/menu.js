/* Boton para mostrar y ocultar el menu */
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

var btnMenu = document.querySelector('.btn-menu');
btnMenu.addEventListener('click', toggleMenu);
console.log(btnMenu);