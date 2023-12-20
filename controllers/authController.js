const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const errorHandler = require('../utils/error');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
    const {name, age, email, password, dateOfBirth, address, phoneNumber, pincode} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({name, age, email, password: hashedPassword, dateOfBirth, address, phoneNumber, pincode});
    try {
        await newUser.save();
        res.status(201).json({ message: "User Created Successfully!" });
    } catch (error) {
        next(error);
    }
}

const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({ email });
        if(!validUser) return next(errorHandler(404,"User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Invalid Credentials"));
        const token = jwt.sign({ id : validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 60*60*1000); //1 hour
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user){
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: hashedPassword, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 60*60*1000); //1 hr
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({ 
                name: req.body.name,
                age: 21,
                email: req.body.email,
                password: hashedPassword,
                phoneNumber: 1234567890,
                dateOfBirth: 11-27-2001,
                address: "606, Type-2, SSB, SFA, Gomti Nagar Extension, Lucknow, Uttar Pradesh",
                pincode: 225001,
                district: "Lucknow",
                state: "Uttar Pradesh",
                profilePicture: req.body.photo
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;
            const expiryDate = new Date(Date.now() + 60*60*1000);
            res.cookie('access_token', token, {
                httpOnly: true,
                expires: expiryDate,
            }).status(200).json(rest);
        }
    } catch (error) {
        next(error);
    }
}
    
module.exports = {signup, signin, google};