const express = require('express');

const usuarioRoutes = require('./usuarioRoutes');
const authRoutes = require('./authRoutes');

const configuracionRutas = (app) => {
    const apiRouter = express.Router();

    // Autenticación
    apiRouter.use('/auth', authRoutes);

    // Usuarios
    apiRouter.use('/usuarios', usuarioRoutes);

    // Configuramos la ruta base para nuestra API
    app.use('/api', apiRouter);
};

module.exports = configuracionRutas;
