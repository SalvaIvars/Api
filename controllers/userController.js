const UserService = require('../service/userService')
const CommentService = require('../service/commentService')
const publicationService = require("../service/publicationService")
const errorHandler = require('../helpers/errorHandler')
const imageUtils = require('../utils/imageUtils')
const imageService = require('../service/imageService')
const path = require('path')
const fs = require('fs')

const getAllUsers = async (req,res) => {
    try{
        const response = await UserService.getAllUsers()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const getUser = async (req,res) => {
    try{
        const response = await UserService.getUser(req.params.email)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const updateUser = async (req, res) => {
    try{
        const response = await UserService.updateUser(req.params.id, req.body)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const deleteUser = async (req, res) => {
    const user = await UserService.getUser(req.params.email)
    
    if(user == null){
        return errorHandler("User doesn't exists", req, res)
    }

    deleteRoutePicturesByUser(req.params.email,req,res)
    deleteRoutesByUser(req.params.email,req,res)
    deleteProfilePicture(req.params.email, req, res)
    deleteCommentByUser(req.params.email, req, res)

    await UserService.deleteUser(req.params.email)
    res.status(200).send({
        status:'200',
        data: "User deleted"
    })
}

const deleteProfilePicture = async (email,req, res) => {
    let dir = path.join(__dirname, '/../images/profilePicture/')
    try{
        await imageUtils.findByExtension(dir, email).then((files) => {
            if(files.length == 0){
                return 
            }
            dir = path.join(dir, files[0])
            if(files.length != 0){
                fs.unlink(dir, (err) => {
                    if (err) {
                        return errorHandler(err.message, req, res)
                    }
                });
            }
        });
    }catch(e){
        return ;
    }
}

const deleteRoutesByUser = async(email,req,res) => {
    const publicationList = await UserService.obtainUserPublications(email)
    publicationList.forEach((pub) => {
        publicationService.deleteRoute(pub._id)
    })
}

const deleteCommentByUser = async(email, req, res) => {
    const commentList = await CommentService.obtainUserComments(email)
    commentList.forEach((com) => {
        CommentService.deleteComment(com._id)
    })
}

const deleteRoutePicturesByUser = async(email,req,res) => {
    const publicationList = await UserService.obtainUserPublications(email)
    publicationList.forEach((pub) => {
        imageService.delteRouteImages(pub._id,req,res)
    })
}

const getProfilePicture = async (req, res) => {
    let dir = path.join(__dirname, '/../images/profilePicture/')
    let defaultImage = path.join(__dirname,'/../images/profilePicture/defaultProfilePicture.png')
    await imageUtils.findByExtension(dir.toString(), req.body.email).then((files) => {
        if(files.length === 0){
            return res.sendFile(defaultImage)
        }

        dir = path.join(dir, files[0])
        res.sendFile( dir)
    });
}

const postPhoto = async (req, res) => {
    try{
        let profilePicturePath = path.join(__dirname,'/../images/profilePicture/')
        let files = await imageUtils.findByExtension(profilePicturePath, req.params.email)
        const response = await UserService.updateUserPhoto(req.params.email, files[0])
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch(e){
        return errorHandler(e.message, req, res)
    }
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfilePicture,
    deleteProfilePicture,
    postPhoto
}