const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        maxlength: [50, 'Password cannot be more than 50 characters']
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role:{
        type:String,
        enum:['user','admin','fpo'],
        default:'user'
    },
    requests:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Request'
    }],
    FPO:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO'
    }
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;