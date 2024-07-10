const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authenticate = require('../middlewares/authMiddleware');

router.get('/', authenticate, usuarioController.getUsuarios);
router.get('/:id', authenticate, usuarioController.getUsuario);
router.post('/', authenticate, usuarioController.createUsuario);
router.put('/:id', authenticate, usuarioController.updateUsuario);
router.delete('/:id', authenticate, usuarioController.deleteUsuario);

module.exports = router;
