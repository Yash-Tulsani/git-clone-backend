const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[
            true,'Please enter a buyer']
    },
    buyer_name: {
        type: String,
        required: [true, "Please enter the buyer name"]
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:[true,'Please enter a seller']
    },
    seller_name: {
        type: String,
        required: [true, "Please enter the seller name"]
    },
    WDC:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'WDC',
        required:[true,'Please enter a WDC']
    },
    WDC_name: {
        type: String,
        required: [true, "Please enter a valid WDC Name"]
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service',
        required:[true,'Please enter a service']
    },
    service_name: {
        type: String,
        required: [true, "Please Enter a service name"]
    },
    district:{
        type:String,
        trim:true
    },
    state: {
        type: String,
        required: [true, "Please enter the state"]
    },
    amount: {
        type: Number,
        required: [true, 'Please enter an amount'],
        trim: true,
        maxlength: [50, 'Amount cannot be more than 50 characters']
    },
    date: {
        type: Date,
        default: Date.now
    },
    
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;