const Service = require("../models/Service");
const WDC = require("../models/WDC");
const User = require("../models/User");
const FPO = require("../models/FPO");
const Transaction = require("../models/Transaction")

exports.getTransactionHistory = async (req, res) => {

    const { user_id } = req.params;

    try{
        const buyData = await Transaction.find({
            buyer: user_id
        })

        const sellData = await Transaction.find({
            seller: user_id
        })
        res.json({
            buyData,sellData
        })
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        }) 
    }
}
