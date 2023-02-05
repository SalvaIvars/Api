const Route = require("../models/Route")

const getRoute = async(id) => {
    const responsePublication = await Route.findById({_id: id})
    return responsePublication
}

const getAllRoutes = async() => {
    const responsePublication = await Route.find()
    return responsePublication
}

const updateRoute = async(id, data) => {
    const responsePublication = await Route.findByIdAndUpdate(id, data)
    return responsePublication
}

const deleteRoute = async(id) => {
    const responsePublication = await Route.findByIdAndDelete(id)
    return responsePublication
}

const obtainIdPublication = async() => {
    const responsePublication = await Route.find().sort({"id_publication":-1}).limit(1)
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
    obtainIdPublication,
    createRoute
}