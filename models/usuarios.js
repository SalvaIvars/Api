const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    id_usuario: {
        type: String
    },
    nombre:{
        type: String,
    },
    apellidos:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    fecha:{
        type: String,
    },
    nick:{
        type: String,
    },
    password:{        
        type: String,
    },
    siguiendo:{
        type: String,
    },
    foto:{
        type: String,
    },
    web:{
        type: String,
    },
    rol:{
        type: String,
    },
})  


let Usuario = mongoose.model('Usuarios', usuarioSchema);
module.exports = Usuario;