const Service = require("../models/Service");
const WDC = require("../models/WDC");
const User = require("../models/User");
const FPO = require("../models/FPO");

exports.getServices = async (req, res) => {
    try{
        const services = await Service.find({})
        res.json({services: services})
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

exports.getServiceById = async (req,res)=>{
    try {
        
        const serviceById = await Service.findById(req.params.id).populate(["WDC_id","FPO_id"]);
        console.log(serviceById);
        // const reply = await detectIntent("en", req.body.message, "abcd123");
   
        res.json(serviceById)

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        })  
    }  
}

// get all services with limit
exports.getAllServices = async (req,res)=>{
    try {
        const limit = parseInt(req.params.limit);
        const services = await Service.find().limit(limit).populate(["WDC_id","FPO_id"]);
        res.json(services)

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        })  
    }  
}

exports.postNewService = async(req, res)=> {
    try {
        console.log(req.body);
        const user1 = await User.findById(req.body.user_id);
        // console.log(user1, "Yeh hai tumhara user");
        const userWithFPO = await User.findById(req.body.user_id).populate(['FPO']);
        // console.log(userWithFPO, "here");
        if (!userWithFPO) {
            return res.status(500).json({
                success: false,
                error : "Internal Server error",
                statusCode: 500,
            }) 
        }

        // Check if the user has FPO data
        if (!userWithFPO.FPO) {
            return res.status(500).json({
                success: false,
                error : "Internal Server error",
                statusCode: 500,
            }) 
        }


        const wdcDocument = await WDC.findOne({
            FPO_id: userWithFPO.FPO._id
        });

        console.log(wdcDocument, "Sadge?");

        const newService = new Service({
            WDC_id: wdcDocument._id,
            WDC_name: wdcDocument.name,
            FPO_id: wdcDocument.FPO_id,
            FPO_name: wdcDocument.FPO_name,
            seller_id: userWithFPO._id,
            seller_name: userWithFPO.name,
            name: req.body.serviceName,
            description: req.body.serviceDescription,
            district: req.body.userDetails.district,
            state: req.body.userDetails.state,
            price: req.body.servicePrice,
            quantityLeft: req.body.serviceTotalQuantity,
            minQuantity: req.body.serviceMinQuantity,
            category: req.body.serviceCategory,
            phoneNumber: req.body.phoneNumber
        })

        await newService.save();

        const update = await FPO.findOneAndUpdate({
            _id: userWithFPO.FPO._id
        }, { $push: { services: newService._id }})

        res.json(newService)
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error : "Internal Server error",
            statusCode: 500,
        })  
    }

    
}