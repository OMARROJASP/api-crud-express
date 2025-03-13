const db = require('../database/conexion.js')

class EstudiantesController{

    constructor(){

    }

    consultar(req,res){
        try{
            db.query(`SELECT * FROM estudiantes`,

                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                }
            )
        }catch(err){
        console.log(err);
        res.status(500).send(err.message);
       }
    }

    consultarDetalle(req,res){  
        const { id } = req.params   
     res.json({msg: `Consulta de un estudiantes con id ${id}`});
    }
    
    ingresar(req,res){
       try{
        const {dni, nombre, apellido, email} = req.body;
            db.query(`INSERT INTO estudiantes
            (id, dni, nombre, apellido, email)
            VALUES(NULL, ?,?,?,?)`,
        [dni, nombre, apellido,email],(err, rows) => {
            if(err){
                res.status(400).send(err);
            }
            res.status(201).json({id: rows.insertId})
        }
        )
       }catch(err){
        console.log(err);
        res.status(500).send(err.message);
       }
    }
    actualizar(req,res){
        res.json({msg: 'Actualizacion de estudiantesxd'});
    }
    borrar(req,res){
        res.json({msg: 'Borrado de estudiantesxd'});
    }

}
module.exports = new EstudiantesController();