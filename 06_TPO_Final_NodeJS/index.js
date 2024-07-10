require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const { propertiesText } = require('./src/utils/consoleFormat');
const { buscarPuertoDisponible } = require('./src/config/config');

const authController = require('./src/controllers/authController');
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

// Configuramos la carpeta 'public' para los archivos estáticos de la aplicación
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Este es el control de sesiones
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

// Ruta de inicio de sesión sin autenticación
app.post('/auth/login', authController.login);
app.post('/login', (req, res) => { });
app.post('/register', (req, res) => { });
app.post('/logout', (req, res) => { });

app.get('/protected', (req, res) => { });

// Nuestra configuración donde guardamos todas las rutas
configuracionRutas(app);

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`
${green}${bold}API iniciada en:${reset}
    ${green}${bold}✔ ${red}Puerto:${reset} ${blue}${port}${reset}
    ${green}${bold}✔ ${red}URL:${reset} ${yellow}http://localhost:${port}/api${reset}`);
});


