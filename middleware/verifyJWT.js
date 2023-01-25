const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT =  (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    const token = authHeader.split(' ')[1];
    console.log("token " + token)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err){
                return res.sendStatus(403)
            }else{
                req.nombre = decoded.nombre
                req.rol = decoded.rol
                if(req.rol != "admin"){
                    return res.sendStatus(401)
                }
                next()
            }
        }
    )
}

module.exports = verifyJWT