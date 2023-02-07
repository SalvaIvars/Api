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

const createRoute = async (body) => {
    const responsePublication = await body.save()
    return responsePublication
}

const checkIfIdPublicationExists = async(id_publication) => {
    const responsePublication = await Route.findOne({"_id:":id_publication})
    if(responsePublication == null){
        return false
    }else{
        return true
    }
}

const getUserRoutes = async(email) => {
    const responsePublication = await Route.find({"email":email})
    return responsePublication
}

module.exports = {
    getRoute,
    getAllRoutes,
    deleteRoute,
    updateRoute, 
    createRoute,
    checkIfIdPublicationExists,
    getUserRoutes
}