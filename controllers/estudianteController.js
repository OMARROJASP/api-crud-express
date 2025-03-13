const db = require('../database/conexion.js')

class EstudiantesController{

    constructor(){

    }

    consultar(req,res){
        res.json({msg: 'Actualizacion de estudiantesxd'});
    }

    consultarDetalle(req,res){  
        const { id } = req.params   
     res.json({msg: `Consulta de un estudiantes con id ${id}`});
    }
    
    ingresar(req,res){
        res.json({msg: 'Ingrear de estudiantexd'});
    }
    actualizar(req,res){
        res.json({msg: 'Actualizacion de estudiantesxd'});
    }
    borrar(req,res){
        res.json({msg: 'Borrado de estudiantesxd'});
    }

}
module.exports = new EstudiantesController();