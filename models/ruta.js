const mongoose = require('mongoose');

let rutaSchema = new mongoose.Schema({
    id_usuario: {
        type: String,
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
    foto: {
        type: String,
    },
    privacidad: {
        type: String,
        default: "public"
    },
    empresa: {
        type: String,
    },
    url: {
        type: String,
    }
});

let rutaColl = mongoose.model('Ruta', rutaSchema);
module.exports = rutaColl;