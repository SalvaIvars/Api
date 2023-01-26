const rutaSchema = require("../models/ruta")

const getRoute = async(id) => {
    const responsePublication = await rutaSchema.findById({_id: id})
    return responsePublication
}

const getAllRoutes = async() => {
    const responsePublication = await rutaSchema.find()
    return responsePublication
}

const updateRoute = async(id, data) => {
    const responsePublication = await rutaSchema.findByIdAndUpdate(id, data)
    return responsePublication
}

const deleteRoute = async(id) => {
    const responsePublication = await rutaSchema.findByIdAndDelete(id)
    return responsePublication
}

const obtainIdPublicacion = async() => {
    const responsePublication = await rutaSchema.find().sort({"id_publicacion":-1}).limit(1)
    return responsePublication
}

const createRoute = async (body) => {
    const responsePublication = await body.save()
    return responsePublication
}


module.exports = {
    getRoute,
    getAllRoutes,
    deleteRoute,
    updateRoute, 
    obtainIdPublicacion,
    createRoute
}