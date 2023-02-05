const Comment = require("../models/Comment")
const Route = require("../models/Route")
const User = require("../models/User")

const getComment = async(id) => {
    const commentPublication = await Comment.findById({_id: id})
    return commentPublication
}

const getAllComments = async() => {
    const commentPublication = await Comment.find()
    return commentPublication
}

const updateComment = async(id, data) => {
    const commentPublication = await Comment.findByIdAndUpdate(id, data)
    return commentPublication
}

const deleteComment = async(id) => {
    const commentPublication = await Comment.findByIdAndDelete(id)
    return commentPublication
}

const obtainIdPublication = async(id) => {
    const commentPublication = await Route.find({"id_publication":id})
    return commentPublication
}

const obtainIdUser = async(id) => {
    const commentPublication = await User.find({"id_user":id})
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
    obtainIdPublication,
    obtainIdUser,
    createComment
}