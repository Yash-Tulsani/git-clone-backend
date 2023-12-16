const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    fpo_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO'
    },
    applicationNumber:{
        type:String,
        required:[true,'Please enter an application number'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'Please enter a description'],
        trim:true,
        maxlength:[500,'Description cannot be more than 500 characters']
    },
    reason:{
        type:String,
        required:[true,'Please enter a reason'],
        trim:true
    },
    documents:[
        {
            type:String,
        }
    ],
    address:{
        type:String,
        required:[true,'Please enter an address'],
        trim:true
    },
    district:{
        type:String,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now
    },
    coordinates: [{
        type: Number
    }],
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = Request;