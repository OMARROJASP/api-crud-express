const db = require('../database/conexion.js')
class ProfesorController{

    constructor(){

    }

    consultar(req,res){
        res.json({msg: 'Actualizacion de Profesorxd'});
    }

    consultarDetalle(req,res){     
     res.json({msg: 'Consulta de un Profesorxd'});
    }
    
    ingresar(req,res){
        res.json({msg: 'Ingrear de estudiantexd'});
    }
    actualizar(req,res){
        res.json({msg: 'Actualizacion de Profesorxd'});
    }
    borrar(req,res){
        res.json({msg: 'Borrado de Profesorxd'});
    }

}
module.exports = new ProfesorController();