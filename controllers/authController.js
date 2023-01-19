const Usuario = require("../models/usuarios")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
 
const signUp =  (req, res) => {
    const {nombre, email, password, rol} = req.body

    console.log("NOMBRE EMAIL PASSWORD" + nombre + " " + email + " " + password)
    const newUsuario = new Usuario({
        nombre,
        email,
        password: Usuario.encryptPassword(password)
    })
    console.log("sdfasdfasd")
   const savedUser =  newUsuario.save()
    const token = jwt.sign({id: savedUser._id}, 'secretkey', {
        expiresIn: 86400
    })

    res.json({token})

}

// Login
const signIn = async (req, res) => { 
    const {nombre, password} = req.body

    if(!nombre || !password) return res.status(400).json({message:'Username and password are required.'})

    const foundUser = await Usuario.findOne({"nombre":nombre}, (err, info) => {
        if(err){
            res.status(400)
        }else{ 
            return info
        }
    }).clone()

    if(foundUser == null)  return res.status(401).json({message:'User not found'})

    const match = await bcrypt.compare(password, foundUser.password)

    if(match){
        const accessToken = jwt.sign({
                "nombre": foundUser.nombre,
                "rol": foundUser.rol
            },
            'secretkey', // process.env.ACCESS_TOKEN_SECRET
            {expiresIn:'1d' }
        )
        const refreshToken = jwt.sign({
            "nombre": foundUser.nombre,
            "rol": foundUser.rol
            },
            'secretkey', // process.env.REFRESH_TOKEN_SECRET
            {expiresIn:'1d' }
        )
        res.json({accessToken})
    }else{
        res.status(401).json({
            message: 'User/Password incorrect'
        })
    }

}

module.exports = {
    signUp,
    signIn,
}