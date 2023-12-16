const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    WDC:{
        type: mongoose.Mongoose.Types.ObjectId,
        ref: 'WDC'
    },
    FPO:{
        type: mongoose.Mongoose.Types.ObjectId,
        ref: 'FPO'
    },
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    type:{
        type:String,
        trim:true,
        maxlength:[50,'Type cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    district:{
        type:String,
        required:[true,'Please enter a district'],
        trim:true
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
        trim: true,
        maxlength: [50, 'Price cannot be more than 50 characters']
    },
    quantityLeft:{
        type:Number,
    },
    minQuantity:{
        type:Number,
    },
    images: [
        {
            type: String,
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter a category'],
        trim: true,
        maxlength: [50, 'Category cannot be more than 50 characters']
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;