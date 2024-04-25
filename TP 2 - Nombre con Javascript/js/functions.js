/* @authors: Carlos(Charly), Flores | Leonel, Sánchez Usma | Marcelo Ruben Anton | Ignacio Moyano */

function agregarNombre() {
    var nombre = document.getElementById("nombreInput").value;
    if (nombre !== "") {
        document.getElementById("mostrarNombre").innerHTML = "Hola " + nombre;
        console.log("Hola " + nombre);
    } else {
        alert("Por favor ingrese un nombre válido.");
    }
}