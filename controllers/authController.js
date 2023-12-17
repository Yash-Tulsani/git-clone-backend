const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const signup  = async (req, res, next) => {
    const {name, age, email, password, dateOfBirth, address, phoneNumber, pincode, district, state, profilePicture, FPO_Role} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({name, age, email, password: hashedPassword, dateOfBirth, address, phoneNumber, pincode, district, state, profilePicture, FPO_Role});
    try {
        await newUser.save();
        res.status(201).json({ message: "User Created Successfully!" });
    } catch (error) {
        next(error);
    }
}
    
module.exports = {signup};