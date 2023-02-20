const Route = require("../models/Route")
const User = require("../models/User")

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

const checkIfUserFollowsThisRoute = async(email, routeToFollow) => {
    const responsePublication = await User.find({"email":email},{"fav_routes": { $elemMatch: {$eq: routeToFollow}}})
    let result = false;
    responsePublication.forEach((elem)=> { 
        if(elem.fav_routes.includes(routeToFollow)){
            result = true
        }else{
            result = false
        }
    })
        
    if(result){
        return true
    }
    return false
}

const followRoute = async(email, routeToFollow) => {
    const responseUser  = await User.updateOne({"email":email}, {$push:{"fav_routes":routeToFollow}} )
    if(responseUser!=null){
        return true
    }
    return false
}

const unfollowRoute = async(email, routeToFollow) => {
    const responseUser = await User.updateOne({"email":email}, {$pull:{"fav_routes":routeToFollow}})
    if(responseUser!=null){
        return true
    }
    return false
}

module.exports = {
    getRoute,
    getAllRoutes,
    deleteRoute,
    updateRoute, 
    createRoute,
    checkIfIdPublicationExists,
    getUserRoutes,
    checkIfUserFollowsThisRoute,
    followRoute,
    unfollowRoute
}