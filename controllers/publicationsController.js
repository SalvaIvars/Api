const Route = require("../models/Route")
const publicationService = require("../service/publicationService")
const commentService = require("../service/commentService")
const errorHandler = require('../helpers/errorHandler')

const getAllRoutes = async (req, res) =>  {
    try{
        const response = await publicationService.getAllRoutes()
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}

const getRoute = async (req, res) => {
    try{
        const response = await publicationService.getRoute(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
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
        return errorHandler(e, req, res)
    }
}

const deleteRoute = async (req, res) => {
    try{
        const response = await publicationService.deleteRoute(req.params.id)
        res.status(200).send({
            status:'200',
            data: response
        })
    }catch (e){
        return errorHandler(e, req, res)
    }
}
const createRoute = async (req, res) => {
    try{
        const id_publication = await publicationService.obtainIdPublication()

        if(id_publication[0].id_publication == undefined){
            id_publication[0].id_publication= 0;
        }
    
        const id_usuario = await commentService.obtainIdUser(req.body.id_usuario)

        const route = new Route({
            id_publication: id_publication[0].id_publication+1,
            id_user: id_usuario[0].id_user,
            date: req.body.date,
            name: req.body.name,
            category: req.body.category,
            distance: req.body.distance,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            description: req.body.description, 
            photo: req.body.photo,
            privacy: req.body.privacy,
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


module.exports = {
    getAllRoutes,
    getRoute,
    createRoute,
    deleteRoute,
    updateRoute,
}