const db = require('../database/conexion.js')

class CursoController{

    constructor(){

    }

    consultar(req,res){
        try{
            db.query(`SELECT * FROM cursos`,
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
            db.query(`SELECT * FROM cursos WHERE id = ?`,
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
            const { nombre, descripcion, profesor_id } = req.body;
            db.query(`INSERT INTO cursos
            ( id, nombre, descripcion, profesor_id)
            VALUES(NULL, ?,?,?)`,
            [nombre, descripcion, profesor_id], (err, rows) => {
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json({id: rows.insertId})
            }
        )
          }catch(err){
            res.status(500).send(err.message);
          }
    }
    actualizar(req,res){
        const { id } = req.params;
        try{
            const { nombre, descripcion, profesor_id  } = req.body;
            db.query(`UPDATE cursos.cursos 
                SET nombre = ?, descripcion = ?, profesor_id = ?
                WHERE id = ?;`,
                [nombre, descripcion, profesor_id ],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                    res.status(200).json({respuesta : 'Actualizacion de curso con exito'})
                }
            ) 
        }catch(err){
            res.status(500).send(err.message);
        }
    }
    borrar(req,res){
        const { id } = req.params;
        try{
            const {  nombre, descripcion, profesor_id  } = req.body;
            db.query(`DELETE FROM cursos WHERE id = ?;`,
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
module.exports = new CursoController();