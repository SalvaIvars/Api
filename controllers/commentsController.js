const comentario = require("../models/comentarios")
const rutaSchema = require("../models/ruta")
const Usuario = require("../models/usuarios")

const getComments = async(req, res) =>  {
    await comentario.find((err, info) => {
        if (err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    }).clone()
}

const getComment = async (req, res) => {
    await comentario.findById(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}

const deleteComment = async (req, res) => {
    await comentario.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.status(400).send({status:'400', data:error})
        }else{
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}
const createComment = async (req, res) => {

    
    const id_usuario = await Usuario.find({"id_usuario":req.body.id_usuario})
    const id_publicacion = await rutaSchema.find({"id_publicacion":req.body.id_publicacion})

    if(id_usuario == undefined || id_publicacion == undefined){
        res.sendStatus(400).send({status:'400', data:error})
    }

    const comentarioGuardar = new comentario({
        fecha:req.body.fecha,
        mensaje: req.body.mensaje,
        id_usuario:id_usuario.id_usuario,
        id_publicacion:id_publicacion.id_publicacion
    })

    await comentarioGuardar.save((err, info) =>{
        if(err){
            // TODO
            res.status(400).send({status:'400', data:error})
        }else{
            res.status(201).send({
                status:'201',
                data: info
            })
        }
    })
}

const updateComment = async (req, res) => {
    await comentario.findByIdAndUpdate(req.params.id, req.body, (err, info) => {
        if(err){
            res.status(400).send({status:'400', data:error})
        } else {
            res.status(200).send({
                status:'200',
                data: info
            })
        }
    })
}

module.exports = {
    getComments,
    getComment,
    createComment,
    deleteComment,
    updateComment,
}