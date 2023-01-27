const rutaSchema = require("../models/ruta")
const publicationService = require("../service/publicationService")
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
        const id_publicacion = await publicationService.obtainIdPublicacion()

        if(id_publicacion == undefined){
            id_publicacion.id_publicacion = 0;
        }
    
        const route = new rutaSchema({
            id_publicacion: id_publicacion.id_publicacion+1,
            id_usuario: req.body.id_usuario,
            fecha: req.body.fecha,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            distancia: req.body.distancia,
            dificultad: req.body.dificultad,
            duracion: req.body.duracion,
            descripcion: req.body.descripcion, 
            foto: req.body.fotos,
            privacidad: req.body.privacidad,
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