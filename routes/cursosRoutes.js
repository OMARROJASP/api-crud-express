const express = require('express');
const routerCurso = express.Router();
const cursoController = require('../controllers/cursoController.js');

routerCurso.get('/', cursoController.consultar);
routerCurso.post('/', cursoController.ingresar);
routerCurso.post('/estudianteCurso', cursoController.asociarEstudiante);

routerCurso.route('/:id')
.get(cursoController.consultarDetalle)
.put(cursoController.actualizar)
.delete(cursoController.borrar);


module.exports = routerCurso;