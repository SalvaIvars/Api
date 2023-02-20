const mongoose = require('mongoose');

let routeSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
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
        required: true,
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
    },
    lat_A: {
        type: Number
    },
    lng_A: {
        type: Number
    },
    lat_B: {
        type: Number
    },
    lng_B: {
        type: Number
    },
    rec_movement : [{
        type: Object
    }]
});

let Route = mongoose.model('Route', routeSchema);
module.exports = Route;
