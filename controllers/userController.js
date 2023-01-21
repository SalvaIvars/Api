const Usuario = require("../models/usuarios")
const bcrypt = require('bcryptjs')

const getAllUsers = (req,res) => {
    Usuario.find((error, info) => {
        if(error){
            res.sendStatus(400)
        }else{
            res.status(200).json(
               info
            )
        }
    })
}

const getUser = (req,res) => {
    Usuario.findById(req.params.id, (err, info) => {
        if(err){
            res.sendStatus(400)
        }else{
            res.status(200).json(
                info
            )
        }
    })
}

const updateUser = (req, res) => {
        Usuario.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.sendStatus(400)
        }else{
            res.status(204).json({
                status:'ok'
            })
        }
    })

}

const deleteUser = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id,  (err, info) => {
        if(err){
            res.status(400)
        }else{  
            res.status(200).json(
                info
            )
        }
    }).clone()
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}