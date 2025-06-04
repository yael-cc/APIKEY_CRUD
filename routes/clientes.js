const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const verifyApiKey = require('../middleware/verifyApiKey');

// Todas las rutas requieren API Key
router.use(verifyApiKey);

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
