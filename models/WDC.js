const mongoose = require('mongoose');

const WDCSchema = new mongoose.Schema({
    FPO_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO',
        required:[true,'Please enter an FPO']
    },
    FPO_name: {
        type: String
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
    state: {
        type: String,
        required: [true, "Please enter a state"]
    },
    dateRegistered:{
        type:Date,
        default:Date.now
    },
    status: {
        type: String,
        default: "Pending Approval"
    },
    coordinates: [{
        type: Number
    }],
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    publicInvestment: {
        type: Number
    },
    percentageOccupied: {
        type: Number,
        default: 0
    }
});

const WDC = mongoose.model('WDC',WDCSchema);

module.exports = WDC;