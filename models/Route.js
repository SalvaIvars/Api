const mongoose = require('mongoose');

let routeSchema = new mongoose.Schema({
    id_publication:{
      type: Number,
      required: true,  
    },
    id_user: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
    },
    name: {
        type: String,
        trim:true,
        required: true,
    },
    category: {
        type: String,
        trim:true,
        default: 'escalada',
    },
    distance: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
        
    },
    duration: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: [{
        type: String,
    }],
    privacy: {
        type: String,
        default: "public"
    }
});

let Route = mongoose.model('Route', routeSchema);
module.exports = Route;