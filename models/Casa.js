const mongoose = require('mongoose');

const CasaSchema = mongoose.Schema({

    address: {
        type: String,
        unique: true,
        require: true,
    },
    real_number: {
        type: Number,
        unique: true,
    },
    status: {
        type: String,
        require: true,
    },
    popular: {
        type: Boolean,
        default: false,
    },
    houseType: {
        type: String,
    },
    action: {
        type: String,
    },
    area: {
        type: Number,
    },
    parkingLot: {
        type: Number,
    },
    kitchen: {
        type: Boolean,
        default: true,
    },
    livingRoom: {
        type: Boolean,
        default: true,
    },
    dinningRoom: {
        type: Boolean,
        default: true,
    },
    bedRoom: {
        type: Number,
        require: true,
    },
    halfBathrooms: {
        type: Boolean,
        default: false,
    },
    NohalfBathrooms: {
        type: Number,
    },
    bathRooms: {
        type: Number,
    },
    predial: {
        type: Boolean,
        default: false
    },
    scriptures: {
        type: Boolean,
        default: false,
    },
    ine: {
        type: Boolean,
        default: false,
    }


});

module.exports = mongoose.model('Casa', CasaSchema);