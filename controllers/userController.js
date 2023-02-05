const UserService = require('../service/userService')
const errorHandler = require('../helpers/errorHandler')
const imageUtils = require('../utils/imageUtils')
const imageService = require('../service/imageService')
const path = require('path')
const fs = require('fs')
const publicationService = require("../service/publicationService")

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
        const response = await UserService.getUser(req.params.id)
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
    try{
        const user = await UserService.getUser(req.params.id)
        
        deleteRoutePicturesByUser(user.email,req,res)
        delteRoutesByUser(user.email,req,res)
        deleteProfilePicture(user.email, req, res)

        const response = await UserService.deleteUser(req.params.id)
        res.status(200).send({
            status:'200',
            data: "User delted"
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const deleteProfilePicture = async (email,req, res) => {
    let dir = path.join(__dirname, '/../images/profilePicture/')
    try{
        await imageUtils.findByExtension(dir, email).then((files) => {
            if(files.length == 0){
                return errorHandler("User doesn't have an image", req, res)
            }
            dir = path.join(dir, files[0])
            if(files.length != 0){
                fs.unlink(dir, (err) => {
                    if (err) {
                        return errorHandler(err.message, req, res)
                    }
                
                    res.status(200).send({
                        status:'200',
                        data: "Image deleted"
                    })
                });
            }
        });
    }catch(e){
        return ;
    }
}

const delteRoutesByUser = async(email) => {
    const publicationList = await UserService.obtainUserPublications(email)
    publicationList.forEach((pub) => {
        publicationService.deleteRoute(pub._id)
    })
}

const deleteRoutePicturesByUser = async(email,req,res) => {
    const publicationList = await UserService.obtainUserPublications(email)
    publicationList.forEach((pub) => {
        imageService.delteRouteImages(pub.id_publication,req,res)
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

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfilePicture,
    deleteProfilePicture
    
}