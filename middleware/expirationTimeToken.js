const jwt = require('jsonwebtoken')
const authController = require("../authentication/authController");
require('dotenv').config()

const checkAccessTokenTime =  (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err){
                return res.sendStatus(403)
            }else{

                req.nombre = decoded.nombre
                req.rol = decoded.rol
                if (Date.now() >= exp * 1000) {
                    authController.newAccessToken()
                  }
                next()
            }
        }
    )
}