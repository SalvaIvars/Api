const jwt = require('jsonwebtoken')
const errorHandler = require('../helpers/errorHandler')
require('dotenv').config()

const verifyJWT =  (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return errorHandler('Unauthorized',req, res)
    const token = authHeader.split(' ')[1];
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err){
                return errorHandler(err, req, res)
            }else{
                req.nombre = decoded.nombre
                req.rol = decoded.rol
                next()
            }
        }
    )
}

const verifyJWTAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return errorHandler('Unauthorized',req, res)
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err){
                return errorHandler(err, req, res)
            }else{
                req.nombre = decoded.nombre
                req.rol = decoded.rol
                if(req.rol != "admin"){
                    return errorHandler("Unauthorized", req, res)
                }
                next()
            }
        }
    )
}

module.exports = {
    verifyJWT,
    verifyJWTAdmin 
}