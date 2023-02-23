const Comment = require("../models/Comment")

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

const createComment = async (body) => {
    const commentPublication = await body.save()
    return commentPublication
}

const obtainUserComments = async (email) => {
    const commentPublication = await Comment.find({"email":email})
    return commentPublication
}

const obtainRouteComments = async(id) => {
    const commentPublication = await Comment.find({"id": id})
    return commentPublication
}


module.exports = {
    getComment,
    getAllComments,
    deleteComment,
    updateComment, 
    createComment,
    obtainUserComments,
    obtainRouteComments
}