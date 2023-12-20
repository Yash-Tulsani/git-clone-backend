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

exports.postTransactionDone = async (req,res) => {

    // serviceInfo: Data,
    //         userInfo: currentUser,
    //         quantity: quantity,
    //         totalAmount: totalAmount

    try {

        const transaction = new Transaction({
            buyer: req.body.userInfo._id,
            buyer_name:  req.body.userInfo.name,
            seller: req.body.serviceInfo.seller_id,
            seller_name: req.body.serviceInfo.seller_name,
            WDC: req.body.serviceInfo.WDC_id,
            WDC_name: req.body.serviceInfo.WDC_name,
            service: req.body.serviceInfo._id,
            service_name: req.body.serviceInfo.name,
            district: req.body.serviceInfo.district,
            state: req.body.serviceInfo.state,
            amount: req.body.totalAmount,
            date: new Date()
        });

        await transaction.save();

    
        res.json({
            message: "Success",

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