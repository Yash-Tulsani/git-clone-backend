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
    phoneNumber:{
        type:Number,
        required:[true,'Please enter a phone number'],
        trim:true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    FPO:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO'
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
    profilePicture:{
        type:String,
    },
    FPO_Role:{
        type:String,
        enum:['head','member'],
        default:'member'
    }
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;