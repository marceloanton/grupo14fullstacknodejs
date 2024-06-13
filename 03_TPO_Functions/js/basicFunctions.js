/* authors: @marceloanton, @nachomoyano621 */

/* FUNCIONES BASICAS */

// Sumamos dos números
function sumar(a, b) {
    return a + b;
}

// Restamos dos números
function restar(a, b) {
    return a - b;
}

// Multiplicamos dos números
function multiplicar(a, b) {
    return a * b;
}

// Dividimos dos números
function dividir(a, b) {
    return a / b;
}

// Elevamos un número al cuadrado
function cuadrado(numero) {
    return numero * numero;
}

// Comprobamos si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Mostramos el resultado de una operación con un número
function mostrarNumeros() {
    var opcion = document.getElementById('opcion').value;
    var divNum1 = document.getElementById('numero1');
    var divNum2 = document.getElementById('numero2');

    if (opcion === '1') {
        divNum1.style.display = 'block';
        divNum2.style.display = 'none';
    } else {
        divNum1.style.display = 'block';
        divNum2.style.display = 'block';
    }
    document.getElementById('resultados').innerHTML = ''; // Limpiar resultados anteriores
}


// Mostramos los resultados de una operación con dos números
function mostrarResultados() {
    var nombre = document.getElementById('nombre').value;
    var opcion = document.getElementById('opcion').value;
    var resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML = '';
    resultadosDiv.innerHTML += 'Hola, ' + nombre + '!';

    if (opcion === '1') {
        var num1 = parseInt(document.getElementById('num1').value);
        if (!isNaN(num1)) {
            resultadosDiv.innerHTML += '<br>Operaciones con un solo número:<br>';
            resultadosDiv.innerHTML += 'El cuadrado de ' + num1 + ': ' + cuadrado(num1) + '<br>';
            resultadosDiv.innerHTML += num1 + ' es par? ' + (esPar(num1) ? 'Sí' : 'No') + '<br>';
        } else {
            resultadosDiv.innerHTML += '<br>Por favor, ingresa un número válido.';
        }
    } else {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        if (!isNaN(num1) && !isNaN(num2)) {
            resultadosDiv.innerHTML += '<br>Operaciones con dos números:<br>';
            resultadosDiv.innerHTML += 'La suma: ' + sumar(num1, num2) + '<br>';
            resultadosDiv.innerHTML += 'La resta: ' + restar(num1, num2) + '<br>';
            resultadosDiv.innerHTML += 'La multiplicación: ' + multiplicar(num1, num2) + '<br>';
            if (num2 !== 0) {
                resultadosDiv.innerHTML += 'La división: ' + dividir(num1, num2) + '<br>';
            } else {
                resultadosDiv.innerHTML += 'La división: No es posible dividir por 0<br>';
            }
        } else {
            resultadosDiv.innerHTML += '<br>Por favor, ingresa dos números válidos.';
        }
    }
}

/* 
 * Esto se hace para que se cargue por defecto la operación con un solo número
 * de lo contrario no moestrará nada 
 * */

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar la opción por defecto (operaciones con un solo número)
    var opcionPorDefecto = document.getElementById('opcion').getElementsByTagName('option')[0];
    opcionPorDefecto.selected = 'selected';

    // Mostrar los campos de entrada para un solo número
    mostrarNumeros();
});
