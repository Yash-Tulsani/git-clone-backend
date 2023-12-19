const Service = require("../models/Service");

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