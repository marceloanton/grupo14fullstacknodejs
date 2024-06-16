const express = require('express');
const login = express.Router();
const db = require('../config/database');

login.post('/login', (req, res) => {
    const { email, contrasena } = req.body;

    db.query('SELECT * FROM users WHERE email = ? AND contrasena = ?', [email, contrasena], (error, results) => {
        if (error) {
            console.error('Error al realizar la consulta a la base de datos: ' + error);
            return res.json({ success: false, message: 'Error de autenticación' });
        }

        if (results.length === 0) {
            return res.json({ success: false, message: 'Email o contraseña incorrectos' });
        }

        // Usuario autenticado
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
    });
});

module.exports = login;