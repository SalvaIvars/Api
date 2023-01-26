const jwt = require('jsonwebtoken')
const authController = require("../authentication/authController");
require('dotenv').config()

const checkAccessTokenTime =  async (req, res) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {
            if(err){
                return res.sendStatus(403)
            }else{
                //await RefreshToken.find({decoded.currentRefreshToken.id})
                console.log("decoded: " + token)
                console.log("decoded a: " + decoded.current)
                req.nombre = decoded.nombre
                req.rol = decoded.rol
                if (Date.now() >= exp * 2000) {
                    authController.newAccessToken()
                }
            }
        }
    )
}