const mongoose = require('mongoose');

const FPOSchema = new mongoose.Schema({
    name: {
        type: String
    },
    head_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    head_name: {
        type: String,
        required: [true, "Please enter FPO head Name"]
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
    state:{
        type: String,
        required: [true, "Please enter the state"]  
    },
    address:{
        type:String,
        required:[true,'Please enter an address'],
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
    coordinates: [{
        type: Number
    }],

});

const FPO = mongoose.model('FPO',FPOSchema);

module.exports = FPO;