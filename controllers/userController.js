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

exports.getUserById = async (req,res) => {

    try {

        const {user_id} = req.params;

        const getUser = await User.findById(user_id).populate(["FPO_invested"]);
        console.log(getUser);
        res.json(getUser);

    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        }) 
    }

}