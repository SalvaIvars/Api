const comentario = require("../models/comentarios")

const getComments = (req, res) =>  {
    comentario.find((err, info) => {
        if (err){
            res.sendStatus(400)
        }else{
            res.status(200).json({
                data: info,
            });
        }
    })
}

const getComment = (req, res) => {
    comentario.findById(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400)
        }else{
            res.status(200).json({
                data: info
            })
        }
    })
}

const deleteComment = (req, res) => {
    comentario.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json({
                status: 'ok',
                data: info
            })
        }
    })
}
const createComment = (req, res) => {
    const comentarioGuardar = new comentario({
        fecha:req.body.fecha,
        mensaje: req.body.mensaje,
        id_usuario:req.body.id_usuario,
        id_publicacion:req.body.id_publicacion
    })

    comentarioGuardar.save((err, info) =>{
        if(err){
            // TODO
            res.status(400)
        }else{
            res.status(201).json({
                data: info
            })
        }
    })
}

const updateComment = (req, res) => {
    comentario.findByIdAndUpdate(req.params.id, req.body, (err, info) => {
        if(err){
            res.status(400)
        } else {
            res.status(200).json({
                status:'ok'
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