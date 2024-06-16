require('dotenv').config();

const express = require('express');
const app = express();
const { propertiesText } = require('./src/utils/consoleFormat');
const path = require('path');

// Archivo de configuración de las rutas desde config/routesConfig.js
const configuracionRutas = require('./src/routes/routesConfig');

// Formato para imprimir un mensaje de log con color
const bold = propertiesText.bold;
const red = propertiesText.red;
const yellow = propertiesText.yellow;
const green = propertiesText.green;
const blue = propertiesText.blue;
const reset = propertiesText.reset;

// Configuramos el puerto desde el archivo .env o utilizamos el primer puerto disponible que nos de el OS
const port = process.env.API_PORT || buscarPuertoDisponible();

configuracionRutas(app);

// Configuramos la carpeta 'public' para los archivos estáticos de la aplicación
app.use(express.static(path.join(__dirname, 'public')));


// Iniciamos el servidor
app.listen(port, () => {
    console.log(`
${green}${bold}API iniciada en:${reset}
    ${green}${bold}✔ ${red}Puerto:${reset} ${blue}${port}${reset}
    ${green}${bold}✔ ${red}URL:${reset} ${yellow}http://localhost:${port}/api${reset}`);
});

// Funcion para buscar un puerto disponible que nos de el OS
function buscarPuertoDisponible() {
    const server = require('http').createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port;
}