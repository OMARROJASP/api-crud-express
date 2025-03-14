const { response } = require('express');
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
        try{
            db.query(`SELECT * FROM estudiantes WHERE id =? `,
                [id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                }
            )
        }catch(err){
        console.log(err);
        res.status(500).send(err.message);
       }
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
            }else{
                res.status(201).json({id: rows.insertId})
            }            
        }
        )
       }catch(err){
        console.log(err);
        res.status(500).send(err.message);
       }
    }
    actualizar(req,res){
        const { id } = req.params           
        try{
            const {dni, nombre, apellido, email} = req.body;
            db.query(`UPDATE cursos.estudiantes 
                SET dni = ?, nombre = ?, apellido = ?, email =? 
                WHERE id = ?;`,
                [dni, nombre, apellido, email,id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({respuesta : 'Actualizado con exito'});
                }
            )
        }catch(err){
        res.status(500).send(err.message);
       }
    }
    borrar(req,res){
        const { id } = req.params           
        try{
            const {dni, nombre, apellido, email} = req.body;
            db.query(`DELETE FROM estudiantes WHERE id = ?;`,
                [id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({respuesta : 'Eliminado con exito'});
                }
            )
        }catch(err){
        res.status(500).send(err.message);
       }
    }

}
module.exports = new EstudiantesController();