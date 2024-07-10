const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const login = async (req, res) => {
    const { nombreUsuarioOEmail, contrasena } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email = ? OR nombre_usuario = ?';
    db.query(query, [nombreUsuarioOEmail, nombreUsuarioOEmail], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Error al obtener el usuario', err });

        if (results.length === 0) return res.status(404).json({ message: 'Error al iniciar sesión' });

        const user = results[0];
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);

        if (!isMatch) return res.status(400).json({ message: 'Error al iniciar sesión' });

        const token = jwt.sign({ id: user.id_usuario, rol: user.rol }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.json({ token });
    });
};

const register = async (req, res) => {
    const {
        nombre, apellido, dni, nombre_usuario, email, contrasena,
        numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
    } = req.body;

    // Validación básica de campos obligatorios
    if (!nombre_usuario || !email || !contrasena) {
        return res.status(400).json({ message: 'Nombre de usuario, email y contraseña son requeridos' });
    }

    // Validación de la longitud mínima del nombre de usuario
    if (nombre_usuario.length < 6) {
        return res.status(400).json({ message: 'El nombre de usuario debe tener al menos 6 caracteres' });
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'El correo electrónico no tiene un formato válido' });
    }

    // Validación de la longitud mínima de la contraseña
    if (contrasena.length < 6) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    // Validación de caracteres especiales en la contraseña
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialChars.test(contrasena)) {
        return res.status(400).json({ message: 'La contraseña debe contener al menos un carácter especial' });
    }

    try {
        // Verificar si el correo electrónico ya está registrado
        const queryCheckEmail = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(queryCheckEmail, [email], async (err, resultsEmail) => {
            if (err) {
                return res.status(500).json({ message: 'Error al verificar el usuario', err });
            }

            if (resultsEmail.length > 0) {
                return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
            }

            // Verificar si el nombre de usuario ya está registrado
            const queryCheckUsername = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';
            db.query(queryCheckUsername, [nombre_usuario], async (err, resultsUsername) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al verificar el usuario', err });
                }

                if (resultsUsername.length > 0) {
                    return res.status(400).json({ message: 'El nombre de usuario ya está registrado' });
                }

                // Si el correo electrónico y el nombre de usuario no están registrados, procedemos a crear el usuario
                const hashedPassword = await bcrypt.hash(contrasena, 10);
                const queryCreateUser = `
                    INSERT INTO usuarios 
                    (nombre, apellido, dni, nombre_usuario, email, contrasena, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol, fecha_actualizacion) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
                `;
                const values = [
                    nombre, apellido, dni, nombre_usuario, email, hashedPassword,
                    numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
                ];

                // Ejecución de la consulta para crear el usuario
                db.query(queryCreateUser, values, (err, result) => {
                    if (err) {
                        console.error('Error al crear el usuario:', err);
                        return res.status(500).json({ message: 'Error al crear el usuario', err });
                    }
                    res.status(201).json({ message: 'Usuario creado exitosamente' });
                });
            });
        });
    } catch (err) {
        console.error('Error al hashear la contraseña:', err);
        res.status(500).json({ message: 'Error al hashear la contraseña', err });
    }
};

const logout = (req, res) => {
    // Implementar la lógica para logout si es necesario
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
    login,
    register,
    logout
};
