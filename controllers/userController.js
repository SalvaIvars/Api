const Usuario = require("../models/usuarios")
const bcrypt = require('bcryptjs')

const getAllUsers = (req,res) => {
    Usuario.find((error, info) => {
        if(error){
            res.status(400)
        }else{
            res.status(200).json({
                status:'ok',
                data:info
            })
        }
    })
}

const getUser = (req,res) => {
    Usuario.findById(req.params.id, (err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json({
                status:'ok',
                data: info,
            })
        }
    })
}


const updateUser = (req, res) => {
        Usuario.findByIdAndUpdate(req.params.id, req.body, (err, info) =>{
        if(err){
            res.status(400)
        }else{
            res.status(204).json({
                status:'ok'
            })
        }
    })

}

const deleteUser = (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, (err, info) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json({
                status: 'ok',
                data: info
            })
        }
    })
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser
}