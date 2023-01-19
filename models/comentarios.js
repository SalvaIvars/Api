const mongoose = require('mongoose');

let comentarioSchema = new mongoose.Schema({
    fecha:{
        //type: Date,
        type: String
    },
    mensaje:{
        type: String,
    },
    id_usuario:{
        type: String,
    },
    id_publicacion:{
        type: String,
    },
});

let Comentario = mongoose.model('Comentario', comentarioSchema);
module.exports = Comentario;