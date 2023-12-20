const Service = require("../models/Service");
const FPO = require("../models/FPO");
const WDC = require("../models/WDC");
const User = require("../models/User");

exports.joinFpo = async (req, res) => {

    const { wdc_id, stakePercentage, user_id, amount } = req.body;

    
    try{
        const wdc_item = await WDC.findById(wdc_id);


        const result = await WDC.updateOne({
            _id: wdc_id
        }, { $inc: { percentageOccupied: stakePercentage } });
        
        const result1 = await User.updateOne({
            _id: user_id
        }, {
            $push: {
                FPO_invested: wdc_item.FPO_id,
                percentageStake: stakePercentage,
                investedAmount: amount,
                fpoIncome: 0,
                fpoSellIncome: 0
            },
            
        })
        res.json({
            success: true,
            message: "Done"
        })
       // console.log(services)
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        }) 
    }
}