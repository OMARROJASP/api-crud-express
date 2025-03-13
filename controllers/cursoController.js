const db = require('../database/conexion.js')

class CursoController{

    constructor(){

    }

    consultar(req,res){
        res.json({msg: 'Actualizacion de Cursoxd'});
    }

    consultarDetalle(req,res){  
        const { id } = req.params   
     res.json({msg: `Consulta de un Curso con id ${id}`});
    }
    
    ingresar(req,res){
        res.json({msg: 'Ingrear de estudiantexd'});
    }
    actualizar(req,res){
        res.json({msg: 'Actualizacion de Cursoxd'});
    }
    borrar(req,res){
        res.json({msg: 'Borrado de Cursoxd'});
    }

}
module.exports = new CursoController();