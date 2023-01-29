const mongoose = require('mongoose');

let rutaSchema = new mongoose.Schema({
    id_publicacion:{
      type: Number,
      required: true,  
    },
    id_usuario: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
    },
    nombre: {
        type: String,
        trim:true,
        required: true,
    },
    categoria: {
        type: String,
        trim:true,
        default: 'escalada',
    },
    distancia: {
        type: Number,
        required: true,
    },
    dificultad: {
        type: String,
        enum: ['facil', 'media', 'dificil'],
        
    },
    duracion: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    foto: [{
        type: String,
    }],
    privacidad: {
        type: String,
        default: "public"
    }
});

let rutaColl = mongoose.model('Ruta', rutaSchema);
module.exports = rutaColl;