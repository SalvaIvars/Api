const CommentService = require('../service/commentService')
const errorHandler = require('../helpers/errorHandler')
const Comment = require("../models/Comment")

const getAllComments = async(req, res) =>  {
    try{
        const response = await CommentService.getAllComments()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
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
        return errorHandler(e, req, res)
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
        return errorHandler(e, req, res)
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
        return errorHandler(e, req, res)
    }
}

const createComment = async (req, res) => {
    try{
        const comment = new Comment({
            date:req.body.date,
            message: req.body.message,
            email: req.body.email,
            id_publication:req.body.id_publication
        })

        const response = await CommentService.createComment(comment)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const obtainRouteComments = async (req, res) => {
    try{
        const response = await CommentService.getRouteComments(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

module.exports = {
    getAllComments,
    getComment,
    createComment,
    deleteComment,
    updateComment,
    obtainRouteComments,
}