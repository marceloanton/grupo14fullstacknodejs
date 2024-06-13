/**  * Genera 100 usuarios con datos falsos con el paquete Faker de NodeJS
 *  Autor: Marcelo Ruben Anton
 * */
const mysql = require('mysql2');
const faker = require('faker');
/* 
const readline = require('readline');
 */
// Interfaz de lectura de consola
/* function cantidadUsuarios() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Preguntamos al usuario cuantos usuarios desea generar
        rl.question('¿Cuantos usuarios desea generar? ', (cantUsuarios) => {
            // Cerramos la interfaz de lectura de consola
            console.log(`
    Se van a generar: ${cantUsuarios} usuarios
    `);
            rl.close();
        });
    });
} */

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_tpo_nodejs'
});

// Genera 100 usuarios con datos falsos
const users = Array.from({ length: 100 }, () => ({
    nombre: faker.name.findName(),
    apellido: faker.name.lastName(),
    dni: faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
    email: faker.internet.email(),
    contrasena: faker.internet.password(),
    numero_telefono: faker.phone.phoneNumber().slice(0, 15),
    numero_celular: faker.phone.phoneNumber().slice(0, 15),
    redes_sociales: faker.internet.url(),
    direccion: faker.address.streetAddress(),
    ciudad: faker.address.city(),
    provincia: faker.address.state(),
    pais: faker.address.country(),
    imagen: faker.image.avatar(),
    fecha_registro: new Date().toISOString().slice(0, 19).replace('T', ' '),
    fecha_actualizacion: faker.date.recent(),
    tipo_usuario: faker.random.word()
}));


// Inserta los datos falsos en la tabla de usuarios
users.forEach((user) => {
    const query = 'INSERT INTO users (nombre, apellido, dni, email, contrasena, numero_telefono, numero_celular, redes_sociales, direccion, ciudad, provincia, pais, imagen, fecha_registro, fecha_actualizacion, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, Object.values(user), (err, result) => {
        if (err) {
            throw err;
        }
        console.log(`
Usuario insertado correctamente: ${result.insertId} - ${user.nombre} ${user.apellido}`);
    });

});
connection.end();