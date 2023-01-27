const comentario = require("../models/comentarios")
const rutaSchema = require("../models/ruta")
const Usuario = require("../models/usuarios")

const getComment = async(id) => {
    const commentPublication = await comentario.findById({_id: id})
    return commentPublication
}

const getAllComments = async() => {
    const commentPublication = await comentario.find()
    return commentPublication
}

const updateComment = async(id, data) => {
    const commentPublication = await comentario.findByIdAndUpdate(id, data)
    return commentPublication
}

const deleteComment = async(id) => {
    const commentPublication = await comentario.findByIdAndDelete(id)
    return commentPublication
}

const obtainIdPublicacion = async(id) => {
    const commentPublication = await rutaSchema.find({"id_publicacion":id})
    return commentPublication
}

const obtainIdUsuario = async(id) => {
    const commentPublication = await Usuario.find({"id_usuario":id})
    return commentPublication
}

const createComment = async (body) => {
    const commentPublication = await body.save()
    return commentPublication
}


module.exports = {
    getComment,
    getAllComments,
    deleteComment,
    updateComment, 
    obtainIdPublicacion,
    obtainIdUsuario,
    createComment
}