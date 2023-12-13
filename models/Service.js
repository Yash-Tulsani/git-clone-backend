const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
        trim: true,
        maxlength: [50, 'Price cannot be more than 50 characters']
    },
    image: {
        type: String,
        required: [true, 'Please enter an image'],
        trim: true,
        maxlength: [50, 'Image cannot be more than 50 characters']
    },
    category: {
        type: String,
        required: [true, 'Please enter a category'],
        trim: true,
        maxlength: [50, 'Category cannot be more than 50 characters']
    },
    fpo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;