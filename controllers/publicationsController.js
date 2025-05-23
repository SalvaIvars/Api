const Route = require("../models/Route")
const publicationService = require("../service/publicationService")
const commentService = require('../service/commentService')
const errorHandler = require('../helpers/errorHandler')
const imageUtils = require('../utils/imageUtils')
const path = require('path')

const getAllRoutes = async (req, res) =>  {
    try{
        const response = await publicationService.getAllRoutes()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const getUserRoutes = async (req, res) => {
    try{
        const response = await publicationService.getUserRoutes(req.params.email)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const getNumberPhotoRoutes = async (req, res) => {
    try{
        const nFiles = await imageUtils.findByExtension(path.join(__dirname,'/../images/publicationPicture/'+req.params.id_publication+'/'), req.params.id_publication)
        const listFiles = []

        for (const item of nFiles) {
            listFiles.push(item);
          }

        res.status(200).send({
            status:'200',
            data: listFiles
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const getRoute = async (req, res) => {
    try{
        const response = await publicationService.getRoute(req.params.id)
        res.status(200).send({
            status:'200',
            data: [response]
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const updateRoute = async (req, res) => {
    try{
        const response = await publicationService.updateRoute(req.params.id, req.body)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e.message, req, res)
    }
}

const deleteRoute = async (req, res) => {
    try{
        deleteRouteComments(req.params.id, req, res)
        const response = await publicationService.deleteRoute(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(ee.message, req, res)
    }
}

const deleteRouteComments = async (id, req, res) => {
    try{
        const commentsList = await commentService.obtainRouteComments(id)
        commentsList.forEach((com) => {
            commentService.deleteComment(com._id)
        })
    }catch (e){

    }
}

const createRoute = async (req, res) => {
    try{
        const route = new Route({
            email: req.body.email,
            date: req.body.date,
            name: req.body.name,
            category: req.body.category,
            distance: req.body.distance,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            description: req.body.description, 
            photo: req.body.photo,
            privacy: req.body.privacy,
            lat_A: req.body.lat_A,
            lng_A: req.body.lng_A,
            lat_B:  req.body.lat_B,
            lng_B:  req.body.lng_B,
            rec_movement :  req.body.rec_movement
        })
        const response = await publicationService.createRoute(route)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return  errorHandler(e, req, res)
    }
}

const likeRoute = async(req, res)  => {
    try{
        const checkIfFollows = await publicationService.checkIfUserFollowsThisRoute(req.body.email, req.body.route)
        if(checkIfFollows){
            res.status(400).send({
                status:'400',
                data: "User already likes this route"
            })
        }else{
            const response = await publicationService.followRoute(req.body.email, req.body.route)
            res.status(200).send({
                status:'200',
                data: response
            })
        }
    }catch(e){
        return errorHandler(e.message, req, res)
    }
}

const removeLikeRoute = async(req, res) => {
    try{
        const checkIfFollows = await publicationService.checkIfUserFollowsThisRoute(req.body.email, req.body.route)
        if(!checkIfFollows){
            res.status(400).send({
                status:'400',
                data: "User doesn't like this route"
            })
        }else{
            const response = await publicationService.unfollowRoute(req.body.email, req.body.route)
            res.status(200).send({
                status:'200',
                data: response
            })
        }
    }catch(e){
        return errorHandler(e.message, req, res)
    }
}

const getLikes = async(req,res) => {
    try{
        const userList = await publicationService.getUsersLikeRoute(req.params.id)
        const nLikes = userList.length;
        res.status(200).send({
            status:'200',
            data: nLikes
        })
    }catch (e){

    }
}

module.exports = {
    getAllRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute,
    getUserRoutes,
    getNumberPhotoRoutes,
    likeRoute,
    removeLikeRoute,
    getLikes
}