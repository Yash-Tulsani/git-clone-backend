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
    }

});

const FPO = mongoose.model('FPO',FPOSchema);

module.exports = FPO;