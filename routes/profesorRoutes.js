const express = require('express')
const routerProfesor =express.Router();
const profesorController = require('../controllers/profesoresController');

routerProfesor.get('/', profesorController.consultar);
routerProfesor.post('/', profesorController.ingresar);

routerProfesor.route('/:id')
.get(profesorController.consultarDetalle)
.put(profesorController.actualizar)
.delete(profesorController.borrar)


module.exports = routerProfesor;