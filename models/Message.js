const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    movil: {
        type: Number,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model('Message', MessageSchema);