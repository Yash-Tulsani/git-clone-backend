const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please enter a user']
    },
    type:{
        type:String,
        enum:['register','sell','buy'],
        required:[true,'Please enter a type']
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;