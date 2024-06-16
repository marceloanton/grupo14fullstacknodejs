const db = require("../config/database");

// Obtener todos los usuarios
const obtenerTodosLosUsuarios = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

// Obtener un usuario por su ID
const buscarUsuarioPorID = (req, res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  });
};

// Crear un nuevo usuario
const crearUsuario = (req, res) => {
  const {
    nombre,
    apellido,
    dni,
    email,
    contrasena,
    numero_telefono,
    numero_celular,
    redes_sociales,
    direccion,
    ciudad,
    provincia,
    pais,
    imagen,
    fecha_registro,
    fecha_actualizacion,
    tipo_usuario,
  } = req.body;

  db.query(
    "INSERT INTO users (nombre, apellido, dni, email, contrasena, numero_telefono, numero_celular, redes_sociales, direccion, ciudad, provincia, pais, imagen, fecha_registro, fecha_actualizacion, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nombre,
      apellido,
      dni,
      email,
      contrasena,
      numero_telefono,
      numero_celular,
      redes_sociales,
      direccion,
      ciudad,
      provincia,
      pais,
      imagen,
      fecha_registro,
      fecha_actualizacion,
      tipo_usuario,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(201).json({ message: "Usuario creado correctamente", id: result.insertId });
    }
  );
};

// Actualizar un usuario por su ID
const actualizarUsuarioPorID = (req, res) => {
  const userId = req.params.id;
  const {
    nombre,
    apellido,
    dni,
    email,
    contrasena,
    numero_telefono,
    numero_celular,
    redes_sociales,
    direccion,
    ciudad,
    provincia,
    pais,
    imagen,
    fecha_actualizacion,
    tipo_usuario,
  } = req.body;

  db.query(
    "UPDATE users SET nombre = ?, apellido = ?, dni = ?, email = ?, contrasena = ?, numero_telefono = ?, numero_celular = ?, redes_sociales = ?, direccion = ?, ciudad = ?, provincia = ?, pais = ?, imagen = ?, fecha_actualizacion = ?, tipo_usuario = ? WHERE id = ?",
    [
      nombre,
      apellido,
      dni,
      email,
      contrasena,
      numero_telefono,
      numero_celular,
      redes_sociales,
      direccion,
      ciudad,
      provincia,
      pais,
      imagen,
      fecha_actualizacion,
      tipo_usuario,
      userId,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Usuario actualizado correctamente" });
    }
  );
};

// Función para eliminar un usuario por su ID
const eliminarUsuarioPorID = (req, res) => {
  const userId = req.params.id;

  // Realiza la consulta para eliminar el usuario
  db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) {
      throw err;
    }

    // Verifica si se eliminó un usuario
    if (result.affectedRows > 0) {
      res.json({ message: "Usuario eliminado correctamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  });
};

module.exports = {
  obtenerTodosLosUsuarios,
  buscarUsuarioPorID,
  crearUsuario,
  actualizarUsuarioPorID,
  eliminarUsuarioPorID
};

