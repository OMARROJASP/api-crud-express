const express = require('express')
const router = express.Router();
const estudianteController = require('../controllers/estudianteController.js');

router.get('/', estudianteController.consultar);
router.post('/', estudianteController.ingresar);

router.route('/:id')
.get(estudianteController.consultarDetalle)
.put(estudianteController.actualizar)
.delete(estudianteController.borrar)


// router.route('/:id')
// .get( (req, res) => {
//     res.json({msg: 'Consulta de un estudiantes'});
// } )
// .put( (req, res) => {
//     res.json({msg: 'Actualizacion de estudiantes'});
// } )

// router.get('/', (req, res) => {
//     res.json({msg: 'Consulta estudiantes'});
// } )
// delete( (req, res) => {
//     res.json({msg: 'Borrado de estudiantes'});
// } )



router.post('/', (req, res) => {
    res.json({msg: 'Ingreso de estudiantes'});
} )

module.exports = router;
