const { response } = require('express');
const db = require('../database/conexion.js')
class ProfesorController{

    constructor(){

    }

    consultar(req,res){
       try{
        db.query(`SELECT * FROM profesores`,
           (err, rows) => {
            if(err){
                res.status(400).send(err);
            }
            res.status(200).json(rows);
           } 
        )
       }catch(err){
        res.status(500).send(err.message)
       }
    }

    consultarDetalle(req,res){  
        const { id } = req.params;
        try{
            db.query(`SELECT * FROM profesores WHERE id = ?`,
                [id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);               }
            )
        }catch(err){
            res.status(500).send(err.message);
        }
    }
    
    ingresar(req,res){
      try{
        const { dni, nombre, apellido, email, profesion, telefono } = req.body;
        db.query(`INSERT INTO profesores
        (id, dni, nombre, apellido, email, profesion, telefono)
        VALUES(NULL, ?,?,?,?,?,?)`,
        [dni, nombre, apellido, email, profesion, telefono], (err, rows) => {
            if(err){
                res.status(400).send(err);
            }
           else{
            res.status(201).json({id: rows.insertId})
           }
          
        }
    )
      }catch(err){
        res.status(500).send(err.message);
      }
    }
    actualizar(req,res){
        const { id } = req.params;
        try{
            const { dni, nombre, apellido, email, profesion, telefono } = req.body;
            db.query(`UPDATE cursos.profesores 
                SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ?
                WHERE id = ?;`,
                [dni, nombre, apellido, email, id, profesion, telefono],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({respuesta : 'Actualizacion de preofesion con exito'})
                }
            ) 
        }catch(err){
            res.status(500).send(err.message);
        }
    }
    borrar(req,res){
        const { id } = req.params;
        try{
            const { dni, nombre, apellido, email, profesion, telefono} = req.body;
            db.query(`DELETE FROM profesores WHERE id = ?;`,
                [id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({respuesta : 'Eliminando con exito'})
                }
            )
        }catch(err){
            res.status(500).send(err.message);
        }
    }

}
module.exports = new ProfesorController();