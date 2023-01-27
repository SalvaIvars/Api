const CommentService = require('../service/commentService')
const errorHandler = require('../helpers/errorHandler')

const getAllComments = async(req, res) =>  {
    try{
        const response = await CommentService.getAllComments()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        errorHandler(e, req, res)
    }
}

const getComment = async (req, res) => {
    try{
        const response = await CommentService.getComment(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        errorHandler(e, req, res)
    }
}

const deleteComment = async (req, res) => {
    try{
        const response = await CommentService.deleteComment(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        errorHandler(e, req, res)
    }
}

const updateComment = async (req, res) => {
    try{
        const response = await CommentService.updateComment(req.params.id, req.body)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        errorHandler(e, req, res)
    }
}

const createComment = async (req, res) => {
    try{
        const id_usuario = await CommentService.obtainIdUsuario(req.body.id_usuario)
        const id_publicacion =  await CommentService.obtainIdPublicacion(req.body.id_publicacion)
    
        if(id_usuario == undefined || id_publicacion == undefined){
            res.status(400).send({status:'400', data:error})
        }
    
        const comment = new comentario({
            fecha:req.body.fecha,
            mensaje: req.body.mensaje,
            id_usuario:id_usuario.id_usuario,
            id_publicacion:id_publicacion.id_publicacion
        })

        const response = await CommentService.createComment(comment)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        errorHandler(e, req, res)
    }
}

module.exports = {
    getAllComments,
    getComment,
    createComment,
    deleteComment,
    updateComment,
}