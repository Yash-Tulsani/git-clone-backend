const mongoose = require('mongoose');

const WDCSchema = new mongoose.Schema({
    FPO:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO',
        required:[true,'Please enter an FPO']
    },
    name:{
        type:String,
        required:[true,'Please enter a name'],
        trim:true,
        maxlength:[50,'Name cannot be more than 50 characters']
    },
    address:{
        type:String,
        required:[true,'Please enter an address'],
        trim:true
    },
    district:{
        type:String,
        trim:true
    },
    dateRegistered:{
        type:Date,
        default:Date.now
    },
});

const WDC = mongoose.model('WDC',WDCSchema);

module.exports = WDC;