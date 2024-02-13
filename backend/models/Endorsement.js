const mongoose = require('mongoose');
const EndorsementStatus = require('./EndorsementStatus');
const { v4: uuidv4 } = require('uuid');

const Schema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique:true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: Object.values(EndorsementStatus),
        required: false,
    }
})
module.exports = mongoose.model('Endorsement', Schema);