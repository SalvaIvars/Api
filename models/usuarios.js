const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    id_usuario: {
        type: Number,
        trim: true,
        required: true,
    },
    nombre:{
        type: String,
        trim: true,
        required: true,
    },
    apellidos:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    fecha:{
        type: String,
    },
    nick:{
        type: String,
        trim: true,
    },
    password:{        
        type: String,
        required: true,
    },
    siguiendo:[{
        type: String,
    }],
    foto:{
        type: String,
    },
    rol:{
        type: String,
        default: "user"
    },
})  


let Usuario = mongoose.model('Usuarios', usuarioSchema);
module.exports = Usuario;