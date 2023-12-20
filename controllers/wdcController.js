
const WDC = require("../models/WDC");
const FPO = require("../models/FPO");
const User = require("../models/User");

exports.postWdc = async(req,res)=>{

    try {
        console.log(req.body);

        const newFPO = new FPO({
            name: `${req.body.wdcDistrict} Farmer Producer Organization`,
            description: `FPO stands for Farmers Producers Organisation. We are an organisation of farmer-producers that provide support to small farmers with end-to-end services covering almost all aspects of cultivation from inputs, technical services to processing and marketing.`,
            district: req.body.wdcDistrict,
            state: req.body.wdcState,
            address: req.body.wdcAddress,
            phoneNumber: req.body.wdcPhone,
            email: req.body.wdcEmail
        })
        
        await newFPO.save();

        console.log(newFPO, "new fpo created?");

        const newWdc = new WDC({
            FPO_id: newFPO._id,
            FPO_name: newFPO.name,
            name: req.body.wdcName,
            address: req.body.wdcAddress,
            district: req.body.wdcDistrict,
            state: req.body.wdcState,
            dateRegistered: new Date(),
            phoneNumber: req.body.wdcPhone,
            email: req.body.wdcEmail,
            publicInvestment: req.body.wdcPublicInvestment
        })

        await newWdc.save();

        res.json({
            newWdc, newFPO
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Database Error"
        })
    }


}

exports.getWdcAll = async (req,res)=>{
                                                                                                                                        

    try {
        const list = await WDC.find({}).sort({_id: -1})
        // const members = [];
        console.log(list,"This is the list");
        const members = await Promise.all(
            list.map(async (elm) => {
                const usersList = await User.find({
                    FPO_invested: { $all: [elm.FPO_id ] },
                  });
            //   const usersList = await User.find({
            //     FPO: elm.FPO_id,
            //   });
              return usersList;
            })
          );

        res.json({
            list, members
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Database Error"
        })
    }

    
}

    
exports.getAllWDCs = async (req, res) => {
    try {
        const wdcs = await WDC.find({});
        res.json(wdcs)
    } catch (error) {
        next(error);
    }
}
