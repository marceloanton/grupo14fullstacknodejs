// Archivo config/routesConfig.js para configurar las rutas de la API

const express = require('express');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

const configuracionRutas = (app) => {
    const apiRouter = express.Router();

    // Configura las rutas de nuestra API
    apiRouter.use('/users', userRoutes);
    apiRouter.use('/auth', authRoutes);


    // Configuramos la ruta base para nuestra API
    app.use('/api', apiRouter);
};

module.exports = configuracionRutas;