const User = require('../models/User');
const FPO = require('../models/FPO');

exports.test  = (req, res) => {
    res.send('test');
}
    
exports.createFPO = async (req, res) => {
    const {name, head_name, email, district, phoneNumber, address} = req.body
    console.log(req.body)
    // const newFPO = new FPO({name, head_name, email, district, phoneNumber, address});
    // try {
    //     await newFPO.save();
    //     res.status(201).json({ message: "FPO Created Successfully!" });
    // } catch (error) {
    //     next(error);
    // }
}

exports.getIds = async (req, res) => {
     const ids = await User.find({})
     res.json(ids)
}

// delete user
exports.deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can delete only your account!'));
    }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
}
