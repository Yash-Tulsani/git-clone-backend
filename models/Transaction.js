const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: [true, 'Please enter a sender'],
        trim: true,
        maxlength: [50, 'Sender cannot be more than 50 characters']
    },
    receiver: {
        type: String,
        required: [true, 'Please enter a receiver'],
        trim: true,
        maxlength: [50, 'Receiver cannot be more than 50 characters']
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
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);