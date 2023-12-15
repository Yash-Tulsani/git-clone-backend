const mongoose = require('mongoose');

const FPOSchema = new mongoose.Schema({
    head:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    description:{
        type:String,
        required:[true,'Please enter a description'],
        trim:true,
        maxlength:[500,'Description cannot be more than 500 characters']
    },
    images:[
        {
            type:String,
        }
    ],
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    services:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service'
    }],
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    },
    district:{
        type:String,
        required:[true,'Please enter a district'],
        trim:true
    },
    address:{
        type:String,
        required:[true,'Please enter an address'],
        trim:true
    },
    pincode:{
        type:Number,
        required:[true,'Please enter a pincode'],
        trim:true
    },
    phoneNumber:{
        type:Number,
        required:[true,'Please enter a phone number'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        trim:true
    },

});

const FPO = mongoose.model('FPO',FPOSchema);

module.exports = FPO;