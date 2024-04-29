
/* authors: @marceloanton, @nachomoyano621 */

/* FUNCIONES con Arrow Functions */

// Sumamos dos números
const sumar = (a, b) => a + b;

// Restamos dos números
const restar = (a, b) => a - b;
// Multiplicamos dos números
const multiplicar = (a, b) => a * b;
// Dividimos dos números
const dividir = (a, b) => a / b;
// Elevamos un número al cuadrado
const cuadrado = numero => numero * numero;
// Comprobamos si un número es par
const esPar = numero => numero % 2 === 0;

// Mostramos los resultados de una operación con un número
const mostrarNumeros = () => {
    const opcion = document.getElementById('opcion').value;
    const divNum1 = document.getElementById('numero1');
    const divNum2 = document.getElementById('numero2');

    if (opcion === '1') {
        divNum1.style.display = 'block';
        divNum2.style.display = 'none';
    } else {
        divNum1.style.display = 'block';
        divNum2.style.display = 'block';
    }
    document.getElementById('resultados').innerHTML = ''; // Limpiar resultados anteriores
};

// Mostramos los resultados de una operación con dos números
const mostrarResultados = () => {
    const nombre = document.getElementById('nombre').value;
    const opcion = document.getElementById('opcion').value;
    const resultadosDiv = document.getElementById('resultados');

    resultadosDiv.innerHTML = '';
    resultadosDiv.innerHTML += `Hola, ${nombre}!`;

    if (opcion === '1') {
        const num1 = parseInt(document.getElementById('num1').value);
        if (!isNaN(num1)) {
            resultadosDiv.innerHTML += '<br>Operaciones con un solo número:<br>';
            resultadosDiv.innerHTML += `El cuadrado de ${num1}: ${cuadrado(num1)}<br>`;
            resultadosDiv.innerHTML += `${num1} es par? ${esPar(num1) ? 'Sí' : 'No'}<br>`;
        } else {
            resultadosDiv.innerHTML += '<br>Por favor, ingresa un número válido.';
        }
    } else {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        if (!isNaN(num1) && !isNaN(num2)) {
            resultadosDiv.innerHTML += '<br>Operaciones con dos números:<br>';
            resultadosDiv.innerHTML += `La suma: ${sumar(num1, num2)}<br>`;
            resultadosDiv.innerHTML += `La resta: ${restar(num1, num2)}<br>`;
            resultadosDiv.innerHTML += `La multiplicación: ${multiplicar(num1, num2)}<br>`;
            if (num2 !== 0) {
                resultadosDiv.innerHTML += `La división: ${dividir(num1, num2)}<br>`;
            } else {
                resultadosDiv.innerHTML += 'La división: No es posible dividir por 0<br>';
            }
        } else {
            resultadosDiv.innerHTML += '<br>Por favor, ingresa dos números válidos.';
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const opcionPorDefecto = document.getElementById('opcion').getElementsByTagName('option')[0];
    opcionPorDefecto.selected = 'selected';
    mostrarNumeros();
});