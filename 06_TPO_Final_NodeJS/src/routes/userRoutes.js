const express = require('express');
const usersController = require('../controllers/usersController');
const userRoutes = express.Router();

// Configuramos las rutas de usuarios para la API
userRoutes.get('/', usersController.obtenerTodosLosUsuarios);
userRoutes.get('/:id', usersController.buscarUsuarioPorID);
userRoutes.post('/', usersController.crearUsuario);
userRoutes.put('/:id', usersController.actualizarUsuarioPorID);
userRoutes.delete('/:id', usersController.eliminarUsuarioPorID);

module.exports = userRoutes;